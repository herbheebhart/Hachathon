# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh






import React from 'react'
import Drailling from './Drailling'

const Practice = ({todo, setTodo,itemList}) => {
    const Toggle = ()=>{
        setTodo(!todo)
    }
    const [{id,names,tasks,complextion,hobby,Tutor,course,duration}] = itemList
  return (
    <div>
      <h3>hello Habibah</h3>
      <h4>{name}</h4>
      <h2> my name is : {names}</h2>
      <h3>my hobby is : {hobby}</h3>
      <h4> my daily tasks is : {tasks}</h4>
      <h3>My tutor name is : {Tutor}</h3>
      <h4>i am taking a {course} course on techaton</h4>
      <h5>with a duration of {duration}</h5>
      <h4>i am {complextion} complextion</h4>
      <h6>That is all about me</h6>
      <button onClick={Toggle}>{todo ? "Toggle" : "null"}</button>

      <Drailling news={todo} get={setTodo}/>
    </div>
  )
}

export default Practice
