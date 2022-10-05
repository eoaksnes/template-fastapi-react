# Interfaces

Repositories takes entities and returns entities, hides storage details. Can work against local, remote, data services or third party services.

The use-case should only know of the repository interface (abstract class) before run-time. 

```mdx-code-block
import CodeBlock from '@theme/CodeBlock';

import TodoRepositoryInterface from '!!raw-loader!../../../../../../../api/src/features/todo/interfaces/TodoRepositoryInterface.py';

<CodeBlock language="jsx">{TodoRepositoryInterface}</CodeBlock>
```

The concrete implementation of a [repository](/docs/contributing/development-guide/api-architecture#repositories) is injected (dependency injection) into the use-case at run-time. 
