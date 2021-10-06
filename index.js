const aoi = require("aoi.js")



const bot = new aoi.Bot({

token: "ODgxMjAxMjQ2MjIzMDczMjkx.YSpYnQ.5BfWHngI142-TZ50UZLDltWtuL0", 
prefix: ['RBX','!']
})
bot.onMessage()

bot.command({
name: "Embed", 
code: `$title[• RBX Community Developers LLC •]
$description[$message]
$deletecommand
$color[fb0606]
$footer[ⓒ 2021 RBX Community Developers LLC All Rights Reserved.| ]
$onlyPerms[admin;Sorry This Command Belongs To Admins/Owners!:x:]
$author[RBX Community Developers LLC;https://media.discordapp.net/attachments/768394610548146189/809785735359758347/Roblox_Studio_20212.png]
$thumbnail[https://media.discordapp.net/attachments/768394610548146189/810778835771064320/20210215_1027232.png?width=891&height=501]
$addtimestamp`

})










 
bot.command({
  name: "Mute",
  code: `$title[Muted]
  $description[This User Has Been Muted By The Owner Or Admin Or Mod Or Senior's...]
  $footer[This User Has Been Muted By Admin/Mod.]
$color[fb0606]
$takeRole[$mentioned[1];783476604822355980]
$giveRole[$mentioned[1];783476604802039808]
$onlyPerms[admin;Sorry You Need More Perms!]`
  })
//Unmute Command//
  bot.command({
  name: "Unmute",
  code: `$title[Unmuted]
  $description[This User Been Unmuted By An Admin/Mod Or The Owner Or Senior's Or The Server Owner...]
  $footer[This User Has Been Unmuted By Admin/Mod.]
$color[fb0606]
$takeRole[$mentioned[1];783476604802039808]
$giveRole[$mentioned[1];783476604822355980]
$onlyPerms[admin;Sorry But You Need More Perms!]`
}) 

 
//music play command added another text error//


bot.command({
  name: "addwiki",
  code: `$title[New Wiki!]
  $description[$Message]
  $footer[ⓒ 2021 RBX Community Developers LLC All Rights Reserved.]
  $useChannel[823241338845134878]
  $color[GREEN]
  $suppressErrors[:x: Failed To Detect Wiki Channel!]
  $sendMessage[Wiki Sent!;no]
  $thumbnail[$userAvatar]
  $addField[By $username; ]`


})


bot.command({
  name: "Suggest",
  code: `$title[New Suggestion]
  $description[$message]
  $footer[ⓒ 2021 RBX Community Developers LLC All Rights Reserved.]
  $color[GREEN]
  $useChannel[823241366212837386]
  $suppressErrors[:x: Failed To Post Your Suggesiton <@$authorID>]
  $sendMessage[Suggestion Sent!;no]
  $addField[Pending Review; Not Reviewd]`


  })

  bot.command({
    name: "Leaderboard",
    code: `Heres The Leader Board Of Mee6 Levels!:https://mee6.xyz/leaderboard/783476604788539422`
  

  })

  

//slowmode command//
    bot.command({
      name: "Slowmode",
      code: `$slowmode[$channelID;$message]
      $title[Successfully Updated Slowmode!]
      $description[Successfully Updated Slow Mode Of<#$channelID>!]
      $footer[ⓒ 2021 RBX Community Developers LLC All Rights Reserved.]
      $color[GREEN]
      $addField[Slowmode Reminder;Please Dont Use RBXSlowmode 55 Then U Type Something It Will Not Work Please Use RBXSlowmode <SlowMode Number> Without A Message Please!]
      $suppressErrors[:x: Failed To Update Slowmode!]
      $onlyPerms[admin; :X: You Need To Be An Admin $@username!]`


      })







