// console.log(document.body);
const myTag =document.getElementsByTagName('h1')
console.log(myTag);
for (let i = 0; i < myTag.length; i++) {
    
    console.log(myTag[i]);
}

// document.getElementById('h1-tag').innerHTML = "dava hava"
const id = document.getElementById('h1-tag');
console.log(id);

const result = document.getElementsByClassName('btn')
console.log(result);