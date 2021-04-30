const { Discord, Client, MessageEmbed, WebhookClient} = require('discord.js');
const client = global.client = new Client({fetchAllMembers: true});
const fs = require('fs');
const express = require('express');
const request = require('request')
const app = express();
client.on('voiceStateUpdate', (oldState, newState) => {
     const hentrateyitkanal = "825359794495160330" 
     let teyitkanaltani = client.channels.cache.get(hentrateyitkanal); 
     if(!teyitkanaltani) return console.log('Kanal Bulunamadı.');
     let member = client.users.cache.get(newState.member.id);
     if(!newState.channelID === hentrateyitkanal);
     if(!oldState.channelID === hentrateyitkanal);
         teyitkanaltani.join().then(connection => { 
        if (newState.channelID === hentrateyitkanal){
        if(newState.member.roles.cache.get('825080574816288828')){ 
       const dispatcher = connection.play(require("path").join(__dirname, './kayit.mp3'));
            dispatcher.on('end', () => {
                dispatcher.destroy();
        return;
            });
        }
        if(newState.member.roles.cache.get('825080550565085205')){ 
       const dispatcher = connection.play(require("path").join(__dirname, './yetkili.mp3'));   
            dispatcher.on('end', () => {
                dispatcher.destroy();
        return;
            });
        }
}
});
});
client.login('ODAxNTE0Nzk2OTE4ODk4Njk4.YAhy0w.Fi8BC_A8frHT507kmqYLqQYmIYA').then(c => console.log(`${client.user.tag} # Ses botu giriş sağladı!`)).catch(err => console.error("Bot giriş bilgileri yanlış olduğundan bota giriş yapılamadı!"));

client.on("ready", async () => {
  client.user.setActivity(`Luiz Was Here!`, {
type: "STREAMING",
url: "https://www.twitch.tv/poncikpogaca_"})
    .then(presence => console.log(`HERŞEY TAMAM AGAM ALTA ALABİLİRSİN BOTU`))
    .catch(console.error);

});
