/// <reference types="cypress"/>
const getvalue=require('../fixtures/header.json')


export class Header{

    logoCheck()
    {
        cy.get('.logo > img').should('exist')
    }
}