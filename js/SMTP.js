
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "E66314B932623403C014C9E44E4F61ADE14A",
        To : 'stonerainbow14@gmail.com',
        From : "agrofuture84@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );


}