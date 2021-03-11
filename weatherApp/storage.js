class Storage {
  constructor() {
    this.zip;
    this.defaultZip = 75206;
  }

  getLocationData() {
    if(localStorage.getItem('zip') === null) {
      this.zip = this.defaultZip;
    } else {
      this.zip = localStorage.getItem('zip');
    }
    return this.zip;
  
  }
  
  setLocationData(zip) {
    console.log('running');
    localStorage.setItem('zip', zip);
  }
}

