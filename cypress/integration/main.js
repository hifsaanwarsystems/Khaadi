/// <reference types="cypress"/>
const getvalue=require('../fixtures/data.json')
const temp=require('../fixtures/row.json')


import {Ticker} from './Ticker'
import { Header } from './Header'
import { Banner } from './Banner'
import { row} from './row'
import { footer } from './footer'
const ticker=new Ticker()
const header= new Header()
const banner=new Banner()
const Row=new row()
const Footer=new footer()
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
    //header.logoCheck()
   // header.Lawn2022()
    //header.bestSellers()
    //header.NewIn()
   // header.fabrics()

})

/*
it('Testing banner',function()
{
banner.bannerImages()
banner.bannerDots()
banner.Secondscrollbanners()
})
*/
it('Testing Rows',function()
{
Row.halfimage(temp.unstitchedhalf,0)
Row.firstrow()
Row.secondrow()
Row.halfimage(temp.readytowear,1)
Row.halfimage(temp.western,2)
Row.thirdrow()

})
/*
it('Testing Footer',function(){
    Footer.footertop()
    Footer.footertopinner()
    Footer.footermiddle()

})
*/
})