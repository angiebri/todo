import React from 'react'
import { Icon } from './Icon'

const Button = ({ text, onClick, isDisabled, className, icon }) => (
    <button className={className} onClick={onClick} disabled={isDisabled}>
        {Boolean(text) && <span>{text}</span>}
        {Boolean(icon) && <Icon>{icon}</Icon>}
    </button>
)

export default Button
