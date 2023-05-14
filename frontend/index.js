$(document).ready(function () {
  $("#login-form").submit(function (event) {
    var formData = {
      email: $("#email").val(),
      password: $("#password").val(),
    };
    event.preventDefault();
    fetch("http://localhost:8000/auth/login", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  });
});
