
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import './App.css';
// import { decrementCounter, fetchRecipe, incrementCounter, thunkCounter } from './redux/actions/counter.action';

// function App() {

//   let {counter} = useSelector(state => state)
//   let dispatch = useDispatch();
// console.log("Counter is",counter);

// let increaseCounter=()=>{
//   dispatch(incrementCounter())
// }

// let decreaseCounter=()=>{
//   dispatch(decrementCounter())
// }

// let resetCounter=()=>{
//   dispatch(thunkCounter())
// }

// let fetchData=()=>{
//   dispatch(fetchRecipe("chicken"));
// }


//   let [counter,setCounter] = useState(0);

//   let increaseCounter=()=>{
//     setCounter(counter++);
//   }

//   let decreaseCounter=()=>{
//     setCounter(counter--);
//   }

// let resetCounter=()=>{
//   setCounter(0);
// }

  // return (
//     <div className="App">
//       <button onClick={increaseCounter}>Increase Count</button>
//       <h1>{counter.counter}</h1>
//       <button onClick={decreaseCounter}>Decrease count</button><br></br>
//       <button onClick={resetCounter}>Reset Counter</button>
//     <button onClick={fetchData}>Fetch recipe</button>
//     <div>
//       {counter.recipe.map((meal)=>{
//         return(
//           <div>
//             <h1>{meal.strMeal}</h1>
//             <img src={meal.strMealThumb} style={{width:"300px", height:"300px"}}/>
//            <button onClick={meal.strYoutube}>Watch full video</button>
//             </div>
//         )
//       })}
//     </div>
//     </div>
//   );
// }

// export default App;

// import React from 'react'

// export default function App() {
//   let url = "https://mockend.com/irenecyriac/mock-backend/users";

//   let addUser = async ()=>{
//     let response = await fetch (url,{
//       method:"POST",
//       body:JSON.stringify(
//         {
//           id: 4,
//           name:"four",
//           age:23,
//         }
//       ),
//     headers:{
//       'Content-type':'application/json; charset=UTF-8',
//     },
    
//   })
  
//   let data = await response.json();
//   console.log(data);
// }
//   return (
//     <div>
//       <button onClick={addUser}>Add User</button>
//     </div>
//   )

// }

import React, { useEffect, useState } from 'react'

export default function App() {
  let url = "https://localhost:3000'todos";
  let [todos,setTodos] = useState([]);
  let [loading,setLoading] = useState(true);
  let [newTodo,setNewTodo] = useState("");
  
  let getAllTodos = async ()=>{
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    setTodos(data);
    setLoading(false);
  }


  let addTodo = async(event) =>{
    event.preventDefault();
    console.log("Adding new todo",newTodo)
    let todoToAdd = {
      "id":3,
      "name":newTodo
    }
    let response = await fetch (url,{
      method:"POST",
      body:JSON.stringify(todoToAdd),
      headers:{
        "Content-Type":"application/json"
      },
    })
  let data = await response.json();
  console.log(data)
  setNewTodo("");
  getAllTodos();
  }

  useEffect(()=>{
    getAllTodos();
  })

  return (
    <div>
      {loading?("Loading"):(
        todos.map((todo)=>{
          return(
            <Todo todo={todo} key={todo.id}/>
          )
        })
        
      )}
    </div>
  )
}



