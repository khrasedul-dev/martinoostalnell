const fs = require('fs')
const {Composer,Telegraf} = require('micro-bot')

const bot = new Composer()


bot.start(ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id , "Hello "+ctx.from.first_name  , {
        reply_markup: {
            keyboard: [
                [{text: "💰 Buy"}],
                [{text: "🌎 Website"},{text: "🚀 RoadMap"}],
                [{text: "💵 Tax"},{text: "📝 WhitePaper"}],
                [{text: "⚙️ Tokenomics"},{text: "📜 Contract"}]
            ],
            resize_keyboard: true
        }
    } ).catch("Somthing is wrong")
})

bot.on("new_chat_members",ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id , "Hello "+ctx.from.first_name  , {
        reply_markup: {
            keyboard: [
                [{text: "💰 Buy"}],
                [{text: "🌎 Website"},{text: "🚀 RoadMap"}],
                [{text: "💵 Tax"},{text: "📝 WhitePaper"}],
                [{text: "⚙️ Tokenomics"},{text: "📜 Contract"}]
            ],
            resize_keyboard: true
        }
    } ).catch("Somthing is wrong")
})


bot.hears('💰 Buy',ctx=>{
    fs.readFile('buy.txt',(err,data)=>{
        const showTest = data.toString()
        ctx.telegram.sendMessage(ctx.chat.id , showTest ).catch('Something is wrong')
    })
})

bot.command('buy',ctx=>{
    fs.readFile('buy.txt',(err,data)=>{
        const showTest = data.toString()
        ctx.telegram.sendMessage(ctx.chat.id , showTest ).catch('Something is wrong')
    })
})


bot.hears('⚙️ Tokenomics',ctx=>{
    fs.readFile('tm.txt',(err,data)=>{
        const showTest = data.toString()
        ctx.telegram.sendMessage(ctx.chat.id , showTest ).catch('Something is wrong')
    })
})

bot.command('tokenomics',ctx=>{
    fs.readFile('tm.txt',(err,data)=>{
        const showTest = data.toString()
        ctx.telegram.sendMessage(ctx.chat.id , showTest ).catch('Something is wrong')
    })
})


bot.hears('🌎 Website',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id , `<b>What Do We Do?</b>\nWe want to blur the line between the cryptocurrency merchants and ordinary consumers. We will popularize the cryptocurrency by giving free admission, and by helping people understand and confide what we believe to be the future of money.` , {
        reply_markup:{
            inline_keyboard:[
                [{text: "Visit our website", url: "https://gravitymetaverse.io"}]
            ]
        },
        parse_mode: "HTML"
    }).catch("Something is wrong")
})

bot.command('website',ctx=>{
    ctx.telegram.sendMessage(ctx.chat.id , `<b>What Do We Do?</b>\nWe want to blur the line between the cryptocurrency merchants and ordinary consumers. We will popularize the cryptocurrency by giving free admission, and by helping people understand and confide what we believe to be the future of money.` , {
        reply_markup:{
            inline_keyboard:[
                [{text: "Visit our website", url: "https://gravitymetaverse.io"}]
            ]
        },
        parse_mode: "HTML"
    }).catch("Something is wrong")
})

bot.hears('🚀 RoadMap',ctx=>{
    fs.readFile('roadmap.txt',(err,data)=>{
        const showTest = data.toString()
        ctx.telegram.sendMessage(ctx.chat.id , showTest ).catch('Something is wrong')
    })
})

bot.command('roadmap',ctx=>{
    fs.readFile('roadmap.txt',(err,data)=>{
        const showTest = data.toString()
        ctx.telegram.sendMessage(ctx.chat.id , showTest ).catch('Something is wrong')
    })
})


bot.hears('💵 Tax',ctx=>{
    fs.readFile('slippage.txt',(err,data)=>{
        const showTest = data.toString()
        ctx.telegram.sendMessage(ctx.chat.id , showTest ).catch('Something is wrong')
    })
})

bot.command('tax',ctx=>{
    fs.readFile('slippage.txt',(err,data)=>{
        const showTest = data.toString()
        ctx.telegram.sendMessage(ctx.chat.id , showTest ).catch('Something is wrong')
    })
})

bot.hears('📝 WhitePaper',ctx=>{
    fs.readFile('whitepaper.txt',(err,data)=>{
        const showTest = data.toString()
        ctx.telegram.sendMessage(ctx.chat.id , showTest ).catch('Something is wrong')
    })
})

bot.command('whitepaper',ctx=>{
    fs.readFile('whitepaper.txt',(err,data)=>{
        const showTest = data.toString()
        ctx.telegram.sendMessage(ctx.chat.id , showTest ).catch('Something is wrong')
    })
})

bot.hears('📜 Contract',ctx=>{
    ctx.replyWithHTML(`<b>Contract Us:</b> \nWebsite: https://gravitymetaverse.io/\nInstagram: gravitymetaverse\nFacebook: Gravity Metaverse`).catch("Somthing is wrong")
})

bot.command('contract',ctx=>{
    ctx.replyWithHTML(`<b>Contract Us:</b> \nWebsite: https://gravitymetaverse.io/\nInstagram: gravitymetaverse\nFacebook: Gravity Metaverse`).catch("Somthing is wrong")
})



bot.hears(/settaxmessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/settaxmessage/gi,"")
    const textForSaved = finaltext.trim()

    fs.open('slippage.txt', 'w', function (err, file) {
        if (err) {
            console.log(err)
        } else {
            fs.writeFile('slippage.txt', textForSaved , function (err) {
                if (err) throw err;
                ctx.reply("Your message sucessfully set").catch("Something is wrong")
            });  
        }
    });
})


bot.hears(/setbuymessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setbuymessage/gi,"")
    const textForSaved = finaltext.trim()

    fs.open('buy.txt', 'w', function (err, file) {
        if (err) {
            console.log(err)
        } else {
            fs.writeFile('buy.txt', textForSaved , function (err) {
                if (err) throw err;
                ctx.reply("Your message sucessfully set").catch("Something is wrong")
            });  
        }
    });
})


bot.hears(/setroadmapmessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setroadmapmessage/gi,"")
    const textForSaved = finaltext.trim()

    fs.open('roadmap.txt', 'w', function (err, file) {
        if (err) {
            console.log(err)
        } else {
            fs.writeFile('roadmap.txt', textForSaved , function (err) {
                if (err) throw err;
                ctx.reply("Your message sucessfully set").catch("Something is wrong")
            });  
        }
    });
})

bot.hears(/setwhitepapermessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/setwhitepapermessage/gi,"")
    const textForSaved = finaltext.trim()

    fs.open('whitepaper.txt', 'w', function (err, file) {
        if (err) {
            console.log(err)
        } else {
            fs.writeFile('whitepaper.txt', textForSaved , function (err) {
                if (err) throw err;
                ctx.reply("Your message sucessfully set").catch("Something is wrong")
            });  
        }
    });
})

bot.hears(/settokenomicsmessage/gi,(ctx)=>{
    const text = ctx.update.message.text
    const finaltext = text.replace(/Settokenomicsmessage/gi,"")
    const textForSaved = finaltext.trim()

    fs.open('tm.txt', 'w', function (err, file) {
        if (err) {
            console.log(err)
        } else {
            fs.writeFile('tm.txt', textForSaved , function (err) {
                if (err) throw err;
                ctx.reply("Your message sucessfully set").catch("Something is wrong")
            });  
        }
    });
})



module.exports = bot