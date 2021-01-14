const queryString = require('query-string');
const Discord = require ('discord.js/webpack/discord.min');

const parsed = queryString.parse(location.search);
console.log(parsed);
const invites = {};

const bot = new Discord.Client({fetchAllMembers:true});
bot.login('NzI5MDE1MDQ1ODc0NTE1OTg4.Xw4YHw.qyI22x7t_vwXgGn2FazcMqNLk7g');

let user_invite = {};
let ivao_user = {};
if(!parsed.IVAOTOKEN || parsed.IVAOTOKEN === "error"){
    window.location= `https://login.ivao.aero/index.php?url=${window.location}`
}else{

    bot.on('ready', function () {
        console.log("Je suis connecté !");
        console.log(bot.guilds);
        bot.guilds.cache.each(g => {
            g.fetchInvites().then(guildInvites => {
                invites[g.id] = guildInvites;
                console.log(invites);
            });
        });
    });

    bot.on('guildMemberAdd', (member) => {

        member.guild.fetchInvites().then(guildInvites => {
            console.log("====MEMBER====");
            console.log(member);
            // This is the *existing* invites for the guild.
            const ei = invites[member.guild.id];
            // Update the cached invites for the guild.
            invites[member.guild.id] = guildInvites;
            // Look through the invites, find the one for which the uses went up.
            const invite = ei.find(i => i.code === user_invite.code);
            const inviter = invite.inviter;
            console.log('USER INVITE')
            console.log(user_invite)
            console.log('VS')
            console.log(invite)
            console.log('INVITER')
            console.log(inviter)

            if(invite && Object.keys(user_invite).length > 0 && bot.user.id === inviter.id && member.user.bot === false){
                // This is just to simplify the message being sent below (inviter doesn't have a tag property)
                console.log(bot.users);
                console.log("=================");
                console.log(invite);
                console.log(inviter);
                let username = `${ivao_user.firstname} ${ivao_user.lastname} - ${ivao_user.vid}`;
                let formData = new FormData();
                formData.append('username', username);
                formData.append('member', JSON.stringify(member.toJSON()));
                fetch(`http://localhost:8081/user`, {method:'POST', body: new URLSearchParams(formData)}).then((result) => {

                });
                // Get the log channel (change to your liking)
                // const logChannel = member.guild.channels.cache.find(channel => channel.name === "join-logs");
                // A real basic message with the information we need.
                console.log(`${member.user.tag} joined using invite code ${invite.code} from ${inviter.tag}. Invite was used ${invite.uses} times since its creation.`);
            }else{

            }
        });
    });
}

window.shootInvite = function (){
    let formData = new FormData();
    formData.append('token', parsed.IVAOTOKEN);
    fetch(`http://localhost:8081/login`, {method:'POST', body: new URLSearchParams(formData)}).then((result) => {
        result.json().then(response => {
            bot.guilds.cache.each(g => {
                g.fetchInvites().then(guildInvites => {
                    invites[g.id] = guildInvites;
                    console.log(response)
                    user_invite = response.invite;
                    ivao_user = response.ivao_user;
                    if(ivao_user.staff === "" || !ivao_user.staff){
                        document.write("Error - you must be FR staff in order to join");
                    }else if(ivao_user.result === 0 && ivao_user.vid === null){
                        document.write("Error");
                    }else{
                        let invite_btn = document.getElementById('invite-btn');
                        invite_btn.remove();
                        let link_wrapper = document.getElementById('link-holder');
                        link_wrapper.innerHTML = '<a href="'+user_invite.url+'" id="link-holder" target="_blank" class="md-button highlight">'+user_invite.url+'</a>';
                    }
                });
            });

        }).catch(error => document.write("Error"));
    });
}