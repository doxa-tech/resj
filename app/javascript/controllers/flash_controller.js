import { Controller } from "@hotwired/stimulus"

export default class FlashController extends Controller {
  static targets = ["element"]

  close() {
    this.elementTarget.remove();
  }
}