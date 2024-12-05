import React, { useState } from "react";

function Form() {
    const [name, setName] = useState('');

  
    return (
      <div style={{display:'flex',height:'500px',flexDirection:'column',alignItems:'center',justifyContent:'center',fontSize:'30px'}}>
        <input
          value={name}
          placeholder="Enter Your Name"
          style={{margin:'10px',fontSize:'30px',padding:'10px'}}
          onChange={e => setName(e.target.value)}
        />
        
        
        <p >Hello, {name}!</p>
      </div>
    );
  }

export default Form