const checkbox = document.getElementById('check');
checkbox.addEventListener('change', function (){
    let button= document.getElementById('procedi');

    if(checkbox.checked){
        button.disabled=false;
        button.classList.remove('disabilitato_bottone');
        button.classList.add('buttons');
    }else{
        button.disabled=true;
        button.classList.remove('buttons');
        button.classList.add('disabilitato_bottone');
    }
})

