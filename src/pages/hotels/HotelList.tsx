import { useEffect, useState } from "react"
import { Hotel } from "../../types"
import { deleteHotelService, getHotelsByNameService, getHotelsService, updateHotelService } from "../../services/hotel"
import { Link, useNavigate } from "react-router-dom"
import HotelTable from "../../components/tables/HotelTable"


const HotelListPage = () => {

    const [hotels, setHotels] = useState<Hotel[]>([])
    const [search, setSearch] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        if (search.trim() === "") {
            getHotels()
            return
        }
        getHotelsByName()
    }, [search])

    const getHotels = async () => {
        try {
            const { data } = await getHotelsService()
            setHotels(data)
        } catch (error) {
            console.log(error)
        }
    }

    const getHotelsByName = async () => {
        try {
            const { data } = await getHotelsByNameService(search)
            setHotels(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
        getHotels()
    }

    const toggleHotelStatus = async (hotel: Hotel) => {
        try {
            await updateHotelService(hotel)
            getHotels()
        } catch (error) {
            console.log(error)
        }
    }

    const deleteHotel = async (id: string) => {
        try {
            await deleteHotelService(id)
            getHotels()
        } catch (error) {
            console.log(error)
        }
    }

    const goToDetails = (id: string = "") => {
        navigate(`/hotels/${id}`)
    }

    return (
        <div className="mx-auto">
            <h1 className="text-2xl text-center">Lista de hoteles</h1>
            <div className="flex justify-between my-5">
                <input
                    type="text"
                    value={search}
                    onChange={handleChange}
                    placeholder="Buscar"
                    className="input input-bordered input-sm"
                />
                <Link to="/hotels/new">
                    <button className="btn btn-sm btn-neutral">
                        <span className="material-symbols-outlined">
                            add
                        </span>
                        Crear hotel
                    </button>
                </Link>
            </div>
            <HotelTable
                hotels={hotels}
                goToDetails={goToDetails}
                toggleHotelStatus={toggleHotelStatus}
                deleteHotel={deleteHotel}
            />
        </div>
    )
}

export default HotelListPage