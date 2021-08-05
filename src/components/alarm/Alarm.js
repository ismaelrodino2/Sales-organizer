import { useContext } from "react";
import PrioritiesContext from "../../store/priorities-context";

export function Alarm(){
    const prioritiesCtx = useContext(PrioritiesContext)

    
    function surprise() {
        (function loop() {
            var now = new Date();
            var time = document.getElementById('timeClock')
            //time
            var h = now.getHours(); 
            var m = now.getMinutes(); 
            
            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            
            var timeNow = h + ":" + m;
            //date
            var mm = now.getMonth()+1; 
            var yyyy = now.getFullYear();
            var dd = now.getDate();

            if(dd<10) {
                dd = '0'+dd
            } 
            
            if(mm<10) {
                mm = '0'+mm
            } 
            var today = mm + '/' + dd + '/' + yyyy;

            const audioEl = document.getElementsByClassName("audio-element")[0]

            const dates = prioritiesCtx.priorities.map(function(item){
                if (item.date.includes(today) && timeNow === time.value) {
                    return(
                        audioEl.play() //the audio will play for one minute, till timeNow changes
                    )
                } 
            })
            console.log(dates)

            now = new Date();   // allow for time passing
            setTimeout(loop, 5000);
        })();       

    }
    return(
        <div>
            <h1>what time do you want the alarm for?</h1>
            <input type="time" id="timeClock" />
            <button onClick={surprise}>Set Alarm</button>
            <audio className="audio-element">
          <source src="https://www.fesliyanstudios.com/play-mp3/4386"></source>
        </audio>
        </div>
    )
}