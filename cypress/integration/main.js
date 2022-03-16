/// <reference types="cypress"/>
const getvalue=require('../fixtures/data.json')
import {Ticker} from './Ticker'
import { Header } from './Header'
import { Banner } from './Banner'
const ticker=new Ticker()
const header= new Header()
const banner=new Banner()
describe('Khaadi Home Page',function(){
    it('Visiting site ',function()
    { 
        cy.visit(getvalue.baseURL)
        
       
    })
  /*  it('Testing Top Ticker',function(){
        ticker.tickerExist()
        ticker.tickerText()
        ticker.shopNow()
    })*/
it('Testing header',function(){
header.bestSellers()
header.NewIn()
//cy.get("a[href='https://pk.khaadi.com/buy/best-sellers.html%27']").trigger('mouseover')
//cy.get("a[href='https://pk.khaadi.com/buy/best-sellers.html']").trigger("mouseover")
//cy.get("a[href='https://pk.khaadi.com/buy/ready-to-wear-best-sellers.html']").should('be.visible')

//cy.contains('Best Sellers').eq(0).hover()

//cy.contains("nav", "ui-menu-item'").realHover('mouse')
})


it('Testing banner',function()
{
//banner.bannerImages()
})
})