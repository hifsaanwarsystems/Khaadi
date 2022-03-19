/// <reference types="cypress"/>
const getvalue=require('../fixtures/row.json')


export class row{
halfimage(url)
{
    cy.get('.half-content-img').eq(0).should('be.visible').should('have.descendants','a').should('have.css','position','relative').should('have.css','padding','0px').click()
    cy.url().should('equal',url)
    cy.go('back')


}

 firstrow()
 {   cy.get('.half-content').eq(0).should('be.visible').should('have.css','position','relative').and('have.css','text-align','left')
    cy.get('.fullwidth-filter-title').eq(0).should('have.text','Fabrics').should('have.css','text-transform','capitalize').should('have.css','font-family','Arial, "Helvetica Neue", Helvetica, sans-serif').should('have.css','font-size','24px').should('have.css','font-weight','400').should('have.css','margin','0px 0px 30px')
    cy.get('.products-grid   ').eq(0).should('be.visible').should('have.css','display','flex').should('have.css','flex-flow','row wrap')
    cy.get('.filterproducts.products').eq(0).should('be.visible').should('have.css','display','flex').should('have.css','flex-flow','row wrap')
    cy.get('.owl-stage-outer').eq(1).should('be.visible').should('have.css','position','relative').should('have.css','overflow','hidden')
    cy.get('.owl-stage').eq(1).should('be.visible')



    cy.get('.owl-item').eq(13).should('be.visible').should('have.css','transition','all 1s ease 0s')
    cy.get('.product-item').eq(0).should('be.visible')
    cy.get('.product-item-info').eq(0).should('be.visible').should('have.attr','data-container','product-grid').should('have.css','flex-grow','1').should('have.css','display','flex').should('have.css','flex-flow','column wrap').should('have.css','padding','0px 4px')
    cy.get('.product-item-photo').eq(0).should('be.visible').should('have.css','background-color','rgba(0, 0, 0, 0)').should('have.css','display','flex').should('have.descendants','a')
    cy.get('.product-item-photo > a').eq(0).should('have.descendants','img').invoke('removeAttr', 'target').click({force:true})
    //cy.url().should('include','https://pk.khaadi.com/')
    //cy.url().should('contain.text')
    cy.contains('Rs').should('exist')
    cy.go('back')
    cy.get('.product-image-photo').eq(0).should('be.visible').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
    cy.get('.product-image-photo').eq(0).realHover('mouse').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
 
    cy.get('.product-item-actions').eq(0).should('be.visible').should('have.css','text-align','right')
    cy.get('.actions-primary').eq(0).should('be.visible')
    cy.get('.action.tocart.primary').eq(0).should('be.visible').click({force:true})
    cy.wait(9000)
    cy.get('.porto-custom-add-to-cart-dialog').should('be.visible')
    cy.get('.add-to-cart-popup > .modal-inner-wrap > .modal-header > .action-close').click({force:true})
    cy.get('.counter-number').should('have.text','1')
 
    cy.get('.owl-item').eq(14).should('be.visible').should('have.css','transition','all 1s ease 0s')
    cy.get('.product-item').eq(1).should('be.visible')
    cy.get('.product-item-info').eq(1).should('be.visible').should('have.attr','data-container','product-grid').should('have.css','flex-grow','1').should('have.css','display','flex').should('have.css','flex-flow','column wrap').should('have.css','padding','0px 4px')
    cy.get('.product-item-photo').eq(1).should('be.visible').should('have.css','background-color','rgba(0, 0, 0, 0)').should('have.css','display','flex').should('have.descendants','a')
    cy.get('.product-item-photo > a').eq(1).should('have.descendants','img').invoke('removeAttr', 'target').click({force:true})
    //cy.url().should('include','https://pk.khaadi.com/')
    //cy.url().should('contain.text')
    cy.contains('Rs').should('exist')
    cy.go('back')
    //cy.get('.product-image-photo').eq(1).should('be.visible').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
    //cy.get('.product-image-photo').eq(1).realHover('mouse').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
 
    cy.get('.product-item-actions').eq(1).should('be.visible').should('have.css','text-align','right')
    cy.get('.actions-primary').eq(1).should('be.visible')
    cy.get('.action.tocart.primary').eq(1).should('be.visible')
    /*.click({force:true})
    cy.get('.porto-custom-add-to-cart-dialog').should('be.visible')
    cy.get('.add-to-cart-popup > .modal-inner-wrap > .modal-header > .action-close').click({force:true})
    cy.get('.counter-number').should('have.text','2')
    cy.get('.name > .product-item-link').should('contain.text')
    cy.get('.description').should('contain.text')
   cy.get('.price-box').should('contain.text')*/
}




}