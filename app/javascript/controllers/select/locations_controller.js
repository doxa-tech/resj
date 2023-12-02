import { Controller } from "@hotwired/stimulus"
import Choices from "choices.js"

export default class extends Controller {

  cache = {};
  choice;

  request() {
    let query = this.choice.input.value;
    if (query in this.cache) {
      this.update(this.cache[query]);
    } else {
      fetch("/api/locations?query=" + query).then((res) => {
        res.json().then((data) => {
          this.cache[query] = data
          this.update(data)
        });
      }).catch((error) => {
        console.log(error);
      });
    } 
  }

  update(data) {
    this.choice.setChoices(data, 'id', 'name', true);
  }

  initialize() {

    this.choice = new Choices(this.element, {
      placeholderValue: "Taper une ville",
      noChoicesText: "Plus d'option disponible",
      itemSelectText: "Cliquez pour séléctionner",
      noResultsText: "Pas de résultats",
      searchFloor: 2,
      shouldSort: false,
      searchChoices: false,
      classNames: {
        containerOuter: "choices " + this.element.className 
      }
    });

    this.element.addEventListener('search', (event) => {
      clearTimeout(timeout);
      let timeout = setTimeout(this.request.bind(this), 500);
    });
      
  };
  
}