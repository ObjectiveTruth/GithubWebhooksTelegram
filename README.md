# GithubWebhooksTelegram

Nodejs server for receiving webhooks and outputitng to telegram-cli made pretty by Tmux for Ubuntu.

## Description


Tmux is used to create a split window where vysheng's excellent [telegram-cli](https://github.com/vysheng/tg) and my simple Express nodejs server are placed side by side.
Everytime the nodejs server receives a webhook from github, it sends the commit information to the chat room specified by the endpoint /githooks/:chatroom

The server can be edited pretty easily to do all sorts of things, but this is an example that works nicely.

![GithubWebhooksTelegramExample](/gif/githubwebhookstelegramexample.gif?raw=true "GithubWebhooksTelegram Example")

## Requirements

Requires:

* Git

    apt-get install git

* Nodejs

    apt-get install node

* NPM

    apt-get install npm

* Telegram-CLI

Follow instructions and place in ~/tg folder as suggested

[telegram-cli](https://github.com/vysheng/tg)

GithubWebhooksTelegram will look for the files there.
Ensure you've launched Telegram-CLI at least once to make sure it works.
This will write the tg-server.pub file that is required for authentication


### Usage 

Configuration file will verify the required components above and check/install npm dependancies.

    ./configure

## Limitations

GithubWebhooksTelegram has only been tested in Ubuntu, if you want to test it somewhere else by all means fork =D

## License

GNU GENERAL PUBLIC LICENSE
                       Version 2, June 1991

 Copyright (C) 1989, 1991 Free Software Foundation, Inc., <http://fsf.org/>
 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