bot.command({
  name: "Rules",
  code: `$title[Rules]
  $description[1#:No Hacking! By Hacking You Will Be Banned From The Server Returning Back To The Server Will Result To You In An Report!
2#:No Spamming In Channels Or Any Channels!
3#:Please Follow [Discord Terms Of Service!\\](https://discord.com/terms)
4#:No Putting Random Links In ANy Channels That Will Result In An Mute Or Warn!
5#:Please Make Sure To Play Songs In The Right Voice Channels If Not Moderators Have All Their Rights To Mute Or Warn You!
6#:No Joking Around Stuff Or Trolling! That Will Result In An Mute!
7#:No Sending The Server Invite Link To Raiding Servers That Will Result In An Ban For An Year!
8#:No Saying Cursed Words Saying That Will Result In A instant mute for 1 week! Still Doing It? Result In A Instant Ban!
9#:no sending random links results in a instant mute for 1 week!
10#:You Must follow our terms and privacy and rules or u will be banned!!]
$color[fb0606]
$footer[ⓒ 2021 RBX Community Developers  LLC All Rights Reserved.]
`

})








  bot.command({
  name: "About",
  code: `$title[About Us]
  $description[We are called RBX Community created from 2017 known as 2010 we joined discord in 2020 and we called
Our self Roblox Zuhair Then Roblox Community Then Back To ROblox then back to Roblox Zuhair Then Still Like
Allways Roblox Zuhair until we found our name that is not gonna change for ever.."RBX Community" This Name
Was very epic and unique but if someone creates another bot like RBX Community Bot but tehy add 2 that will not
be an official Bot because when we create our Bot's we invite them to the RBX Community Server if the bots
That you see that are in random servers they are fake if they say this bot is Official then report this
to Us... we will talk to this malware owner then we think are they creating this bot as so we can meet
them? so yes thats true sometimes fans want to meet their special youtubers and sometimes pepole name there bot
"Soundrout Ultilites 2" If This Bot Was Not Announced By Sounddrout then its not official its unofficial..
and if someone says that they clam taht the bot "CodeLyon 2" Is Official The Bot Must Be Announced By Codelyon
they are An Youtuber From Youtube If You Want To Subscribe To Then [Click Here\\](https://www.youtube.com/channel/UC08G-UJT58SbkdmcOYyOQVw)
So Thats It!]
$footer[ⓒ 2021 RBX Community Developers LLC All Rights Reserved.]
$color[fb0606]`


})

bot.command({
  name: "Replay",
  code: `$title[Successfully Replayed!]
  $description[i Have Replayed The Songs!<@$authorID>]
  $loopQueue
  $color[fb0606]
  $footer[ⓒ 2021 RBX Community Developers LLC All Rights Reserved.]
  $suppressErrors[:X: Failed To Replay The Queue!]`


})




bot.command({
 name: "https://discord.gg/",
 nonPrefixed: true,
 code: `$deletecommand <@$authorID> You cannot advertise your server here!`

})

