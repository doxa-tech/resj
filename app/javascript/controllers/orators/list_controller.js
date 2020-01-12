import ListController from "controllers/list_controller.js"

export default class extends ListController {
  static targets = [...ListController.targets, "itemTemplate", "firstname", "lastname", "themes"];

  updateList(items) {
    let content = [];
    items.forEach((c) => {
      this.firstnameTarget.innerHTML = c.firstname;
      this.lastnameTarget.innerHTML = c.lastname;
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