//tells program we using commando
const COMMANDO = require('discord.js-commando');

//the thing after the class is the name of the command ONLY thing you should change. If you change it up make sure to change it at the bottom after return
class commandText extends COMMANDO.Command {
    constructor(BOT_COMMANDO) {
        super(BOT_COMMANDO,
            //command initializing
            {
                //the name of the command has to be lowercase
                name: '',

                //the group that the command is part of should be the same name as the folder command is in
                group: '',

                //make this the same as name
                memberName: 'user',

                //what the command does
                description: '',

                //how to use command
                example: '//'

            });
    }

    //run
    run(message) {

        //write something in between the quotes
        message.reply("")

        //deletes command call to keep chat clean
        message.delete();
    }
}

//return this must match the thing after class and before extends up above
module.exports = commandText; 