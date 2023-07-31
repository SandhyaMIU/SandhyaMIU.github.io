(() => {
    window.onload = () => eventHandler();
    ("use strict");


    var eventHandler = () => {
        document.getElementById("start").onclick = startButtonHandler;
        document.getElementById("stop").onclick = stopButton;
        document.getElementById("text-area").onchange = stopButton;
        document.getElementById("size").onchange = sizeButton;
        document.getElementById("animation").onchange = animationChange;


    };

    var animationChange = () => {
        let targetElement = document.getElementById("text-area");
        let ele = document.getElementById("animation");
        targetElement.innerHTML = ANIMATIONS[ele.value];
    };

    var timeSpeed = 250;
    var stopButtonClick = false;
    var speedTubro = () => {
        timeSpeed = document.getElementById("turbo").checked ? 50 : 250;
    };

    var timer = null;
    var postion = 0;
    var startButtonHandler = () => {
        document.getElementById("stop").disabled = false;
        document.getElementById("start").disabled = true;
        document.getElementById("animation").disabled = true;
        if (stopButtonClick === true) {
            postion = 0;
            stopButtonClick = false;
        }
        var arrayFrame = document
            .getElementById("text-area").innerHTML.split("=====");

        timer = setInterval(frameTimerSelector, timeSpeed);

        function frameTimerSelector() {
            clearInterval(timer);
            postion++;
            if (postion >= arrayFrame.length) {
                postion = 0;
            }
            document.getElementById("text-area").innerHTML = arrayFrame[postion];
            speedTubro();
            timer = setInterval(frameTimerSelector, timeSpeed);
        }
    };

    var stopButton = () => {
   
        let targetElement = document.getElementById("text-area");
        let e = document.getElementById("animation");
        targetElement.innerHTML = ANIMATIONS[e.value];
        clearInterval(timer);
        document.getElementById("stop").disabled = true;
        document.getElementById("start").disabled = false;
        document.getElementById("animation").disabled = false;
        stopButtonClick = true;
    };

    var sizeList = {
        Tiny: "7pt",
        Small: "10pt",
        Medium: "12pt",
        Large: "16pt",
        ExtraLarge: "24pt",
        XXL: "32pt",
    };

    var sizeButton = () => {
        let size = document.getElementById("size");
        let displayedSize = document.getElementById("text-area");
        displayedSize.style.fontSize = sizeList[size.value];
    };
})();