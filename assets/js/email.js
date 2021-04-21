// Variables for emailJS
const serivceID = "service_veo9o7d";
const templateID = "template_3093mur";
const userID = "user_IZexurD0xkQkoR2UK3flk";

$(document).ready(function(){
// code fragment
var dataT = {
    service_id: serivceID,
    template_id: templateID,
    user_id: userID,
    template_params: {
        'from_name': "",
        'from_email': "",
        'contact_reason': "",
        'message': ""
    }
};
$("#contactForm").submit(function(event) {
$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(dataT),
    contentType: 'application/json'
}).done(function() {
    alert('Your mail is sent!');
}).fail(function(error) {
    alert('Oops... ' + JSON.stringify(error));
});
event.preventDefault();
});
});
