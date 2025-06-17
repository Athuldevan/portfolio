const darkModeIcon = document.querySelector(".dark-mode-icon");
const body = document.querySelector("body");
console.log(body);
darkModeIcon.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// email-hs
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_rza28en";
  const templateID = "template_t52ar4s";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      bnnnn;
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}

// prventing to defualt behaviour of the form
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload
  sendMail(); // Your function (optional)
});
