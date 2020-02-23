import React, {useState} from 'react';

function Follower(){
    var [coords, setCoords] = useState({x : 0, y : 0});
    document.onmousemove = function(e){
        var x = parseInt(e.clientX) + 10;
        setCoords({
            x : x,
            y : e.clientY
        });
    }
    return(
        <img src="/image/emoji.jpeg" alt="" style={{transform: `translate(${coords.x}px, ${coords.y}px)`,position: "fixed", top : "0", left:"0", zIndex: 100, width:"20px"}} />
        
    );
}


export default Follower