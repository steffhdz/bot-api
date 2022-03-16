const { response } = require('express');
const fs=require('fs');

const qrcode=require('qrcode-terminal');

const{ Client }=require('whatsapp-web.js');

const SESSION_FILE_PATH="./session.js"

const country_code="521";
const number="7774483560";
const msg="Holi";

let sessionData;
if(fs.existsSync(SESSION_FILE_PATH)){
    sessionData=require(SESSION_FILE_PATH);
}
const client = new Client({
    session:sessionData
});

client.initialize();

client.on('qr', qr=>{
    qrcode.generate(qr,{small:true});
});

client.on("ready", () => {
    console.log("Client is ready!");

    setTimeout(() => {
        let chatId = `${country_code}${number}@c.us`;
        client.sendMessage(chatId, msg).then((response) => {
            if (response.id.fromMe) {
                console.log(" works!");
            }
        })
    }, 3500);
});

client.on('message',msg=>{
    if(msg.body=="Hola"){
        client.sendMessage(msg.from,"Hola que tal?");
    }
})