const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.img-card');
images.forEach(image => {
  image.addEventListener('click',e => {
    lightbox.classList.add('open');
    const img = document.createElement('img');
    img.src = image.dataset.source;
    img.style.maxWidth = '80%';
    img.style.maxHeight = '80%';
    while (lightbox.firstChild){
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img);
  })
})

lightbox.addEventListener('click', e=> {
  if(e.target !== e.currentTarget) return
  lightbox.classList.remove('open');
})
