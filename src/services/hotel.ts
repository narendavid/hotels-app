import http from "../core/http"
import { Hotel } from "../types"

export const getHotelService = (id: string) => {
    return http.get(`/hotels/${id}?_embed=rooms`)
}

export const getHotelsService = () => {
    return http.get(`/hotels?_sort=enabled&_order=desc`)
}

export const getHotelsByNameService = (name: string) => {
    return http.get(`/hotels?name_like=${name.trim()}`)
}

export const createHotelService = (hotel: Hotel) => {
    return http.post('/hotels', hotel)
}

export const updateHotelService = (hotel: Hotel) => {
    return http.put(`/hotels/${hotel.id}`, { ...hotel })
}

export const deleteHotelService = (id: string) => {
    return http.delete(`/hotels/${id}`)
}