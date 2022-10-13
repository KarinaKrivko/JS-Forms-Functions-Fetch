// const cards_container = document.querySelector('.cards_container');

// fetch('https://reqres.in/api/users') //отправляем запрос; именно тут лежит массив с объектами, но так не всегда
// .then(resp => resp.json()) // получаем ответ и преобразовываем в json формат
// .then(json => render(json.data)) // data отсюда переходит в 8 строчку, получаем из предыдущей строки  json и чтото с ним делаем 
//  //console.log(json.data)) console.log(json.data)) =  = массив, data свойство объекта; json = объект 

//  //json.data => json_data (переменная, может быть любое название)
//  const render = (json_data) => {
//      json_data.forEach(({first_name, email, avatar}) => {
//          const card = document.createElement('div');
//          const avatarElem = document.createElement('img');
//          const firstnameElem = document.createElement('p');
//          const emailElem = document.createElement('a');

//          firstnameElem.innerText = first_name;
//          emailElem.innerText = email;

//          emailElem.classList.add('email_elem');
//          card.classList.add('card');

//          avatarElem.src = avatar; //avatarElem.setAttribute('src', el.avatar);
//          avatarElem.alt = 'avatar'; //avatarElem.setAttribute('alt', 'avatar');
//          emailElem.href = `mailto: ${email}`;



//          card.append(avatarElem, emailElem, firstnameElem);
//          cards_container.append(card);
//      });

//  }