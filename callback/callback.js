const posts = [
  {title: "Post 1", body : 'this is post one'},
  {title: "Post 2", body : 'this is post two'}
];

// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML += output;
//   }, 1000);
// }

// createPost({title: 'post 3', body: 'this is post 3'});
// getPosts();

function createPost(post) {
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      posts.push(post);
      const err = false;
      if(!err){
        resolve();
      } else {
        reject('something went wrong');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML += output;
  }, 1000);
}

createPost({title: 'post 3', body: 'this is post 3'}).then(getPosts).catch(function(err) {
  console.log(err);
});