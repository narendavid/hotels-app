import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Hotel } from './pages'
import { HotelDetails, HotelForm, HotelList } from './pages/hotels'
import { RoomDetails, RoomForm, RoomList } from './pages/rooms'
import { ReservationForm, ReservationList } from './pages/reservations'

const App = () => {
    return (
        <div className="max-w-screen-md mx-auto p-5 bg-gray-100">
            <BrowserRouter>
                <Routes>
                    <Route path='/hotels' element={<Hotel />} >
                        <Route path='/hotels' element={<HotelList />} />
                        <Route path='/hotels/new' element={<HotelForm />} />
                        <Route path='/hotels/:hotelId' element={<HotelDetails />} />
                        <Route path='/hotels/:hotelId/rooms' element={<RoomList />} />
                        <Route path='/hotels/:hotelId/rooms/new' element={<RoomForm />} />
                        <Route path='/hotels/:hotelId/rooms/:roomId' element={<RoomDetails />} />
                    </Route>
                    <Route path='/reservations' element={<ReservationList />} />
                    <Route path='/reservations/new' element={<ReservationForm />} />
                    <Route path='*' element={<Navigate to='/hotels' replace />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App