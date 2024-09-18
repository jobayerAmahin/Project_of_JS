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

tButton.addEventListener('click',function(){
    const tVal=tArea.value;
    const p=document.createElement('p');
    p.innerText=tVal;
    mainSec.appendChild(p);
    p.setAttribute("class","flex justify-center")
})

cancel.addEventListener('click',function(){
    tArea.value=''
})