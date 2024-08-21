export interface Hotel {
    id?: string
    name: string
    location: string
    enabled: boolean
    phone?: string
    star?: number
    email?: string
    rooms?: Room[]
}

export interface Room {
    id?: string
    name: string
    description: string
    hotelId: string
    roomCapacity: number
    price: number
    tax: number
    enabled: boolean
}

export interface Reservation {
    id: string
    hotelId: string
    roomId: string
    guestName: string
    email: string
    checkIn: string
    checkOut: string
    guests: number
}
