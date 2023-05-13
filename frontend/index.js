$(documet).ready(function () {
  $("#login-form").submit(function (event) {
    var formData = {
      email: $("#email").val(),
      password: $("#password").val(),
    };
    event.preventDefault();
    fetch("http://localhost:8000/auth/login", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: formData,
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
