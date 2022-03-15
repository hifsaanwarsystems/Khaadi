/// <reference types="cypress"/>
const getvalue=require('../fixtures/data.json')


export class Ticker{


tickerExist(){

cy.log('**[ Ticker Exists ]()**')
cy.get(getvalue.tickerClass).should('exist')
}


}