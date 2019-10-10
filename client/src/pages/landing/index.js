import React, { Component } from 'react';
import Navbar from '../../components/navbar';

class Landing extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="jumbotron">
                    <div className="container text-center">
                        <h1 className="display-3">Site Name</h1>
                        <a href="/signup" className="btn btn-primary">Sign up</a>
                    </div>
                </div>
            </>
        )
    }
}

export default Landing;