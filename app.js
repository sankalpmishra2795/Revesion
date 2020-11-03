const movie = new Movie();

const ui = new UI();

const searchuser = document.querySelector(".searchinput");

// addEventListener
searchuser.addEventListener("click", (e) => {
  console.log("-------");
  // Get text
  const userText = document.querySelector(".userinput").value;
  console.log(userText);
  if (userText !== "") {
    movie.getUser(userText).then((data) => {
      if (data.movie.message === "Not Found") {
        // show alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        // show profile
        ui.showProfile(data.movie);
      }
    });
  } else {
    // clear fields
    ui.clearProfile();
  }
});
