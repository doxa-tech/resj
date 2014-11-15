Given /^I visit the card show path$/ do
	visit card_path(@card, locale: :fr)
end

When /^I click on "Editer" on the banner$/ do
	find('.banner').hover
	find('button[class="edit-banner"]').click
end

When /^I complete the upload form and submit it$/ do
	attach_file 'card_banner', 'public/test/cards/banner.jpg'
end

Then /^I should see the updated banner$/ do
	pending
end