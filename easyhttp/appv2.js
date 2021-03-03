const http = new EasyHTTP;

// http.get('http://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

const data = {
  name: "John Doe",
  username: "Johndoe",
  email: "john@doe.biz"
}

// http.post('http://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// http.put('http://jsonplaceholder.typicode.com/users/4', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

http.delete('http://jsonplaceholder.typicode.com/users/4')
.then(data => console.log(data))
.catch(err => console.log(err));