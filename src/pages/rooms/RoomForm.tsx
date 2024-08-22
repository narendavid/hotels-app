import React, { useState } from 'react'
import Input from '../../components/inputs/Input'
import { Room } from '../../types'
import { createRoomService } from '../../services/room'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../components/headers/Header'

const FormRoom = () => {

    const { hotelId } = useParams()
    const navigator = useNavigate()
    const [room, setRoom] = useState<Room>({
        name: "",
        description: "",
        type: "single",
        enabled: true,
        hotelId: hotelId || '',
        price: "",
        roomCapacity: "",
        tax: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoom((prevValue) => ({
            ...prevValue,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await createRoomService(room)
            navigator(`/hotels/${hotelId}`)
        } catch (error) {
            alert(error)
            console.error(error)
        }
    }

    return (
        <div>
            <Header title='Crear habitacion' />
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 mx-auto">
                <Input
                    name="name"
                    onChange={handleChange}
                    value={room.name}
                    placeholder="Nombre"
                />
                <Input
                    name="description"
                    onChange={handleChange}
                    value={room.description}
                    placeholder="Descripción"
                />
                <Input
                    name="price"
                    onChange={handleChange}
                    value={room.price}
                    placeholder="Precio"
                />
                <Input
                    name="tax"
                    onChange={handleChange}
                    value={room.tax}
                    placeholder="Impuestos"
                />
                <Input
                    name="roomCapacity"
                    onChange={handleChange}
                    value={room.roomCapacity}
                    placeholder="Capacidad"
                />
                <button type="submit" className="btn btn-sm btn-neutral">Crear</button>
            </form>
        </div>
    )
}

export default FormRoom