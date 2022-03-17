/// <reference types="cypress"/>
const getvalue=require('../fixtures/header.json')


export class Header{

    logoCheck()
    {
      cy.log('**[ Checking Logo ]()**')
      cy.get('.logo > img').should('exist').should('be.visible')
    }

    Lawn2022()
    {
      cy.log('**[ Hovering Over to Best Sellers Category ]()**')
      cy.contains("li.ui-menu-item",getvalue.Lawn2022).should('be.visible').click()
      cy.url().should('equal',getvalue.lawnlink)
      cy.go('back')

    }

    bestSellers()
    {
      cy.log('**[ Hovering Over to Best Sellers Category ]()**')
      cy.contains("li.ui-menu-item",getvalue.bestSellers).realHover('mouse')
      cy.xpath("(//div[@class='level0 submenu'])").should('be.visible').invoke('show')

      cy.log('**[ Image Check Fabrics ]()**')
      cy.get('.menu-thumb-img ').eq(0).should('have.descendants','a')
      cy.get('.menu-thumb-link').eq(0).should('have.attr','href',getvalue.bestSellersFabriclink).should('have.css','background').and('equal','rgba(0, 0, 0, 0) url("https://pk.khaadi.com/media/wysiwyg/khaadi/11-03-2022/Fabrics_Best_sellers_Thumbnail-2.jpg") no-repeat scroll 50% 0% / contain padding-box border-box')
    
    
      cy.log('**[ Span Check Fabrics ]()**')
      cy.xpath("(//div[@class='level0 submenu']//span[contains(.,'Fabrics')])[1]").should('be.visible').click({force:true})
      cy.url().should('equal',getvalue.bestSellersFabriclink)
      cy.go('back')

      cy.log('**[ Image Check Ready To Wear ]()**')
      cy.get('.menu-thumb-img ').eq(0).should('have.descendants','a')
      cy.get('.menu-thumb-link').eq(1).should('have.attr','href',getvalue.readytowearlink).should('have.css','background').and('equal','rgba(0, 0, 0, 0) url("https://pk.khaadi.com/media/wysiwyg/khaadi/11-03-2022/RTW_Best_sellers_Thumbnail.jpg-1.jpg") no-repeat scroll 50% 0% / contain padding-box border-box')
     
      cy.log('**[ Span Check Ready To Wear ]()**')
      cy.xpath("(//div[@class='level0 submenu']//span[contains(.,'Ready To Wear')])[1]").should('be.visible').click({force:true})
      cy.url().should('equal',getvalue.readytowearlink)  
      cy.go('back')
    }

    NewIn()
    {
      cy.log('**[ Hovering Over to New In Category ]()**')
      cy.contains("li.ui-menu-item",getvalue.newIn).realHover('mouse')
      cy.xpath("(//div[@class='level0 submenu'])").should('be.visible').invoke('show')

      cy.log('**[ Image Check Fabrics ]()**')
      cy.get('.menu-thumb-img ').eq(0).should('have.descendants','a')
      cy.get('.menu-thumb-link').eq(2).should('have.attr','href',getvalue.newInFabricsLink).should('have.css','background').and('equal','rgba(0, 0, 0, 0) url("https://pk.khaadi.com//media/catalog/category/Thumbnail-2_2_11.jpg") no-repeat scroll 50% 0% / contain padding-box border-box')

      cy.log('**[ Span Check Fabrics ]()**')
      cy.xpath("(//div[@class='level0 submenu']//span[contains(.,'Fabrics')])[2]").should('be.visible').click({force:true})
      cy.url().should('equal',getvalue.newInFabricsLink)
      cy.go('back')
   
    }

    fabrics()
    {

    }
    ReadytoWear()
    {

    }
    Accessories(){}
}