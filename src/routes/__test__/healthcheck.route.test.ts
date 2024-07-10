import appFactory from "../../app";
import request from "supertest";
import sinon, { SinonStubbedInstance } from "sinon";
import { Application } from "express";
import { Collection, Document } from "mongodb";
import { expect } from "chai";

let app: Application;
let mongoCollection: SinonStubbedInstance<Collection<Document>>

before(() => {
   mongoCollection = sinon.createStubInstance(Collection<Document>)
   app = appFactory(mongoCollection)
})

describe("GET /healthcheck", async () => {
      it("responds with 200", (done) => {
         request(app).get("/healthcheck").expect(200, done)
      });

      it("returns information about the server", (done) => {
         request(app).get("/healthcheck")
         .expect('Content-Type', /json/)
         .end((err, res) => {
            if (err) {
              return done(err);
            }
            
            expect(res.body).to.have.all.keys(
               ['uptime', 'message', 'date']
            );
            return done();
          });

      })
});