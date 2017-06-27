/**
 * Created by vikassaryal on 27/6/17.
 */
import React, { Component } from 'react';
import {FormGroup, Button, FormControl,ControlLabel, MenuItem, Form, Col,DropdownButton,Nav,NavItem} from 'react-bootstrap'
import './addServer.css'
import {Input , FieldSet} from 'react-bootstrap-form'
export default class AddServer extends Component{

    render(){
        return (
            <div>
                <h1>Add New Server</h1>
                <div className="addServerContainer">
                    <div className="form-group">
                        <label for="serverName">ServerName</label>
                        <input type="text" className="form-control" id="servername" placeholder="ServerName"/>
                    </div>
                    <div className="form-group">
                        <label for="serverType">ServerType</label>
                        <input type="text" className="form-control" id="serverType" placeholder="ServerType"/>
                    </div>
                    <div className="form-group">
                        <label for="application">Application</label>
                        <input type="text" className="form-control" id="application" placeholder="Application"/>
                    </div>
                    <div><button>Submit</button></div>
                </div>
            </div>
        )

    }
}