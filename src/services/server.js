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
            { id: 1, date: 2023, title: "Epam", description: "blablabla" },
            { id: 2, date: 2023, title: "Georgia Revenue Service", description: "blablabla" },
            { id: 3, date: 2023, title: "Tegeta Motors", description: "blablabla" },
            { id: 4, date: 2023, title: "SBA Georgia", description: "blablabla" },
          ],
        }
      }, {timing:3000});

    },
  });
}
