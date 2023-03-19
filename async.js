console.log(1)
console.log(2)
setTimeout(doSomeThing, 4000)
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json())
//     .then(data => console.log(data))
console.log(4)
console.log(5)
console.log(6)

function doSomeThing(){
    console.log(3)
}
let num = 0;
const intervalId = setInterval(() =>{
    console.log(num++)
    if(num === 10){
        clearInterval(intervalId);
    }
}, 1000)