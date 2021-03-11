const data = [
  {
    name:'john doe',
    age:32,
    gender:'male',
    lookingFor:'female',
    location:'Boston, MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name:'jen smith',
    age:26,
    gender:'female',
    lookingFor:'male',
    location:'Miami, FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name:'william jones',
    age:38,
    gender:'male',
    lookingFor:'female',
    location:'Atlanta, GA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
]

const profiles = profileIterator(data);

nextProfile();

const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click' , nextProfile);

function nextProfile(){
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
    <ul class = "list-group">
      <li class="list-group-item">Name: ${currentProfile.name}
      </li>
      <li class="list-group-item">Age: ${currentProfile.age}
      </li>
      <li class="list-group-item">Location: ${currentProfile.location}
      </li>
      <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}
      </li>
    </ul>
  `;

    document.getElementById('imageDisplay').innerHTML = `<img src= ${currentProfile.image}>`;
  } else {
    window.location.reload();
  }
  
}


function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ?
      { value: profiles[nextIndex++], done: false} :
      {done: true}
    }
  };
}