import ListController from "controllers/list_controller.js"

export default class extends ListController {
  static targets = [...ListController.targets, "itemTemplate", "name" ];

  updateList(items) {
    let content = "";
    items.forEach((c) => {
      this.nameTarget.innerHTML = c.name;
      content += this.itemTemplateTarget.innerHTML;
    });
    return content;
  }

  updateMap() {
    // TODO
  }

  get itemPerPage() {
    return 1;
  }

}