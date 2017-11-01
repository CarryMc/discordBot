//tells program we using commando
const COMMANDO = require('discord.js-commando');

//the thing after the class is the name of the command ONLY thing you should change. If you change it up make sure to change it at the bottom after return
class commandArgsExample extends COMMANDO.Command {
    constructor(BOT_COMMANDO) {
        super(BOT_COMMANDO,
            //command initializing
            {
                //the name of the command has to be lowercase
                name: 'dm',

                //the group that the command is part of should be the same name as the folder command is in
                group: 'examples',

                //make this the same as name
                memberName: 'dm',

                //what the command does
                description: 'dm a user with custom text',

                //how to use command
                example: '//dm @user message',

                //arguments
                args: [
                    
                    {
                        //name of user is entering its a variable
                        key: 'user',

                        //what bot tells user to do if they just call command in this case //dm
                        prompt: 'input user name that you want to roast.',

                        //what discord should recoginze the entered data as
                        type: 'user',
                    },
                    {
                        //name of user is entering its a variable
                        key: 'message',

                        //what bot tells user to do if they just call command in this case //dm @someone
                        prompt: 'enter message',

                        //what discord should recoginze the entered data as
                        type: 'string'
                    }
                ]
            });
    }

    //run notice that we include the key names here
    run({ user, message }) {

        //text to send to user DM
        user.send(message);

    }
}

//return  this must match the thing after class and before extends up above
module.exports = commandArgsExample; 