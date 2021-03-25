var gamepade=document.getElementById('gamepade');



window.addEventListener('resize',fun);

function fun(EO){
    EO=EO||window.event;

    var fieldHeight=document.getElementById('box-content');
    document.getElementById('press-swipe').style.top=fieldHeight.offsetHeight-15+'px';
    
    var checkInput=document.getElementById('checkInput');
    checkInput.addEventListener('click',funCheckBox);

    if(window.innerWidth<500 ){
        gamepade.classList.add('done');
        if(checkInput.checked){
            gamepade.style.height=window.innerHeight-fieldHeight.offsetHeight-30+'px';
        }else{
            gamepade.style.height=0;
        }
        gamepade.style.top=fieldHeight.offsetHeight+20+'px';
        document.getElementById('pauseLand').classList.remove('done');
    }else {
        gamepade.classList.remove('done');
        document.getElementById('pauseLand').classList.add('done');
        // if(window.innerWidth-130 <fieldHeight.offsetWidth){
        //     document.getElementById('pauseLand').style.display='none';
        // }else{
        //     document.getElementById('pauseLand').style.display='none';

        // }
    } 
}

setInterval(function(){
    fun();
    },100);



function funCheckBox(EO){
    EO=EO||EO.event;
    if(!(checkInput.checked)){
        checkInput.checked=false;
        gamepade.style.width=100+'%';
        document.getElementById('butTable').classList.remove('done');
    }else if(checkInput.checked){
        checkInput.checked=true;
        gamepade.style.width=100+'%';
        gamepade.style.height=0;
        setTimeout(function(){
            document.getElementById('butTable').classList.add('done');
        },200);
    }
}

