---
sidebar_position: 2
slug: ./
---

# Extending the API

## Codebase structure

The API has a feature-based folder structure following the principles of [Clean Architecture](./../architecture.md). 

```
├── api/
│   └── src/
│       ├── common/
│       ├── entities/ 
│       ├── features/ 
│       │   ├── health_check/
│       │   ├── todo/
│       │   ├── whoami/
│       │   └── ...
│       ├── infrastructure/ 
│       └── tests/
│           ├── unit/
│           └── integration/       
└── ...
```

- `common` contains shared code like authentication, exceptions, response decorator
- [entities](./02-entities.md) contains all entities, enums, exceptions, interfaces, types and logic specific to the domain layer
- [features](./features) contains use-cases (application logic), repository interfaces, and controllers
- [infrastructure](./adding-infrastructure) contains classes for accessing external resources such as databases, file systems, web services, and repository implementations
- `tests` contains unit and integrations tests 

## Get started 

1. Create the domain model by [adding entities](./02-entities.md)
2. Extend the API by [adding features](./features)
   * Add a [use case](./features/02-use-cases.md) to handle application logic 
   * Add a [controller](./features/01-controllers.md) to handle API requests
      * Add an endpoint to the controller that executes the use case
3. Add [repository implementations](./adding-infrastructure/02-repositories.md) to handle communication to external services such as databases.


:::note

Entities and repository implementations can be shared between features.
:::