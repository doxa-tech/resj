Given /^I visit the card show path$/ do
	visit card_path(@card, locale: :fr)
end

When /^I click on "Editer" on the banner$/ do
	find('.banner').hover
	find('button[class="edit-banner"]').click
end

When /^I complete the upload form and submit it$/ do
	attach_file 'card_banner', File.join(Rails.root, '/public/test/cards/banner.jpg'), visible: false
end

Then /^I should see the image "(.+)"$/ do |image|
	expect(page).to have_xpath("//img[contains(@src, \"#{image}\")]")
end

When(/^I complete the upload form with wrong extension and submit it$/) do
  attach_file 'card_banner', File.join(Rails.root, '/public/test/cards/banner.abc'), visible: false
end