import React from 'react'

export default function Contacts() {

    return (
        <>

            <div className="row mb-3">
                <div className="col-md-6">
                    <img src="/images/pic16.jpg" width="100%" height="450px" alt="" />
                </div>
                <div className="col-md-6 mb-3">
                    <h5 className='background text-center text-light p-2'>ContactUs</h5>
                    <div className="col-mb-3">
                        <form>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholde="fullname" className='form-control' />
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" placeholder="email" className='form-control' />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="Phone">PhoneNo</label>
                                    <input type="number" name="phone" id="phone" placeholder="phone" className='form-control' />
                                </div>
                                <div className=" mb-3">
                                    <label htmlFor="subject">Subject</label>
                                <input type="text" name="subject" id="subject" placeholder="subject" className='form-control'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message">message</label>
                                    <textarea name="message" id="message"  rows="3"placeholder="enter your message" className="form-control"></textarea>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className='btn background text-light w-100 btn-sm'>Submit</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
