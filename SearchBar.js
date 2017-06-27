/**
 * Created by vikassaryal on 26/6/17.
 */
import React, { Component } from 'react';
import {Button, Panel,PanelGroup,Accordion, InputGroup, Checkbox} from 'react-bootstrap'
import {Typeahead} from 'react-bootstrap-typeahead'



export default class SearchBar extends Component{

    constructor(props){
        super(props)
        this.state = {
            submitFormOnEnter: true,
        }
    }
    render(){
        //const {multiple} = this.state;

        const multiple=[{
            serverName : "server1",
            serverType : "type1",
            application : "app1"
        },
            {
                serverName : "server2",
                serverType : "type2",
                application : "app2"
            },
            {
                serverName : "server3",
                serverType : "type3",
                application : "app3"
            }]

        const {submitFormOnEnter} = this.state;

        return (
            <form onSubmit={e => alert('Form submitted!')} className="searchContainer">
                <InputGroup>
                    <Typeahead
                        labelKey="name"
                        options={multiple.map((x)=>{
                            return x.serverName
                        })}
                        placeholder="Choose a state..."
                        submitFormOnEnter={submitFormOnEnter}
                    />
                    <InputGroup.Button>
                        <Button type="submit">Submit</Button>
                    </InputGroup.Button>
                </InputGroup>
            </form>
        )

    }
}