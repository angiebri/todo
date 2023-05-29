import React from 'react'

// мне кажется, что и icon нам не особо нужен - можно было бы смело перенести эту логику в саму Button
export const Icon = (props) => <div className='mr-1 ml-1'>
	{/* Если нужна обертка для всех svg с какими то общими стилями */}
	{props.children}
</div>