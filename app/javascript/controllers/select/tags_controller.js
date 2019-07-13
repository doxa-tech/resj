import { Controller } from "stimulus"
import SlimSelect from "slim-select"

export default class extends Controller {

  connect() {

    new SlimSelect({
      select: this.element,
      placeholder: "Ajouter des tags",
      searchingText: 'Cherche...',
      searchText: 'Ajouter de nouveaux tags en cliquant sur la croix',
      searchPlaceholder: 'Chercher',
      addable: function(value) { return value; },
      ajax: function(search, callback) {
        if (search.length < 2) {
          callback(false)
          return
        }
    
        fetch('/api/tags?query=' + search).then(function(res) {
          return res.json()
        }).then(function(json) {
          let data = []
          for (let i = 0; i < json.length; i++) {
            data.push({text: json[i].name + " (" + json[i].popularity + ")", value: json[i].id})
          }
          callback(data)
        })
        .catch(function(error) {
          callback(false)
        })
      }
    });
    
  }

}