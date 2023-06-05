import React, { useState, useEffect } from 'react'
import CreateTodoField from './CreateTodoField'
import TodoItem from './TodoItem'
import { data } from '../../data/data'
import { Logout } from '../pages/Logout'



const TodoList = (props) => {
	const [todos, setTodos] = useState(data)


	//localstorage
	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos'))
		if (storedTodos) {
			setTodos(storedTodos)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])
	//
	function changeTodo(id) {
		const copy = [...todos]
		const current = copy.find(t => t.id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}

	function editTodo(todo) {
		setTodos(todos.map((t) => {
			if (t.id === todo.id) {
				return todo
			} else {
				return t
			}
		}))
	}

	const removeTodo = id => {
		setTodos([...todos].filter(t => t.id !== id))
	}

	return (
		<>

			<div className='py-10 bg-zinc-900 text-white w-4/5 mx-auto'>
				<div className='flex place-content-between mb-10'>
					<div></div>
					<h1 className='text-2xl font-bold text-center'>Today</h1>
					<div className='flex items-center'>
						<Logout />
					</div>
				</div>
				<CreateTodoField setTodos={setTodos} />
				{todos.map(todo => (
					<TodoItem
						key={todo.id}
						todo={todo}
						changeTodo={changeTodo}
						removeTodo={removeTodo}
						editTodo={editTodo}
					/>
				))}
				<p className='text-gray-500 text-center mb-5'>© 2023 - Angie </p>
			</div>
		</>
	)
}

export default TodoList
