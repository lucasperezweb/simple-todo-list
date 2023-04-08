import { useState } from 'react'
import './Task.css'

export const Task = ({children}) => {
    const [finished, setFinished] = useState(false)

    const handleClick = () => {
        setFinished(!finished)
    }

    const textStyle = {
        textDecoration: finished ? 'line-through': 'none'
    }

    const taskClassName = `task${finished ? '-isFinished': ''}`

    return (
        <div className={taskClassName} onClick={handleClick}>
            <span style={textStyle}>{children}</span>
        </div>
    )
}