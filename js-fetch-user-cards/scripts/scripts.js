const cards_container = document.querySelector('.cards_container');

function draw(users) {

users.forEach(user => {

const item = document.createElement('div');

const title = document.createElement('p');
const status = document.createElement('div');


item.classList.add('item');



if (user.completed) { 
    item.classList.add('status_done') 
}
else 
item.classList.add('status_notdone');


title.innerText = 'Task: '+user.title;
status.innerText =  (user.completed) ? 'Status: done' : 'Status: not done';

item.append(title, status);

cards_container.append(item);
});


}

fetch(`https://jsonplaceholder.typicode.com/todos`)
.then(resp => resp.json()) 
.then(json => draw(json)) 

