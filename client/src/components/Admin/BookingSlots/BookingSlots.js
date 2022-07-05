import React, { useEffect, useState } from 'react'
import '../BookingSlots/BookingSlot.css'
import { Button, Modal } from 'react-bootstrap';


function BookingSlots() {

    let A, B, C, D, E

    let applicantId,slotId,slotSection

    const [sectionA, setSectionA] = useState([])
    const [sectionB, setSectionB] = useState([])
    const [sectionC, setSectionC] = useState([])
    const [sectionD, setSectionD] = useState([])
    const [sectionE, setSectionE] = useState([])

    const [applicantsList, setApplicantsList] = useState([])

    // modal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
   



    useEffect(() => {  
        displaySlots()
        applicants()
    })


    const applicants = async () => {
        const req = await fetch('http://localhost:9000/admin/applicants/list')
        const response = await req.json()
        setApplicantsList(response.data)
        // console.log(applicantsList);
    }



    const displaySlots = async () => {
        const req = await fetch('http://localhost:9000/admin/slots')
        const response = await req.json()
        const slots = response.data

        A = slots.filter((item) => {
            return (item.section === 'A')
        })
        setSectionA(A)


        B = slots.filter((item) => {
            return (item.section === 'B')
        })
        setSectionB(B)


        C = slots.filter((item) => {
            return (item.section === 'C')
        })
        setSectionC(C)


        D = slots.filter((item) => {
            return (item.section === 'D')
        })
        setSectionD(D)

        E = slots.filter((item) => {
            return (item.section === 'E')
        })
        setSectionE(E)




    }
    const handleShow = (slot_id,slot_section) => {
        slotId = slot_id
        slotSection=slot_section
        console.log(slot_id,slot_section)
 
        setShow(true);
    }



    const slotBooking =async(id)=>{
        applicantId=id
        console.log(applicantId,slotId,slotSection);
        const req = await fetch(`http://localhost:9000/slot/update?applicantId${applicantId}&slotId=${slotId}&slotSection=${slotSection}`)

    }

    return (
        <div>
            <div className="d-flex sectionA ms-lg-5 mx-auto">
                {sectionA &&
                    sectionA.map((item) => {

                        return (
                            <div className='slot' onClick={() => {
                                handleShow(item.slot,item.section)
                            }}></div>
                        )
                    })
                }
            </div>
            <div className="row ms-5">
                <div className="col-md-2 col-sm-6 ms-5   c  section">
                    {sectionB &&
                        sectionB.map((item) => {
                            return (
                                <div className="subSlot bg-secondary col-4" onClick={handleShow}></div>
                            )
                        })}
                </div>
                <div className="col-md-2 col-sm-6   section">
                    {sectionB &&
                        sectionC.map((item) => {
                            return (
                                <div className="subSlot col-4" onClick={handleShow}></div>
                            )
                        })}
                </div>
                <div className="col-md-2 col-sm-6   section">
                    {sectionB &&
                        sectionD.map((item) => {
                            return (
                                <div className="subSlot col-4" onClick={handleShow}></div>
                            )
                        })}
                </div>
                <div className="col-md-2 col-sm-6  section">
                    {sectionB &&
                        sectionE.map((item) => {
                            return (
                                <div onClick={handleShow} className="subSlot col-4"></div>
                            )
                        })}
                </div>
            </div>






            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Select a Company</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select class="form-select" aria-label="Default select example"  
                    onChange={(e)=>{
                        slotBooking(e.target.value)
                    }}
                    >

                        {applicantsList &&

                            applicantsList.map((item) => {
                                return (
                                    <option value={item._id}> {item.companyName}</option>


                                )
                            })



                        }
                    </select>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default BookingSlots
