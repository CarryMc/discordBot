//tells program we using commando
const COMMANDO = require('discord.js-commando');

//the thing after the class is the name of the command ONLY thing you should change. If you change it up make sure to change it at the bottom after return
class CommandVoice extends COMMANDO.Command {
    constructor(BOT_COMMANDO) {
        super(BOT_COMMANDO,
            //command initializing
            {
                //the name of the command has to be lowercase
                name: '',

                //the group that the command is part of should be the same name as the folder command is in
                group: 'voice',

                //make this the same as name
                memberName: '',

                //what the command does
                description: '',

                //how to use command
                example: ''
            });
    }

    //run
    async run(message, args) {

        //makes sure you can't call command when running
        var isReady = true;

        //running so make false so it can be called again
        isReady = false;

        //find what voice channel user is in
        var voiceChannel = message.member.voiceChannel;

        //join the voice channel user is in
        voiceChannel.join().then(connection => {

            //what to play put the sound file in sounds and type the name of it below
            const dispatcher = connection.playFile("./Sounds/");

            //what happens on
            dispatcher.on("end", end => {
                //bot leaves
                voiceChannel.leave();
            });
            //anythings goes wrong log it
        }).catch(err => console.log(err));

        //set to true so command can be called again
        isReady = true;

        //deletes command call to keep chat clean
        message.delete();
    }
}

//return this must match the thing after class and before extends up above
module.exports = CommandVoice; 