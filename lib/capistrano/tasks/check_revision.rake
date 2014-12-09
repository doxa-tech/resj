namespace :deploy do
  desc "checks whether the currently checkout out revision matches the
        remote one we're trying to deploy from"
  task :check_revision do
    unless `git rev-parse HEAD` == `git rev-parse origin/master`
      puts "WARNING: HEAD is not the same as origin/master"
      puts "Run `git push` to sync changes or make sure you've"
      puts "checked out the branch: master as you can only deploy"
      puts "if you've got the target branch checked out"
      exit
    end
  end
end