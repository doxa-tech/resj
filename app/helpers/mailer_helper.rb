module MailerHelper
  def to_layout(title, subtitle="")
    content_for :title, title
    content_for :subtitle, subtitle
  end
end
