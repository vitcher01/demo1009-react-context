import React from 'react'

//Step1
const context =  React.createContext();

// context provides the Provider and consumer which help step2 and step3 respectively
const CustomReactContextProvider =  context.Provider
const CustomReactContextConsumer =  context.Consumer

// we are exporting them so that these can be used from any where in the program
export {CustomReactContextProvider,CustomReactContextConsumer}
