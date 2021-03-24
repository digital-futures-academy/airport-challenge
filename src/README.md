Domain Model:

| Object  | Message     | Property      | Context                                  | Output                                              |
|---------|-------------|---------------|------------------------------------------|-----------------------------------------------------|
| Aiport  | toLand()    | this.hangar   | Plane landed                             | string - This plane has landed at this airport.     |
|         |             | this.capacity | Checks if airport is full                | string - You cannot land. This airport is full.     |
|         |             |               | Error if plane is already at the airport | string - Plane is already at the airport .          |
|         |             |               | Message if weather is stormy             | string - Cannot land, weather is stormy .           |
|         | toTakeOff() | this.hangar   | Confirmation about plane taking off      | string - The plane has taken off from this airport. |
|         |             |               | Message if weather is stormy             | string -  Cannot take off, weather is stormy.       |
|         |             |               | Error if plane is not at the airport     | string - The plane is not at the airport.           |
|         | isFull()    | this.capacity |                                          | boolean - true or false                             |
| Plane   | toLand()    | this.intheAir | Changes the status of the plane          | boolean - false                                     |
|         | toTakeOff() | this.intheAir | Changes the status of the plane          | boolean-true                                        |
| Weather |             | this.status   | Shows the current weather                | string- sunny or stormy                             |



Instructions:

1. Test cases are written in jasmine, therefore you will need to use npx jasmine to run the tests.
2. There are three classes in total; Airport, Plane and Weather classes.
3. You need to pass the respective instances of Plane and Weather classes as arguments when using the the Airport's methods.
