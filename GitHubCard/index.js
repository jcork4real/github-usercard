/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


const cardsElement = document.getElementsByClassName('cards')


axios
  .get('https://api.github.com/users/jcork4real')
  // .then( res => console.log(res))
  // .then(res =>{
  //     res.data.name.forEach(item => {
  //       let newPerson = card(item);
  //      cardsElement.append(newPerson);
  //     })
  // })


  .then(response => {
        card(response.data);
  })

  // .catch(error => {
  //   console.log('Data not returned', error)
  // })

//   .catch( error => {
//     console.log("Error:", error);
// });

// /*
//   STEP 2: Inspect and study the data coming back, this is YOUR
//     github info! You will need to understand the structure of this
//     data in order to use it to build your component function

//     Skip to STEP 3.
// */

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/


const card = (someObject) => {
//create elements
// const cardDiv = document.createElement('div');
// const imgElement = document.createElement('img');
// const cardInfo = document.createElement('div');
// const nameElement = document.createElement('h3');
// const usernameElement = document.createElement('p');
// const locationElement = document.createElement('p');
// const profileElement = document.createElement('p');
// const addressElement = document.createElement('a');
// const followersElement = document.createElement('p');
// const followingElement = document.createElement('p');
// const bioElement = document.createElement('p');

// //set attributes and create classes

// cardDiv.classList.add('card');
// imgElement.setAttribute('src', someObject[avatar_url]);
// cardInfo.classList.add('card-info');
// nameElement.classList.add('name');
// usernameElement.classList.add('username');
// addressElement.setAttribute('href', someObject[data][html_url]);

// //Add text content
// nameElement.textContent = someObject[data][name];
// usernameElement.textContent = someObject[data][login];
// locationElement.textContent = `Location: ${someObject[data][location]}`;
// profileElement.textContent = `Profile:`;
// followersElement.textContent = `Followers: ${someObject[data][followers]}`;
// followingElement.textContent = `Following: ${someObject[data][following]}`;
// bioElement.textContent = `Bio ${someObject[data][bio]}`;

// //Append everything to cardDiv

// cardDiv.append(imgElement, cardInfo, nameElement, usernameElement, locationElement, profileElement, 
//                  followersElement, followersElement, bioElement
// );

// profileElement.appendChild(addressElement);

  
  return cardDiv;

}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
