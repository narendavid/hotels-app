import { useState } from "react"
import Input from "../../components/inputs/Input"
import { createHotelService } from "../../services/hotel"
import { Hotel } from "../../types"
import { useNavigate } from "react-router-dom"
import Header from "../../components/headers/Header"

const HotelForm = () => {

    const navigate = useNavigate()

    const [hotel, setHotel] = useState<Hotel>({
        name: "",
        location: "",
        enabled: true,
        email: "",
        phone: "",
        star: 0
    })

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await createHotelService(hotel)
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
            <Header
                title="Crear hotel"
            />
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 mx-auto">
                <Input
                    name="name"
                    onChange={handleChange}
                    value={hotel.name}
                    placeholder="Nombre"
                />
                <Input
                    name="location"
                    onChange={handleChange}
                    value={hotel.location}
                    placeholder="Ubicación"
                />
                <Input
                    name="phone"
                    onChange={handleChange}
                    value={hotel.phone}
                    placeholder="Teléfono"
                />
                <Input
                    name="email"
                    onChange={handleChange}
                    value={hotel.email}
                    placeholder="Email"
                />
                <button type="submit" className="btn btn-sm btn-neutral">Crear</button>
            </form>
        </div>
    )
}

export default HotelForm