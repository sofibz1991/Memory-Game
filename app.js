document.addEventListener('DOMContentLoaded', ()=>{
//card options
const cardArray=[
    {
        name:'Tyrion',
        img: 'Images/tyrion-lannister.jpeg'
    },
    {
        name:'Tyrion',
        img: 'Images/tyrion-lannister.jpeg'
    },{
        name:'Lady Olenna',
        img: 'Images/Olenna.jpeg'
    },
    {
        name:'Lady Olenna',
        img: 'Images/Olenna.jpeg'
    },{
        name:'Tormund',
        img: 'Images/Tormund_Giantsbane.jpeg'
    },{
        name:'Tormund',
        img: 'Images/Tormund_Giantsbane.jpeg'
    },{
        name:'Varys',
        img: 'Images/varys1_1.jpeg'
    },{
        name:'Varys',
        img: 'Images/varys1_1.jpeg'
    },{
        name:'Lyanna Mormmont',
        img: 'Images/lyanna.jpeg'
    },{
        name:'Lyanna Mormmont',
        img: 'Images/lyanna.jpeg'
    },{
        name:'Lord Strong',
        img: 'Images/lyonel-strong.jpeg'
    },{
        name:'Lord Strong',
        img: 'Images/lyonel-strong.jpeg'
    }
];

cardArray.sort(()=> 0.5 - Math.random());

const grid = document.querySelector('.grid');
resultDisplay = document.getElementById('result');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

//create board
function createBoard(){
    for (let i=0; i< cardArray.length; i++){
        let card = document.createElement('img');
        card.setAttribute('src', 'Images/ironthrone.jpg');
        card.setAttribute('data-id',i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}

//check for matches
function checkForMatch(){
    let cards=document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if(cardsChosen[0]===cardsChosen[1]){
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'Images/white.png');
        cards[optionTwoId].setAttribute('src','Images/white.png');
        cardsWon.push(cardsChosen);
    }else{
        cards[optionOneId].setAttribute('src','Images/ironthrone.jpg');
        cards[optionTwoId].setAttribute('src','Images/ironthrone.jpg');
        alert('Sorry, try again!');
    }
    cardsChosen=[];
    cardsChosenId=[];
    resultDisplay.textContent=cardsWon.length;
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent='Congratulations You found them all!';
    }
}

//flip card
function flipCard(){
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length===2){
    setTimeout(checkForMatch,500);
    }
}

createBoard();

})