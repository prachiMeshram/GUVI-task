$(document).ready(function () {
  $("#profile-form").submit(function (event) {
    var formData = {
      name: $("#fullName").val(),
      email: $("#email").val(),
      contact: $("#contact").val(),
      age: $("#age").val(),
      dob: $("#dob").val(),
      address: $("#address").val(),
      city: $("#city").val(),
      state: $("#state").val(),
      userId: "a6e7281c-5a8c-45a8-a53b-e14a659c99a4",
    };
    event.preventDefault();
    fetch("http://localhost:8000/auth/addprofile", {
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
      .catcch((error) => {
        console.error("Error: ", error);
      });
  });
});
