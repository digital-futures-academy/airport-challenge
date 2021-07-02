Acceptance Criteria

User Story 1 <br>
As an air traffic controller <br>
So I can get passengers to a destination <br>
I want to instruct the airport to land a plane

Nouns|Verbs
---|---
Airport|instruct
Plane|land

Objects|Properties|Messages|Output
---|---|---|---
Airport|list of planes|landPlane()|new list of planes
Plane|name|



User Story 2 <br>
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

Nouns|Verbs
---|---
Airport capacity|overridden

Objects|Properties|Messages|Output
---|---|---|---
Airport|capacity|capacityOverride()|new capacity

User Story 3 <br>
As an air traffic controller <br>
To ensure safety <br>
I want to prevent landing when the airport is full <br>

Nouns|Verbs
---|---
airport|prevent landing

Objects|Properties|Messages|Output
---|---|---|---
Airport|list of planes|abortLanding()|list of planes
