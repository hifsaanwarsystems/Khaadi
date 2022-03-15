/// <reference types="cypress"/>
const getvalue=require('../fixtures/data.json')
import {Ticker} from './Ticker'

const ticker=new Ticker()
describe('Khaadi Home Page',function(){
    it('Visiting site ',function()
    { 
        cy.visit(getvalue.baseURL)
        
       
    })
    it('Testing Top Ticker',function(){
        ticker.tickerExist()
        ticker.tickerText()
        ticker.shopNow()
    })

    
})