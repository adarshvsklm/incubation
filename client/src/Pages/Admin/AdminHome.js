import React from 'react'
import Sidebar from '../../components/Admin/Sidebar/Sidebar'
import Home from '../../components/Admin/Home/Home'

function AdminHomePage() {
    return (
        <div className='row'>
            <div className=" ">
            <Sidebar />
            </div>
           <div className="  ms-4 ps-3 ">
           <Home />
           </div>
        </div>
    )
}

export default AdminHomePage
