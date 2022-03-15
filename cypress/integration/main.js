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
        cy.log('**[ Ticker Text and Css]()**')
        cy.xpath("//p[@class='ticker-text']").should('include.text',getvalue.tickerText).should('have.css','background-color',getvalue.tickerBackgroundColor).should('have.css','color',getvalue.tickerColor)

        cy.log('**[ Shop Now]()**')
        cy.get('.ticker-text > span > a').invoke('removeAttr', 'target').click({force:true})
        cy.url()
        .should('include.text','new-in.html')
    })

    
})