import { useNavigate } from "react-router-dom"

import { Hotel } from "../../types"

interface Props {
    hotel: Hotel
}

const HotelCard = ({ hotel }: Props) => {

    const navigate = useNavigate()

    const redirect = () => {
        navigate(`/hotels/${hotel.id}`)
    }

    return (
        <div onClick={redirect} className="card card-compact bg-base-100 w-64 shadow-xl hover:scale-110 ease-in-out transition cursor-pointer">
            <figure>
                <img
                    src="https://media-cdn.tripadvisor.com/media/photo-s/2c/01/58/59/hotel-exterior.jpg"
                    alt="Hotel" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{hotel.name}</h2>
            </div>
        </div>
    )
}

export default HotelCard