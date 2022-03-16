/// <reference types="cypress"/>
const getvalue=require('../fixtures/banner.json')


export class Banner{


    bannerImages()
    {
        cy.xpath("//div[@class='owl-stage-outer']").should('exist')
        cy.xpath("//div[@class='owl-stage']").should('exist')
        //should('have.css','transform','matrix(1, 0, 0, 1, -5600, 0)').should('have.css','transition-property','all').should('have.css',' width', '15360px')
   cy.xpath("//div[@class='owl-item']").should('exist').should('have.css','width','1920px')
    
    
    
    
    
    }
}