


const getData = (ev)=> {
    ev.preventDefault();
    name_field=document.getElementById('name-field').value,
    email_field=document.getElementById('email-field').value,
    num_field=document.getElementById('num-field').value,
    message_field=document.getElementById('message-field').value
    alert("name is "+ name_field);
    document.querySelector('form').reset();
} 

const sendEmail=(ev)=>{
    ev.preventDefault();
    Email.send({
        Host : "smtp.gmail.com",
        Username : "sharaschandrika.07@gmail.com",
        Password : "Mahendar@27",
        To : 'sharaschandrika.07@gmail.com',
        From : document.getElementById('email-field').value,
        Subject : "New Email from WebApp",
        Body : "Name: "+document.getElementById('name-field').value
                + " <br> Email: "+document.getElementById('email-field').value
                +" <br> Number: "+document.getElementById('num-field').value
                +" <br> Message: "+document.getElementById('message-field').value
    }).then(
      message => alert(message)
    );
}


document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('email-button').addEventListener('click',sendEmail);
})

document.getElementById('contact-me').onclick = function(){
    // location.href='#contact-section';
    window.location.replace('#contact-section');
}