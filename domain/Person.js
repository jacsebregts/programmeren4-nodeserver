// 
// 
//
const assert = require('assert')
const chai = require('chai')

chai.should()

class Person {

    constructor(firstname, lastname){
        assert(firstname, 'firstname must be provided')
        assert(lastname, 'lastname must be provided')
        firstname.should.be.a('string')
        lastname.should.be.a('string')
        firstname.should.have.lengthOf.at.least(3)
        lastname.should.have.lengthOf.at.least(3)

        this.firstname = firstname;
        this.lastname = lastname;
    }

    getfirstname(){
        return this.firstname;
    }

}

module.exports = Person;
