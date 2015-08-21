json.array! @grouped do |group|
      json.lat group.first.first.latitude
      json.lng group.first.first.longitude
      json.text render partial: 'orators/infowindow.html.erb', locals: {location: group.first.first, orators: group.second}
end
