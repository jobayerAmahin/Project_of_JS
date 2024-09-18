//Counter Making
const btnP=document.getElementById('btnplus');
const btnM=document.getElementById('btnminus');

const dig=document.getElementById('digit');
let sum=0;

btnP.addEventListener('click',function(){
sum+=1;
dig.innerText=sum;
})

function minus(){
    sum-=1;
    dig.innerText=sum;
}

//Text or Comment Get and Write
const mainSec=document.getElementById('commentGet');
const tArea=document.getElementById('tArea');
const tButton=document.getElementById('tButton');
const cancel=document.getElementById('cancel');
const textRemoval=document.getElementById('txtRemove');
const commentArea=document.getElementById('commentSec');

tButton.addEventListener('click',function(){
    const tVal=tArea.value;
    const p=document.createElement('p');
    p.innerText=tVal;
    commentArea.appendChild(p);
    p.setAttribute("class","flex justify-center")
})

cancel.addEventListener('click',function(){
    tArea.value=''
})

textRemoval.addEventListener('click',function(){
    commentArea.removeChild(commentArea.lastChild);
})

//Quotes Generator
const quotes = [
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West"
    },
    {
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr."
    },
    {
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "Success is not how high you have climbed, but how you make a positive difference to the world.",
      author: "Roy T. Bennett"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    }
];

const qtext=document.getElementById('qtext');
const qauthor=document.getElementById('qauthor');
const btnGen=document.getElementById('btnGen');

btnGen.addEventListener('click',function(){

    let nIdx=Math.round(Math.random()*quotes.length);

    qtext.innerText=quotes[nIdx].quote;
    qauthor.innerText=quotes[nIdx].author;

    console.log(nIdx);
})

  