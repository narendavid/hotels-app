import { Room } from '../../types'

interface Props {
    room: Room
}

const RoomCard = ({ room }: Props) => {
    return (
        <div className="card card-side bg-base-100 shadow-md">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{room.name}</h2>
                <p>{room.description}</p>
                <p>Habitación {room.id}</p>
                <p>Precio: ${room.price}</p>
                <p>Capacidad: {room.roomCapacity}</p>
                <p>Tax: {room.tax}</p>
            </div>
        </div>
    )
}

export default RoomCard