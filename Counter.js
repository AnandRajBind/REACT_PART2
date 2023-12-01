
// //Q1  counter app, hook and conditional rendering 
// import {useState} from 'react';
// // global variable 
// let z=10;

// function Counter(){
//     // local variable 
//     // let x=0;

//     const [x,setx]=useState(0);
//     const [y,sety]=useState(0);
//     return(
//     <>
//    {/* Count:{x}
//    <button onClick={()=>x+=1}>Inc</button>
//    <button onClick={()=>x-=1}>dec</button> */}
// Count z:{z}
// <button onClick={()=>z+=1}>Inc</button>
// <br/>
// {/* conditional rendering  */}
// Count X:{x} is {(x % 2 ==0)? 'Even':'odd'};
// <button onClick={()=>setx(x+1)}>Inc</button>
// <button onClick={()=>setx(x-1)}>dec</button>

// <br></br>
// Count Y:{y}
// <button onClick={()=>sety(y+1)}>Inc</button>
// <button onClick={()=>sety(y-1)}>dec</button>
//     </>
// )
// }
// export default Counter;

//Q.2 conditional rendering and list 


//  import {useState} from 'react'; // usestate hook 
// function Counter(){
//      const [x,setx]=useState(0);

//     return(
//     <>
//   {/* conditional rendering  */}
// Count X:{x} is {(x % 2 ==0)? 'Even':'odd'};
// <button onClick={()=>setx(x+1)}>Inc</button>
// <button onClick={()=>setx(x-1)}>dec</button>
 
// </>
// )
// }
// export default Counter;

// Q 2.  todo  list using conditional rendering

// import {useState} from 'react';  
// function Counter(){
//  const [isEditing , setIsediting]=useState(false);
//     return(
//     <>
//     {
//         (isEditing)?<input/>: <p>Some todo </p>

//     }
//  <br></br>

//  <button onClick={()=>setIsediting(!isEditing)}>Click</button>
// </>
// )
// }
// export default Counter;

// Q.2 passing the array in  todo

import {useState} from 'react';  
function Counter(){
 const [todos, setTodos]=useState(['todo 1', 'todo 2']);
    return(
    <ul>
    {/* {
    //    {todos.map((todo)=><li>{todo}</li>)}

    } */}

{todos.map((todo) => (
       <li key={todo}>{todo}</li>
  ))}
  {/* override the array  */}
  <button onClick={()=> setTodos([1,2,3,4])}>Click </button>

  {/* add the another element in the existing array  */}
  <button onClick={()=> setTodos([...todos, 'another element add in the array '])}>Click </button>

 </ul>
)
}
export default Counter;
 