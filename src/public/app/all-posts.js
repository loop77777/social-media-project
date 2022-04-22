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
      }
    }
  });
}

