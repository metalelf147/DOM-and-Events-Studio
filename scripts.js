// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let rocketImage = document.getElementById("rocket");
    rocketImage.style.position = "relative";
    rocketImage.style.top = "20px";
    rocketImage.style.left = "20px";
    rocketImage.style.visibility = "visible";

    let vertPositionString = rocketImage.style.top;
    let vertPosition = Number(vertPositionString.split("px")[0]);
    let horiPositionString = rocketImage.style.left;
    let horiPosition = Number(horiPositionString.split("px")[0]);

const takeOff = this.document.getElementById("takeoff");
takeOff.addEventListener("click", function() {
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.background = "#0a70cf";
            document.getElementById("spaceShuttleHeight").innerHTML = "1000"
        }
    });

    const landing = document.getElementById("landing");
        landing.addEventListener("click", function() {
            let alert = window.alert("Confirm the shuttle is landing. Landing gear engaged.");
                document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
                document.getElementById("shuttleBackground").style.background = "green";
                document.getElementById("spaceShuttleHeight").innerHTML = "0";
     });

     const mission = document.getElementById("missionAbort");
    mission.addEventListener("click", function() {
        let reply = window.confirm("Confirm that you want to abort the mission");
            if (reply) {
                document.getElementById("flightStatus").innerHTML = "Mission Aborted.";
                document.getElementById("shuttleBackground").style.background = "green";
                document.getElementById("spaceShuttleHeight").innerHTML = "0";  
            }
        });

        // STUCK HERE!
        
       const up = document.getElementById("up");
        up.addEventListener("click", function() {
            if(vertPosition > -10) vertPosition -= 10;
            rocketImage.style.top = `${vertPosition}px`;
            height += 10000;
            shuttleHeight.innerHTML = height;
        });

    
        const down = document.getElementById("down");
            down.addEventListener("click", function() {
                if(vertPosition < 250) vertPosition += 10;
                rocketImage.style.top = `${vertPosition}px`;
                height -= 10000;
                shuttleHeight.innerHTML = height;
            });

        const right = document.getElementById("right");
            right.addEventListener("click", function() {
                if(horiPosition > -160) horiPosition -= 10;
                rocketImage.style.left = `${horiPosition}px`;
            });

        const left = document.getElementById("left");
        left.addEventListener("click", function() {
            if(horiPosition < 160) horiPosition += 10;
            rocketImage.style.left = `${horiPosition}px`;
        });
});

//rocketImage.style.padding = "20px";
// rocketImage.style.padding = "auto";

