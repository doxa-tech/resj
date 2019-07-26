import { Controller } from "stimulus"
import Choices from "choices.js"

export default class extends Controller {

  initialize() {

    new Choices(this.element, {
      searchEnabled: false,
      placeholderValue: "Sélectionner",
      noChoicesText: "Plus d'option disponible",
      itemSelectText: "Cliquez pour séléectionner",
      classNames: {
        containerOuter: "choices " + this.element.className 
      }
    });

  }
}