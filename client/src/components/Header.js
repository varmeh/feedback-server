import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
    renderContent() {
        switch(this.props.loggedIn) {
            case null:
                return  // Show nothing till we have confirmation, user loggedIn or not

            case false:
                return <li><a href='/auth/google'>Login With Google</a></li>

            default:    // User logged In
                return  <li><a href='/api/logout'>Logout</a></li>
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">Feedbck</a>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

// mapping auth state
const mapStateToProps = ({ auth: { loggedIn, user } }) => ({ loggedIn, user })

export default connect(mapStateToProps)(Header)
