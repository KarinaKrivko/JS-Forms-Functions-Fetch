const cards_container1 = document.querySelector('.cards_container1');

const render = (json_data) => {
  cards_container1.innerText = '';
  const cards = json_data.map(({ first_name, avatar }) => {
    const card = document.createElement('div');
    const avatarElem = document.createElement('img');
    const nameElem = document.createElement('p');

    avatarElem.src = avatar;
    avatarElem.alt = 'avatar';

    nameElem.innerText = first_name;

    card.append(avatarElem, nameElem);
    return card
  })
  cards_container1.append(...cards);
}

const request = (num) => {
  fetch(`https://reqres.in/api/users?page=${num}`)
    .then(resp => resp.json())
    .then(json => render(json.data))
}

request(1);

const [first_btn,second_btn] = document.querySelectorAll('.triggers button');
first_btn.addEventListener('click', () => request(1));
second_btn.addEventListener('click', () => request(2));



// ================================ buttons variants 

// variant a

// pageEl.addEventListener('click', event => {
//         if (event.target.name == '1') {
//             cardsContainer.innerText = '';
//             request(1);
//         } 
//         if (event.target.name == '2') {
//             cardsContainer.innerText = '';
//             request(2)
//         }
//     })


// variant b

// const [btn_one, btn_two] = document.querySelectorAll('.triggers button');
// btn_one.addEventListener('click', () => request(1));
// btn_two.addEventListener('click', () => request(2));


// variant c

// let get_user = (id) => {
// 	fetch(`https://reqres.in/api/users?page=${id}`)
// 		.then((response) => response.json())
// 		.then((json) => render(json.data));
// };

// get_user(id_page);

// page_1_btn.addEventListener('click', () => get_user(1));
// page_2_btn.addEventListener('click', () => get_user(2));

// variant d

// const triggers = document.querySelectorAll(".triggers button");

// triggers.forEach((e, i) => e.addEventListener("click", () => request(i + 1));
