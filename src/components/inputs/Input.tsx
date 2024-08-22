import React from 'react'

interface Props {
    name?: string
    type?: string
    value?: string | number | readonly string[]
    placeholder?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    icon?: string
    size?: 'xs' | 'sm' | 'md' | 'lg'
}

const Input = ({ name, onChange = () => { }, type = "text", value, placeholder, size = 'md', icon }: Props) => {
    return (
        <label className="input input-bordered flex items-center gap-2">
            {
                icon &&
                <span className="material-symbols-outlined">
                    {icon}
                </span>
            }
            <input
                onChange={onChange}
                value={value}
                type={type}
                name={name}
                className={`grow input-${size}`}
                placeholder={placeholder}
            />
        </label>
    )
}

export default Input