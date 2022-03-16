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
      cy.contains("li.ui-menu-item","LAWN 2022").should('be.visible').click()
      cy.url().should('equal','https://pk.khaadi.com/lawn-collection.html')
      cy.go('back')

    }

    bestSellers()
    {
      cy.log('**[ Hovering Over to Best Sellers Category ]()**')
      cy.contains("li.ui-menu-item","Best Sellers").realHover('mouse')
      cy.xpath("(//div[@class='level0 submenu'])").should('be.visible').invoke('show')

      cy.log('**[ Image Check Fabrics ]()**')
      cy.get('.menu-thumb-img ').eq(0).should('have.descendants','a')
      cy.get('.menu-thumb-link').eq(0).should('have.attr','href','https://pk.khaadi.com/buy/unstitched-best-sellers.html').should('have.css','background').and('equal','rgba(0, 0, 0, 0) url("https://pk.khaadi.com/media/wysiwyg/khaadi/11-03-2022/Fabrics_Best_sellers_Thumbnail-2.jpg") no-repeat scroll 50% 0% / contain padding-box border-box')
    
    
      cy.log('**[ Span Check Fabrics ]()**')
      cy.xpath("(//div[@class='level0 submenu']//span[contains(.,'Fabrics')])[1]").should('be.visible').click({force:true})
      cy.url().should('equal','https://pk.khaadi.com/buy/unstitched-best-sellers.html')
      cy.go('back')

      cy.log('**[ Image Check Ready To Wear ]()**')
      cy.get('.menu-thumb-img ').eq(0).should('have.descendants','a')
      cy.get('.menu-thumb-link').eq(1).should('have.attr','href','https://pk.khaadi.com/buy/ready-to-wear-best-sellers.html').should('have.css','background').and('equal','rgba(0, 0, 0, 0) url("https://pk.khaadi.com/media/wysiwyg/khaadi/11-03-2022/RTW_Best_sellers_Thumbnail.jpg-1.jpg") no-repeat scroll 50% 0% / contain padding-box border-box')
     
      cy.log('**[ Span Check Ready To Wear ]()**')
      cy.xpath("(//div[@class='level0 submenu']//span[contains(.,'Ready To Wear')])[1]").should('be.visible').click({force:true})
      cy.url().should('equal','https://pk.khaadi.com/buy/ready-to-wear-best-sellers.html')  
      cy.go('back')
    }

    NewIn()
    {
      cy.contains("li.ui-menu-item","New In").realHover('mouse')
       
      cy.xpath("(//div[@class='level0 submenu'])").should('be.visible').invoke('show')
      cy.get('.menu-thumb-img ').eq(0).should('have.descendants','a')
      cy.get('.menu-thumb-link').eq(2).should('have.attr','href','https://pk.khaadi.com/new-in/unstitched.html').should('have.css','background').and('equal','rgba(0, 0, 0, 0) url("https://pk.khaadi.com//media/catalog/category/Thumbnail-2_2_11.jpg") no-repeat scroll 50% 0% / contain padding-box border-box')

      cy.xpath("(//div[@class='level0 submenu']//span[contains(.,'Fabrics')])[2]").should('be.visible').click({force:true})
      cy.url().should('equal','https://pk.khaadi.com/new-in/unstitched.html')
      cy.go('back')
      //cy.xpath("(//span[contains(.,'Fabrics')])[1]").should('be.visible')
//cy.xpath("(//div[@class='level0 submenu']//span[contains(.,'Ready To Wear')])[1]").should('be.visible')
        //cy.xpath("(//span[contains(.,'Western')])[1]").should('be.visible')
    }

    fabrics()
    {

    }
    ReadytoWear()
    {

    }
    Accessories(){}
}