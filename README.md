# discordBot
Hello, I made a bot for my discord and put it on my server in three days. While I was coding the bot, I found a lack of resources on how to use discord.js commando and how to set a bot up on a server for free. I am now trying to fill this gap with this bot. This document will walk you through from start to finish on how to make a bot in discord. I just started learning node.js and using discord.js, so I am new at this too. I expect you to know how to use a computer, make accounts, and download programs lets begin.

# Step 1: Accounts
first, you will need a couple of accounts for some services.
 
As one would expect you need an account for discord if you do not have one make one here: https://discordapp.com/register

Next, you will need an account with the cloud hosting service Heroku. Make one here: https://signup.heroku.com/login

Lastly, you need a GitHub account if you do not already have one. Make one here: https://github.com/join

That's all you need onto step two.

# Step 2: Downloads

You will need a couple of programs to get your bot set up.

First, you need an IDE or integrated development environment. I would suggest visual studio code or atom below are the download links

VisualStudio Code: https://code.visualstudio.com/Download

Atom: https://atom.io

download GitHub for desktop: https://desktop.github.com

This git download it: https://github.com/TheJewGamer/discordBot

# Step 3: Making the bot

Now let's make your bot go to the link below and sign in.

https://discordapp.com/login?redirect_to=%2Fdevelopers%2Fapplications%2Fme

Click the new app button. Then type in the name of your bot in the app name. The click the button at the bottom right it should say create an app. Now click create a bot user and do it. Now you're going to want to click on the blue text next to token. DO NOT SHARE THIS WITH OTHERS IT WILL LET THEM LOG IN AS YOUR BOT. Copy the text that replaces the blue text into notepad or something and keeps it around as we will need it later. Also copy the text next to Client ID it should just be some numbers.

# Step 4: Adding the bot to a server

To add a bot to a server, you must have permissions to do so. If you do not you will not be able to, making your server is a sure way to make sure you can add the bot. Next, go to the link and select the permissions you want your bot to have and put the bot's Client ID where it says to, it's under OAuth URL Generator. Then click the link it provides you and adds your bot to the server.

Click the link to go to the site: https://discordapi.com/permissions.html#2146958591

# Step 5: Some coding

Using the IDE, you downloaded be it visual Studio Code or Atom open the git in it. Open the file index.js, and at the very top you will see const TOKEN = ''; put your token in between the single quotes. Below this, you will see the const OWNERID open discord and go into settings. In Appearance at the bottom, you will see developer mode turn it on. Next right click on your name on some server's member list and click copy ID. Put this in between the single quotes for OWNERID. Save the file and exit.

# Step 6: Uploading to GitHub

Open the GitHub on your desktop and sign in. After this click on file and make a new repository. Now using your file explorer open the discordBot folder and copy the files to where you put the repository. Now on GitHub for desktop put something in for summary in the bottom left and click commit to master. Now on the top ribbon, it should say push click it wait till it did then check your GitHub account online it should have the repository.

# Step 7: linking Heroku to your GitHub

Go to your Heroku account and make a new app give it a name. To the left of Deployment method, you should see GitHub click on that and click your account. Next push the search button and click connect next to the repository you made. If you have never used git before its the only one. NOw click enable automatic deploys and scroll down and click deploy branch wait for it to finish.

# Step 8: Turn the bot On

At the top of the page click the resource tab. Wait for the page to load then refresh the page. You should see web something and worker something. Click on the pencil next to the right of web and turn it off. Click on the pencil to the right of worker and turn it on. Make sure to push confirm for both of these.

# THE BOT IS ALIVE

YAAAAAAAAAAAAAAAAAAAAAAAA :)

# Time we went our own ways

Well, it was fun open the folder look around all the code is commented, and there are prebuilt skeletons of code that you can finish. I put [edit] next to the code that you can change, and the program won't crash. However, you can ignore these if you wish to do so. Lastly, when you make an edit to the code, you can push it to GitHub using the desktop application like before. Heroku will auto-update your code and deploy it as soon as you do this it takes around two minutes for it to finish the entire process. Note that since we used commando in are code there are somethings you have to do. Every command has to be in its file; a file name could be: example.js, it just needs to have .js after it which means its a javascript file. When making a new command just copy and past the commands that are prebuilt and change the name and output. Commando also uses groups to read commands so put all your commands in the user folder if you do not want to mess around with that stuff.

# Final Comments

Below are some things that might help you. See you around maybe. 

"We started with a simple hello, but ended with a complicated goodbye."


# Resources
Below are some things that I used to make my bot do some searches online go explore

https://github.com/dragonfire535/discord.js-commando-beginners-guide - helpful if you want to know more about commando.

https://discord.js.org/#/ - discord.js docs worth a read.

https://blastsoftstudios.com/dac/ - allows you to change the avatar of your bot.

https://www.youtube.com/watch?v=9CDPw1lCkJ8&list=PLvPDrwa-DApc1k3mHRJgolfStXyNi5xVh - a playlist of videos where I started there is only two and everything covered is already in the code but if you are confused about something worth a watch.

https://anidiotsguide.gitbooks.io/discord-js-bot-guide/ - goes over some more things about discord.js

https://discordapp.com/invite/bRCvFy9 - the discord.js server people over here can help you

https://discordapp.com/invite/rV4BwdK - has a discord.js section and people can help you over here too

https://discordapp.com/developers/docs/intro - discords official API and stuff
