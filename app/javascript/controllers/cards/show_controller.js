import MapController from "./list_controller";

export default class ShowMap extends MapController {
  static targets = ["map"];

  initialize() {
    super.initialize()

    const mapEl = JSON.parse(this.mapTarget.dataset.card)
    this.updateItems([mapEl]);
  }
}