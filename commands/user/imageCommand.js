//tells program we using commando
const COMMANDO = require('discord.js-commando');

//the thing after the class is the name of the command ONLY thing you should change. If you change it up make sure to change it at the bottom after return
class commandImage extends COMMANDO.Command {
    constructor(BOT_COMMANDO) {
        super(BOT_COMMANDO,
            //command initializing
            {
                //the name of the command has to be lowercase
                name: 'userimage',

                //the group that the command is part of should be the same name as the folder command is in
                group: 'user',

                //make this the same as name
                memberName: 'userimage',

                //what the command does
                description: 'userimage command',

                //how to use command
                example: '//userimage'
            });
    }

    //run
    run(message, args) {

        //put image in images folder and put name of it after the /
        var post = './images/';

        //posts gif
        message.channel.send({ files: [post] });

        //deletes command call
        message.delete();
    }
}

//return this must match the thing after class and before extends up above
module.exports = commandImage; 