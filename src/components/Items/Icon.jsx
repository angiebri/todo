import React from 'react'

export const Icon = (props) => (
    <div className='mr-1 ml-1'>
        {/* Если нужна обертка для всех svg с какими то общими стилями */}
        {props.children}
    </div>
)
