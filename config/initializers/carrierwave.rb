CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider                         => 'Google',
    :google_storage_access_key_id     => 'GOOGGW3EPCYPWXKTR2LI',
    :google_storage_secret_access_key => 'nTfuXcIBbD9NC020ZBzYhTkXURD5tDlf2sw/nz1G'
  }
  config.fog_directory = 'reseaujeunesse-ch'

  CarrierWave::SanitizedFile.sanitize_regexp = /[^[:word:]\.\-\+]/

  config.fog_public = true # changed in documents
end