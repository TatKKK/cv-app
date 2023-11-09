import { createServer, Model } from "miragejs";

export default function Server() {
  return createServer({
    models: {
      education: Model,
      skills: Model
    },

    routes() {
      this.namespace = "api";

      this.get("/skills", (schema) => {
        return schema.skills.all();
      }, { timing: 3000 });
     
      this.post("/skills", (schema, request) => {
        const data = JSON.parse(request.requestBody);      
        const newSkill = schema.skills.create(data);
        return newSkill;
      });

      this.get("/education", () => {
        return {
          education: [
            { id: 1, date: 2023, title: "Epam", description: "Front-end Development Upskill" },
            { id: 2, date: 2019, title: "MSC in Management", description: "Caucasus University, Business School" },
            { id: 3, date: 2018, title: "Erasmus Exchange Program", description: "University of Logistics and Transport, Wroclaw, Poland" },
            { id: 4, date: 2010, title: "Applied Mathematics and Computer Sciences", description: "Ivane Javakhishvili Tbilisi State University" },
          ],
        }
      }, {timing:3000});

    },
  });
}
