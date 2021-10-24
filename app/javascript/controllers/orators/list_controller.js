import ListController from "controllers/list_controller.js"

export default class extends ListController {
  static targets = [...ListController.targets, "itemTemplate", "title", "themes", "link"];

  updateItems(items) {
    if (items.length < 10) {
      this.items = []
    } else {
      this.items = items;
    }
    this.update();
  }

  updateList(items) {
    let content = [];
    items.forEach((c) => {
      this.titleTarget.innerHTML = c.firstname + " " + c.lastname;
      this.linkTarget.href = c.href;
      this.themesTarget.innerHTML = c.themes.map(x => `<span>${x}</span>`).join("");
      content.push(this.itemTemplateTarget.outerHTML);
    });
    return content;
  }

  updateMap() {
    // Orators implements no map
  }

  get itemPerPage() {
    return 4;
  }

}