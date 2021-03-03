document.querySelector('#button1').addEventListener('click',getText);
document.querySelector('#button2').addEventListener('click',getJSON);
document.querySelector('#button3').addEventListener('click',getAPI);

function getText(){
  fetch('test.txt')
    .then(response => response.text())
    .then(data => document.getElementById('output').innerHTML = data)
    .catch(err => console.log(err));
}

function getJSON(){
  fetch('posts.json')
    .then(response => response.json())
    .then(data => {
      let output = '';
      data.forEach(post => 
        output += `
        <h1>${post.title}</h1><p>${post.body}</p>`
      );
      document.getElementById('output').innerHTML = output;
      })
    .catch(err => {
      console.log(err);
    });
}

function getAPI(){
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
      let output = '';
      data.forEach(function(user) {
        if(true){
          output += `
        <h1>${user.login}</h1>`
        }
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => {
      console.log(err);
    });
}