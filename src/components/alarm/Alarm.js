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

            //alert date
            if (prioritiesCtx.totalPriorities > 0){
                var alertdate = prioritiesCtx.priorities[0].date; 
            } else{
                var alertdate = null
            }

            if(dd<10) {
                dd = '0'+dd
            } 
            
            if(mm<10) {
                mm = '0'+mm
            } 
            var today = mm + '/' + dd + '/' + yyyy;

            if (today === alertdate && timeNow === time.value) {
                return (
                    window.alert('alarm')
                )
            }
            now = new Date();                  // allow for time passing
            setTimeout(loop);
        })();       

    }
    return(
        <div>
            <h1>what time do you want the alarm for?</h1>
            <input type="time" id="timeClock" />
            <button onClick={surprise}>Set Alarm</button>
        </div>
    )
}