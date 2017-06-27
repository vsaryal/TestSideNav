/**
 * Created by vikassaryal on 26/6/17.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {FormGroup, InputGroup, FormControl,Row, MenuItem, Tab, Col,DropdownButton,Nav,NavItem} from 'react-bootstrap'
import { BrowserRouter as Router, Route,Link} from 'react-router-dom'
import CreateRule from '../../pages/rules/CreateRule'
import AddServer from '../../pages/addServer/AddServer'
import DashBoard from '../../pages/dashboard/DashBoard'

export default class Navigation extends Component{
    constructor(props){
        super(props)
        this.state={
            hideDiv : true
        }
        this.handleDiv = this.handleDiv.bind(this)
    }

    // handleSelect(selectedKey) {
    //     // alert('selected ' + selectedKey);
    // }

    handleDiv(e) {
        this.setState({
            hideDiv: !this.state.hideDiv
        })
    }


    render(){

        const routes = [
            { path: '/',
                exact: true,
                // sidebar: () => <div>Rules</div>,
                main: () =><div className="test"> <CreateRule/></div>
            },
            { path: '/addServer',
                // sidebar: () => <div>bubblegum!</div>,
                main: () => <div className="test"><AddServer/></div>
            },
            { path: '/dashboard',
                // sidebar: () => <div>shoelaces!</div>,
                main: () => <div className="test"><DashBoard/></div>
            }
        ]

        return (
                <div>
                    <Router>
                        <div className="container">
                            <div className="main-content" onClick={this.handleDiv}>
                                <ul style={{ listStyleType: 'none', padding: 0 ,marginBottom:'2%'}}>
                                    <li className="containerList"><Link to="/">Rules</Link></li>
                                    <li className="containerList"><Link to="/addServer">AddServer</Link></li>
                                    <li className="containerList"><Link to="/dashboard">DashBoard</Link></li>
                                </ul>

                            </div>

                            <div className="hiddenDiv" hidden={this.state.hideDiv}>
                                {routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.main}
                                    />
                                ))}
                            </div>
                        </div>
                    </Router>
                </div>
        )

    }
}