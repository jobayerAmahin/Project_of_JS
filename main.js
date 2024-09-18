//Traversing html elements
let listItems=document.getElementsByClassName('sigmaList');
for(i=0;i<listItems.length;i++){
    let elem=listItems[i];
    elem.style.color='red';
    elem.style.fontSize='20px';
}

//ParentElement and ChildElement
const item2=document.getElementById('item2');
console.log(item2.parentElement);
console.log(item2.previousElementSibling);
console.log(item2.nextSibling);
console.log(item2.nextElementSibling);

//innerText, innerHTML, textcontent
const inner=document.getElementById('inn');
const hid=document.getElementById('hid');
const innT=document.getElementById('inText');

console.log(inner.innerHTML);
console.log(innT.innerText);
console.log(hid.textContent);

//setAttribute,getAttribute,removeAttribute
const linK=document.getElementsByTagName('a')[0];
const btnFb=document.getElementById('btnFb');

linK.setAttribute("class","newlink");
linK.setAttribute("title","This is a new link for FB");
btnFb.setAttribute("disabled",true)

console.log(linK.getAttribute("class"));
console.log(linK.getAttribute("title"));

btnFb.removeAttribute("disabled");

//appned, remove parent child
const mDiv=document.getElementById('parentChild');

const h1=document.createElement('h1');
h1.innerText="This section is for append and remove child";

const p=document.createElement('p');
p.innerText="All kinds of methods ffor html element append and remove can be found in this section";

const p1=document.createElement('p');
p1.innerText="All kinds of methods ffor html element append and remove can be found in this section for p1";

const p2=document.createElement('p');
p2.innerText="All kinds of methods ffor html element append and remove can be found in this section ffor p2";


mDiv.appendChild(h1);
mDiv.append(p,p1,p2,"************************");

p1.className="redCol";
mDiv.removeChild(p2)
p.remove()



//
const btn1=document.getElementById('btn1');
const val=document.getElementById('totVal');

btn1.addEventListener('click',function(){
    console.log("Button Clicked!");
    let newVal=Number(val.innerText);

})