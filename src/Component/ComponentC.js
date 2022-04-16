import React, { Component } from 'react'
import { ComponentD } from './ComponentD';
import { CustomReactContextConsumer } from './reactContextProvider';

export class ComponentC extends Component {
    render() {
        return (
            <div>
                <h3>From ComponentC</h3>
                
                {/*to consume a value we have to use Consumer tag and provide a function to consume the value
                given by the provider */}
                <CustomReactContextConsumer>
                    {
                        (contextValue)=>{
                            return  <React.Fragment>
                                        Hello from Child "C"    {contextValue?contextValue:"Context Value is Empty"}
                                    </React.Fragment>
                        }    
                    }
                </CustomReactContextConsumer>
                <ComponentD></ComponentD>
            </div>
        )
    }
}
