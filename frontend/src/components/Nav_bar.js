import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom'
import { signOut } from '../services/Auth_service'

export default class Navbar extends Component {

    constructor(){
		super()
		this.state = {
			signOut: false
		}
	}

    render() {
        if(this.state.signOut){
			return <Redirect to='/login'/>
		}

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
                <Link className="navbar-brand" to="/">SERIES</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/series">Series</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/autores">Autores</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-danger my-2 my-sm-0" 
                    onClick={() => {
                        signOut()
                        this.setState({signOut: true})
                    }}
                    type="submit">
                        Sair
                    </button>
                    </form>
                </div>
            </nav>
        )
    }
}
