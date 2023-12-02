import { Controller } from "@hotwired/stimulus"

export default class PopupController extends Controller {
  static targets = ["content"]

  display() {
    this.contentTarget.classList.add("active");
  }

  close() {
    this.contentTarget.classList.remove("active");
  }

}