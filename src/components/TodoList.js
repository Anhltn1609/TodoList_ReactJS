import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {

    const [todos,setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            console.log('a')
            return ;
        }

        const newTodo = [todo, ...todos]

        setTodos(newTodo)
    }

    const updateTodo  = (todoId, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev => prev.map(item => (item.id == todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removerArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removerArr)
    }

    

    const completeTodo = id => {
        let updateTodos = todos.map(
            todo => {
                if(todo.id == id){
                    todo.iscomplete = !todo.iscomplete;
                }
                return todo;
            }
        )
        setTodos(updateTodos)
    }

    return (
        <div className='todo-app'>
            <h1> What's the Plan for Today?</h1>
            <TodoForm onSubmit = {addTodo}></TodoForm>
            <Todo
                todos = {todos}
                completeTodo = {completeTodo}
                removeTodo={removeTodo}
                updateTodo = {updateTodo}
            />
        </div>
    );
};

export default TodoList;