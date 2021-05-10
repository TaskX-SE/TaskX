import React from "react";
import "./userdetails.css";
import './Time-Converter'
import getDateTime from "./Time-Converter";
import { Container, Row, Col } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton'
import LazyLoad from "react-lazyload";
import axios from "axios";

class UserDetails extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            displayname :'Harsh Mange',
            firstname :'Harsh',
            lastname :'Mange',
            image : 'https://lh3.googleusercontent.com/a-/AOh14GhPwbLbK5iifgOX8Wzx56bA9dQ7pMNukGSoV-y2=s96-c'
        }
    }

    // componentDidMount(){
    //     axios.get('http://localhost:5000/users/getCurrentUser')
    //        .then(response => {
    //            this.setState({displayname : response.user.displayname,
    //             firstname:response.user.firstname,
    //             lastname:response.user.lastname,
    //             image:response.user.image

    //            })
    //        })
    //        .catch(err =>{ console.log('error :'+err)});
    // }

    render() {
// function userDetails(){
        return (
            <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                    <div className="row m-l-0 m-r-0">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                                <div className="m-b-25"> <img src={this.state.image} class="img-radius" alt="User-Profile-Image" /> </div>
                                <h6 className="f-w-600">{this.state.displayname}</h6>
                                {/* <p>{this.state.firstname}</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i> */}
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-block">
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Firstname</p>
                                        <h6 className="text-muted f-w-400">{this.state.firstname}</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Lastname</p>
                                        <h6 className="text-muted f-w-400">{this.state.lastname}</h6>
                                    </div>
                                </div>
                                {/* <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Recent</p>
                                        <h6 class="text-muted f-w-400">Sam Disuja</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Most Viewed</p>
                                        <h6 class="text-muted f-w-400">Dinoter husainm</h6>
                                    </div>
                                </div> */}
                                {/* <ul class="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        )
    }
}



export default UserDetails;