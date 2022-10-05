---
sidebar_position: 2
slug: ./
---

# Extending the API

The API has a feature-based folder structure following the principles of [Clean Architecture](./clean-architecture). 

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

