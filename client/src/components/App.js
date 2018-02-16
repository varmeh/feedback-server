import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchUser } from '../redux/actions'

import Header from './Header'
const Dashboard = () => <h2>Dashboard</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route path="/surveys" component={Dashboard} />
                </div>
            </Router>
        )
    }
}

export default connect(null, { fetchUser })(App)
