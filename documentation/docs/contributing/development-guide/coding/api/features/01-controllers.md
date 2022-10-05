# Controller

A controller receive a request, then call a use case, end return a response. 



[//]: # (The controller takes the user input &#40;the request&#41;, converts it into the request object defined by the use case and passes the request objects to the use case, and at the end return the response objects.)


```mdx-code-block
import CodeBlock from '@theme/CodeBlock';

import Controller from '!!raw-loader!../../../../../../../api/src/features/todo/todo_feature.py';

<CodeBlock language="jsx">{Controller}</CodeBlock>
```

The `response_model` and `request_model` is used to generate API documentation and used for validation.  

:::info

The controller is decorated with the `create_response` decorator.

This decorator handles exception handling.

:::

:::note

FastAPI is carefully built around the [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification) (formerly known as swagger) standards. In FastAPI, by coding your endpoints, you are automatically writing your API documentation. FastAPI maps your endpoint details to a [JSON Schema](https://json-schema.org/) document.  Under the hood, FastAPI uses Pydantic for data validation. With Pydantic along with [type hints](https://docs.python.org/3/library/typing.html), you get a nice editor experience with autocompletion.
You also get data validation, serialization and deserialization (for building an API), and automatic documentation (via JSON Schema and OpenAPI).

:::
