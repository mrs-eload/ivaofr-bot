const queryString = require('query-string');
const parsed = queryString.parse(location.search);
let user_invite = {};
let ivao_member = {};
if(!parsed.IVAOTOKEN || parsed.IVAOTOKEN === "error"){
    window.location= `https://login.ivao.aero/index.php?url=${window.location}`
}

window.shootInvite = () => {
    let formData = new FormData();
    formData.append('token', parsed.IVAOTOKEN);
    fetch(`/invite`, {method:'POST', body: new URLSearchParams(formData)}).then((result) => {
        result.json().then(response => {
            user_invite = response.invite;
            ivao_member = response.ivao_member;
            if(ivao_member.staff === "" || !ivao_member.staff){
                document.write("Error - you must be FR staff in order to join");
            }else if(ivao_member.result === 0 && ivao_member.vid === null){
                document.write("Error");
            }else{
                let invite_btn = document.getElementById('invite-btn');
                invite_btn.remove();
                let link_wrapper = document.getElementById('link-holder');
                link_wrapper.innerHTML = '<a href="'+user_invite.url+'" id="link-holder" target="_blank" class="md-button highlight">'+user_invite.url+'</a>';
            }
        }).catch(error => {throw error});
    });
}