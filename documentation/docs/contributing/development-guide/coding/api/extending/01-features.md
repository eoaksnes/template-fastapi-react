# Features

A feature has this structure.

```
├── todo/
│   ├── interfaces/ - Repository interfaces
│   ├── use_cases/ - Application logic
│   ├── exceptions.py - Exceptions classes
│   └── controller.py - The entrypoint
└── ...
```

## Controller

The main entrypoint is a [controller](/docs/contributing/development-guide/api-architecture#controllers) that executes use cases that contains application logic. 


```mdx-code-block
import CodeBlock from '@theme/CodeBlock';

import Controller from '!!raw-loader!../../../../../../../api/src/features/todo/todo_feature.py';

<CodeBlock language="jsx">{Controller}</CodeBlock>
```

The `response_model` and `request_model` is used to generate API documentation and used for validation.  

:::note

FastAPI is carefully built around the [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification) (formerly known as swagger) standards. In FastAPI, by coding your endpoints, you are automatically writing your API documentation. FastAPI maps your endpoint details to a [JSON Schema](https://json-schema.org/) document.  Under the hood, FastAPI uses Pydantic for data validation. With Pydantic along with [type hints](https://docs.python.org/3/library/typing.html), you get a nice editor experience with autocompletion.
You also get data validation, serialization and deserialization (for building an API), and automatic documentation (via JSON Schema and OpenAPI).

:::

## Use cases

```mdx-code-block
import UseCase from '!!raw-loader!../../../../../../../api/src/features/todo/use_cases/add_todo.py';

<CodeBlock language="jsx">{UseCase}</CodeBlock>
```

The [use cases](/docs/contributing/development-guide/api-architecture#use-cases) uses repositories for reading and writing to external systems like databases.

Each use-case have own read- and write- model to handle custom requests inputs and outputs for each use-case.

## Repository interfaces

The use-case should only know of the repository interface (abstract class) before run-time. 

```mdx-code-block
import TodoRepositoryInterface from '!!raw-loader!../../../../../../../api/src/features/todo/interfaces/TodoRepositoryInterface.py';

<CodeBlock language="jsx">{TodoRepositoryInterface}</CodeBlock>
```

The concrete implementation of a [repository](/docs/contributing/development-guide/api-architecture#repositories) is injected (dependency injection) into the use-case at run-time. 
