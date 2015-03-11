# Define roles, user and IP address of deployment server
# role :name, %{[user]@[IP adde.]}
role :app, %w{resj@146.185.183.84}
role :web, %w{resj@146.185.183.84}
role :db,  %w{resj@146.185.183.84}

ask(:password, nil, echo: false)

# Define server(s)
server '146.185.183.84', user: 'resj', roles: %w{web app db}, primary: true

# SSH Options
# See the example commented out section in the file
# for more options.
set :ssh_options, {
    forward_agent: true,
    user: 'resj',
    #port: 77,
    password: fetch(:password)
}