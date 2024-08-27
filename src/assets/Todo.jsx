
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../Store/slice/TodoSlice';

function Todo() {
    const Todos = useSelector(state => state.Todos.Todo);
    console.log(Todos);

    const dispatch = useDispatch();
    const [todos, setTodos] = useState("");
    const [isEditing, setIsEditing] = useState(null); // Track the index of the todo being edited
    const [currentTodo, setCurrentTodo] = useState(""); // Track the current value of the todo being edited

    const handletodo = () => {
        dispatch(addTodo(todos));
        setTodos("");
    };

    const handledelete = (index) => {
        dispatch(deleteTodo(index));
    };

    const handleEdit = (index, item) => {
        setIsEditing(index);
        setCurrentTodo(item);
    };

    const handleUpdate = (index) => {
        dispatch(updateTodo({
            index,
            newValue: currentTodo
        }));
        setIsEditing(null);
        setCurrentTodo("");
    };

    return (
        <div className='input-container'>
            <h1 className='hedding'>ToDo App</h1>
            <input
                className="aria"
                type='text'
                placeholder='Enter text'
                value={todos}
                onChange={(e) => setTodos(e.target.value)}
            />
            <button className='addbtn' onClick={handletodo}>Add task</button>
            <div className='list-task'>
                <ul className='UL'>
                    {Todos.map((item, index) => (
                        <li key={index} className='LI'>
                            <div className='task'>
                                {isEditing === index ? (
                                    <input
                                        className='editeditem'
                                        type='text'
                                        value={currentTodo}
                                        onChange={(e) => setCurrentTodo(e.target.value)}
                                    />
                                ) : (
                                    <h4 className='item'>{item}</h4>
                                )}
                                <button className='BTN' onClick={() => handledelete(index)}>Delete</button>
                                {isEditing === index ? (
                                    <button className='BTN2' onClick={() => handleUpdate(index)}>Save</button>
                                ) : (
                                    <button className='BTN2' onClick={() => handleEdit(index,item)}>Edit</button>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;
