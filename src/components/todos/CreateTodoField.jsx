import React, { useState } from 'react'
import { MdAddBox } from 'react-icons/md'
import { v4 as uuidv4 } from 'uuid'
import Button from '../Items/Button'

const CreateTodoField = ({ setTodos }) => {
    //1
    const [title, setTitle] = useState('')
    //2
    const addTodo = (title) => {
        setTodos((prev) => [
            {
                id: uuidv4(),
                title,
                isCompleted: false,
            },
            ...prev,
        ])
        setTitle('') //очищает поле ввода
    }

    //поле ввода
    return (
        <div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full'>
            <input
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                onKeyUp={(e) => e.key === 'Enter' && addTodo(title)}
                className='bg-transparent w-full border-none outline-none'
                placeholder='Add a task'
            />
            <Button //5
                onClick={() => addTodo(title)}
                icon={
                    <MdAddBox
                        size={27}
                        className='text-pink-400 hover:text-grey-600 transition-colors ease-in-out duration-10000'
                    />
                }
            />
        </div>
    )
}

export default CreateTodoField
