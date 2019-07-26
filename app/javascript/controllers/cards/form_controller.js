import { Controller } from "stimulus"

export default class CardsForm extends Controller {
  static targets = [ "form", "step", "previous", "next", "confirmation" ]
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

  next() {
    this.update();
    if (this.stepIndex >= CardsForm.steps.length - 1) throw "Can not go further";
    this.stepIndex++;
    this.showCurrentStep();
  }

  previous() {
    if (this.stepIndex <= 0) throw "Can not go back";
    this.stepIndex--;
    this.showCurrentStep();
  }

  confirmation() {
    let request = this.update(() =>{
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
    let formData = new FormData(this.formTarget);
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(event) {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          if (onSuccess) onSuccess();
        } else {
          console.log("Request status: %d (%s)", this.status, this.statusText);
        }
      }
    };
    // TODO: handle request onError and HTTP status other than 200
    request.open("PATCH", this.formTarget.getAttribute("action"));
    request.send(formData);
    return request;
  }
}