bot.command({
  name: "discord.gg/",
  nonPrefixed: true,
  code: `$deletecommand <@$authorID> You cannot advertise your server here!`
 
 })

 bot.command({
  name:"hack",
  code:`**__Starting a dangerous Hack on $username[$mentioned[1]]__**
  $editIn[3s;**Got the token of the user:**
  $randomString[18];**Email of the user:**
  $replaceText[$username; ;_;-1]@gmail.com;Password:
  $randomString[7];**Recent contacts:**
  $username[$randomUserID];**Most used word:**
  $randomText[meme;lol;nah;lmao;dude;bruh;wut;nou];**Most recent dm message:**
  $randomText[I think you are mad af;bye;Why u blocked me;I am mad];**Hacking medical records**;**Hacked Email(bypassed 2FA too)**;**Injecting Latest version of Corona into the account**;**Hacking microsoft account**;**Microsoft password: $randomText[ZapIsZap@Zap.com;IAmNoob@gmail.com;ByeBye@ok.co.in;$replaceText[$username; ;_;-1]IsSmart@yahoo.com]**;**Checking User Games**;**Plays $randomText[fortnite(....);subway surfers;temple run;clash of clans]**;**Hacking epic games account**;**Epic games account hacked and deleted**;**Discord IP:
  $numberSeparator[$random[100000000;900000000];.]**;__The *totally* dangerous, risky and scary hack on $username[$mentioned[1]] is complete!__
  
  But be safe, the police may come anytime soon now :rofl:]
  $onlyIf[$mentioned[1]!=;Woah wait, where is the person who is to be hacked bruh]
  $onlyIf[$authorID!=$mentioned[1];....hacking yourself?]`})


 
  bot.command({
    name: "kick",
    code: `$title[User Kicked By $username]
    $description[You Have Been Kicked For:$message]
    $color[fb0606]
    $footer[ⓒ 2021 RBX Community Developers LLC All Rights Reserved.]
    $kick[$mentioned[1]]
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Kick}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
})

bot.command({
  name: "ban ",
  code: `$sendDM[$Mentioned[1];{title:Banned From $Servername}{description:You Have Been Banned From $ServerName Reason:$message[2]}{color:RANDOM}]
  $ban[$mentioned[1]]
 $if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Ban}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
})



bot.command({
  name: "say",
  code: `$message
  $onlyPerms[admin;Error Command Doesnt Respond To Members!]
  $deletecommand
$onlyIf[$getServerVar[PREMIUM;$guildID]==true;:r_no: This command is only for **premium** servers!]`

})


bot.command({
  name: "device",
  code: `$title[Device]
  $description[<@$findMember[$message]> is on $replaceText[$replaceText[$replaceText[$replaceText[$platform[$findMember[$message]];none;None ✖️];web;Web 🌐];mobile;Mobile 📱];desktop;PC 🖥]]
  $thumbnail[$authorAvatar]
  $addTimestamp
  $color[#303136]
  `
})










bot.command({
  name: "join",
  code: `
 Successfully joined <#$voiceid[$authorid]>
 $joinVC[$voiceid[$authorid]]
 $onlyif[$voiceid[$clientid]==;:x: Someone is listening to songs in another Voice Channel\nEither join their Voice Channel or use this command later.]
 $onlyIf[$voiceid[$authorid]!=;:x: Please join a Voice Channel and use this command.]
$onlyIf[$getServerVar[PREMIUM;$guildID]==true;:r_no: This command is only for **premium** servers!]`
})


bot.command({
  name: "leave",
  code: `
 Successfully disconnected from <#$voiceid[$clientid]>
 $leaveVC
 $onlyif[$voiceid[$clientid]!=;:x: I am not connected to any Voice Channel.]
 $onlyIf[$voiceid[$authorid]!=;:x: Please join a Voice Channel and use this command.]
$onlyIf[$getServerVar[PREMIUM;$guildID]==true;:r_no: This command is only for **premium** servers!]`
 })













bot.command({
  name: "captcha",
  code: `$title[CAPTCHA VERIFICATION]
  $description[**Heres Your Code <@$authorID>!** - $randomString[8]]
  $color[RANDOM]
  $footer[Captach Verification System 2.0]
  $addField[Reminder;Use RBXVerify And Ur Code.]
  $setuserVar[Captcha;$randomstring[8]]`
})

bot.command({
  name: "verify",
  usage: "RBXVerify <code>",
  code: `$title[Verification Completed!]
  $description[**You Have Been SuccessFully Verified Known As <@$authorID>!**]
  $footer[Captcha Verification System 2.0]
  $color[RANDOM]
  $giveRole[$authorID;889282827621896198]
  
  $onlyIf[$message==$getuserVar[Captcha];Sorry But This Code You Typed In Is Invalid! :x:]
$onlyIf[  $channelSendMessage[889287678128971776;{title: Verification Captcha}{description: @$username has been verified!}{color:RANDOM}]==$getuserVar[Captcha]; Error did not send message because of invalid code!]`
})



