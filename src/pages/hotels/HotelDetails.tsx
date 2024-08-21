import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getHotelService, updateHotelService } from '../../services/hotel'
import Toggle from '../../components/inputs/Toggle'
import { Details, Update } from '../../components/hotels'
import { Hotel } from '../../types'

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
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await updateHotelService(hotel)
            navigate('/hotels')
        } catch (error) {
            alert(error)
            console.error(error)
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHotel((prevValue) => ({
            ...prevValue,
            [event.target.name]: event.target.value
        }))
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
                        {
                            update ?
                                <Update
                                    hotel={hotel}
                                    onChange={handleChange}
                                    onSubmit={handleSubmit}
                                />
                                :
                                <Details
                                    hotel={hotel}
                                    goToCreateRoom={goToCreateRoom}
                                />
                        }
                    </div>
            }
        </div>
    )
}

export default HotelDetails