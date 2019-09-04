import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name", "type", "template", "items" ]

  update(cards) {
    this.itemsTarget.innerHTML = "";
    cards.forEach((c) => {
      this.nameTarget.innerHTML = c.name;
      this.typeTarget.innerHTML = c.type;
      this.itemsTarget.innerHTML += this.templateTarget.innerHTML;
    })
  }

}