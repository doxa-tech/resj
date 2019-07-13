import { Controller } from "stimulus"
import SlimSelect from "slim-select"

export default class extends Controller {

  connect() {

    new SlimSelect({
      select: this.element,
      placeholder: "Taper une ville",
      searchingText: 'Cherche...',
      searchText: 'Pas de résultat',
      searchPlaceholder: 'Chercher',
      ajax: function (search, callback) {
        if (search.length < 2) {
          callback(false)
          return
        }
    
        fetch('/api/locations?query=' + search).then(function(res) {
          return res.json()
        }).then(function(json) {
          let data = []
          for (let i = 0; i < json.length; i++) {
            data.push({text: json[i].name, value: json[i].id})
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