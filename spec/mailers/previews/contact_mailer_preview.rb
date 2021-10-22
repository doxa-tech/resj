class ContactMailerPreview < ActionMailer::Preview

  @@message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ante vitae odio congue iaculis. Proin venenatis dapibus mauris sit amet blandit. Nulla vestibulum nunc auctor semper accumsan. Curabitur urna augue, consectetur ac maximus vel, sollicitudin ornare lorem. Mauris nec diam cursus, semper justo in, faucibus dui. Aliquam semper consectetur urna. Vestibulum rhoncus a velit ac fermentum. Morbi ornare odio sed massa congue, vel egestas nibh vulputate. Suspendisse tincidunt, lacus eu scelerisque consectetur, orci urna condimentum lectus, a viverra est orci in libero. Donec non leo sed odio mattis suscipit vitae vitae urna. Mauris euismod lacinia condimentum. "

  def confirmation
    contact = Contact.new(
      email: "test@example.com", message: @@message, 
      verification: "my verification")
    ContactMailer.confirmation(contact)
  end

  def orator
    contact = Contact.new(
      email: "test@example.com", message: @@message, 
      verification: "my verification")
    ContactMailer.orator(contact)
  end
end
