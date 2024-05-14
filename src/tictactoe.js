import { useEffect, useState } from "react";

export default function TicTacToe() {
    const [player, setPlayer] = useState(false);
    let [checkturn, setcheckturn] = useState("Player 1");
    const [progress, setProgress] = useState(new Array(8));
    let [turn,SetTurn] = useState("X");
    const [wincolor,setWinColor] = useState(new Array(8));
    let [score,setScore] = useState(0)
    let [score2,setScore2] = useState(0)
    let [stop,setStop] = useState(false)
    let [winmessage,setWinMessage] =useState("")
    let [wrongmove,setwrongmove] =useState("")
    const tempwincolor = [...wincolor] 
    const change={backgroundColor:"green" }
    const changeback={ backgroundColor:"rgb(6, 74, 92)"}

    const changscore=()=>{ // if you have a problem with the spelling then fix it yourself
    if (turn==="X")
        {setScore(score+=1);}
    else 
        setScore2(score2+=1);}

    const changecolor=(count,count2,count3)=>{ 
           tempwincolor[count] = change;
           tempwincolor[count2] = change;
           tempwincolor[count3] = change;
           setWinColor(tempwincolor); 
        } 
    const Stop=()=>{setStop(true);
        PlayerChange();
        if (checkturn ==="Player 1")
        setWinMessage("Player 2 has won the round")
        if (checkturn ==="Player 2")
        setWinMessage("Player 1 has won the round")

    
    }

    const ShowWin=()=>{   //I know there is a better way of doing this but I ain't fixing that :) 
    
        if (progress[0] === turn && progress[1] === turn && progress[2] === turn) {
           changecolor(0,1,2); 
           changscore();
           Stop();
        }
        if (progress[0] === turn && progress[4] === turn && progress[8] === turn) {
           changecolor(0,4,8); 
           changscore();
           Stop();
        }
        if (progress[0] === turn && progress[3] === turn && progress[6] === turn) {
            changecolor(0,3,6); 
            changscore();
            Stop();
        }
        if (progress[3] === turn && progress[4] === turn && progress[5] === turn) {
            changecolor(3,4,5); 
           changscore();
           Stop();
        }
        if (progress[6] === turn && progress[7] === turn && progress[8] === turn) {
            changecolor(6,7,8); 
            changscore();
            Stop();
        }
        if (progress[1] === turn && progress[4] === turn && progress[7] === turn) {
            changecolor(1,4,7); 
            changscore();
            Stop();
        }
        if (progress[2] === turn && progress[5] === turn && progress[8] === turn) {
            changecolor(2,5,8); 
            changscore();
            Stop();
        }
        if (progress[2] === turn && progress[4] === turn && progress[6] === turn) {
            changecolor(2,4,6); 
            changscore();
            Stop();
        }
   
         
    }
    const Continue=()=> { //clears all variabls except score
        setPlayer(false)
        setcheckturn("Player 1")
        setProgress(progress.fill(null))
        SetTurn("X");
        setWinColor(wincolor.fill(changeback));
        setStop(false)
        setWinMessage("");
        setwrongmove("");
    }
    const Reset=()=> { //clears all varialbles
        Continue();
        setScore(0);
        setScore2(0);
    }
    const PlayerChange=(numbering)=>//updates to set and show who's turn it is
    {   if(stop){}
        else if (!player)
        {   
            SetTurn("X");
            setcheckturn("Player 2");
            addchange(numbering,"X");
        }
        else if (player)
        {
        SetTurn("O");
        setcheckturn("Player 1");
        addchange(numbering,"O");
        }
    }
    const addchange=(numbering,naming)=>
    {   const newProgress = [...progress];
        newProgress[numbering]=naming;
        
    if (progress[numbering]=== "X"|| progress[numbering] ==="O")  //prevents the other player from replacing oppenents move 
       { setwrongmove("You Can't do that");
       }
       else if (progress[numbering]!== "X"|| progress[numbering] !=="O"){ //writes onto the array of the tic tac toe board
       setProgress(newProgress);
       setPlayer(!player);
       
       
    }
        
    }
    useEffect(() => { 
        ShowWin();
      
          // Checks for win condition whenever the progress array is changed 
    }, [progress ]);
    return (
      <div id="layout">
      <h1>{"it's "+checkturn+"'s turn"}</h1> 
      <h1>{winmessage}</h1>

      <button style={wincolor[0]} className="BoardButton" onClick={() => PlayerChange(0)}>{progress[0]}</button>
      <button style={wincolor[1]} className="BoardButton" onClick={() => PlayerChange(1)}>{progress[1]}</button>
      <button style={wincolor[2]} className="BoardButton" onClick={() => PlayerChange(2)}>{progress[2]}</button><br/>

      <button style={wincolor[3]}  className="BoardButton" onClick={() => PlayerChange(3)}>{progress[3]}</button>
      <button style={wincolor[4]}  className="BoardButton" onClick={() => PlayerChange(4)}>{progress[4]}</button>
      <button style={wincolor[5]}  className="BoardButton" onClick={() => PlayerChange(5)}>{progress[5]}</button><br/>

      <button style={wincolor[6]}  className="BoardButton" onClick={() => PlayerChange(6)}>{progress[6]}</button>
      <button style={wincolor[7]}  className="BoardButton" onClick={() => PlayerChange(7)}>{progress[7]}</button>
      <button style={wincolor[8]}  className="BoardButton" onClick={() => PlayerChange(8)}>{progress[8]}</button>

      <div id="Score">
      <button id="Continue" title="Continue" onClick={()=>Continue()  }><img alt="Continue symbol"src={require('./right-arrow.png')}/></button><br/>
      <button id="Reset" title="Restart"onClick={()=>Reset()  }><img alt="Reset symbol"class ="what"src={require('./reloading.png')}/></button><br/>
        <h1>Player 1: {score}</h1>
        <h1>Player 2: {score2}</h1>

      </div>
      <h2>{wrongmove}</h2>
      <a id ="gitpage"href="https://github.com/TheAshTwoDash">
      <img alt = "Github Logo"src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"/><br/>
      my github</a>
      </div>
    );
  }