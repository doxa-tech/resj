import { Controller } from "@hotwired/stimulus"

export default class SearchController extends Controller {
  static targets = ["container", "open", "close"]

  close() {
    this.containerTarget.style.display = "none";
    this.openTarget.style.display = "block";
  }

  open() {
    this.containerTarget.style.display = "flex";
    this.openTarget.style.display = "none";
  }
}