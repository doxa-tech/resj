import { Controller } from "@hotwired/stimulus"

export default class ListController extends Controller {
  static targets = ["numberTemplate", "items", "number", "numbers", "previous", "next", "total"]

  items;

  updateItems(items) {
    this.items = items;
    this.update();
  }

  update() {
    this.itemsTarget.innerHTML = "";
    let content = ""
    if (this.items.length == 0) {
      content = this.notFoundMessage
    } else {
      const start = (this.currentPage - 1) * this.itemPerPage;
      let items = this.items.slice(start, start + this.itemPerPage);
      const updatedList = this.updateList(items);
      for (let i in updatedList) {
        content += updatedList[i];
      }
    }
    this.itemsTarget.innerHTML = content;
    this.updateMap(this.items);
    this.updatePagination();
    this.totalTarget.innerHTML = this.items.length;
  }

  updatePagination() {
    this.numbersTarget.innerHTML = "";
    for (let i = 1; i <= this.numberOfPages; i++) {
      this.numberTarget.innerHTML = i;
      this.numberTarget.classList.toggle("current", i == this.currentPage);
      this.numbersTarget.innerHTML += this.numberTemplateTarget.innerHTML;
    }
    this.previousTarget.classList.toggle("current", this.currentPage > 1);
    this.nextTarget.classList.toggle("current", this.currentPage < this.numberOfPages);
  }

  previous() {
    if (this.currentPage <= 1) throw "Current page is already the first.";
    this.currentPage--;
    this.update();
  }

  next() {
    if (this.currentPage >= this.numberOfPages) throw "Current page is already the last.";
    this.currentPage++;
    this.update();
  }

  go(event) {
    event.preventDefault();
    this.currentPage = event.target.innerHTML;
    this.update();
  }

  get currentPage() {
    return this.data.get("page");
  }

  set currentPage(i) {
    if (i <= 0) throw "Current page cannot be equal or lower than zero.";
    if (i > this.numberOfPages) throw "Current page cannot be greater than the total number"
    this.data.set("page", i);
  }

  get numberOfPages() {
    return Math.ceil(this.items.length / this.itemPerPage);
  }

  updateList(items) {
    throw "#updateList must be defined in the child class."
  }

  updateMap(items) {
    throw "#updateMap must be defined in the child class."
  }

  get itemPerPage() {
    throw "Getter #itemPerPage must be defined in the child class"
  }

  get notFoundMessage() {
    return `<div class="soon">Aucun résultat</div>`
  }

}