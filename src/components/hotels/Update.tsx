import React from 'react'
import Input from '../inputs/Input'
import { Hotel } from '../../types'

interface Props {
    onSubmit: React.FormEventHandler<HTMLFormElement>
    onChange: React.ChangeEventHandler<HTMLInputElement>
    hotel: Hotel
}

const Update = ({ hotel, onChange, onSubmit }: Props) => {
    return (
        <div>
            <form onSubmit={onSubmit} className="flex flex-col gap-5 mx-auto">
                <Input
                    name="name"
                    onChange={onChange}
                    value={hotel.name}
                    placeholder="Nombre"
                />
                <Input
                    name="location"
                    onChange={onChange}
                    value={hotel.location}
                    placeholder="Ubicación"
                />
                <Input
                    name="phone"
                    onChange={onChange}
                    value={hotel.phone}
                    placeholder="Teléfono"
                />
                <Input
                    name="email"
                    onChange={onChange}
                    value={hotel.email}
                    placeholder="Email"
                />
                <button type="submit" className="btn btn-sm btn-neutral">Actualizar</button>
            </form>
        </div>
    )
}

export default Update