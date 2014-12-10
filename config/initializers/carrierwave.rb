CarrierWave.configure do |config|
	if Rails.env.production?
		config.storage :fog
		
	  config.fog_credentials = {
	    :provider                         => 'Google',
	    :google_storage_access_key_id     => Rails.application.secrets.gcloud_id,
	    :google_storage_secret_access_key => Rails.application.secrets.gcloud_secret
	  }
	  config.fog_directory = Rails.application.secrets.gcloud_directory

	  CarrierWave::SanitizedFile.sanitize_regexp = /[^[:word:]\.\-\+]/

	  config.fog_public = true # changed in documents
	else
		config.storage :file
	end
end