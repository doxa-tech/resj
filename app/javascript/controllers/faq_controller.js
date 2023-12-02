import { Controller } from "@hotwired/stimulus"

// This controller opens the summary and sets it a class based on the hash found
// in the URL.
export default class FaqController extends Controller {
  initialize() {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const details = document.getElementById(id);
      if (details) {
        details.classList.add("focus");
        details.open = true;
      }
    }
  }
}