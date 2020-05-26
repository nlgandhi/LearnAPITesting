
const chai = require('Chai');
const chaiHttp = require('chai-http');

// https://medium.com/@osahonoboite/testing-restful-apis-using-mocha-chai-and-chai-http-plugin-4b9feb45d50

// we imported our express app instance. So instead of writing out complete url 
// localhost:3000 every time, we could just request the app
// import app from ('../app')
const app = require('../src/app');

const { expect } = chai;

// chai.use(chaiHttp) tells chai to use the specified plugin. This is how chai uses every of its plugin.
chai.use(chaiHTTP);

// Then we “describe” what we will be testing. 
// Think of it as a way of grouping tests. This describe function takes a callback, which in turn takes an…
describe('Movies', () => {
    describe('GET / Movies', () => {
        // ---------------------------------------------------------------------------------------------------------
        // ‘it’ function. This is the actual test case. 
        // Think of the ‘it’ callback function as the green mark bearer — you will see that soon.
        // You can see “done” being passed as a parameter in the callback function of “it.” 
        // This is a way to tell Mocha that we are running an asynchronous code, so it doesn’t get ahead of itself.
        // ---------------------------------------------------------------------------------------------------------
        it ('should return the names of all movies', (done) => {
            // Then you can see the bad-boy at work — chai.request(app) This makes a call to our app. 
            // It tests the response gotten from the app to see if it matches with the assertions.
            chai.request(app)
                .get('/movies')
                // This end function takes two parameters: err (error) and res (response).
                // If an error occurs, we will call done(err) and let Mocha worry about that.
                .end((err, res) => {
                    if (err) done(err);
                    // If a response is gotten, however, we then test to see if it is returning our desired response object.
                    // res must have an HTTP status of 200.
                    expect(res).to.have.status(200);
                    // res must be an object.
                    expect(res).to.be.an('object');
                    // res.body.status must equal ‘success’
                    expect(res.body.status).to.deep.equals('success');
                    // res.body.movies must be an array.
                    expect(res.body.movies).to.deep.equals('array');     
                    done();               
                });            
        })    
    })
})