bot.variables({
  Captcha: "",
  Level: "1",
  XP: "1%",
  Blacklist: "",
  Account: "",
  ServerAbout: "",
  PREMIUM: "",
  ProductKey: "",
})



bot.command({
  name: "clear",
  code: `$clear[$message]
  $onlyPerms[managemessages; Error Missing Perms!]`
})







bot.command({
    name: "botInfo",
    code: `$title[Bot Information]
$description[Made By Mohammed RBX#1522
Made In Aoi.js
Aoi.js V: 4.4.4
Bot Created In 2021]
$color[fb0606]`
})







bot.command({
 name: "premium-transfer",
 code: `
 $setServerVar[PREMIUM;true;$message[1]]
 $setTimeout[31d;
 userID: $authorID]
 $username you have transfered your premium to **$serverName[$message[1]]** if this was a mistake, or wrong server id DM The Bot Developer
 $setServerVar[PREMIUM;false;$guildID]
 $onlyIf[$getServerVar[PREMIUM;$guildID]==true;:x: This server does not have premium!]
$onlyIf[$message[1]!=;:x: A server ID is a required argument!]`
})


bot.command({
 name: "setpremium-server",
 code: `
 $setServerVar[PREMIUM;true;$message[1]]
 $setTimeout[31d;
 userID: $authorID]
 **$serverName[$message[1]]** Has been added as a premium server.
$onlyIf[$message[1]!=;:x: A server ID is a required argument!]
$onlyIf[$authorID==$botOwnerId;:x: Only the bot developer can assign premium servers.]`
})


module.exports = ({
 name: "removepremium-server",
 code: `
 $setServerVar[PREMIUM;false;$message[1]]
:white_check_mark: $serverName[$message[1]] server is no longer premium.
$onlyIf[$message[1]!=;:x: A server ID is a required argument!]
$onlyIf[$authorID==$botOwnerId;:x: Only the bot developer can remove premium servers.]`
})



bot.command({
    name: "Simba",
    code: `$title[Now Playing Симпа]
$description[You Are Now Playing The 16m Song Симпа AKA Simpa]
$playSong[Симпа;10m;yes;yes; Error :x: There Was a occur while playing the song!]
$cooldown[10s; Wait %time$]`
})




bot.command({
  name: "setup-modlogs",
  aliases: ["s-modlogs"],
  code: `
  
  $if[$message[1]==remove]
  $setServerVar[modlogs;0]
  $color[RANDOM]
  $channelSendMessage[$getServerVar[modlogs];<@$authorID> - Mod Logs Channel was removed by $username #$discriminator[$authorID].]
  $suppressErrors
 
  $else
  $if[$channelExists[$findServerChannel[$message]]==true]
  $setServerVar[modlogs;$findServerChannel[$message]]
  $description[<#$findServerChannel[$message]> set as Mod Logs Chaanel from <#$channelCategoryID[$findServerChannel[$messag]]> Category.]
  $color[RANDOM]
  
  $endif
  $endif
  
  $argsCheck[>1;{title:Missing Arguments}{description:$getServerVar[prefix]s-modlogs <#channel/ID/remove>}{color:RED}]
  $onlyPerms[manageserver;{title:Missing Permissions}{description:Missing Manage Server permission}{color:RED}]`
  
})



