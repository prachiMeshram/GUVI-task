// const axios = require("axios");

$(document).ready(function () {
  $("#register-form").submit(function (event) {
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      password: $("#password").val(),
    };
    event.preventDefault();
    fetch("http://localhost:8000/auth/signup", {
      method: "POST",
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
    // axios.post("http://localhost/auth/signup", formData).then((res) => {
    //   if (res.status !== "SUCCESS") {
    //     console.log("SUCESS");
    //     console.log(res.data);
    //   } else {
    //     console.log("ERROR");
    //   }
    // });
  });
});
