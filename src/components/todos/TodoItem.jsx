import React from 'react'
import { useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { FiEdit3 } from 'react-icons/fi'
import { CiSaveDown2 } from 'react-icons/ci'
import Check from '../Items/Check'
import Button from '../Items/Button'

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    const [isEditing, setIsEditing] = useState('')
    const [editTitle, setEditTitle] = useState(todo.title)

    const taskContent = isEditing ? (
        <>
            <input
                className='bg-transparent w-full border-none outline-none'
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
            />
            <div className='flex'>
                <Button
                    onClick={() => setIsEditing(false)}
                    icon={
                        <CiSaveDown2
                            size={25}
                            className='text-pink-400 hover:text-red-700 transition-colors ease-in-out duration-300'
                        />
                    }
                />
                <Button
                    onClick={() => removeTodo(todo.id)}
                    icon={
                        <BsTrash
                            size={22}
                            className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300'
                        />
                    }
                />
            </div>
        </>
    ) : (
        <>
            {editTitle}
            <div className='flex'>
                <Button
                    onClick={() => setIsEditing(true)}
                    icon={
                        <FiEdit3
                            size={22}
                            className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300'
                        />
                    }
                />
                <Button
                    onClick={() => removeTodo(todo.id)}
                    icon={
                        <BsTrash
                            size={22}
                            className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300'
                        />
                    }
                />
            </div>
        </>
    )

    return (
        <div className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'>
            <button
                className='flex items-center'
                onClick={() => changeTodo(todo.id)}
            >
                <Check isCompleted={todo.isCompleted} />
            </button>
            {taskContent}
        </div>
    )
}

export default TodoItem
