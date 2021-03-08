document.querySelector('#button1').addEventListener('click',getText);
document.querySelector('#button2').addEventListener('click',getJSON);
document.querySelector('#button3').addEventListener('click',getAPI);

function getText(){
  fetch('test.txt')
    .then(function(response){
      return response.text();
    }).then(function(data){
      document.getElementById('output').innerHTML = data;
    }).catch(function(err){
      console.log(err);
    });
}

function getJSON(){
  fetch('posts.json')
    .then(function(response){
      return response.json();
    }).then(function(data){
      let output = '';
      data.forEach(function(post) {
        output += `
        <h1>${post.title}</h1><p>${post.body}</p>`
      });
      document.getElementById('output').innerHTML = output;
    }).catch(function(err){
      console.log(err);
    });
}

function getAPI(){
  fetch('https://api.github.com/users')
    .then(function(response){
      return response.json();
    }).then(function(data){
      let output = '';
      data.forEach(function(user) {
        if(true){
          output += `
        <h1>${user.login}</h1>`
        }
      });
      document.getElementById('output').innerHTML = output;
    }).catch(function(err){
      console.log(err);
    });
}