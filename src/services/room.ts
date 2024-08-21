import http from "../core/http"
import { Room } from "../types"

export const getRoomService = (hotelId: string) => {
    return http.get(`/rooms/${hotelId}`)
}

export const getRoomsService = (hotelId: string) => {
    return http.get(`/rooms?hotelId=${hotelId}`)
}

export const createRoomService = (data: Room) => {
    return http.post('/rooms', data)
}

export const updateRoomService = (hotelId: string) => {
    return http.put(`/rooms/${hotelId}`)
}

export const deleteRoomService = (id: string) => {
    return http.delete(`/rooms/${id}`)
}