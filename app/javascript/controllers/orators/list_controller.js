import ListController from "controllers/list_controller"

export default class extends ListController {
  static targets = [...ListController.targets, "itemTemplate", "title", "themes", "link"];

  updateList(items) {
    let content = [];
    items.forEach((c) => {
      this.titleTarget.innerHTML = `<a href="${c.href}">${c.firstname} ${c.lastname}</a>`;
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

  get notFoundMessage() {
    return `<div class="soon">Aucun orateur trouvé.</div>`
  }

}