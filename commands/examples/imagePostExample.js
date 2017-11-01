//tells program we using commando
const COMMANDO = require('discord.js-commando');

//the thing after the class is the name of the command ONLY thing you should change. If you change it up make sure to change it at the bottom after return
class commandImagePostExample extends COMMANDO.Command {
    constructor(BOT_COMMANDO) {
        super(BOT_COMMANDO,
        //command initializing
            {
                //the name of the command has to be lowercase
                name: 'filePost',

                //the group that the command is part of should be the same name as the folder command is in
                group: 'examples',

                //make this the same as name
                memberName: 'filePost',

                //what the command does
                description: 'sends files',

                //how to use command
                example: '//filePost'
            });
    }

    //run
    run(message, args) {

        //makes variable with image location note image has to be in bot folder
        var postImage = './images/example.png';

        //makes variable with gif location note gif has to be in bot folder
        var postGif = './gifs/example.gif';

        //post image
        message.channel.send({ files: [postImage] });

        //posts gif
        message.channel.send({ files: [postGif] });

        //deletes command call
        message.delete();
    }
}

//return this must match the thing after class and before extends up above
module.exports = commandImagePostExample; 