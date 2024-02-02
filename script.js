function getCssPasswordCheck(){
    const button1 = document.querySelector('button');
    const pass1 = document.querySelector('#password');
    const pass2 = document.querySelector('#confirm-password')

    button1.addEventListener('click',() =>{
        console.log('ciao');
        if(pass1.value === pass2.value){
            pass1.setAttribute('style','border:2px solid green');
            pass2.setAttribute('style','border:2px solid green');
        }else{
            pass1.setAttribute('style','border:2px solid red');
            pass2.setAttribute('style','border:2px solid red');
        }
    })

}

getCssPasswordCheck();