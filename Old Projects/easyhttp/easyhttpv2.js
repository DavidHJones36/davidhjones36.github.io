class EasyHTTP{
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    });
  };

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type' : 'application/JSON'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    });
  };

  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type' : 'application/JSON'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    });
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'Delete',
        headers: {
          'Content-type' : 'application/JSON'
        }
      })
      .then(res => res.json())
      .then(() => resolve('Resource Deleted'))
      .catch(err => reject(err))
    });
  }
}