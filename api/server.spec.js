const request = require("supertest");
const server = require("./server.js");

describe("server.js- run server, make request, check response", function(){
    describe("GET /", function(){
        it("1-should return 200 OK", function(){
            // return change the synchronous request into asynchronous
            return request(server).get("/").expect(200); 
        });

        // asynchronous req is needed because it simulated client server testing.
        it("2-should return 200 OK", async function() {
            const response = await request(server).get("/");
            
            expect(response.status).toBe(200);
        });
        it("should return JSON", ()=>{
            return request(server)
            .get("/")
            .then(res =>{
                expect(res.type).toMatch(/json/i);
            })
        });
        it("should respond with {api: up", ()=>{
            return request(server)
            .get("/")
            .then(res =>{
                expect(res.body.api).toBe("up");
            })
        });
    })
});