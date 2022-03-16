/// <reference types="cypress"/>
const getvalue=require('../fixtures/header.json')


export class Header{

    logoCheck()
    {
        cy.get('.logo > img').should('exist')
    }

    bestSellers()
    {
      // cy.get(':nth-child(2) > .level-top').trigger('mouseover')
  
      //cy.get('.ui-menu-item').eq(1).trigger('mouseover')
    //cy.contains('Best Sellers').trigger('mouseover','center')
    //  cy.xpath("//span[contains(.,'Best Sellers')]").trigger('pointerover','center').should('be.visible')
    cy.contains("li.ui-menu-item","Best Sellers").realHover('mouse')
    cy.xpath("(//div[@class='level0 submenu'])").should('be.visible')
    cy.xpath("(//div[@class='level0 submenu']//span[contains(.,'Fabrics')])[1]").should('be.visible')
    cy.xpath("(//div[@class='level0 submenu']//span[contains(.,'Ready To Wear')])[1]").should('be.visible')
        
    }

    NewIn()
    {
        cy.contains("li.ui-menu-item","New In").realHover('mouse')
        cy.xpath("(//div[@class='level0 submenu'])").should('be.visible').invoke('show')
       //cy.xpath("(//div[@class='level0 submenu']//span[contains(.,'Fabrics')])[1]").should('be.visible')
        //cy.xpath("(//div[@class='level0 submenu']//span[contains(.,'Ready To Wear')])[1]").should('be.visible')
        //cy.xpath("(//div[@class='level0 submenu']//span[contains(.,'Western')])[1]").should('be.visible')
    }

    fabrics()
    {

    }
    ReadytoWear()
    {

    }
    Accessories()
}