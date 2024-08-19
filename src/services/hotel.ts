import http from "../core/http"
import { Hotel } from "../types"

export const getHotel = (id: string) => {
    return http.get(`/hotels/${id}`)
}

export const getHotels = () => {
    return http.get('/hotels')
}

export const createHotel = (data: Hotel) => {
    return http.post('/hotels', data)
}

export const updateHotel = (id: string) => {
    return http.put(`/hotels/${id}`)
}

export const deleteHotel = (id: string) => {
    return http.delete(`/hotels/${id}`)
}