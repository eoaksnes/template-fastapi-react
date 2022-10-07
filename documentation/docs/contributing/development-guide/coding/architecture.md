---
sidebar_position: 1
---

# Architecture 

Here’s how the project is organized. 

```
├── api/ - backend code
│── web/ - frontend code
│── documentation/ - documentation
├── docker-compose.override.yml - for running in development mode locally
├── docker-compose.yml - common docker compose settings
├── .env-template - template for environment variables
└── ...
```

## Clean architecture

We follow the [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) style and structure the codebase accordingly for our API.

### What is Clean Architecture?

It is a layered approach for a [more civilized age](https://www.youtube.com/watch?v=wtCQalq7L-E).

![Clean Architecture](/img/clean-architecture.png)

The most important rule: Source code dependencies can only point inwards. Nothing in an inner circle can know anything at all about something in an outer circle. In particular, the name of something declared in an outer circle must not be mentioned by the code in the an inner circle. That includes, functions, classes. variables, or any other named software entity.

The golden rule: Talk inward with simple structures (dictionaries or classes) and talk outwards through interfaces.

### Why Clean Architecture?

* `Loose coupling between the code` – The code can easily be modified without affecting any or a large part of the app’s codebase thus easier to scale the application later on.
* Easier to `test` code. It is designed so that every part of the architecture is easy testable. Our tests can be simpler to write, faster and cheaper to maintain.
* `Separation of Concern` – Different modules have specific responsibilities making it easier for modification and maintenance.
* `Framework independent` - This architecture is framework independent. This means it doesn’t matter which database, frameworks, UI, external services you are using, the entities and the business logic of the application will always stay the same. When any of the external parts of the system become obsolete, like the database, or the web framework, you can replace those obsolete elements with a minimum of effort.

### S.O.L.I.D Principles

* Single Responsibility: Each software component should have only one reason to change – one responsibility.

* Open-Closed: You should be able to extend the behavior of a component, without breaking its usage, or modifying its extensions.

* Liskov Substitution: If you have a class of one type, and any subclasses of that class, you should be able to represent the base class usage with the subclass, without breaking the app.

* Interface Segregation: It’s better to have many smaller interfaces than a large one, to prevent the class from implementing the methods that it doesn’t need.

* Dependency Inversion: Components should depend on abstractions rather than concrete implementations. Also higher level modules shouldn’t depend on lower level modules.

### Components

- `Entities`- are the enterprise business objects of our application. These should not be affected by any change external to them, and these should be the most stable code within your application. An entity can be an object with methods, or it can be a set of data structures and functions. Should be a regular class, dataclasses, or value objects (if all the properties are the same, the objects are identical). Entity does not depend on anything except possibly other entities. It holds data (state) and logic reusable for various applications.
- `Use cases` - implements and encapsulates all the application business rules. Each use case orchestrates all of the logic for a specific application business use case. Logic that defines the actual features of our app. Changes to use cases should not impact the entities. Inside use cases we should have every right to expect that arguments are valid in terms of type. The only thing you can do with a use case is to execute it. Use cases interact with entities (thus depend on them) and hold logic of the specific application (and typically execute that logic via various repositories or data access layer(s) gateway(s).
- `Controllers` - you can think of them as an entry and exit gates to the use cases. It receives a request and return a response. The controller takes the user input (the request), converts it into the request object defined by the use case and passes the request objects to the use case, and at the end return the response objects.
- `Repositories` - takes entities and returns entities, hides storage details. Can work against local, remote, data services or third party services.


## Architecture diagrams

We are using [c4model](https://c4model.com) for showing architecture diagrams.

### Level 1 - System Context diagram

The Context diagram is a good starting point for diagramming and documenting a software system, allowing you to step back and see the big picture. Here we draw a diagram showing the system as a box in the centre, surrounded by its users and the other systems that it interacts with.

### Level 2 - Container diagram

Once you understand how your system fits in to the overall IT environment, a really useful next step is to zoom-in to the system boundary with a Container diagram. A container is something like a server-side web application, single-page application, desktop application, mobile app, database schema, file system, etc. Essentially, a container is a separately runnable/deployable unit (e.g. a separate process space) that executes code or stores data.

![Container diagram](/img/api-level-2.svg)

The use cases and entities are the heart of our application and should have a minimal set of external library dependencies.

### Level 3 - Component diagram

Following on from a Container Diagram, next you can zoom in and decompose each container further to identify the major structural building blocks and their interactions.

The Component diagram shows how a container is made up of a number of components, what each of those components are, their responsibilities and the technology/implementation details.

![Container diagram](/img/api-level-3.svg)

[//]: # (https://docs.astro.build/en/core-concepts/project-structure/)

[//]: # (https://profy.dev/article/react-folder-structure)

