

//path to files and stuff do not touch
const COMMANDO = require('discord.js-commando');
const sqlite = require('sqlite');
const path = require('path');
const commando = require('./src');

//makes new bot
const BOT_COMMANDO = new COMMANDO.Client({

    //what you user need to type infront of command
    commandPrefix: '//', //[edit]

    //who owns the bot, put your id here look how to do this in readMe
    owner: id = '', //[edit]

    //prevents bot from doing @everyone make false if you want bot to be able to do this
    disableEveryone: true, //[edit]

    //disables response for unknown command prevents clutter, make true to enable
    unknownCommandResponse: false //[edit]
});


//Bunch of log stuff do not touch
BOT_COMMANDO
    .on('error', console.error)
    .on('warn', console.warn)
    .on('debug', console.log)
    .on('ready', () => {
        console.log('Client ready; logged in as ${BOT_COMMANDO.user.username}#${BOT_COMMANDO.user.discriminator} (${BOT_COMMANDO.user.id})');  
    })
    .on('disconnect', () => { console.warn('Disconnected!'); })
    .on('reconnecting', () => { console.warn('Reconnecting...'); })
    .on('commandError', (cmd, err) => {
        if (err instanceof COMMANDO.FriendlyError) return;
        console.error(`Error in command ${cmd.groupID}:${cmd.memberName}`, err);
    })
    .on('commandBlocked', (msg, reason) => {
        console.log(oneLine`
			Command ${msg.command ? `${msg.command.groupID}:${msg.command.memberName}` : ''}
			blocked; ${reason}
		`);
    })
    .on('commandPrefixChange', (guild, prefix) => {
        console.log(oneLine`
			Prefix ${prefix === '' ? 'removed' : `changed to ${prefix || 'the default'}`}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
    })
    .on('commandStatusChange', (guild, command, enabled) => {
        console.log(oneLine`
			Command ${command.groupID}:${command.memberName}
			${enabled ? 'enabled' : 'disabled'}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
    })
    .on('groupStatusChange', (guild, group, enabled) => {
        console.log(oneLine`
			Group ${group.id}
			${enabled ? 'enabled' : 'disabled'}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
    });

//groups of commands this is how commands work
BOT_COMMANDO.registry.registerDefaultTypes()
    .registerGroups([

    //things in brackets are command group names which folder they are in look at readME for more info
        ['examples', 'Examples'],
        ['user','User']

    ]).registerDefaultGroups().

    //this turns default commands off or on that are provided by commando, help is the help command and shows all commands, eval_ is a command that can run java script suggestion keep it off it can crash your bot
    registerDefaultCommands({ help: true, eval_:false }) //[edit]

    //where commands are do not touch
    .registerCommandsIn((__dirname + '/commands'));

//when bot is on set these things
BOT_COMMANDO.on('ready', () => {
    
    //What game the bot is playing change text in quotes to change game.
    BOT_COMMANDO.user.setGame("Made by TheJewGamer"); //[edit]
});

//stuff so bot can save do not touch
BOT_COMMANDO.setProvider(
    sqlite.open(path.join(__dirname, 'setting.sqlite3')).then(db => new COMMANDO.SQLiteProvider(db))
).catch(console.error);

//bot login put your token in the single quotes
BOT_COMMANDO.login('Mzc1MTA0NjU2NjQyNDA4NDUw.DNrAIg.Odral9CHviNycK5P9Cktb2xueX8'); //[edit]
