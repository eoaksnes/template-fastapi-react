---
sidebar_position: 2
slug: ./
---

# Adding features

A feature has this structure.

```
├── todo/
│   ├── interfaces/ - Repository interfaces (optional)
│   ├── use_cases/ - Application logic
│   ├── exceptions.py - Exceptions classes (optional)
│   └── controller.py - The entrypoint
└── ...
```

- the [controller](/docs/contributing/development-guide/api-architecture#controllers) executes use cases that contains application logic. 
