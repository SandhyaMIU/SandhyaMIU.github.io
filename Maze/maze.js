$(document).ready(function() {
    const startElement = "#start";
    const startWithS = "Click the \"S\" to start the Game.";
    const reachToE = "Game started! Navigate through the maze to reach \"E\"."
    const moveOutMsg = "You moved your mouse outside of the maze!";
    const status = "#status";
    const turnRedWall = "youlose";
    const bdryElement = ".boundary";
    const mazeElement = "#maze";
    const endElement = "#end";
    const win = "You win! :]";
    const lost = "Sorry, you lost! :[";
    
    let gameStarted = false;
    let hitBoundary = false;
    let outMazeflg = false;

    function onStartClick() {
        if (!gameStarted) {
            startGame();
        }
    }

    function onBoundaryEnter() {
        if (gameStarted) {
            if (!hitBoundary) {
                hitBoundary = true;
            }
            changeWall(turnRedWall);
        }
    }

    function onMazeEnd() {
        if (gameStarted) {
            finalResult();
            stopGame();
        }
    }

    function finalResult() {
        if (!hitBoundary) {
            showAlertMsg(win);
        } else {
            showAlertMsg(lost);
        }
    }

    function stopGame() {
        gameStarted = false;
        hitBoundary = false;
        outMazeflg = false;
        resetGame();
        setStatus(startWithS);
    }

    function resetGame() {
        $(bdryElement).removeClass(turnRedWall);
    }

    function startGame() {
        gameStarted = true;
        hitBoundary = false;
        outMazeflg = false;
        setStatus(reachToE);
    }

    function setStatus(sts) {
        $(status).text(sts);
    }

    function showAlertMsg(msg) {
        alert(msg);
    }

    function changeWall(wallColor) {
        $(bdryElement).addClass(wallColor);
    }

    function mazeOut() {
        if (gameStarted && !outMazeflg) {
            outMazeflg = true;
            if (!hitBoundary) {
                hitBoundary = true;
            }
            showAlertMsg(moveOutMsg);
            changeWall(turnRedWall);
        }
    }

    $(startElement).click(onStartClick);
    $(bdryElement).mouseover(onBoundaryEnter);
    $(endElement).mouseenter(onMazeEnd);
    $(mazeElement).mouseleave(mazeOut);

});