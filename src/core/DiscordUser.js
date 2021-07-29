class DiscordUser{

    constructor(opts){
        const { discord_id, user_id, nickname, discord_tag, invite_code, invite_url, is_pending, is_active, other_roles } = opts
        this.discord_id = discord_id
        this.user_id = user_id
        this.nickname = nickname;
        this.discord_tag = discord_tag;
        this.invite_code = invite_code;
        this.invite_url = invite_url;
        this.is_pending = is_pending;
        this.is_active = is_active;
        this.other_roles = other_roles;
    }

    setActive (is_active){
        this.is_active = is_active;
        this.is_pending = !is_active;
    }

    setPending (is_pending){
        this.is_pending = is_pending;
        this.is_active = !is_pending;
    }

    toJson(){
        return JSON.stringify({
            discord_id: this.discord_id,
            user_id: this.user_id,
            nickname: this.nickname,
            discord_tag: this.discord_tag,
            invite_code: this.invite_code,
            invite_url: this.invite_url,
            is_pending: this.is_pending,
            is_active: this.is_active,
            other_roles: this.other_roles
        })
    }

    expectedRoles(roles){
        let res = [];
        this.other_roles.forEach(role => {
            res.push(roles[`${role}_role`]);
        });
        if (this.is_active === true) {
            res.push(roles.member_role)
        }
        return res;
    }

}

module.exports = DiscordUser;