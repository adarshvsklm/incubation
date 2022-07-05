import React from 'react'
import RecordList from '../../components/Admin/RecordList/RecordList'
import Sidebar from '../../components/Admin/Sidebar/Sidebar'

function RecordListPage() {
  return (
    <div className='row'>
      <div className=" ">
        <Sidebar />
      </div>
      <div className="  ms-4 ps-3 ">
        <RecordList />
      </div>
    </div>
  )
}

export default RecordListPage
