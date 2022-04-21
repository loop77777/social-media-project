let submitbutton = $("#btnSubmit");
$("#userId").val(currentUser.username);
submitbutton.click(() => {
  createPost();
});

function createPost() {
  userId = currentUser.id;
  title = $("#title").val();
  body = $("#body").val();

  $.post("/api/posts", { userId, title, body }, (create) => {
    if (create) {
      console.log(create);
      window.location("/");
    } else {
      console.log("Need title and body to create post");
    }
  });
}
