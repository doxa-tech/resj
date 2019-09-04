import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "form", "input", "list" ]

  initialize() {
    let timeout;
    this.inputTargets.forEach((i) => {
      i.addEventListener("input", () => {
        clearTimeout(timeout);
        timeout = setTimeout(this.search.bind(this), 1000);
      });
    });
  }

  search() {
    const formData = new FormData(this.formTarget);
    let params = "?";
    for(var param of formData.entries()) {
      params += param[0] + "=" + param[1] + "&";
    } 
    fetch(this.formTarget.getAttribute("action") + params).then((res) => {
      res.json().then((cards) => {
        this.listController.update(cards);
      });
    }).catch(function(error) {
      console.log('Following problem in the request: ' + error.message);
    });
  }

  get listController() {
    return this.application.getControllerForElementAndIdentifier(this.listTarget, "cards--list")
  }
}