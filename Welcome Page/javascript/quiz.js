document.querySelector('#check1').addEventListener('change', function (){
    let checkBottone= document.querySelector('#procedi');
    if(this.checked){
        checkBottone.disable=false;
        checkBottone.classList.remove('disabilitato_bottone');
        checkBottone.classList.add('buttons');
    }else{
        checkBottone.disabled=true;
        checkBottone.classList.remove('buttons');
        checkBottone.classList.add('disabilitato_bottone');
    }
})