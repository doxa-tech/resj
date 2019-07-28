import { Controller } from "stimulus"

export default class CardsForm extends Controller {
  static targets = [ "form", "step", "previous", "next", "confirmation", "error" ]
  static steps = ["general", "location", "extra"]

  initialize() {
    this.showCurrentStep();
  }

  showCurrentStep() {
    this.stepTargets.forEach((e, i) => {
      e.classList.toggle("current", i == this.stepIndex)
    });
    this.showCurrentNav();
  }

  showCurrentNav() {
    this.previousTarget.classList.toggle("current", this.stepIndex > 0);
    this.nextTarget.classList.toggle("current", this.stepIndex < CardsForm.steps.length - 1);
    this.confirmationTarget.classList.toggle("current", this.stepIndex >= CardsForm.steps.length - 1);
  }

  showErrors(data) {
    this.errorTarget.innerHTML = "";
    data.forEach((e) => {
      this.errorTarget.innerHTML += "<p>" + e + "</p>";
    });
  }

  next() {
    if (this.stepIndex >= CardsForm.steps.length - 1) throw "Can not go further";
    this.update(() => {
      this.stepIndex++;
      this.showCurrentStep();
    });
  }

  previous() {
    if (this.stepIndex <= 0) throw "Can not go back";
    this.stepIndex--;
    this.showCurrentStep();
  }

  confirmation() {
    this.update(() => {
      Turbolinks.visit(window.location.pathname.replace("edit", "confirmation"));
    });
  }

  get stepIndex() {
    let i = CardsForm.steps.indexOf(this.data.get("step"));
    if (i === -1) throw "Invalid step provided";
    return i;
  }

  set stepIndex(i) {
    if (i >= CardsForm.steps.length) throw "Step index is out of bound";
    this.data.set("step", CardsForm.steps[i]);
  }

  update(onSuccess) {
    this.submit().then((success) => {
      if (success && onSuccess) onSuccess();
    });
  }

  submit() {
    let formData = new FormData(this.formTarget);
    formData.append("card[current_step]", this.data.get("step"));
    return fetch(this.formTarget.getAttribute("action"), {
      method: "PATCH", body: formData
    }).then((res) => {
      if (res.status === 200) {
        return res.json().then((data) => {
          if (data.length === 0) {
            return true;
          } else {
            this.showErrors(data);
            return false;
          }
        });
      } else {
        console.log("Request rejected by the server with the code " + res.status);
        return false;
      }
    }).catch((error) => {
      console.log("Error in the request: " + error);
    });
  }
}
