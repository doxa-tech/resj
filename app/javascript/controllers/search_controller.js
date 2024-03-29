import { Controller } from "@hotwired/stimulus"

export default class SearchController extends Controller {
  static targets = ["form", "input", "list", "filtersBtn", "filtersHolder"]

  initialize() {
    let timeout;

    this.inputTargets.forEach((i) => {
      i.addEventListener("input", () => {
        clearTimeout(timeout);
        timeout = setTimeout(this.search.bind(this), 800);
      });
      i.addEventListener("keypress", (e) => {
        if (e.keyCode == 13) { // Enter
          e.preventDefault();
        }
      })
    });

    this.filtersHolderTarget.style.display = "none";
  }

  async connect() {
    const items = await this.request()
    this.listController.updateItems(items);
  }

  async search() {
    const formData = new FormData(this.formTarget);
    let params = "?";
    for (const param of formData.entries()) {
      params += param[0] + "=" + param[1] + "&";
    }
    const items = await this.request(params);
    this.listController.updateItems(items);
  }

  async request(params) {
    params = params || "";
    try {
      const res = await fetch(this.formTarget.getAttribute("action") + params);
      const items = await res.json();
      return items;
    } catch (e) {
      console.log(e);
    }
  }

  get listController() {
    return this.application.getControllerForElementAndIdentifier(this.listTarget, this.data.get("list-controller"));
  }

  toggleFilters() {
    const holder = this.filtersHolderTarget
    const btn = this.filtersBtnTarget
    if (holder.style.display === "none") {
      holder.style.display = "block";
      btn.classList.toggle("open", true);
    } else {
      holder.style.display = "none";
      btn.classList.toggle("open", false);
    }
  }
}