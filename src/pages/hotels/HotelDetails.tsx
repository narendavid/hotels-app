import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getHotelService } from '../../services/hotel'
import Toggle from '../../components/inputs/Toggle'
import { Details } from '../../components/hotels'
import { Hotel } from '../../types'
import { isAxiosError } from 'axios'

const HotelDetails = () => {

    const { hotelId = "" } = useParams();
    const [update, setUpdate] = useState<boolean>(false)
    const [hotel, setHotel] = useState<Hotel>({
        id: "",
        name: "",
        location: "",
        enabled: true,
        email: "",
        phone: "",
        star: 0
    })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        getHotelDetail()
    }, [])

    const goToCreateRoom = () => {
        navigate(`/hotels/${hotelId}/rooms/new`)
    }

    const getHotelDetail = async () => {
        try {
            setLoading(true);
            const { data: hotel } = await getHotelService(hotelId)
            setHotel(hotel)
        } catch (error: unknown) {
            if (isAxiosError(error)) {
                if (error.response?.status === 404) {
                    navigate('/hotels');
                }
            } else {
                console.error('An unexpected error occurred:', error);
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="mx-auto">
            <div className="flex justify-between items-center pb-10">
                <Link to="/hotels">
                    <span className="material-symbols-outlined text-2xl hover:scale-125 transition">
                        keyboard_backspace
                    </span>
                </Link>
                <div className="flex gap-3">
                    <Toggle enabled={update} onChange={() => setUpdate(!update)} />
                    <p>Actualizar</p>
                </div>
            </div>
            {
                loading ?
                    <div>Loading...</div> :
                    <div>
                        <Details
                            hotel={hotel}
                            goToCreateRoom={goToCreateRoom}
                            update={update}
                            setUpdate={setUpdate}
                        />
                    </div>
            }
        </div>
    )
}

export default HotelDetails