
/// <reference types="cypress"/>
//import { Header } from './Header'
//const header= new Header()

describe('Testing header',function(){

it.only('Visitsite()',function(){
    cy.visit("https://pk.khaadi.com/")
})

it('logoCheck()',function(){

    cy.get('.logo > img').should('exist')
    .should('have.css','width',"104px").should('have.css','height',"28px")
})

it('CheckPlp()',function(){
//cy.xpath("(//nav[@class='navigation'])//li[@class='ui-menu-item'])")
//cy.xpath("(//*[@id="store.menu"]/nav/ul/li[1]/a/span)")

cy.contains("li.ui-menu-item","LAWN 2022").click()
cy.contains("li.ui-menu-item","Best Sellers").click()
cy.contains("li.ui-menu-item","New In").click()
cy.contains("li.ui-menu-item","Fabrics").click({ force: true })
cy.contains("li.ui-menu-item","Ready To Wear").click({ force: true })
cy.contains("li.ui-menu-item","Accessories").click({ force: true })
cy.contains("li.ui-menu-item","Beauty").click({ force: true })
cy.contains("li.ui-menu-item","Home").click({ force: true })
cy.contains("li.ui-menu-item","Chapter 2").click({ force: true })


})

it('Trackphotobutton()',function(){
    cy.get('.icon-track-order > .porto-icon-shipping').click()
    
})

it('DiscoverProductsbutton()',function(){
    cy.get('#stye-search-button').click()
    cy.get('.sc-hKwDye').should('be.visible')
    
})

it('Searchbutton()',function(){
    cy.get('.porto-icon-search').click({ force: true })
    cy.wait(4050)
    cy.get('#search').should('be.visible').type('pants{enter}')
    cy.contains('Rs').should('exist')
})

it('accountbutton()',function(){
cy.get('.top-links-icon').click()
cy.get('.top-links-area > .header > .authorization-link > a').click({ force: true })
cy.go('back')
cy.get('.top-links-icon').click({ force: true })
cy.get('.top-links-area > .header > :nth-child(5)').click({ force: true })
cy.go('back')

})

it('Cartbutton()',function(){
cy.get('.showcart').click({ force: true })
cy.get('#ui-id-1').should('be.visible')

})
// it('Testing header',function(){

//     header.logoCheck()

//     header.Lawn2022()

//     header.bestSellers()

//     header.NewIn()

// })


    it.only('ShippingCharges()',function(){
        cy.get('[href="https://pk.khaadi.com/shipping-handling/"]').click()
        cy.contains('Rs').should('exist')




    
})
})
