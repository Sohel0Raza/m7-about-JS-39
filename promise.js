const getData = new Promise((resolve, reject) =>{
    const num = Math.random()*10;
    console.log(num)
    if(num < 5){
        resolve(299)
    }
    // resolve(80)
    else{
    reject('no data available');
    }
})
// console.log(getData)
getData
    .then(data => console.log(data))
    .catch(err => console.error('ERR:', err))