"use strict"

const DOMclock = document.querySelector('.clock') //AM PM

let HTML = ''; 

for ( let h=0; h<24; h++){
    let hours = h;

    if (hours <10 )
    {
        hours = '0' + hours;
    }

    HTML += `<div class="time">${hours}:00:00</div>`;

    for ( let m=0; m<60; m++){
        let minutes = m;

        if (minutes <10 )
        {
            minutes = '0' + minutes;
        }

        //HTML += `<div class="time">${hours}:${minutes}:00</div>`;
        /*
        for ( let s=0; s<60; s++){
            let seconds = s;
    
            if (seconds <10 )
            {
                seconds = '0' + seconds;
            }
            
            HTML += `<div class="time">${hours}:${minutes}:${seconds}</div>`;
        }
        */
    }
}

DOMclock.innerHTML = HTML;
