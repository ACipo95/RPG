var botMeteo = require('telegram-api').default;
var Message = require('telegram-api/types/Message');
var File = require('telegram-api/types/File');

var bot = new botMeteo({
    token: '626161861:AAEas3edpbKMjgVRT8BsRmy3v9RsqCCSJxs'
})

bot.start();

var Meteo = ['SERENO','PIOVOSO','NUVOLOSO','TEMPORALE'];

setInterval(function(){
    bot.send(new Message().text('il tempo di oggi è ' + Meteo[Math.floor(Math.random()*4)]).to(83534346))
},3000);

/*
bot.command('start',function(message){
    
    var answer = new Message().text('il tempo di oggi è ' + Meteo[Math.floor(Math.random()*4)]).to(message.chat.id);
    console.log(message.chat.id);
    bot.send(answer);
});
*/