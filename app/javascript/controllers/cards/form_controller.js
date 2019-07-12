import { Controller } from "stimulus"

export default class CardsForm extends Controller {
  static targets = [ "step", "previous", "next", "submit" ]
  static steps = ["general", "location", "extra"]

  initialize() {
    this.showCurrentStep();
    this.showCurrentNav();
  }

  showCurrentStep() {
    this.stepTargets.forEach((e, i) => {
      e.classList.toggle("current", i == this.stepIndex)
    })
  }

  showCurrentNav() {
    this.previousTarget.classList.toggle("current", this.stepIndex > 0);
    this.nextTarget.classList.toggle("current", this.stepIndex < CardsForm.steps.length - 1);
    this.submitTarget.classList.toggle("current", this.stepIndex >= CardsForm.steps.length - 1);
  }

  next() {
    if (this.stepIndex >= CardsForm.steps.length - 1) throw "Can not go further";
    this.stepIndex++;
    this.showCurrentStep();
    this.showCurrentNav();
  }

  previous() {
    if (this.stepIndex <= 0) throw "Can not go back";
    this.stepIndex--;
    this.showCurrentStep();
    this.showCurrentNav();
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
}
