json.array! @orators do |orator|
	json.id orator.id
  json.firstname orator.user.firstname
  json.lastname orator.user.lastname
  json.themes do
    json.array! orator.themes.map{|t| t.name}
  end
  json.href orator_path(orator)
end