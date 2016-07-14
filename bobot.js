
//I see you are looking at my bot. Gaze apon it and see it is barren. Will add stuff soon ok

var Discord = require("discord.js");
var colors = require('colors');
var fs = require('fs');

var AuthDetails = require("./auth.json");

var command;

var boBot = new Discord.Client();


boBot.on("ready", function() {
	console.log(boBot.servers);
});

boBot.on("message", function(msg) {

	var command = msg.content.split(" ");

	if (command[0] === "!r") {	
		boBot.sendMessage(msg, command[1].split("").reverse().join("").split("_").join(" "));
	}

});

boBot.loginWithToken("MjAzMjI2NTkxMDc2MTU1Mzky.Cml1Aw.i831nzhXy4q74TApH5MNx9beSuY");

//https://discordapp.com/oauth2/authorize?client_id=203223658066345984&scope=bot&permissions=0
