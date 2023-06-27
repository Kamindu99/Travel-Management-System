import axios from 'axios';
import React, { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sub from './goldpack';

export default class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            View: []
        };
    }

    logout() {
        if (window.confirm("You Want To LogOut ")) {
            const dat = localStorage.removeItem("userInfo");
            if (dat == null) {
                alert("log  Out Success ");
                window.location.replace("/")
            }
        }
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentDidMount() {
        const userInfo = localStorage.getItem('userInfo');
        //alert (userInfo);
        if (userInfo == null) {
            alert("You Are Not Authorized User")
            window.location.replace("/register")
        }

        var line = [];

        for (var i = 7, p = 0; i !== 31; i++, p++) {

            line.push(userInfo[i]);

        }

        const mongoid = line.join('');
        const url = "https://travelmanagement.onrender.com/user/Details/";

        axios.get(url + mongoid).then(res => {

            if (res.data.success) {
                this.setState({
                    View: res.data.BackendData

                });
                // console.log(this.state.View);
            }
            else (
                console.log("cant")
            )

        })
    }

    render() {
        return (
            <div>
                <Header />
                <div style={{ marginTop: "100px" }}>
                    <Sub />

                    <div className="body1">
                        <div className="info">
                            <div style={{ marginLeft: 300 }}>
                                <button className="button12" onClick={this.logout} >Log out</button>
                            </div>


                            <form className="form12">
                                <h2> {this.state.View.Name}'s profile </h2>
                                <hr />
                                <input className="inputabc" id="Email" type="text" value={this.state.View.Name} />
                                <input className="inputabc" id="Name" type="text" value={this.state.View.Email} />
                                <input className="inputabc" id="Num" type="text" value={this.state.View.Num} />
                                <input className="inputabc" id="Password" type="Password" value={this.state.View.Password} />


                                <a className="btn btn-danger a123" href={"edit/" + this.state.View._id}>
                                    <i className="fas fa-edit"></i>&nbsp;Edit My Details
                                </a>

                            </form>

                        </div>
                    </div>

                    <Footer />

                </div>
            </div>

        )






    }
}