/// <reference types="cypress"/>
const getvalue=require('../fixtures/row.json')


export class row{
halfimage(url,eq)
{
    cy.get('.half-content-img').eq(eq).should('be.visible').should('have.descendants','a').should('have.css','position','relative').should('have.css','padding','0px').click()
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



    cy.get('.owl-item').eq(13).should('exist').should('have.css','transition','all 1s ease 0s')
    cy.get('.product-item').eq(0).should('exist')
    cy.get('.product-item-info').eq(0).should('exist').should('have.attr','data-container','product-grid').should('have.css','flex-grow','1').should('have.css','display','flex').should('have.css','flex-flow','column wrap').should('have.css','padding','0px 4px')
    cy.get('.product-item-photo').eq(0).should('exist').should('have.css','background-color','rgba(0, 0, 0, 0)').should('have.css','display','flex').should('have.descendants','a')
    cy.get('.product-item-photo > a').eq(0).should('have.descendants','img').invoke('removeAttr', 'target').click({force:true})
    //cy.url().should('include','https://pk.khaadi.com/')
    //cy.url().should('contain.text')
    cy.contains('Rs').should('exist')
    cy.go('back')
    cy.get('.product-image-photo').eq(1).should('exist').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
    cy.get('.product-image-photo').eq(2).realHover('mouse').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
 
    cy.get('.product-item-actions').eq(0).should('exist').should('have.css','text-align','right')
    cy.get('.actions-primary').eq(0).should('exist')
    cy.get('.action.tocart.primary').eq(0).should('exist')
    /*.click({force:true})
    cy.wait(9000)
    cy.get('.porto-custom-add-to-cart-dialog').should('be.visible')
    cy.get('.add-to-cart-popup > .modal-inner-wrap > .modal-header > .action-close').click({force:true})
    cy.get('.counter-number').should('have.text','1')*/
 


    cy.get('.owl-item').eq(14).should('exist').should('have.css','transition','all 1s ease 0s')
    cy.get('.product-item').eq(2).should('exist')
    cy.get('.product-item-info').eq(2).should('exist').should('have.attr','data-container','product-grid').should('have.css','flex-grow','1').should('have.css','display','flex').should('have.css','flex-flow','column wrap').should('have.css','padding','0px 4px')
    cy.get('.product-item-photo').eq(2).should('exist').should('have.css','background-color','rgba(0, 0, 0, 0)').should('have.css','display','flex').should('have.descendants','a')
    cy.get('.product-item-photo > a').eq(2).should('have.descendants','img').invoke('removeAttr', 'target').click({force:true})
    //cy.url().should('include','https://pk.khaadi.com/')
    //cy.url().should('contain.text')
    cy.contains('Rs').should('exist')
    cy.go('back')
    cy.get('.product-image-photo').eq(3).should('exist').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
    cy.get('.product-image-photo').eq(4).realHover('mouse').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
 
    cy.get('.product-item-actions').eq(3).should('exist').should('have.css','text-align','right')
    cy.get('.actions-primary').eq(3).should('exist')
    cy.get('.action.tocart.primary').eq(3).should('exist')


    cy.get('.owl-item').eq(15).should('exist').should('have.css','transition','all 1s ease 0s')
    cy.get('.product-item').eq(3).should('exist')
    cy.get('.product-item-info').eq(3).should('exist').should('have.attr','data-container','product-grid').should('have.css','flex-grow','1').should('have.css','display','flex').should('have.css','flex-flow','column wrap').should('have.css','padding','0px 4px')
    cy.get('.product-item-photo').eq(3).should('exist').should('have.css','background-color','rgba(0, 0, 0, 0)').should('have.css','display','flex').should('have.descendants','a')
    cy.get('.product-item-photo > a').eq(3).should('have.descendants','img').invoke('removeAttr', 'target').click({force:true})
    //cy.url().should('include','https://pk.khaadi.com/')
    //cy.url().should('contain.text')
    cy.contains('Rs').should('exist')
    cy.go('back')
    cy.get('.product-image-photo').eq(5).should('exist').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
    cy.get('.product-image-photo').eq(6).realHover('mouse').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
 
    cy.get('.product-item-actions').eq(3).should('exist').should('have.css','text-align','right')
    cy.get('.actions-primary').eq(3).should('exist')
    cy.get('.action.tocart.primary').eq(3).should('exist')


cy.get('.owl-item').eq(16).should('exist').should('have.css','transition','all 1s ease 0s')
    cy.get('.product-item').eq(4).should('exist')
    cy.get('.product-item-info').eq(4).should('exist').should('have.attr','data-container','product-grid').should('have.css','flex-grow','1').should('have.css','display','flex').should('have.css','flex-flow','column wrap').should('have.css','padding','0px 4px')
    cy.get('.product-item-photo').eq(4).should('exist').should('have.css','background-color','rgba(0, 0, 0, 0)').should('have.css','display','flex').should('have.descendants','a')
    cy.get('.product-item-photo > a').eq(4).should('have.descendants','img').invoke('removeAttr', 'target').click({force:true})
    //cy.url().should('include','https://pk.khaadi.com/')
    //cy.url().should('contain.text')
    cy.contains('Rs').should('exist')
    cy.go('back')
    //cy.get('.product-image-photo').eq(7).should('exist').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
    //cy.get('.product-image-photo').eq(8).realHover('mouse').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
 
    cy.get('.product-item-actions').eq(4).should('exist').should('have.css','text-align','right')
    cy.get('.actions-primary').eq(4).should('exist')
    cy.get('.action.tocart.primary').eq(4).should('exist')
    
}
secondrow()
{
    cy.get('.half-content').eq(1).should('be.visible').should('have.css','position','relative').and('have.css','text-align','left')
    cy.get('.fullwidth-filter-title').eq(1).should('have.text','Ready To Wear').should('have.css','text-transform','capitalize').should('have.css','font-family','Arial, "Helvetica Neue", Helvetica, sans-serif').should('have.css','font-size','24px').should('have.css','font-weight','400').should('have.css','margin','0px 0px 30px')
    cy.get('.products-grid   ').eq(1).should('be.visible').should('have.css','display','flex').should('have.css','flex-flow','row wrap')
    cy.get('.filterproducts.products').eq(1).should('be.visible').should('have.css','display','flex').should('have.css','flex-flow','row wrap')
    cy.get('.owl-stage-outer').eq(2).should('be.visible').should('have.css','position','relative').should('have.css','overflow','hidden')
    cy.get('.owl-stage').eq(2).should('be.visible')

    cy.get('.owl-item').eq(17).should('exist').should('have.css','transition','all 1s ease 0s')
    cy.get('.product-item').eq(5).should('exist')
    cy.get('.product-item-info').eq(5).should('exist').should('have.attr','data-container','product-grid').should('have.css','flex-grow','1').should('have.css','display','flex').should('have.css','flex-flow','column wrap').should('have.css','padding','0px 4px')
    cy.get('.product-item-photo').eq(5).should('exist').should('have.css','background-color','rgba(0, 0, 0, 0)').should('have.css','display','flex').should('have.descendants','a')
    cy.get('.product-item-photo > a').eq(5).should('have.descendants','img').invoke('removeAttr', 'target').click({force:true})
    //cy.url().should('include','https://pk.khaadi.com/')
    //cy.url().should('contain.text')
    cy.contains('Rs').should('exist')
    cy.go('back')
    cy.get('.product-image-photo').eq(8).should('exist').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
    cy.get('.product-image-photo').eq(9).realHover('mouse').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
 
    cy.get('.product-item-actions').eq(4).should('exist').should('have.css','text-align','right')
    cy.get('.actions-primary').eq(4).should('exist')
    cy.get('.action.tocart.primary').eq(4).should('exist')
   
    cy.get('.owl-item').eq(18).should('exist').should('have.css','transition','all 1s ease 0s')
    cy.get('.product-item').eq(6).should('exist')
    cy.get('.product-item-info').eq(6).should('exist').should('have.attr','data-container','product-grid').should('have.css','flex-grow','1').should('have.css','display','flex').should('have.css','flex-flow','column wrap').should('have.css','padding','0px 4px')
    cy.get('.product-item-photo').eq(6).should('exist').should('have.css','background-color','rgba(0, 0, 0, 0)').should('have.css','display','flex').should('have.descendants','a')
    cy.get('.product-item-photo > a').eq(6).should('have.descendants','img').invoke('removeAttr', 'target').click({force:true})
    //cy.url().should('include','https://pk.khaadi.com/')
    //cy.url().should('contain.text')
    cy.contains('Rs').should('exist')
    cy.go('back')
    cy.get('.product-image-photo').eq(11).should('exist').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
    cy.get('.product-image-photo').eq(12).realHover('mouse').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
 
    cy.get('.product-item-actions').eq(5).should('exist').should('have.css','text-align','right')
    cy.get('.actions-primary').eq(5).should('exist')
    cy.get('.action.tocart.primary').eq(5).should('exist')

    cy.get('.owl-item').eq(19).should('exist').should('have.css','transition','all 1s ease 0s')
    cy.get('.product-item').eq(7).should('exist')
    cy.get('.product-item-info').eq(7).should('exist').should('have.attr','data-container','product-grid').should('have.css','flex-grow','1').should('have.css','display','flex').should('have.css','flex-flow','column wrap').should('have.css','padding','0px 4px')
    cy.get('.product-item-photo').eq(7).should('exist').should('have.css','background-color','rgba(0, 0, 0, 0)').should('have.css','display','flex').should('have.descendants','a')
    cy.get('.product-item-photo > a').eq(7).should('have.descendants','img').invoke('removeAttr', 'target').click({force:true})
    //cy.url().should('include','https://pk.khaadi.com/')
    //cy.url().should('contain.text')
    cy.contains('Rs').should('exist')
    cy.go('back')
    cy.get('.product-image-photo').eq(13).should('exist').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
    cy.get('.product-image-photo').eq(14).realHover('mouse').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
 
    cy.get('.product-item-actions').eq(6).should('exist').should('have.css','text-align','right')
    cy.get('.actions-primary').eq(6).should('exist')
    cy.get('.action.tocart.primary').eq(6).should('exist')

    cy.get('.owl-item').eq(20).should('exist').should('have.css','transition','all 1s ease 0s')
    cy.get('.product-item').eq(8).should('exist')
    cy.get('.product-item-info').eq(8).should('exist').should('have.attr','data-container','product-grid').should('have.css','flex-grow','1').should('have.css','display','flex').should('have.css','flex-flow','column wrap').should('have.css','padding','0px 4px')
    cy.get('.product-item-photo').eq(8).should('exist').should('have.css','background-color','rgba(0, 0, 0, 0)').should('have.css','display','flex').should('have.descendants','a')
    cy.get('.product-item-photo > a').eq(8).should('have.descendants','img').invoke('removeAttr', 'target').click({force:true})
    //cy.url().should('include','https://pk.khaadi.com/')
    //cy.url().should('contain.text')
    cy.contains('Rs').should('exist')
    cy.go('back')
    cy.get('.product-image-photo').eq(15).should('exist').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
    cy.get('.product-image-photo').eq(16).realHover('mouse').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
 
    cy.get('.product-item-actions').eq(8).should('exist').should('have.css','text-align','right')
    cy.get('.actions-primary').eq(8).should('exist')
    cy.get('.action.tocart.primary').eq(8).should('exist')
}

thirdrow()
{
    cy.get('.half-content').eq(2).should('be.visible').should('have.css','position','relative').and('have.css','text-align','left')
    cy.get('.fullwidth-filter-title').eq(2).should('have.text','Western').should('have.css','text-transform','capitalize').should('have.css','font-family','Arial, "Helvetica Neue", Helvetica, sans-serif').should('have.css','font-size','24px').should('have.css','font-weight','400').should('have.css','margin','0px 0px 30px')
    cy.get('.products-grid   ').eq(2).should('be.visible').should('have.css','display','flex').should('have.css','flex-flow','row wrap')
    cy.get('.filterproducts.products').eq(2).should('be.visible').should('have.css','display','flex').should('have.css','flex-flow','row wrap')
    cy.get('.owl-stage-outer').eq(3).should('be.visible').should('have.css','position','relative').should('have.css','overflow','hidden')
    cy.get('.owl-stage').eq(3).should('be.visible') 

    cy.get('.owl-item').eq(21).should('exist').should('have.css','transition','all 1s ease 0s')
    cy.get('.product-item').eq(9).should('exist')
    cy.get('.product-item-info').eq(9).should('exist').should('have.attr','data-container','product-grid').should('have.css','flex-grow','1').should('have.css','display','flex').should('have.css','flex-flow','column wrap').should('have.css','padding','0px 4px')
    cy.get('.product-item-photo').eq(9).should('exist').should('have.css','background-color','rgba(0, 0, 0, 0)').should('have.css','display','flex').should('have.descendants','a')
    cy.get('.product-item-photo > a').eq(9).should('have.descendants','img').invoke('removeAttr', 'target').click({force:true})
    //cy.url().should('include','https://pk.khaadi.com/')
    //cy.url().should('contain.text')
    cy.contains('Rs').should('exist')
    cy.go('back')
    cy.get('.product-image-photo').eq(17).should('exist').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
    cy.get('.product-image-photo').eq(18).realHover('mouse').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
 
    cy.get('.product-item-actions').eq(9).should('exist').should('have.css','text-align','right')
    cy.get('.actions-primary').eq(9).should('exist')
    cy.get('.action.tocart.primary').eq(9).should('exist')

    cy.get('.owl-item').eq(22).should('exist').should('have.css','transition','all 1s ease 0s')
    cy.get('.product-item').eq(10).should('exist')
    cy.get('.product-item-info').eq(10).should('exist').should('have.attr','data-container','product-grid').should('have.css','flex-grow','1').should('have.css','display','flex').should('have.css','flex-flow','column wrap').should('have.css','padding','0px 4px')
    cy.get('.product-item-photo').eq(10).should('exist').should('have.css','background-color','rgba(0, 0, 0, 0)').should('have.css','display','flex').should('have.descendants','a')
    cy.get('.product-item-photo > a').eq(10).should('have.descendants','img').invoke('removeAttr', 'target').click({force:true})
    //cy.url().should('include','https://pk.khaadi.com/')
    //cy.url().should('contain.text')
    cy.contains('Rs').should('exist')
    cy.go('back')
    cy.get('.product-image-photo').eq(19).should('exist').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
    //cy.get('.product-image-photo').eq(20).realHover('mouse').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
 
    cy.get('.product-item-actions').eq(10).should('exist').should('have.css','text-align','right')
    cy.get('.actions-primary').eq(10).should('exist')
    cy.get('.action.tocart.primary').eq(10).should('exist')

    /*cy.get('.owl-item').eq(23).should('exist').should('have.css','transition','all 1s ease 0s')
    cy.get('.product-item').eq(11).should('exist')
    cy.get('.product-item-info').eq(11).should('exist').should('have.attr','data-container','product-grid').should('have.css','flex-grow','1').should('have.css','display','flex').should('have.css','flex-flow','column wrap').should('have.css','padding','0px 4px')
    cy.get('.product-item-photo').eq(11).should('exist').should('have.css','background-color','rgba(0, 0, 0, 0)').should('have.css','display','flex').should('have.descendants','a')
    cy.get('.product-item-photo > a').eq(11).should('have.descendants','img').invoke('removeAttr', 'target').click({force:true})
    //cy.url().should('include','https://pk.khaadi.com/')
    //cy.url().should('contain.text')
    cy.contains('Rs').should('exist')
    cy.go('back')
    cy.get('.product-image-photo').eq(20).should('exist').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
    cy.get('.product-image-photo').eq(21).realHover('mouse').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
 
    cy.get('.product-item-actions').eq(11).should('exist').should('have.css','text-align','right')
    cy.get('.actions-primary').eq(11).should('exist')
    cy.get('.action.tocart.primary').eq(11).should('exist')

    cy.get('.owl-item').eq(24).should('exist').should('have.css','transition','all 1s ease 0s')
    cy.get('.product-item').eq(12).should('exist')
    cy.get('.product-item-info').eq(12).should('exist').should('have.attr','data-container','product-grid').should('have.css','flex-grow','1').should('have.css','display','flex').should('have.css','flex-flow','column wrap').should('have.css','padding','0px 4px')
    cy.get('.product-item-photo').eq(12).should('exist').should('have.css','background-color','rgba(0, 0, 0, 0)').should('have.css','display','flex').should('have.descendants','a')
    cy.get('.product-item-photo > a').eq(12).should('have.descendants','img').invoke('removeAttr', 'target').click({force:true})
    //cy.url().should('include','https://pk.khaadi.com/')
    //cy.url().should('contain.text')
    cy.contains('Rs').should('exist')
    cy.go('back')
    cy.get('.product-image-photo').eq(22).should('exist').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
    cy.get('.product-image-photo').eq(23).realHover('mouse').invoke('attr','src').should('contain','pk.khaadi.com/media/catalog/product/')
 
    cy.get('.product-item-actions').eq(12).should('exist').should('have.css','text-align','right')
    cy.get('.actions-primary').eq(12).should('exist')
    cy.get('.action.tocart.primary').eq(12).should('exist')*/
}

}