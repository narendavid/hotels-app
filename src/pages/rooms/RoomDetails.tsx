import { useParams } from "react-router-dom"
import { getRoomService, updateRoomService } from "../../services/room"
import { useEffect, useState } from "react"
import { Room } from "../../types"
import Input from "../../components/inputs/Input"
import Header from "../../components/headers/Header"

const RoomDetail = () => {

    const { roomId = "", hotelId = "" } = useParams()
    const [room, setRoom] = useState<Room>({
        name: "",
        description: "",
        type: "single",
        enabled: true,
        hotelId: hotelId,
        price: 0,
        roomCapacity: 0,
        tax: 0
    })

    useEffect(() => {
        getRoomDetails()
    }, [])

    const getRoomDetails = async () => {
        try {
            const { data } = await getRoomService(roomId)
            setRoom(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await updateRoomService(room)
            history.back()
        } catch (error) {
            alert(error)
            console.error(error)
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoom((prevValue) => ({
            ...prevValue,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <div>
            <Header
                title="Habitación"
            />
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
                    placeholder="Descripcion"
                />
                <Input
                    name="price"
                    onChange={handleChange}
                    value={room.price}
                    placeholder="Precio"
                />
                <Input
                    name="roomCapacity"
                    onChange={handleChange}
                    value={room.roomCapacity}
                    placeholder="Capacidad"
                />
                <Input
                    name="tax"
                    onChange={handleChange}
                    value={room.tax}
                    placeholder="Impuestos"
                />
                <button type="submit" className="btn btn-sm btn-neutral">Actualizar</button>
            </form>
        </div>
    )
}

export default RoomDetail