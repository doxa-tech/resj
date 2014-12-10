namespace :deploy do
  desc 'Commands for unicorn application'
  %w(start stop restart).each do |command|
    task command do
      on roles(:app), in: :sequence, wait: 5 do
        sudo "/etc/init.d/unicorn_#{fetch(:application)} #{command}"
      end
    end
  end
end