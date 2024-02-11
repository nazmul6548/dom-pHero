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
