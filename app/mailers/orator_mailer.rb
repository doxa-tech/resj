class OratorMailer < ActionMailer::Base
  default from: "admin@resj.ch"

  # sends welcome
  def orator_created(user)
    mail to:      user.email,
         from:    "\"Noémien de ResJ\" <noemien@resj.ch>",
         subject: 'Enregistrement sur le réseau jeunesse',
         body:
    headers['X-MC-MergeVars'] = {
                                  NAME: user.firstname,
                                }.to_json # variables
    headers['X-MC-Template'] = "orator-created"  # template
    headers['X-MC-AutoText'] = 1 # generate text version
    headers['X-MC-InlineCSS'] = "true" # inline css
  end

end
