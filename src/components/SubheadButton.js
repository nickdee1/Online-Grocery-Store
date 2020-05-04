import React from "react";

function SubheadButton({name}) {

    return(
      <div>
          <button style={{color: "#649d66", fontSize: "18px", fontWeight: "500", backgroundColor: "white", borderStyle: "none"}}>
              {name}</button>
      </div>
    );
}

export default SubheadButton;