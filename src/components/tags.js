import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import '../css/general.css';
import firebase from "../firebase";

class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: []
        };


    }

    render() {
        return (
            <h1>This is supposed to show with tag options</h1>
        );
    }

}

export default Tags;
