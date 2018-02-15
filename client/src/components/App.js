import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
const Dashboard = () => <h2>Dashboard</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {
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

export default App
