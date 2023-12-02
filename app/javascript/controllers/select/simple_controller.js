import { Controller } from "@hotwired/stimulus"
import Choices from "choices.js"

export default class extends Controller {

  initialize() {
    new Choices(this.element, {
      searchEnabled: false,
      placeholderValue: "Sélectionner",
      noChoicesText: "Plus d'option disponible",
      noResultsText: 'Aucun résultat',
      itemSelectText: "Cliquez pour sélectionner",
      classNames: {
        containerOuter: "choices " + this.element.className
      }
    });
  }
}