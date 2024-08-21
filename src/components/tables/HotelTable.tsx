import { Hotel } from '../../types'
import Toggle from '../inputs/Toggle'

interface Props {
    hotels: Hotel[]
    goToDetails: (id: string) => void
    toggleHotelStatus: (hotel: Hotel) => Promise<void>
    deleteHotel: (id: string) => Promise<void>
}

const HotelTable = ({ hotels, goToDetails, toggleHotelStatus, deleteHotel }: Props) => {

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Localización</th>
                        <th>Habilitar</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        hotels.map(({ id = "", name, location, enabled, email, phone, star }) => (
                            <tr key={id}>
                                <td className='cursor-pointer' onClick={() => goToDetails(id)}>
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://static.hosteltur.com/app/public/uploads/img/articles/2013/09/01/S_5b14ea6fb7f86_shutterstock_HOTEL.jpg"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td className='cursor-pointer' onClick={() => goToDetails(id)}>
                                    <p className='font-bold'>{name}</p>
                                </td>
                                <td>
                                    {location}
                                </td>
                                <td>
                                    <Toggle
                                        onChange={() => toggleHotelStatus({ id, name, location, enabled: !enabled, email, phone, star })}
                                        enabled={enabled}
                                    />
                                </td>
                                <td>
                                    <button
                                        onClick={() => deleteHotel(id)}
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

export default HotelTable