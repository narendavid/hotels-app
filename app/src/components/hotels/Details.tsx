import { useNavigate } from 'react-router-dom'
import { Hotel, Room } from '../../types'
import RoomTable from '../tables/RoomTable'
import { deleteRoomService, getRoomsService, updateRoomService } from '../../services/room'
import { useEffect, useState } from 'react'
import Update from './Update'
import { updateHotelService } from '../../services/hotel'

interface Props {
    hotel: Hotel
    goToCreateRoom: () => void
    update: boolean
    setUpdate: React.Dispatch<React.SetStateAction<boolean>>
}

const Details = ({ hotel: data, goToCreateRoom, update, setUpdate }: Props) => {

    const [rooms, setRooms] = useState<Room[]>([])
    const [hotel, setHotel] = useState<Hotel>({
        name: "",
        location: "",
        enabled: true,
        email: "",
        phone: "",
        star: 0
    })

    const navigate = useNavigate()

    useEffect(() => {
        setHotel(data)
        getRooms()
    }, [])

    const goToRoom = (roomId: string) => {
        navigate(`/hotels/${hotel.id}/rooms/${roomId}`)
    }

    const getRooms = async () => {
        try {
            const { data } = await getRoomsService(hotel.id || '')
            setRooms(data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteRoom = async (id: string) => {
        try {
            await deleteRoomService(id)
            getRooms()
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHotel((prevValue) => ({
            ...prevValue,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await updateHotelService(hotel)
            setUpdate(!update)
        } catch (error) {
            alert(error)
            console.error(error)
        }
    }

    const toggleRoomStatus = async (room: Room) => {
        try {
            await updateRoomService(room)
            getRooms()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className='flex gap-10 mb-10'>
                <div className='w-1/2'>
                    <img
                        src="https://static.hosteltur.com/app/public/uploads/img/articles/2013/09/01/S_5b14ea6fb7f86_shutterstock_HOTEL.jpg"
                        alt="Avatar Tailwind CSS Component"
                        className="rounded-lg w-full"
                    />
                </div>
                <div className='w-1/2'>
                    {
                        update ?
                            <Update
                                hotel={hotel}
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                            />
                            :
                            <div className='flex flex-col gap-5 leading-loose'>
                                <h1 className="text-2xl">{hotel?.name}</h1>
                                <p>Lugar: {hotel?.location}</p>
                                <p>Email: {hotel?.email}</p>
                                <p>Teléfono: {hotel?.phone}</p>
                                <p>Estrellas: {hotel?.star}</p>
                            </div>
                    }
                </div>
            </div>
            <div className='flex flex-col gap-7'>
                <div className='flex justify-end'>
                    <button onClick={goToCreateRoom} className="btn btn-sm btn-neutral">
                        <span className="material-symbols-outlined">
                            add
                        </span>
                        Crear habitación
                    </button>
                </div>
                <h1 className='text-2xl text-center'>Habitaciones</h1>
                {
                    rooms &&
                        rooms.length > 0 ?
                        <RoomTable
                            rooms={rooms}
                            deleteRoom={deleteRoom}
                            goToDetails={goToRoom}
                            toggleRoomStatus={toggleRoomStatus}
                        />
                        :
                        <div>
                            No hay habitaciones
                        </div>
                }
            </div>
        </div>
    )
}

export default Details