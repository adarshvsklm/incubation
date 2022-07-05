import React from 'react'
import BookingSlots from '../../components/Admin/BookingSlots/BookingSlots'
import Sidebar from '../../components/Admin/Sidebar/Sidebar'

function BookingSlotsPage() {
    return (
        <div className='row'>
            <div className=" ">
                <Sidebar />
            </div>
            <div className="  ms-4 ps-3 ">
                <BookingSlots />
            </div>
        </div>
    )
}

export default BookingSlotsPage
