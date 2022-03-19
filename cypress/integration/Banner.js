/// <reference types="cypress"/>
const getvalue=require('../fixtures/banner.json')


export class Banner{


    bannerImages()
    {

        cy.log('**[ Banner classes ]()**')
        cy.xpath("//div[@class='owl-stage-outer']").should('exist')
        cy.xpath("//div[@class='owl-stage']").should('exist')
   cy.xpath(getvalue.owlitem).should('exist')
   cy.xpath(getvalue.owlitem).invoke('css','width').should('equal','1400px')
   cy.get('.item').eq(0).should('exist').should('have.css','background','rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box').should('have.descendants','a')
    
    
    
    
    }

    bannerDots()
    {
        cy.get('#banner-slider-demo-4 > .owl-controls > .owl-dots').should('be.visible')
    }

    Secondscrollbanners()
    {
        cy.get('.home-promo-imgs-main').should('exist').should('have.css','margin','4px').should('have.css','padding','0px')
        cy.get(getvalue.homepromoimages).eq(0).should('be.visible').should('have.css','padding','4px').and('have.css','height','350px').and('have.css','position','relative').and('have.css','overflow','hidden').should('have.descendants','a')
        cy.get(getvalue.imgLink).eq(0).should('be.visible').should('have.css','display','block').and('have.css','height','342px').and('have.css','overflow','hidden').and('have.css','position','relative').should('have.attr','href',getvalue.readytowear).click({force:true})
        cy.url().should('equal',getvalue.readytowear)
        cy.go('back')
        //cy.get('video').should('be.visible').and('have.css','height','342px').and('have.css','width','342px').should('have.attr','src',getvalue.videolink).should('have.attr','muted')
        //cy.get('.video').should('contain.html','loop')

        cy.get(getvalue.homepromoimages).eq(1).should('be.visible').should('have.css','padding','4px').and('have.css','height','350px').and('have.css','position','relative').and('have.css','overflow','hidden').should('have.descendants','a')
        cy.get(getvalue.imgLink).eq(1).should('be.visible').should('have.css','display','block').and('have.css','height','342px').and('have.css','overflow','hidden').and('have.css','position','relative').should('have.descendants','img').should('have.attr','href',getvalue.accesories).click({force:true})
        cy.url().should('equal',getvalue.accesories)
        cy.go('back')
        cy.get('.image-link > img').eq(0).should('be.visible').should('have.attr','src','https://pk.khaadi.com/media/wysiwyg/khaadi/19-03-2022/1-_Western_T-shirts_Placeholder.png')

        cy.get(getvalue.homepromoimages).eq(2).should('be.visible').should('have.css','padding','4px').and('have.css','height','350px').and('have.css','position','relative').and('have.css','overflow','hidden').should('have.descendants','a')
        cy.get(getvalue.imgLink).eq(2).should('be.visible').should('have.css','display','block').and('have.css','height','342px').and('have.css','overflow','hidden').and('have.css','position','relative').should('have.descendants','img').should('have.attr','href',getvalue.under2000).click({force:true})
        cy.url().should('equal',getvalue.under2000)
        cy.go('back')
        cy.get('.image-link > img').eq(1).should('be.visible').should('have.attr','src',getvalue.under2000img)

        cy.get(getvalue.homepromoimages).eq(3).should('be.visible').should('have.css','padding','4px').and('have.css','height','350px').and('have.css','position','relative').and('have.css','overflow','hidden').should('have.descendants','a')
        cy.get(getvalue.imgLink).eq(3).should('be.visible').should('have.css','display','block').and('have.css','height','342px').and('have.css','overflow','hidden').and('have.css','position','relative').should('have.descendants','img').should('have.attr','href',getvalue.readytoweartops).click({force:true})
        cy.url().should('equal',getvalue.readytoweartops)
        cy.go('back')
        cy.get('.image-link > img').eq(2).should('be.visible').should('have.attr','src',getvalue.readytoweartopsimg)
    }
}