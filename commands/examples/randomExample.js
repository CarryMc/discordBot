//tells program we using commando
const COMMANDO = require('discord.js-commando');

//the thing after the class is the name of the command ONLY thing you should change. If you change it up make sure to change it at the bottom after return
class commandRandomExample extends COMMANDO.Command {
    constructor(BOT_COMMANDO) {
        super(BOT_COMMANDO,
            //command initializing
            {
                //the name of the command has to be lowercase
                name: 'random',

                //the group that the command is part of should be the same name as the folder command is in
                group: 'examples',

                //make this the same as name
                memberName: 'random',

                //what the command does
                description: 'random example',

                //how to use command
                example: '//random'

            });
    }

    //run
    run(message) {

        //this an array it can be any amount of items, items are seperated by commas
        var exampleArrayText = [
            "Thing 1",
            "Thing 2"
        ];

        //arrays can also be used to select a random image just replace the text with the location, items are seperated by commas
        var exampleArrayImages = [
            './gifs/example.gif',
            './images/example.png'
            ];

        //gets random item from array you can add things to the array and do not need to edit this line
        var textPost = exampleArrayText[Math.floor(Math.random() * exampleArrayText.length)];

        //sends text, notice that the text inside the parentheses is not in single quotes because it is a variable
        message.channel.send(textPost);

        //gets random item from the array
        var filePost = exampleArrayImages[{ files: [Math.floor(Math.random() * exampleArrayImages.length)] }];

        //sends image to notice that the text inside the parentheses is not in single quotes because it is a variable
        message.channel.send(filePost);

        //deletes command call to keep chat clean
        message.delete();
    }
}

//return this must match the thing after class and before extends up above
module.exports = commandRandomExample; 