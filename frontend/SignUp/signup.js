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
