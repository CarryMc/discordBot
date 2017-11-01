//tells program we using commando
const COMMANDO = require('discord.js-commando');

//the thing after the class is the name of the command ONLY thing you should change. If you change it up make sure to change it at the bottom after return
class commandFlipExample extends COMMANDO.Command {
    constructor(BOT_COMMANDO) {
        super(BOT_COMMANDO,
        //command initializing
            {
                //the name of the command has to be lowercase
                name: 'coinflip',

                //the group that the command is part of should be the same name as the folder command is in
                group: 'examples',

                //make this the same as name
                memberName: 'coinflip',

                //what the command does
                description: 'Flips a coin',

                //how to use command
                example: '//coinflip'

            });
    }

    //run
    run(message) {
        //random number between 1 and 2
        var flip = Math.floor(Math.random() * 2) + 1;

        //if flip is 1
        if (flip == 1) {
            //text to send
            message.reply("It landed on Tails");
        }

        //if flip is anything but 1
        else {
            //text to send
            message.reply("It landed on Heads")
        }

        //deletes command call to keep chat clean
        message.delete();
    }
}

//return this must match the thing after class and before extends up above
module.exports = commandFlipExample; 