import React, {useState} from 'react'; 

function Toggle() {
    const [togg, setToggle] = useState(true);

    function changeFunc() {
       setToggle(() => !togg)
    }
    let content
    let tog = togg;
    if (tog = true) {
        content = "true"
    } else { content = false}
    return (
      
            <div className="toggle">
                <button onClick={ changeFunc } > {content} </button>
                <div>{togg && "content"}</div>      
            </div>
     
    );
  }
  
  export default Toggle;