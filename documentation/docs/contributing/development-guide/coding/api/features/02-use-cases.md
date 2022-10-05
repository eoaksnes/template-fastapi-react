# Use cases

Use cases implements and encapsulates all the application business rules. Each use case orchestrates all of the logic for a specific application business use case. The logic that defines the actual features of our app.

```mdx-code-block
import CodeBlock from '@theme/CodeBlock';

import UseCase from '!!raw-loader!../../../../../../../api/src/features/todo/use_cases/add_todo.py';

<CodeBlock language="jsx">{UseCase}</CodeBlock>
```

The [use cases](/docs/contributing/development-guide/api-architecture#use-cases) uses repositories for reading and writing to external systems like databases.

Each use-case have own read- and write- model to handle custom requests inputs and outputs for each use-case.

:::note

Changes to use cases should not impact the entities. Inside use cases we should have every right to expect that arguments are valid in terms of type. The only thing you can do with a use case is to execute it. Use cases interact with entities (thus depend on them) and hold logic of the specific application (and typically execute that logic via various repositories or data access layer(s) gateway(s).

:::