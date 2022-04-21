$(() => {
  $("#navbar").load("/components/navbar.html", loginIfNeeded);
  $("#footer").load("/components/footer.html");
  $("#content").load("/components/all-posts.html"); // it have it's own script too
});

function loginIfNeeded() {
  window.currentUser = window.localStorage.user
    ? JSON.parse(window.localStorage.user)
    : null;
  if (!currentUser) {
    $.post("/api/users", {}, (user) => {
      if (user) {
        console.log("register current user as ", user.username);
        window.localStorage.user = JSON.stringify(user);
        currentUser = user;
        $("#nav-username").text(currentUser.username);
      }
    });
  } else {
    console.log("resuming session as ", currentUser.username);
    $("#nav-username").text(currentUser.username);
  }
}


