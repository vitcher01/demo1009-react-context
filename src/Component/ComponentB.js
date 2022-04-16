import React, { Component } from 'react'
import { ComponentC } from './ComponentC';

export class ComponentB extends Component {
    render() {
        return (
            <div>
                <h2>From ComponentB</h2>
                <ComponentC></ComponentC>
            </div>
        )
    }
}