bot.command({
name: "warn",
code: `
$color[RANDOM]
$title[Warned $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[**$username** has warned **$username[$mentioned[1;yes]]** for \`$noMentionMessage\`
he now has \`$getUserVar[warn;$findUser[$message]]\` Warnings
]
$setUserVar[reason;$getUserVar[reason;$mentioned[1]]/**$date+:$hour:$minute:$second**+> $noMentionMessage+;$mentioned[1]]
$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];1];$mentioned[1]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher than me on role position**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher/equal than you on role position**]
$onlyIf[$message[2]!=;**⛔ Provide a reason**]
$onlyIf[$mentioned[1]!=;**⛔ Mention the user you want to warn and provide a reason**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't warn yourself**]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ You can't warn a bot**]
$onlyBotPerms[manageroles;⛔ **I don't have** \`MANAGAGE_ROLES\` perms]
$onlyPerms[manageroles;⛔ **You don't have** \`MANAGAGE_ROLES\` perms]
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Warn}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
})
 
bot.command({
name: "warnings", 
code: `$color[RANDOM]
$title[$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]'s warnings]
$description[
**$username[$mentioned[1;yes]]** has
\`$getUserVar[warn;$findUser[$message]]\` warnings
 
**Warnings User**
<@$mentioned[1;yes]> 
(\`$mentioned[1;yes]\`)]
$onlyIf[$getUserVar[warn;$findUser[$message]]>0;**⛔ The warnings of this user is already at 0**]
$onlyIf[$mentioned[1]!=;**⛔ You must mention someone**]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ You can't warn a bot, so they don't have warnings**]
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Warnings}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
})
 
bot.command({
name: "unwarn", 
code: `
$color[RANDOM]
$title[Removed Warn from $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[**$username** has removed a warn from **$username[$mentioned[1;yes]]** 
he now has \`$getUserVar[warn;$findUser[$message]]\` Warnings]
$setUserVar[warn;$sub[$getUserVar[warn;$findUser[$message]];1];$findUser[$message]]
$removeSplitTextElement[$getTextSplitLength]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher than me on role position**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher/equal than you on role position**]
$onlyIf[$getUserVar[warn;$findUser[$message]]>0;**⛔ The Warnings of this User is already at 0**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't unwarn yourself**]
$onlyIf[$mentioned[1]!=;**⛔ You must mention someone**, Correct usage: \`$getServerVar[prefix]unwarn <@user>\`]
$onlyPerms[manageroles;⛔ **I don't have** \`MANAGAGE_ROLES\` perms**]
$onlyBotPerms[manageroles;⛔ **I don't have** \`MANAGAGE_ROLES\` perms**]`
})
 







bot.command({
    name: "unban",
    code: `$unban[$message;reason (optional)]
i have unbanned $message from the server 
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Unban}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
    
})

bot.command({
    name: "giverole",
    code: `$giverole[$mentioned[1];$message]
$argscheck[1<; add a id of the role you want to give to the user.]
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Role Added <@&$mentionedRoles[1]>}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
})



bot.command({
    name: "removerole",
    code: `$takeRole[$mentioned[1];$message]
$argscheck[1<; mention the user then make a space put the id role that the user has]
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Role Removed <@&$mentionedRoles[1]>}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
})


bot.variables({
prefix: "RBX",
modlogs: ""

})


bot.command({
    name: "spotify",
    code: `$playSpotify[https://open.spotify.com/track/7xlrdBdz8TGSo0COvLHymc?si=fa2047475bc44aaf;1h;yes;yes; useFilter (yes/no, default is yes);failed]
    `
})





bot.command({
    name: "setrank",
    usage: "setrank <channel>",
    description: "settings the levelup channel",
    code: `$description[Rank channel has been set up to <#$mentionedChannels[1;yes]>]
   $color[01ff00]
   $setServerVar[rch;$mentionedChannels[1;yes]]
   $setServerVar[rsystem;1]
   $onlyBotPerms[mentioneveryone;{description:I dont have permission \`MENTION_EVERYONE\`}{color:ff2050}]
   $onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
   $cooldown[5s;Please wait **%time%**]`
   })
    
   bot.command({
    name: "resetrank",
    usage: "resetrank",
    description: "reset the levelup channel",
    code: `$description[Rank channel has been set up to <#$mentionedChannels[1;yes]>]
   $color[01ff00]
   $setServerVar[rch;]
   $setServerVar[rmsg;$getVar[rmsg]]
   $setServerVar[rsystem;0]
   $onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__ on this server}{color:ff2050}]
   $onlyBotPerms[mentioneveryone;{description:I dont have permission \`MENTION_EVERYONE\`}{color:ff2050}]
   $onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
   $cooldown[5s;Please wait **%time%**]`
   })
    
   bot.command({
    name: "$alwaysExecute",
    code: `$useChannel[$getServerVar[rch]]
   $replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[rmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]
   $setUserVar[lvl;$sum[$getUserVar[lvl];1]]
   $setUserVar[rexp;$multi[$getUserVar[rexp];2]]
   $onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
   $onlyForServers[$guildID;]` 
   })
    
   bot.command({
    name: "$alwaysExecute",
    code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;4]]]
   $onlyIf[$getServerVar[rsystem]>=1;]
   $onlyForServers[$guildID;]`
   })
    
   bot.awaitedCommand({
    name: "errorrank",
    code: `$setServerVar[rch;]
   $onlyForServers[$guildID;]`
   })
    
   bot.command({
    name: "setrankmsg",
    usage: "setrankmsg <message>",
    description: "message for the leveled up",
    code: `$description[You have been setted the message to:
   \`$message\`]
   $color[01ff00]
   $setServerVar[rmsg;$message]
   $onlyIf[$message!=;You can also use this variables:
   \`\`\`
   {user.tag} = $userTag
   {user.mention} = <@$authorID>
   {level} = 1
   {exp} = 25
   \`\`\`
   Current msg is:
   \`$getServerVar[rmsg]\`]
   $onlyBotPerms[mentioneveryone;managemessages;{description:I need permission \`MANAGE_MESSAGES\`/\`MENTION_EVERYONE\`}{color:ff2050}]
   $onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
   $cooldown[5s;Please wait **%time%**]`
   })
    
   bot.command({
    name: "rank",
    aliases: ["level"],
    usage: "rank (user)",
    description: "see the current level and exp",
    code: `$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[lvl;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[exp;$mentioned[1;yes]]&nextlevelxp=$getUserVar[rexp;$mentioned[1;yes]]&previouslevelxp=0&custombg=https://cdn.discordapp.com/attachments/793071150614970388/794565647760752650/20210101_205624.jpg&xpcolor=ffffff&isboosting=true]
   $onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__}{color:ff2050}]
   $cooldown[5s;]`
   })
    
 
   
   bot.variables({
    rch: "",
    rmsg: "Congrats {user.tag}🎉, you leveled up to level {level}",
    lvl: "0",
    exp: "0",
    rexp: "40",
    rsystem: "0"
   })








bot.command({
        name: "play",
        aliases: ['p'],
        code: `
       $color[RANDOM]
       $thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail]]
       $title[**Song Added to Queue**]
       $description[**Succesfully added** [$songInfo[title]\\]($songInfo[url]) to the **Queue**]
       $addField[:stopwatch:| Duration:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration]__**]
       $addField[:dvd: | Views:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;views]__**]
       $addField[:coffee: | Author:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploader_name]__**]
       $addField[:clock10: Uploaded:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploaded]__**]
       $playSong[$message;1m;{title:Error}{description:**⛔ There was an error while making the request**}{color:RED}]
       $onlyIf[$message!=;{title:Error}{description:**⛔ I need Song name to find a** \`song\`...}]
       $onlyIf[$voiceID!=;**⛔ You are Not in a Voice channel! Join a voice channel**]
       $cooldown[5s;Wait **%time%** to use this command again]`
       })
        
       bot.command({
       name: "pause",
       code: `$pauseSong
       **⏸️ Paused**
       $onlyIf[$queueLength!=0;Nothing song was playing.]
       $onlyIf[$voiceID!=;You need to join the voice channel first!]`
       })
        
       bot.command({
       name: "resume",
       code: `$resumeSong
       **▶️ Resumed**
       $onlyIf[$queueLength!=0;Nothing song was playing.]
       $onlyIf[$voiceID!=;You need to join the voice channel first!]`
       })
        
       bot.command({
       name: "loop",
       code: `$replaceText[$replaceText[$checkCondition[$loopQueue==true];true;Loop now **on**];false;Loop now **off**]
       $onlyIf[$queueLength!=0;Nothing song was playing.]
       $onlyIf[$voiceID!=;You need to join the voice channel first!]`
       })
        
       bot.command({
       name: "nowplaying",
       aliases: "np",
       code: `$author[Now playing;https://cdn.discordapp.com/emojis/729630163750354955.gif?size=1024]
       $title[$songInfo[title]]
       $description[$addField[Duration;$songInfo[duration]]
       $addField[URL;$songInfo[url]]]
       $footer[$botPingms to load it.]
       $thumbnail[$songInfo[thumbnail]]
       $color[a09fff]
       $onlyIf[$queueLength!=0;Nothing song was playing.]
       $onlyIf[$voiceID!=;You need to join the voice channel first!]`
       })
        
       bot.command({
       name: "stop",
       code: `$stopSong
       $sendMessage[⏹️ Stopped.;no]
       $onlyIf[$queueLength!=0;**⛔ Nothing song was playing**]
       $deleteIn[5s]`
       })
        
        
       bot.command({
       name: "skip",
       code: `$skipSong
       ⏩ Skipped!
       $onlyIf[$queueLength>1;Only have **$queueLength song**]
       $onlyIf[$queueLength!=0;**⛔ Nothing song was playing**]
       $onlyIf[$voiceID!=;**⛔ You need to join the voice channel first**]`
       })
        
        
       bot.command({
       name: "clearqueue",
       code: `$clearSongQueue
       $stopSong
       $editIn[125ms;✅ Cleared queue. from **$queueLength song** to **0**] ⚠️ Clearing...
       $onlyIf[$queueLength!=0;**⛔ Nothing song was playing**]`
       })
        
       bot.command({
       name: "queue",
       code: `$queue[1;30]
       $onlyIf[$queueLength!=0;Nothing song was playing.]
       $onlyIf[$voiceID!=;You need to join the voice channel first!]`
       })
        
       bot.command({
       name: "volume", 
       code: `$volume[$message[1]]
       $onlyIf[$message[1]<101;**⛔ Max volume 100%**]
       $onlyIf[$charCount[$message[1]]<4;Failed.]
       $onlyIf[$isNumber[$message[1]]==true;Must number!]
       $onlyIf[$message[1]!=;**⛔ Volume can change 0 - 100**]
       $editIn[1s;**✅ Changed to $message[1]%**] **Changing..**
       $onlyIf[$queueLength!=0;**⛔ Nothing song was playing**]
       $onlyIf[$voiceID!=;**⛔ You need to join the voice channel first**]`
       })




        bot.command({
            name: "setup",
            code: `
            $awaitMessages[$authorID;30s;everything;tsp2;Command has been cancelled]
            $sendMessage[**Which Category Do you want to make For Ticket System.
            Provide the Category ID. 
            This Command will be cancelled after** \`30 seconds\`.;no]
            $onlyPerms[admin;Only Users with \`ADMIN\` perms can use this{delete:10s}]
            $suppressErrors[]`
           })
            
           bot.awaitedCommand({
            name: "tsp2",
            code: `
           **✅ Setup ticket is complete**
            $setServerVar[ticketchannel;$message]
            $onlyIf[$channelExists[$message]==true;Provided Category Doesn't Exist{delete:10s}]
            $onlyIf[$isNumber[$message]==true;Please provide Category ID{delete:10s}]`
           })
            
           bot.command({
            name: "ticket",
            code: `
           $newTicket[ticket-$username[$authorID];{title:Ticket opened!}{description:Hello, <@$authorID>. Here is your ticket!:tickets: Please give the information about your problem or feedback. 
           Thanks in advance for being patient}{footer:Use close to close your ticket};$getServerVar[ticketchannel];no;<@$authorID>, I failed to create your ticket! Try again]
           $sendMessage[Ticket Successfully opened! Hello, <@$authorID>. Go to **$toLowercase[#$username$discriminator]** to describe your issue!;Something went wrong]`
           })
            
           bot.command({
            name: "close",
            code: `
           $closeTicket[This is not a ticket]
           $onlyIf[$checkContains[$channelName;ticket]==true;This command can only be used in tickets{delete:10s}]
           $suppressErrors`
           })
            
            
           bot.variables({
            ticketchannel: "",
           })


           bot.command({
            name: "help",
            code: `
          
          {thumbnail:$authorAvatar}
          {field:General:Click the Button:true}
          {field:Economy:Click the Button:true}
          {field:Fun:Click the Button:true}
          {field:Moderator:Click the Button:true}
          {field:Other:Click the Other Button:true}
           
          {color:#5865F2};{actionRow:General,2,1,GeneralButton,:Economy,2,1,EconomyButton,:Fun,2,1,FunButton,:Moderator,2,1,ModeratorButton,:Other,2,1,OtherButton};;yes]]`
          })
           
          bot.onInteractionCreate()
          bot.interactionCommand({
           name: "GeneralButton",
           prototype:"button",
           code:`
          $interactionDelete
          $wait[10s]
          $interactionEdit[;{color:#2f3136}{title:General Commands}{description:These are my commands\ncommands names here}]
          $wait[3s]
          $interactionReply[I'm loading general commands;;;0;4]`
          })
           
          bot.interactionCommand({
           name: "EconomyButton",
           prototype:"button",
           code:`$interactionDelete
          $wait[10s]
          $interactionEdit[;{color:#2f3136}{title:Economy Commands}{description:These are my commands\ncommands names here}]
          $wait[3s]
          $interactionReply[I'm loading economy commands;;;0;4]`
          })
           
          bot.interactionCommand({
           name: "FunButton",
           prototype:"button",
           code:`$interactionDelete
          $wait[10s]
          $interactionEdit[;{color:#2f3136}{title:Fun Commands}{description:These are my commands\ncommands names here}]
          $wait[3s]
          $interactionReply[I'm loading fun commands;;;0;4]`
          })
           
          bot.interactionCommand({
           name: "ModeratorButton",
           prototype:"button",
           code:`$interactionDelete
          $wait[10s]
          $interactionEdit[;{color:#2f3136}{title:Moderation Commands}{description:These are my commands\ncommands names here}]
          $wait[3s]
          $interactionReply[I'm loading moderation commands;;;0;4]`
          })
           
          bot.interactionCommand({
           name: "OtherButton",
           prototype: "button",
           code:`$interactionDelete
          $wait[10s]
          $interactionEdit[;{color:#2f3136}{title:Other Commands}{description:These are my commands\n prefix , stats , ping , rbxeditprefix}]
          $wait[3s]
          $interactionReply[I'm loading other commands;;;0;4]`
          })
                      

          bot.command({
            name: "embed-pagination",
            code: `$djsEval[(async () => {
          const Discord = require('discord.js');
          const leaf = require('leaf-utils');
          
          const page1 = new Discord.MessageEmbed() 
              .setColor('RED')
              .setTitle('Page 1')
              .setDescription('Page 1')
           
          const page2 = new Discord.MessageEmbed()
              .setColor('GREEN')
              .setTitle('Page 2')
              .setDescription('Page 2')
           
          const page3 = new Discord.MessageEmbed() 
              .setColor('ORANGE')
              .setTitle('Page 3')
              .setDescription('Page 3')
          
          //Settings
          const pages = [ 
              page1,
              page2,
              page3
            ]
           
          const emojiList = ['⏪', '◀️', '⏹️', '▶️', '⏩'] 
          const timeout = '300000'
           
          leaf.paginate(msg, pages, emojiList, timeout);
          })()]`
          })