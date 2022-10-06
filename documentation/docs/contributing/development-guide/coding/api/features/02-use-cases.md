# Use cases

Use cases implements and encapsulates all the application business rules. Each use case orchestrates all of the logic for a specific application business use case. Use cases interact with entities (thus depend on them) and hold logic of the specific application (and typically execute that logic via various repositories or data access layer(s) gateway(s).

```mdx-code-block
import CodeBlock from '@theme/CodeBlock';

import UseCase from '!!raw-loader!@site/../api/src/features/todo/use_cases/add_todo.py';

<CodeBlock language="jsx">{UseCase}</CodeBlock>
```

* `Required`
  * Each use-case needs to have own read- and write- model to handle custom requests inputs and outputs for each use-case.
* `Optional`
  * A [repository interfaces](./features/03-repository-interfaces.md) to handle communication to external services such as databases. 
    * The use case uses [repositories](/docs/contributing/development-guide/api-architecture#repositories) for reading and writing to external systems like databases.
  
:::info
Changes to use cases should not impact the entities.

The use-case should only know of the repository interface (abstract class) before run-time. The concrete implementation of a repository is injected (dependency injection) into the use-case at run-time. 

:::