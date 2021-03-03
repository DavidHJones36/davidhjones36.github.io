class EasyHTTP{
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData
  };

  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
        headers: {
          'Content-type' : 'application/JSON'
        },
        body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData
  };

  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type' : 'application/JSON'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData
  }

  async delete(url) {
      const response = await fetch(url, {
        method: 'Delete',
        headers: {
          'Content-type' : 'application/JSON'
        }
      })

      const resData = 'resource Deleted';
      return resData;
  }
}