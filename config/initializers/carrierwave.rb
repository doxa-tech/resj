CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider                         => 'Google',
    :google_storage_access_key_id     => ENV['GCLOUD_ID'],
    :google_storage_secret_access_key => ENV['GCLOUD_SECRET']
  }
  config.fog_directory = ENV['GCLOUD_DIRECTORY']

  CarrierWave::SanitizedFile.sanitize_regexp = /[^[:word:]\.\-\+]/

  config.fog_public = true # changed in documents
end