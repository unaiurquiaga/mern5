Hi 👋🏽 this is my first Node, Express and MongoDB project. I have built my first server for a dummy API that allows you to enter information into a dog adoption website.

The MongoDB data model is an object, where you have the following different keys that will be required:

const document = {
  id: "mongoDB_id",
  name: "dog_name",
  race: "dog_race",
  colour: "dog_peel_colour",
  age: "dog_age",
  responsiblePerson: "responsible_person_for_the_dog",
};

Endpoints:

https://localhost:4001/api
MODEL DOGS:
HTTP Request Endpoint Description.
GET /dogs All registered dogs.
GET /dogs/id Dog by its id.
POST /dogs Create a new dog.
PUT /dogs/id Edit a dog.
DELETE /dogs/id Delete a dog.

In addition to this, in the first endpoint, you can add a Query Parameter, where with the parameter "filter" and entering a value, you can filter within the keys name, race, colour and responsiblePerson.
