const getData = (ev) => {
  ev.preventDefault();
  (name_field = document.getElementById("name-field").value),
    (email_field = document.getElementById("email-field").value),
    (num_field = document.getElementById("num-field").value),
    (message_field = document.getElementById("message-field").value);
  alert("name is " + name_field);
  document.querySelector("form").reset();
};

function myFunction() {
  var x = document.getElementById("nav-dropdown");
  if (x !== null && x.style.display === "") {
    console.log(x.style.display);
    x.style.display = "flex";
  } else if (x !== null && x.style.display === "flex") {
    console.log(x.style.display);
    x.style.display = "";
  }
}

const sendEmail = (ev) => {
  ev.preventDefault();
  Email.send({
    SecureToken: "7657730e-2690-43db-b0e5-70d26b386ee9",

    // Host: "smtp.gmail.com",
    // Username: "sharaschandrika.07@gmail.com",
    // Password: "Mahendar@27",
    To: "sharaschandrika.07@gmail.com",
    From: "sharaschandrika.07@gmail.com",
    // From: document.getElementById("email-field").value,
    Subject: "New Email from WebApp",
    Body:
      "Name: " +
      document.getElementById("name-field").value +
      " <br> Email: " +
      document.getElementById("email-field").value +
      " <br> Number: " +
      document.getElementById("num-field").value +
      " <br> Message: " +
      document.getElementById("message-field").value,
  }).then((message) => alert(message));
  document.getElementById("contact-form").reset();
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("email-button").addEventListener("click", sendEmail);
});

// document.getElementById("contact-me").onclick = () => {
//   location.href='#contact-section';
//     window.location.replace("#contact-section");

// };
