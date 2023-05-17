import UserCard from './UserCard.js';

const cardsJson = [
  {
    name: 'John Doe3',
    email: 'OOOOOOOOOOOOOOOO'
  },
  {
    name: 'Jane Doe4',
    email: 'XXXXXXXXXXXXXXXX'
  }
];

const testContent = document.querySelector('#user-card-container');
cardsJson.forEach((card, index) => {
  const cardElement = document.createElement('user-card');
  cardElement.setAttribute('id', `user-card${index}`);
  cardElement.setAttribute('name', card.name);
  cardElement.setAttribute('email', card.email);
  testContent.appendChild(cardElement);
});

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  document.querySelector('#user-card1').setAttribute('name', 'eddie');
  document.querySelector('#user-card1').setAttribute('email', 'hahahahahaha');
});