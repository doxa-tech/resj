import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "form", "input", "list" ]

  initialize() {
    let timeout;
    this.inputTargets.forEach((i) => {
      i.addEventListener("input", () => {
        clearTimeout(timeout);
        timeout = setTimeout(this.search.bind(this), 800);
      });
    });
  }

  async connect() {
    const cards = await this.request()
    this.listController.updateCards(cards);
  }

  async search() {
    const formData = new FormData(this.formTarget);
    let params = "?";
    for(var param of formData.entries()) {
      params += param[0] + "=" + param[1] + "&";
    } 
    const cards = await this.request(params);
    this.listController.updateCards(cards);
  }

  get listController() {
    return this.application.getControllerForElementAndIdentifier(this.listTarget, "cards--list")
  }

  async request(params) {
    params = params || "";
    try {
      const res = await fetch(this.formTarget.getAttribute("action") + params);
      const cards = await res.json();
      return cards;
    } catch (e) {
      console.log(e);
    } 
  }
}