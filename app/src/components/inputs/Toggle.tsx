import React from 'react'

interface Props {
    enabled: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
}
const Toggle = ({ onChange, enabled }: Props) => {
    return (
        <input onChange={onChange} type="checkbox" className="toggle" checked={enabled} />
    )
}

export default Toggle