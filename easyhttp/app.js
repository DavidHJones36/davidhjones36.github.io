const http = new easyHTTP;

//Get Posts
// http.get('http://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err){
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

//Get Single Post
// http.get('http://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//   if(err){
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create Data
const data = {
  title : 'custom post',
  body : 'this is a custom post'
};

// post post
// http.post('http://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err){
//         console.log(err);
//       } else {
//         console.log(post);
//       }
// })

//PUT post
// http.put('http://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//   if(err){
//         console.log(err);
//       } else {
//         console.log(post);
//       }
// })

//DELETE post
http.delete('http://jsonplaceholder.typicode.com/posts/1', function(err, posts) {
    if(err){
      console.log(err);
    } else {
      console.log(posts);
    }
  });