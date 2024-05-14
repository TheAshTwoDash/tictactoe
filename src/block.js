export default function Block() {
    let [Player, setplayer] = useState(false)
    let [Player1, setplayer1] = useState("44"); 
    let [play,SetPlay] = useState([{id:0,name:"huh"}]);
    const PlayerChange=(numbering)=>
        {   
            
            setplayer(!Player);
            if (!Player)
            {   
                setplayer1("Player 1 Your turn");
                addchange(numbering,"X");
            }
            else
            {
            setplayer1("Player 2 Your turn");
            addchange(numbering,"O");
            }
            
           
        }
        
        const addchange=(numbering,naming)=>
        {
            SetPlay([...play, {id:numbering, name:naming}]);  
            
        }
    return (
      <div >
           
      <h1>{Player1}</h1> 
      
        <h1>{()=>showchange(0)}</h1>
      
      <ul></ul>
      <button onClick={()=>PlayerChange(0)}>{play[0].name}</button>
      </div>
    );
  }