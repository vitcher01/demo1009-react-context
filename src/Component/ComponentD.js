import React, { Component } from 'react'
import { ComponentE } from './ComponentE';
import { CustomReactContextConsumer } from './reactContextProvider';

export class ComponentD extends Component {
    render() {
        return (
            <div>
                <h4>From Component D</h4>
                 
                {/*to consume a value we have to use Consumer tag and provide a function to consume the value
                given by the provider */}
                <CustomReactContextConsumer>
                    {
                        (contextValue)=>{
                            return  <React.Fragment>
                                        Hello from Child "D"    {contextValue?contextValue:"Context Value is Empty"}
                                    </React.Fragment>
                        }    
                    }
                </CustomReactContextConsumer>                              
                <ComponentE></ComponentE> 
            </div>
        )
    }
}
