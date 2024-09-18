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