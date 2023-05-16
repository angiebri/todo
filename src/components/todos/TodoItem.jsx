import React from 'react'
import cn from 'classnames'
import { BsTrash } from 'react-icons/bs'
import Check from '../Items/Check'
import Button from '../Items/Button'


const TodoItem = ({ todo, changeTodo, removeTodo }) => {
	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'>
			<button
				className='flex items-center'
				onClick={() => changeTodo(todo._id)}
			>
				<Check isCompleted={todo.isCompleted} />
				<span
					className={cn({
						'line-through': todo.isCompleted,
					})}
				>
					{todo.title}
				</span>
			</button>
			
			<Button onClick={() => removeTodo(todo._id)} icon={<BsTrash
					size={22}
					className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300'
				/>} />

		</div>
	)
}

export default TodoItem