const h1 = document.querySelector('h1');
const main = document.querySelector('.main');
const messageBtn = document.querySelector('.message');
const clearBtn = document.querySelector('.clear');
const image = document.createElement('img');
const maxWidth = window.innerWidth;
const imagePanicURL = 'https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif';
const listImages = [
    'https://blog.yellowoctopus.com.au/wp-content/uploads/2017/06/yellow-octopus-happy-birthday-meme0.jpg',
    'https://c.tenor.com/2SbeHfqVfOIAAAAC/happy-birthday-spongebob.gif',
    'https://c.tenor.com/KnWD3xyzkV4AAAAC/happy-birthday-gifts.gif',
    'https://i.pinimg.com/originals/a6/68/52/a66852405f7c690bf502043c3c8453ef.gif',
    'https://media0.giphy.com/media/g5R9dok94mrIvplmZd/giphy.gif',
    'https://y.yarn.co/59b7a7b5-6082-4d29-ac83-337a867d0740_text.gif',
    'https://c.tenor.com/GyMiDFhLmsUAAAAd/happy-birthday-birthday-wishes.gif'
]

let i = 0;

messageBtn.addEventListener('click', () => {
    i++;
    console.log(i);
    if (i != 7) {
        image.setAttribute('src', `${listImages[i]}`)
    } else {
        i = 0;
        image.setAttribute('src', `${listImages[i]}`)
    }
    console.log(image.src);

    h1.textContent = 'Guess whaaat?!';
    image.setAttribute('width', maxWidth);
    main.appendChild(image);
    messageBtn.textContent = 'Another one...';
    document.getElementById('clear').style.visibility = "visible";
});

clearBtn.addEventListener('click', () => {
    h1.textContent = 'Project #3003 running tests...'
    image.setAttribute('src', `${imagePanicURL}`);
    main.appendChild(image);
    messageBtn.textContent = 'Is safe now...';
    document.getElementById('clear').style.visibility = "hidden";
    i=0;
})