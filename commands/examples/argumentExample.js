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
                //first part
                    {
                        //what we call the what the user inputs it is a variable
                        key: 'user',

                        //what the bot tells the user to do
                        prompt: '@ the user you want to dm',

                        //what discord should take data as
                        type: 'user'
                    },

                //second part
                    {

                        //what we call the what the user inputs it is a variable
                        key: 'input',

                         //what the bot tells the user to do
                        prompt: 'please input message',

                        //what discord should take data as
                        type: 'string'
                    }
                ]
            });
    }

    //run command
    run(message, { user, input }) {

        //sends message to user dm
        user.send(input);

        //deletes command call for clean up
        message.delete();
    }
}

//return  this must match the thing after class and before extends up above
module.exports = commandArgsExample; 