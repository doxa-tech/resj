namespace :puma do
  %w(start stop restart status).each do |task_name|
    desc "#{task} Puma"
    task task_name do
      on roles(:app), in: :sequence, wait: 5 do
        sudo "service puma #{task_name} app=#{current_path}", raise_on_non_zero_exit: false
      end
    end
  end
end