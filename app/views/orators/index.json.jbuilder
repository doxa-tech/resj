json.records do
  json.array! @orators do |orator|
    json.id orator.id
    json.firstname orator.user.firstname
    json.lastname orator.user.lastname
    json.themes orator.themes, :name
  end
end
json.grouped do
  json.array! @grouped do |location, orators|
    json.lat location.latitude
    json.lng location.longitude
    json.text render partial: 'orators/infowindow.html.erb', locals: { location: location, orators: orators }
  end
end