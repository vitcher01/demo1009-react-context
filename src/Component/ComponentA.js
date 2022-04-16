import React, { Component } from 'react'
import { ComponentB } from './ComponentB';

export class ComponentA extends Component {
    render() {
        return (
            <div>
                <h1>From ComponentA</h1>
                <ComponentB></ComponentB>
            </div>
        )
    }
}
