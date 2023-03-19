function checkAge(){
    const age = document.getElementById('age');
    const ageText = age.value;
    const errorTag = document.getElementById('error')
    try{
        const age = parseInt(ageText);
        if(isNaN(age)){
            throw "Please enter a number"
        }
        else if(age < 18){
            throw "bacha not allowed"
        }
        else if(age > 30){
            throw "muribbi akn a asla hoiya jaba biyadobi"
        }
        errorTag.innerHTML = '';
    }
    catch(error){
        errorTag.innerHTML = 'Error: ' + error;
    }
    finally{
        console.log('all done')
    } 
}