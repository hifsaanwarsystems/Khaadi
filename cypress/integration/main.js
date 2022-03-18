/// <reference types="cypress"/>
const getvalue=require('../fixtures/data.json')
import {Ticker} from './Ticker'
import { Header } from './Header'
import { Banner } from './Banner'
import { row} from './row'
const ticker=new Ticker()
const header= new Header()
const banner=new Banner()
const Row=new row()
describe('Khaadi Home Page',function(){
    it('Visiting site ',function()
    { 
        cy.visit(getvalue.baseURL)
        
       
    })
 /* it('Testing Top Ticker',function(){
        ticker.tickerExist()
        ticker.tickerText()
        ticker.shopNow()
    })
it('Testing header',function(){
    header.logoCheck()
    header.Lawn2022()
    header.bestSellers()
    header.NewIn()

})


it('Testing banner',function()
{
banner.bannerImages()
banner.bannerDots()
banner.Secondscrollbanners()
})*/

it('Testing Rows',function()
{
Row.halfimage()
})

})