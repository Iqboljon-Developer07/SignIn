form.onsubmit = (s) =>{
    s.preventDefault()

    let inputi = document.querySelector('.inputi')
    let warningText = document.querySelector('#warning');
    let inputInfo = inputi.value;
    
    let successLayer = document.querySelector('.success-layer-info');
    let successEmail = document.querySelector('.email-name');

    let signIn = document.querySelector('.signIn');

    let UserEmail;
    function validateEmail(email) {
        UserEmail = email;
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    if(validateEmail(inputInfo)){
        successEmail.textContent = UserEmail;
        signIn.classList.add('none')
        successLayer.classList.add('exist2')        
    }else{
        inputi.classList.add('warning');
        warningText.classList.add('exist')
    }
}


dissmiss.onclick = () =>{
    location.reload()
}