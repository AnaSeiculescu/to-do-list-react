## Deployment is done in AWS lightsail

### Connecting to the machine

1. Get your ssh key from the AWS console and store it in `/ssh/`.
   Find the default key in aws console -> lightsail -> instances -> power organizer -> download default key
1. Connect to the machine using `ssh -i [path/to/your/key.pem] ubuntu@[machine's public IP]`.
   i.e. `ssh -i ./server/ssh/aws-lightsail-private-ssh-key.pem ubuntu@3.76.123.244`

### server setup

##### old setup

-   the app is served using nginx
-   find the configuration files in `/etc/nginx/sites-available`. current config file is `valle.com`
-   they should be symlinked to the `sites-enabled` folder using the command `ln -sf /path/to/file /path/to/symlink`
-   some useful ngnix commands:
    `sudo nginx -t` -> test nginx config
    `sudo systemctl restart nginx` (stronger than reload)
    `sudo systemctl reload nginx`
    `sudo systemctl stop nginx`
    `sudo systemctl status nginx`
-   use `sudo netstat -ltnp` to check which ports are in use.

##### new setup

-   static files and server are both served with express
-   to keep the server running after closing the terminal, `forver` is used

### deployment steps

### frontend

1. `sudo bash`
1. `cd to-do-list-react`
1. `git pull`
1. check `.env` file to make sure it is correctly configured
1. `npm run build`

### backend

1. `sudo bash` (everything is installed as root)
1. make sure the environment variable `APP_ENV` is set to **production**
1. check the process on which the application is running with `forever list`
1. stop the process using the index given (`forever stop 0`)
1. navigate to `/to-do-list-react` and restart the process using `forever start server/server.js `

### renewing SSL certificates (HTTPS)

1. ssh into the lightsail machine
1. run `sudo bash`
1. You can use `certbot certificates` to list current certificates
1. Stop the server using `forever`. Use `forver list` to find the process id and `forever stop <pid>` to stop it.
1. Use `certbot renew` to renew certificates
1. Ensure that 'APP_ENV' is set to 'production' in `.env`
1. Navigate to `/to-do-list-react` and restart the process using `forever start server/server.js`
