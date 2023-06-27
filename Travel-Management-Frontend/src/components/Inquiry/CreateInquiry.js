import axios from 'axios';
import React, { Component } from 'react';
import { Form } from "react-bootstrap";
import Footer from '../Footer';
import Header from '../Header';
import './inq.css';

export default class CreateInquiry extends Component {

    constructor(props) {
        super(props);

        this.state = {
            validated: false,
            name: "",
            nic: "",
            phone: "",
            email: "",
            inq: "",

        }

    }





    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: value

        })
    }

    onSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {

            e.preventDefault();
            e.stopPropagation();
        }


        else {


            e.preventDefault();







            const { name, nic, phone, email, inq } = this.state;

            const data = {
                name: name,
                nic: nic,
                phone: phone,
                email: email,
                inq: inq
            }



            console.log(data)

            axios.post("https://travelmanagement.onrender.com/inquiry/add", data).then((res) => {

                if (res.data.success) {
                    alert("You Have Successfully Created an Inquiry")

                    this.setState({
                        name: "",
                        nic: "",
                        phone: "",
                        email: "",
                        inq: ""
                    })

                }


            })

        }


        this.setState({ validated: true })



    }






    render() {


        return (
            <div >
                <Header />
                <div className="info">
                    <div className="vj" >

                        <div className="needs-validation12">

                            <Form noValidate validated={this.state.validated}>
                                <h1 className="nam"> Create New Inquiry</h1>
                                <hr />
                                <div>
                                    <div className="" style={{ marginBottom: '15px' }} >
                                        <label style={{ marginBottom: '5px' }}>Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            class="form-control"
                                            name="name"
                                            placeholder="Enter Your Name"
                                            value={this.state.name}
                                            onChange={this.handleInputChange}
                                            required="required" />
                                        <Form.Control.Feedback type="invalid">
                                            Please Enter Your Name
                                        </Form.Control.Feedback>

                                    </div>

                                </div>


                                <label style={{ marginBottom: '5px' }}>NIC</label>
                                <div className="" style={{ marginBottom: '15px' }} >

                                    <input
                                        type="text"
                                        id="nic"
                                        className="form-control"
                                        name="nic"
                                        placeholder="Enter Your NIC"
                                        value={this.state.nic}
                                        onChange={this.handleInputChange}
                                        required="required" />
                                    <Form.Control.Feedback type="invalid">
                                        Please Enter Your NIC
                                    </Form.Control.Feedback>

                                </div>

                                <label style={{ marginBottom: '5px' }}>Phone Number</label>
                                <div className="form-group" style={{ marginBottom: '15px' }}>

                                    <input
                                        type="text"
                                        id="phone"
                                        className="form-control"
                                        name="phone"
                                        placeholder="Enter Your Phone Number"
                                        value={this.state.phone}
                                        onChange={this.handleInputChange}
                                        required="required" />
                                    <Form.Control.Feedback type="invalid">
                                        Please Enter Your Phone Number
                                    </Form.Control.Feedback>

                                </div>


                                <label style={{ marginBottom: '5px' }}>Email</label>

                                <div className="form-group" style={{ marginBottom: '15px' }}>

                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        required="required" />
                                    <Form.Control.Feedback type="invalid">
                                        Please Enter Your Email
                                    </Form.Control.Feedback>

                                </div>

                                <label style={{ marginBottom: '5px' }}>Inquiry</label>
                                <div className="form-group" style={{ marginBottom: '15px' }}>

                                    <input
                                        type="text"
                                        id="inq"
                                        className="form-control"
                                        name="inq"
                                        placeholder="Enter Your Inquiry"
                                        value={this.state.inq}
                                        onChange={this.handleInputChange}
                                        required="required" />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide Card Holder Inquiry
                                    </Form.Control.Feedback>

                                </div>

                                <button className="btn btn-dark" type="submit" style={{ margintop: '15px' }} onClick={this.onSubmit}
                                    noValidate validated={this.state.validated}>
                                    <i className="fa fa-check-square"></i>
                                    &nbsp; Create Inquiry
                                </button>

                                &nbsp;

                                <a href={"/view"} > <button className="btn btn-dark" type="button" style={{ margintop: '15px' }} >
                                    <i className="fa fa-chevron-circle-right"></i>
                                    &nbsp; Previous Inquiries
                                </button>
                                </a>

                            </Form>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )

    }
}