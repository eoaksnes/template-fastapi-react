---
sidebar_position: 1
---

# Codebase structure

The API has a feature-based folder structure. 

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

- `common/`: contains shared code like authentication, exceptions, response decorator
- `entities/`: contains all entities, enums, exceptions, interfaces, types and logic specific to the domain layer
- `features/`: contains use-cases (application logic), repository interfaces, and controllers
- `infrastructure/`: contains classes for accessing external resources such as databases, file systems, web services, and repository implementations
- `tests/`: contains unit and integrations tests 

For adding new functionality see [extending](./extending/features).