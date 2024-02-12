const resulta = document.getElementsByTagName('h1');
console.log(resulta);
const result = document.querySelectorAll('.hello');
console.log(result);
for (let i = 0; i < result.length; i++) {
    console.log(result[i].innerText="jishani");
    
}
const mytagName = document.getElementById('nameId');
mytagName.style.backgroundColor="red";
mytagName.style.color="green";
mytagName.style.fontSize="100px";
mytagName.style.padding="20px";
mytagName.style.textAlign="center";

// const body = document.getElementById('bodys');
// const div = document.createElement('div');
// // div.innerText="nazmul"
// const addText = document.createElement('h1');
// addText.innerText="this is title"
// div.appendChild(addText);
// const para = document.createElement('p');
// para.innerText ="first of all our educational articles";
// div.appendChild(para);
// const ul = document.createElement('ul');
// div.appendChild(ul);
// const li1 = document.createElement('li');
// li1.innerText ="about";
// ul.appendChild(li1);
// // 
// const li2 = document.createElement('li');
// li2.innerText ="adress";
// ul.appendChild(li2);
// // 
// const li3 = document.createElement('li');
// li3.innerText ="skill";
// ul.appendChild(li3);
// // 
// const li4 = document.createElement('li');
// li4.innerText ="contact";
// ul.appendChild(li4);


// body.appendChild(div);

const bodyt = document.getElementById('bodys');

const div = document.createElement('div');
div.innerHTML = `
          <h1> this is tittle </h2>
          <p>lorem ipsum dolor sit am </p>
          <ul>
          <li>home</li>
          <li>about</li>
          <li>skill</li>
          </ul>
`
div.style.backgroundColor ="red";
div.style.padding ="10px"


bodyt.appendChild(div);


function myFunc() {
    document.write('new addition')
}


function myFName() {
    document.getElementById('emptyTag').innerText='yes i am present'
}

function myDate() {
    const myDateElement = document.getElementById('paraEmpty');
    myDateElement.innerText  = Date();
}

const myarray = () => {
    document.body.style.backgroundColor= 'purple';
}

const newcol = document.getElementById('newCo');
newcol.onclick = myNewcol;
function myNewcol() {
    document.body.style.backgroundColor= "blue"
}

const clicks = document.getElementById('click-me');
clicks.addEventListener('click',function makeAlert() {
    alert('hello mia  vai')
});

const subscribess = document.getElementById('subscribes');
subscribess.addEventListener('click',function makeAlert() {
    document.body.style.backgroundColor= "blue"
});

const addnew = document.getElementById('explore-id');
  addnew.addEventListener('click',function makeAlert() {
    const changetext = document.getElementById('emptyTag');
    changetext.innerText ="ami change hoy gc ager moto nai"
  });