let btns = document.querySelectorAll('.btn');
let score = document.querySelector('#score');
let scvalue = parseInt(score.textContent);

btns.forEach(function (btn){
    btn.addEventListener('click' ,(e) =>{
        let curr_btn = e.currentTarget.classList;
        if ( curr_btn.contains("decrease")){
            scvalue--;
        }
        else if ( curr_btn.contains("increase")){
            scvalue ++;
        }
        else{
            scvalue = 0;
        }
        if ( scvalue <  0){
            score.style.color = "red";
        }
        if ( scvalue >  0){
            score.style.color = "green";
        }
        if ( scvalue == 0){
            score.style.color = 'black';
        }
        score.textContent = scvalue;

    })
    
})
