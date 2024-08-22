import { Room } from '../../types'

interface Props {
    room: Room
    goToRoom: (roomId: string) => void
}

const RoomCard = ({ room, goToRoom }: Props) => {

    const getIcon = (type: string) => {
        if (type === "suite") {
            return "king_bed"
        } else if (type === "double") {
            return "bed"
        }
        return "single_bed"
    }

    return (
        <div onClick={() => { goToRoom(room.id || "") }} className="card card-side bg-base-100 shadow-md">
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
                <div className='flex items-center gap-1'>
                    <span>Tipo:</span>
                    <span className='capitalize'>{room.type}</span>
                    <span className="material-symbols-outlined">
                        {getIcon(room.type)}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RoomCard