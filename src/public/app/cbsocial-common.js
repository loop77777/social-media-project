$(() => {
  $("#navbar").load("/components/navbar.html", loginIfNeeded);
  $("#footer").load("/components/footer.html");
  $("#content").load("/components/all-posts.html", loadPosts);
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
} //m-3

function loadPosts() {
  $.get("/api/posts", {}, (posts) => {
    if (posts) {
      for (post of posts) {
        $("#Posts-container").append(
          $(`
          <div class="col-4">
     <div class="card m-3">
     <div class="card-body">
         <h5 class="card-title" id="post-title">${post.title}</h5>
         <h6 class="card-subtitle mb-2 text-muted" id="userId">${
           post.user.username
         }</h6>
         <p class="card-text" id="post-description">${post.body.substr(
           0,
           240
         )}<a href="#">... read more</a> </p>
         <a href="#" class="card-link">Comment</a>
         <a href="#" class="card-link">Like</a>
     </div>
     </div>    
     </div> 
      `)
        );
        console.log(post);
      }
    }
  });
}
