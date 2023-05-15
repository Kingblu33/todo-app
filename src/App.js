import './index.css'
import React, { useState } from 'react';
//Add
//Mark Item as completed
//
function App() {
    const [todos, setTodos] = useState([]);
    const [currentTodo, setCurrentTodo] = useState("");
    const [searchText, setSearchText] = useState("");
    const [filteredTodos, setFilteredTodos] = useState([]);

    const handleTodoChange = (e) => {
        setCurrentTodo(e.target.value);
    }

    const handleSubmit = () => {
        if (currentTodo) {
            const currentValue = {
                id: crypto.randomUUID(),
                task: currentTodo,
                isCompleted: false
            }
            setTodos([...todos, currentValue])
            setCurrentTodo("");
        }

    }

    const handleCompleted = (id) => {
        const newTodos = todos.map((todo) => {
            return (
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        })

        setTodos(newTodos);

    }

    const deleteTodo = (id) => {

        const filteredTodos = todos.filter((todo) => todo.id !== id);

        setTodos(filteredTodos);

    }

    const handleSearch = (e) => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);

        if (searchTextValue === "") {
            setFilteredTodos([]);
        } else {
            const filtered = todos.filter((todo) =>
                todo.task.toLowerCase().includes(searchTextValue.toLowerCase())
            );
            setFilteredTodos(filtered);
        }
    };


    return (
        <div>
            <div className="h-100 w-full flex items-center justify-center font-sans flex-col pb-4">
                <div className="pb-4">
                    <h1 className="text-7xl font-bold">
                        Todo List
                    </h1>
                </div>
                {/* Input  */}
                <div className="lg:w-1/2 flex flex-row">
                    <input onChange={(e) => { handleTodoChange(e) }} placeholder="Add a todo!" className="pr-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 " value={currentTodo} />
                    {/* submit todo button */}
                    <div className="pl-3">
                        <button onClick={handleSubmit} type="button"
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5" >Add Todo
                        </button>
                    </div>
                </div>

                <div className='lg:w-1/2 flex flex-row mt-2'>
                    {/* search input */}
                    <input onChange={(e) => { handleSearch(e) }} value={searchText} placeholder="Search Todo" className="pr-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 " />
                </div>
                <div className="pt-4">
                    {filteredTodos.length > 0
                        ? filteredTodos.map((todo) => (
                            <div key={todo.id}>
                                <div className="flex items-center justify-between mb-4">
                                    <p
                                        onClick={() => handleCompleted(todo.id)}
                                        className={`text-lg font-medium ${todo.isCompleted ? "line-through text-gray-500" : ""
                                            } cursor-pointer`}
                                    >
                                        {todo.task}
                                    </p>
                                    <button
                                        onClick={() => deleteTodo(todo.id)}
                                        className="focus:outline-none text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                        : todos.map((todo) => (
                            <div key={todo.id}>
                                <div className="flex items-center justify-between mb-4">
                                    <p
                                        onClick={() => handleCompleted(todo.id)}
                                        className={`text-lg font-medium ${todo.isCompleted ? "line-through text-gray-500" : ""
                                            } cursor-pointer`}
                                    >
                                        {todo.task}
                                    </p>
                                    <button
                                        onClick={() => deleteTodo(todo.id)}
                                        className="focus:outline-none text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>

            </div>
        </div >
    );
}

export default App;
