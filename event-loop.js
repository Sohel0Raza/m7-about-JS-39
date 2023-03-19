// call stack
function a(){
    console.log('a');
    b();
    console.log('aa');
}
function b(){
    console.log('b');
    c();
    console.log('bb');
}
function c(){
    console.log('c');
    console.log('cc');
}
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
a()