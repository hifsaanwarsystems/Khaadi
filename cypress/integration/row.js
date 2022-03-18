/// <reference types="cypress"/>
const getvalue=require('../fixtures/row.json')


export class row{
halfimage()
{
    cy.get('.half-content-img').eq(0).should('be.visible').should('have.descendants','a').should('have.css','position','relative').should('have.css','padding','0px').click()
    cy.url().should('equal',getvalue.unstitchedhalf)
    cy.go('back')

    cy.get('.half-content').eq(0).should('be.visible').should('have.css','position','relative').and('have.css','padding','30px 82.9688px').and('have.css','text-align','left')
    cy.get('.fullwidth-filter-title').eq(0).should('have.text','Fabrics').should('have.css','text-transform','capitalize').should('have.css','font-family','Arial, "Helvetica Neue", Helvetica, sans-serif').should('have.css','font-size','24px').should('have.css','font-weight','400').should('have.css','margin','0px 0px 30px')
    cy.get('.products-grid   ').eq(0).should('be.visible').should('have.css','display','flex').should('have.css','flex-flow','row wrap')
    cy.get('.filterproducts.products').eq(0).should('be.visible').should('have.css','display','flex').should('have.css','flex-flow','row wrap')
    cy.get('.owl-stage-outer').eq(1).should('be.visible').should('have.css','position','relative').should('have.css','overflow','hidden')
    cy.get('.owl-stage').eq(1).should('be.visible')

    cy.get('.owl-item').eq(8).should('be.visible').should('have.css','transition','all 1s ease 0s')
    cy.get('.product-item').eq(0).should('be.visible')
    cy.get('.product-item-info').eq(0).should('be.visible').should('have.attr','data-container','product-grid').should('have.css','flex-grow','1').should('have.css','display','flex').should('have.css','flex-flow','column wrap').should('have.css','padding','0px 4px')
    cy.get('.product-item-photo').eq(0).should('be.visible').should('have.css','background-color','rgba(0, 0, 0, 0)').should('have.css','display','flex').should('have.descendants','a')
    cy.get('.product-item-photo > a').eq(0).should('have.descendants','img').invoke('removeAttr', 'target').click({force:true})
    cy.url().should('include','https://pk.khaadi.com/a22136-yellow-a22136-yellow-pk.html')
    cy.contains('Rs').should('exist')
    cy.go('back')
    cy.get('.product-image-photo').eq(0).should('be.visible').should('have.attr','src','pg?width=300&height=&canvas=300:&quality=95&bg-color=255,255,255&fit=bounds').realHover('mouse').should('have.attr','src','https://pk.khaadi.com/media/catalog/product/a/2/a22136_yellow_1.jpg?width=300&height=&canvas=300:&quality=95&bg-color=255,255,255&fit=bounds')
 
    //cy.get('.product-item-actions').eq(0).should('be.visible').should('have.css','text-align','right')





}
}