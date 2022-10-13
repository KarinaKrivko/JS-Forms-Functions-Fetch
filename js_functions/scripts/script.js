// Вывести текст, введенный в инпут, в консоль
const showTextBtn = document.querySelector('.show_text_btn');
const showTextInput = document.querySelector('.show_text_input');

showTextBtn.addEventListener('click', () => console.log(showTextInput.value));


//Поменять текст в инпуте с ??? на !!!

const changeTextBtn = document.querySelector('.change_text_btn');
const changeTextInput = document.querySelector('.change_text_input');

changeTextBtn.addEventListener('click', () => changeTextInput.value = '!!!');


//Поменять цвет фона на черный
const black_mode_btn = document.querySelector('.black_mode_btn');

black_mode_btn.addEventListener('click', () => document.body.style.backgroundColor = 'black');


//Поменять цвет на черный/белый
const change_mode_btn = document.querySelector('.change_mode_btn');

// change_mode_btn.addEventListener('click', () => document.body.classList.toggle('black_mode'));

change_mode_btn.addEventListener('click', () => {
  const backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black';

  document.body.style.backgroundColor = backgroundColor;
});


//Менять цвет кнопки на случайный
const random_color_btn = document.querySelector('.random_color_btn');
const getRandomNum = () => Math.round(Math.random() * 255);

//Math.random() => дробное от 0 до 1
//Math.random() * 255 => дробное от 0 до 255
//Math.round(Math.random() * 255) => целое число от 0 до 255

random_color_btn.addEventListener('click', (event) => event.target.style.backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`);


//Менять цвет фон на случайный
const random_mode_btn = document.querySelector('.random_mode_btn');

random_mode_btn.addEventListener('click', () => document.body.style.backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`);


//Менять содержимое инпута на значение из массива
const change_btn = document.querySelector('.change_btn');
const change_input = document.querySelector('.change_input');
const symbols = ['...', '!!!', '+++', '@@@'];
let symbols_index = 0;

change_btn.addEventListener('click', () => change_input.value = symbols[symbols_index++ % symbols.length]);

//symbols_index++ % symbols.length
// 0 % 4 = 0
// 1 % 4 = 1
// 2 % 4 = 2
// 3 % 4 = 3
// 4 % 4 = 0
// 5 % 4 = 1
// 6 % 4 = 2
// 7 % 4 = 3
// 8 % 4 = 0


//Создать слайдер с фотографиями из массива
const photos = [
  'https://icdn.lenta.ru/images/2022/06/13/19/20220613193918938/square_320_606658bb7374481a05a664f151a8d888.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg/1200px-African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg',
  'https://i.ytimg.com/vi/ViAath1B5WY/maxresdefault.jpg',
  'https://cdnn21.img.ria.ru/images/153009/29/1530092975_240:0:1680:1440_1920x0_80_0_0_9df118e773d0e9f5c788eabb7b6f2aad.jpg'
]

let photoIndex = 0;

const img_slider = document.querySelector('.img_slider');

img_slider.addEventListener('click', event => event.target.src = photos[photoIndex++ % photos.length]);
