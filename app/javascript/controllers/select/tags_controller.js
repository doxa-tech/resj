import { Controller } from "stimulus"
import Choices from "choices.js"

export default class extends Controller {

  initialize() {

    new Choices(this.element, {
      maxItemCount: 5,
      customAddItemText: "Tag de 3 lettres minimum",
      noResultsText: 'Aucun résultat',
      addItemText: (value) => {
        return `Appuyer sur Enter pour ajouter <b>"${value}"</b>`;
      },
      maxItemText: (maxItemCount) => {
        return `Seulement ${maxItemCount} tags autorisés`;
      },
      addItemFilterFn: (value) => {
        return (value.length > 2);
      },
      classNames: {
        containerOuter: "choices " + this.element.className 
      }
    });


  }

}