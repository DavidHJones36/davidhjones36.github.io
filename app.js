const menuToggler = document.querySelector('#menu-toggler');
const mobileMenu = document.querySelector('#mobile-menu');

menuToggler.addEventListener('click', function () {
  if (menuToggler.classList.contains('open')) {
    menuToggler.textContent = '=';
    menuToggler.classList.remove('open');
    mobileMenu.classList.remove('open');
  } else {
    menuToggler.textContent = 'x';
    menuToggler.classList.add('open');
    mobileMenu.classList.add('open');
  }
})


const photoViewer = document.querySelector('#photo-viewer');
const viewerImage = photoViewer.querySelector('img');
const photos = document.querySelectorAll('.photo');

function handleClick(e) {
  const src = e.currentTarget.querySelector('img').src;
  viewerImage.src = src;
  photoViewer.classList.add("open");
  photoViewer.classList.add("closeable");
  let closeable = document.querySelector('.closeable');
  closeable.addEventListener('click', close);
  photoViewer.addEventListener('keydown', close);
}

function empty() {
  
}

function close(e) {
  console.log(e.key);
  console.log(e.target.tagName);
  if ((e.type == 'click' && e.target.tagName !== 'IMG') || (e.type == 'keydown' && e.key == 'Escape')) {
    console.log('close');
    photoViewer.classList.remove("open");
    photoViewer.classList.remove("closeable");
  } else {
    console.log('don\'t close');
  }
}

photos.forEach(photo => photo.addEventListener('click', handleClick));