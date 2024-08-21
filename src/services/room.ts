import http from "../core/http"
import { Room } from "../types"

export const getRoomService = (roomId: string) => {
    return http.get(`/rooms/${roomId}`)
}

export const getRoomsService = (hotelId: string) => {
    return http.get(`/rooms?hotelId=${hotelId}`)
}

export const createRoomService = (data: Room) => {
    return http.post('/rooms', data)
}

export const updateRoomService = (room: Room) => {
    return http.put(`/rooms/${room.id}`, { ...room })
}

export const deleteRoomService = (id: string) => {
    return http.delete(`/rooms/${id}`)
}