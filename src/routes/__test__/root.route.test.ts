import appFactory from "../../app";
import request from "supertest";
import sinon, { SinonStubbedInstance } from "sinon";
import { Application } from "express";
import { Collection, Document } from "mongodb";

let app: Application;
let mongoCollection: SinonStubbedInstance<Collection<Document>>

before(() => {
   mongoCollection = sinon.createStubInstance(Collection<Document>)
   app = appFactory(mongoCollection)
})

describe("GET /", async () => {
      it("responds with 200", (done) => {
         request(app).get("/").expect(200, done)
      });

      it("responds with a message", (done) => { 
        request(app).get("/").expect("Grazzy API", done)
      })
});