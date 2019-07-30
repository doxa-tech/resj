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
    const i = CardsForm.steps.indexOf(this.data.get("step"));
    if (i === -1) throw "Invalid step provided";
    return i;
  }

  set stepIndex(i) {
    if (i >= CardsForm.steps.length) throw "Step index is out of bound";
    const step = CardsForm.steps[i]
    this.data.set("step", step);
    const url = new URL(window.location.href);
    url.searchParams.set("step", step);
    history.pushState({ step: step }, document.title, url.pathname + url.search);
  }

  async update(onSuccess) {
    const success = await this.submit();
    if (success && onSuccess) onSuccess();
  }

  async submit() {
    const formData = new FormData(this.formTarget);
    formData.append("card[current_step]", this.data.get("step"));
    try {
      const res = await fetch(this.formTarget.getAttribute("action"), { method: "PATCH", body: formData});
      if (res.status === 200) {
        const errors = await res.json();
        if (errors.length === 0) {
          return true;
        } else {
          this.showErrors(errors);
          return false;
        }
      } else {
        console.log("Request rejected by the server with the code " + res.status);
        return false;
      }
    } catch (e) {
      console.log(e);
    } 
  }
}
