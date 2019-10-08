import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <>
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