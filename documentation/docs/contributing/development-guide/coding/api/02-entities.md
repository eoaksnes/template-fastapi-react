# Adding entities

Entities form the domain model of the application.

An entity can be an object with methods, or it can be a set of data structures and functions. Should be a regular class, dataclasses, or value objects (if all the properties are the same, the objects are identical). Entity does not depend on anything except possibly other entities. It holds data (state) and logic reusable for various applications. 

```mdx-code-block
import CodeBlock from '@theme/CodeBlock';
import TodoItem from '!!raw-loader!../../../../../../api/src/entities/TodoItem.py';

<CodeBlock language="jsx">{TodoItem}</CodeBlock>
```

Entities are the enterprise business objects of our application. These should not be affected by any change external to them, and these should be the most stable code within your application. 
