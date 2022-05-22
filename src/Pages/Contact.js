import React from 'react';
import appointment from '../assets/images/appointment.png'

const Contact = () => {
    return (
        <section className='mt-5' style={{
            background: `url(${appointment})`
        }}>
            <h2 className='pt-12 text-primary text-center'>Contact Us</h2>
            <div className='text-center mt-5'>

                <input type="text" placeholder="Email Address" className="input mt-5 input-bordered input-sm w-full max-w-xs" />
                <br />



                <input type="text" placeholder="Subject" className="input mt-5 input-bordered input-sm w-full max-w-xs" />
                <br />
                <textarea className="textarea mt-5" placeholder="Your Message"></textarea>
                <br />
                <button className="mt-5 btn btn-active btn-primary text-white mb-5">Submit</button>
            </div>

        </section>
    );
};

export default Contact;