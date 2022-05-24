import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const { data: doctors, isLoading } = useQuery('doctors', () =>
        fetch('http://localhost:5000/doctor', {
            headers: {

                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>
                Manage Doctors: {doctors.length}
                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Avatar</th>
                                <th>Job</th>
                                <th>Specialty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                doctors.map((doctor, index) =>
                                    <DoctorRow
                                        key={doctor._id}
                                        doctor={doctor}
                                        index={index}
                                    ></DoctorRow>)
                            }

                        </tbody>
                    </table>
                </div>
            </h2>
        </div>
    );
};

export default ManageDoctors;