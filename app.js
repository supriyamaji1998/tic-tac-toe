console.log("welcome to tic tac toe");
 const res=document.querySelector (".result");
 const controler=document.querySelector (".controler");
 const cells=document.querySelectorAll(".cell-items");
let isTurnX=true;
let isLive=true;
let isTimerOn=false;
const xsym='✘';
const osym='〇';
let checkWiner=(ch)=>{
    isLive=false;
    clearTimer();
    res.innerHTML=`<span>${letterToSymbol(ch)} has Won!!!</span>`;
};
const letterToSymbol=(sym)=>sym==='X'?xsym:osym;
const updateStatus=()=>{
        let cel0 =cells[0].classList[1];
        let cel1 =cells[1].classList[1];
        let cel2 =cells[2].classList[1];
        let cel3 =cells[3].classList[1];
        let cel4 =cells[4].classList[1];
        let cel5 =cells[5].classList[1];
        let cel6 =cells[6].classList[1];
        let cel7 =cells[7].classList[1];
        let cel8 =cells[8].classList[1];
        if(cel0 && cel0===cel1 && cel0===cel2){
            checkWiner(cel0); 
           cells[0].classList.add('winer');   
           cells[1].classList.add('winer');   
           cells[2].classList.add('winer');  
        
        }else if(cel3 && cel3===cel4 && cel3===cel5){
            checkWiner(cel3);
            cells[3].classList.add('winer');   
            cells[4].classList.add('winer');   
            cells[5].classList.add('winer');  
            
        }else if(cel6 && cel6===cel7 && cel6===cel8){
            checkWiner(cel6); 
            cells[6].classList.add('winer');   
            cells[7].classList.add('winer');   
            cells[8].classList.add('winer');  
            
        }else if(cel0 && cel0===cel3 && cel0===cel6){ 
            checkWiner(cel0);
            cells[0].classList.add('winer');   
            cells[3].classList.add('winer');   
            cells[6].classList.add('winer'); 
         
        }else if(cel1 && cel1===cel4 && cel1===cel7){
            checkWiner(cel1); 
            cells[1].classList.add('winer');   
            cells[4].classList.add('winer');   
            cells[7].classList.add('winer');  
            
        }else if(cel2 && cel2===cel5 && cel2===cel8){
            
            checkWiner(cel2);
            cells[2].classList.add('winer');   
            cells[5].classList.add('winer');   
            cells[8].classList.add('winer'); 
            
        }else if(cel2 && cel2===cel4 && cel2===cel6){
            
            checkWiner(cel2); 
            cells[2].classList.add('winer');   
            cells[4].classList.add('winer');   
            cells[6].classList.add('winer');  
           
        }else if(cel0 && cel0===cel4 && cel0===cel8){
            checkWiner(cel0); 
            cells[0].classList.add('winer');   
            cells[4].classList.add('winer');   
            cells[8].classList.add('winer');  
            
        }else if(cel0 && cel1 && cel2 && cel3 && cel4 && cel5 && cel6 && cel7 && cel8){
            isLive=false;
            clearTimer();
            res.innerHTML=`<span style="color:blue;">Game is tied!!!</span>`;
        }else{
            isTurnX=!isTurnX;
            if(isTurnX){
                res.innerHTML=`Turn of ${xsym}`;
            }else{
                res.innerHTML=`Turn of ${osym}`;
            }
        }
}

for(let cell of cells){
    cell.addEventListener('click',(e)=>{
        // console.log(e.target.classList[1]);
        if(isTimerOn==false){
            isTimerOn=true;
            startTimer();
        }
        const classofList=e.target.classList;
        if(!isLive || classofList[1]==='X' || classofList[1]==='O'){
            if(classofList[1]==='X'){
            alert('This slot is selected by "X",choose another one!!! ');
            }else if(classofList[1]==='O'){
                alert('This slot is selected by "O",choose another one!!! '); 
            }else{
                alert('Game is Over!!! Play Again!!!');
            }
            return;
        }
        if(isTurnX===true){
            e.target.classList.add('X');
            updateStatus();
        }else{
            e.target.classList.add('O');
            updateStatus();
        }
    });
}
controler.addEventListener('click',()=>{
    isTurnX=true;
    isLive=true;
    isTimerOn=false;
    resetTimer();
    res.innerHTML=`Turn of ${xsym}`;
    for(let item of cells){
        item.classList.remove('X');
        item.classList.remove('winer');
        item.classList.remove('O');
    }
    
});
//***********timer section */
let sec=0;
let min=0;
let hour=0;
let suportSec=0;
let suportMin=0;
let suportHour=0;
let inteval=null;
function stopwatch(){
    sec++;
    if(sec/60===1){
        sec=0;
        min++;
        if(min/60===1){
            min=0;
            hour++;
        }
    }
    if(sec<10){
        suportSec="0"+sec.toString();
    }else{
        suportSec=sec;
    }
    if(min<10){
        suportMin="0"+min.toString();
    }else{
        suportMin=min;
    }
    if(hour<10){
        suportHour="0"+hour.toString();
    }else{
        suportHour=hour;
    }
    
    document.getElementById("display").innerHTML=suportHour+":"+suportMin+":"+suportSec;
   
}
function startTimer(){
    interval=window.setInterval(stopwatch, 1000);
}
function clearTimer(){
    document.getElementById("display").style.color="red";
    window.clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);
    sec=0
    min=0;
    hour=0;
    document.getElementById("display").innerHTML="00:00:00";
}
