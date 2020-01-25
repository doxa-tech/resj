import ListController from "controllers/list_controller.js"

export default class extends ListController {
  static targets = [...ListController.targets, "itemTemplate", "title", "themes"];

  updateList(items) {
    let content = [];
    items.forEach((c) => {
      this.titleTarget.innerHTML = c.firstname + " " + c.lastname;
      this.titleTarget.href = c.href
      this.themesTarget.innerHTML = c.themes;
      content.push(this.itemTemplateTarget.outerHTML);
    });
    return content;
  }

  updateMap() {
    // TODO
  }

  get itemPerPage() {
    return 10;
  }

}