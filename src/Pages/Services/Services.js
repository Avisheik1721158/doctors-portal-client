import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'


const Services = () => {
    return (
        <div>
            <h2 className='mt-12 text-2xl  text-secondary text-center font-bold'> OUR SERVICES </h2>
            <h2 className='mt-1 text-3xl text-accent text-center font-bold'> Services We Provide  </h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-3'>
                <div className="card w-96 bg-base-100 shadow-xl px-12 mt-4">
                    <figure><img src={fluoride} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title px-6">Fluoride Treatment</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl px-12 mt-4">
                    <figure><img src={cavity} /></figure>
                    <div className="card-body">
                        <h2 className="card-title px-6">Cavity Filling</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl px-12 mt-4">
                    <figure><img src={whitening} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title px-6">Teeth Whitening</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>

            </div>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-1/3' src={treatment} />
                    <div className='px-12'>
                        <h1 className="text-5xl font-bold">Exceptional Dental</h1>
                        <h1 className="text-5xl font-bold">Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;