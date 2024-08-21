import { Hotel } from '../../types'
import RoomCard from '../cards/RoomCard'

interface Props {
    hotel: Hotel
    goToCreateRoom: () => void
}

const Details = ({ hotel, goToCreateRoom }: Props) => {
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
                    <h1 className="text-2xl text-center">{hotel.name}</h1>
                    <p>Lugar: {hotel.location}</p>
                    <p>Email: {hotel.email}</p>
                    <p>Teléfono: {hotel.phone}</p>
                    <p>Estrellas: {hotel.star}</p>
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
                <div className='flex flex-col gap-5'>
                    {
                        hotel.rooms &&
                            hotel.rooms.length > 0 ?
                            hotel.rooms.map((room) => (
                                <div className='cursor-pointer hover:scale-105 transition' key={room.id}>
                                    <RoomCard
                                        room={room}
                                    />
                                </div>
                            ))
                            :
                            <div>
                                No hay habitaciones
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Details