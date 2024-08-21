import { Room } from '../../types'
import Toggle from '../inputs/Toggle'

interface Props {
    rooms: Room[]
    toggleRoomStatus: (room: Room) => Promise<void>
    goToDetails: (id: string) => void
    deleteRoom: (id: string) => Promise<void>
}

const RoomTable = ({ rooms, goToDetails, toggleRoomStatus, deleteRoom }: Props) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Capacidad</th>
                        <th>Tipo</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rooms.map((room) => (
                            <tr key={room.id}>
                                <td className='cursor-pointer' onClick={() => goToDetails(room.id || '')}>
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://static.hosteltur.com/app/public/uploads/img/articles/2013/09/01/S_5b14ea6fb7f86_shutterstock_HOTEL.jpg"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className='cursor-pointer' onClick={() => goToDetails(room.id || '')}>
                                    <p className='font-bold'>{room.name}</p>
                                </td>
                                <td>
                                    {room.price}
                                </td>
                                <td>
                                    {room.roomCapacity}
                                </td>
                                <td>
                                    {room.type}
                                </td>
                                <td>
                                    <Toggle
                                        onChange={() => toggleRoomStatus({ ...room, enabled: !room.enabled })}
                                        enabled={room.enabled}
                                    />
                                </td>
                                <td>
                                    <button
                                        onClick={() => deleteRoom(room.id || "")}
                                        className="btn btn-neutral btn-sm">
                                        <span className="material-symbols-outlined">
                                            delete
                                        </span>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default RoomTable