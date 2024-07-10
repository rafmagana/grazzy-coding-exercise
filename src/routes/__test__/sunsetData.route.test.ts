import appFactory from "../../app";
import request from "supertest";
import sinon, { SinonStubbedInstance } from "sinon";
import { Application } from "express";
import { Collection, Document } from "mongodb";
import { expect } from "chai";

let app: Application;
let mongoCollection: SinonStubbedInstance<Collection<Document>>

describe("/GET sunset-data", () => {
    context("when not authenticated", () => {
        beforeEach(() => {
            mongoCollection  = sinon.createStubInstance(Collection<Document>)
            app = appFactory(mongoCollection)
        })

        it("returns Forbidden http status", (done) => {
            request(app).get("/sunset-data").expect(403, done)
        })
    })

    // context("when authenticated", () => {
    //     beforeEach(() => {
    //         mongoCollection = sinon.createStubInstance(Collection<Document>)
    //         app = appFactory(mongoCollection)
    //     })
        
    //     let apiKey = "youShallNotPass"
    //     // const findOneStub = sinon.stub(mongoCollection, 'findOne');
    //     beforeEach(() => {
    //         process.env.API_KEY = apiKey
    //     })

    //     it("returns sunset data", (done) => {
    //         request(app).get("/sunset-data")
    //             .set('Authorization', apiKey)
    //             .end((err, res) => {
    //                 if (err) {
    //                     return done(err);
    //                 }
    //                 // sinon.assert.calledOnce(findOneStub);
    //                 // expect(res.body).to.have.all.keys(
    //                 //     ['uptime', 'message', 'date']
    //                 // );
    //                 return done();
    //             })
    //     })
    // })
})