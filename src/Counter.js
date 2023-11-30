import {useState} from 'react';
// global variable 
let z=10;

function Counter(){
    // local variable 
    // let x=0;

    const [x,setx]=useState(0);
    const [y,sety]=useState(0);
    return(
    <>
   {/* Count:{x}
   <button onClick={()=>x+=1}>Inc</button>
   <button onClick={()=>x-=1}>dec</button> */}
Count z:{z}
<button onClick={()=>z+=1}>Inc</button>
<br/>
{/* conditional rendering  */}
Count X:{x} is {(x % 2 ==0)? 'Even':'odd'};
<button onClick={()=>setx(x+1)}>Inc</button>
<button onClick={()=>setx(x-1)}>dec</button>

<br></br>
Count Y:{y}
<button onClick={()=>sety(y+1)}>Inc</button>
<button onClick={()=>sety(y-1)}>dec</button>
    </>
)
}
export default Counter;