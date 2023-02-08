import axios from 'axios';
import image from '../Images/Registration.jpg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../NavBar/NavBar';





const Create = () => {
    // const navigate = useNavigate();
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');


    const sendDataToAPI = () => {
        var token = sessionStorage.getItem("userToken");
        const employeeData =
        {
            "name": name,
            "position": position,
            "location": location,
            "salary": salary,
            "token": token

        }
        axios.post(`/api/Create`,
            employeeData
        ).then((response) => {

            if (response.data.status === "Unauthorised user") {
                alert("Login first");
                // navigate('/')
            }
            else {
                if (response.data.status === "success") {
                    alert("Employee added successfully");
                    // navigate('/home');
                }
                else {
                    alert("Something went wrong");
                }
            }

        })
    }


    return (
        <div>
            <Navbar />
            <section class="Background">

                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col ">
                            <div class="card card-form" >
                                <div class="row g-0">
                                    <div class="col-xl-6 d-none d-xl-block">
                                        <img className='logo ms-100 w-100 vh-100 img' src={image} alt="logo" />
                                    </div>
                                    <div class="col-xl-6">
                                        <form>
                                            <div class="card-body p-md-5 text-black">
                                                <div class="d-flex justify-content-center pt-3">
                                                    <h1 class="fw-Bolder mb-3 pb-3 headeing" >Employee Form</h1>
                                                </div>
                                                <br /><br />
                                                <div class="form-outline mb-2">

                                                    <input type="text" onChange={(e) => setName(e.target.value)} class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />

                                                </div>
                                                <br />
                                                <div class="form-outline mb-2">

                                                    <input type="text" onChange={(e) => setPosition(e.target.value)} class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Designation" />
                                                </div>
                                                <br />
                                                <div class="form-outline mb-2">

                                                    <input type="text" onChange={(e) => setLocation(e.target.value)} class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Location" />

                                                </div>
                                                <br />
                                                <div class="form-outline mb-2">

                                                    <input type="text" onChange={(e) => setSalary(e.target.value)} class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Salary" />
                                                </div>
                                                <br />
                                                <div class="d-flex justify-content-center pt-3">
                                                    <Link to='/home'>
                                                        <button type="button" className="btn btn-warning btn-lg">View List</button>
                                                    </Link>
                                                    <button onClick={sendDataToAPI} type="button" className="btn btn-success btn-lg ms-2">Add</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Create