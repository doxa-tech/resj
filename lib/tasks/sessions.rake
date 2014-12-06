namespace :sessions do

  desc "Clear expired sessions (more than 4 weeks old)(nkcr)"
  task :cleanup => :environment do
    sql = "DELETE FROM sessions WHERE (updated_at < '#{Date.today - 4.weeks}')"
    ActiveRecord::Base.connection.execute(sql)
  end

end