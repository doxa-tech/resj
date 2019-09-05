import { Controller } from "stimulus"

export default class CardsList extends Controller {
  static targets = [ "name", "type", "itemTemplate", "numberTemplate", "items", "number", "numbers", "previous", "next" ]
  static itemPerPage = 1; 

  cards;

  updateCards(cards) {
    this.cards = cards;
    this.updateList();
  }

  updateList() {
    const start = (this.currentPage - 1) * CardsList.itemPerPage;
    let items = this.cards.slice(start, start + CardsList.itemPerPage);
    this.itemsTarget.innerHTML = "";
    items.forEach((c) => {
      this.nameTarget.innerHTML = c.name;
      this.typeTarget.innerHTML = c.type;
      this.itemsTarget.innerHTML += this.itemTemplateTarget.innerHTML;
    });
    this.updatePagination();
  }

  updatePagination() {
    this.numbersTarget.innerHTML = "";
    for(let i = 1; i <= this.numberOfPages; i++) {
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
    this.updateList();
  }

  next() {
    if (this.currentPage >= this.numberOfPages) throw "Current page is already the last.";
    this.currentPage++;
    this.updateList();
  }

  go(event) {
    this.currentPage = event.target.innerHTML;;
    this.updateList();
  }

  get currentPage() {
    return this.data.get("page");
  }

  set currentPage(i) {
    if (i <= 0) throw "Current page cannot be equal or lower than zero.";
    if (i > this.numberOfPages) throw "Current page cannot be greater than the total number."
    this.data.set("page", i);
  }

  get numberOfPages() {
    return Math.ceil(this.cards.length / CardsList.itemPerPage);
  }

}