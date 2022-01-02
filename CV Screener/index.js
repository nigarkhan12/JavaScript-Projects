console.log("This is my Index JS");

// Get Random Uesr with := random user .me api
// Data is an array of objects which contains information about the candidates

const data = [
  {
    name: 'User 1',
    age: 25,
    city: 'Bangalore',
    language: 'python',
    framework: 'django',
    image: 'https://randomuser.me/api/portraits/women/75.jpg'
  },
  {
    name: 'User 2',
    age: 28,
    city: 'kolkata',
    language: 'python',
    framework: 'flask',
    image: 'https://randomuser.me/api/portraits/women/28.jpg'
  },
  {
    name: 'User 3',
    age: 26,
    city: 'Bhopal',
    language: 'Javascript',
    framework: 'React',
    image: 'https://randomuser.me/api/portraits/men/95.jpg'
  },
  {
    name: 'User 4',
    age: 24,
    city: 'Nagpur',
    language: 'JS',
    framework: 'Angular',
    image: 'https://randomuser.me/api/portraits/women/70.jpg'
  },
  {
    name: 'User 5',
    age: 25,
    city: 'Bangalore',
    language: 'Go',
    framework: 'Go Framework',
    image: 'https://randomuser.me/api/portraits/men/10.jpg'
  }
]


// CV Iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length ?
        { value: profiles[nextIndex++], done: false } : { done: true }
    }
  };
}
const candidates = cvIterator(data);
nextCV();

// Button listener for Next Button
const next = document.getElementById("next");
next.addEventListener('click', nextCV);

function nextCV() {
  const currentCandidate = candidates.next().value;
  let image = document.getElementById('image');
  let profile = document.getElementById('profile');
  if (currentCandidate != undefined) {
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in: ${currentCandidate.city}</li>
    <li class="list-group-item">${currentCandidate.language}</li>
    <li class="list-group-item">${currentCandidate.framework}</li>
  </ul>`;
  } else {
    window.location.reload();
  }

}
