import React, { Component } from 'react'
import { CustomReactContextConsumer } from './reactContextProvider';

export class ComponentE extends Component {
    render() {
        return (
            <div>
                <h5>From Component E</h5>  
                 {/*to consume a value we have to use Consumer tag and provide a function to consume the value
                given by the provider */}
                <CustomReactContextConsumer>
                    {
                        (contextValue)=>{
                            return  <React.Fragment>
                                        Hello from Child "E"    {contextValue?contextValue:"Context Value is Empty"}
                                    </React.Fragment>
                        }    
                    }
                </CustomReactContextConsumer>              
            </div>
        )
    }
}
