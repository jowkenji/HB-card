const header = document.querySelector('header');
const h1 = document.querySelector('h1');

const main = document.querySelector('.main');
const messageBtn = document.querySelector('.message');
const clearBtn = document.querySelector('.clear');
const div = document.querySelector('div');
const image = document.createElement('img');

const imagePanicURL = 'https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif';
const imageBDay1URL = 'https://c.tenor.com/KnWD3xyzkV4AAAAC/happy-birthday-gifts.gif';
const imageBDay2URL = 'https://c.tenor.com/2SbeHfqVfOIAAAAC/happy-birthday-spongebob.gif';


messageBtn.addEventListener('click', () => {
    h1.textContent = 'Guess whaaat?!';
    if (image.getAttribute('src') === `${imageBDay1URL}`) {
        image.setAttribute('src', `${imageBDay2URL}`);    
    } else {
        image.setAttribute('src', `${imageBDay1URL}`);
    }
    main.appendChild(image);
    messageBtn.textContent = 'Another one...';
});

clearBtn.addEventListener('click', () => {
    h1.textContent = 'Project #3003 running tests...'
    image.setAttribute('src', `${imagePanicURL}`);
    main.appendChild(image);
    messageBtn.textContent = 'Is it safe now...';
})