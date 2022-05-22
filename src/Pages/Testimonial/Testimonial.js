import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'

const Testimonial = () => {
    return (
        <div>
            <div className='flex justify-between '>
                <div>
                    <h1 className='mt-4 text-secondary text-2xl'>Testimonial</h1>
                    <h2 className='mt-2 text-neutral text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img style={{ width: 192, height: 156 }} className='mt-5 w-48 ' src={quote} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12'>
                <div className="card w-96 bg-base-100 shadow-xl px-12 mt-4">
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex'>
                        <figure><img style={{ width: 75, height: 75 }} className='rounded-full ring ring-primary' src={people1} alt="people1" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold px-1">Winson Herry</h2>
                            <h2 className="card-title font-normal px-1">California</h2>


                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl px-12 mt-4">
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex'>
                        <figure><img style={{ width: 75, height: 75 }} className='rounded-full ring ring-primary' src={people2} alt="people1" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold px-1">Winson Herry</h2>
                            <h2 className="card-title font-normal px-1">California</h2>


                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl px-12 mt-4">
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex'>
                        <figure><img style={{ width: 75, height: 75 }} className='rounded-full ring ring-primary' src={people3} alt="people1" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold px-1">Winson Herry</h2>
                            <h2 className="card-title font-normal px-1">California</h2>


                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Testimonial;