# Infrastructure

The infrastructure is responsible for external infrastructure communications like database storage, file system, and external systems.

## Clients

The template ships with a mongo database client for connecting to MongoDB databases.

```mdx-code-block
import CodeBlock from '@theme/CodeBlock';
import MongoClient from '!!raw-loader!../../../../../../../api/src/infrastructure/clients/mongodb/MongoClient.py';

<CodeBlock language="jsx">{MongoClient}</CodeBlock>
```

## Repository implementations

Concrete implementations of repository interfaces.

```mdx-code-block
import TodoRepository from '!!raw-loader!../../../../../../../api/src/infrastructure/repositories/TodoRepository.py';

<CodeBlock language="jsx">{TodoRepository}</CodeBlock>
```

