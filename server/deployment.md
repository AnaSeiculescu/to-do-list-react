## Deployment is done in AWS lightsail

### Connecting to the machine

1. Get your ssh key from the AWS console and store it in `/ssh/`.
   Find the default key in aws console -> lightsail -> instances -> power organizer -> download default key
1. Connect to the machine using `ssh -i [path/to/your/key.pem] ubuntu@[machine's public IP]`.
   i.e. `ssh -i ./server/ssh/aws-lightsail-private-ssh-key.pem ubuntu@3.76.123.244`

### server setup

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

### deployment steps

### frontend

1. `cd to-do-list-react`
1. `git pull`
1. `npm run build`

### backend

1. kill process listening on port 3030 (the node server)
1. from folder `to-do-list-react` run `npm run server:start`
