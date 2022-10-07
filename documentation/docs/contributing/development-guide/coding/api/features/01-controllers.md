# Controller

A controller receive a request, then call a use case, end return a response. 



[//]: # (The controller takes the user input &#40;the request&#41;, converts it into the request object defined by the use case and passes the request objects to the use case, and at the end return the response objects.)


```mdx-code-block
import CodeBlock from '@theme/CodeBlock';

import Controller from '!!raw-loader!@site/../api/src/features/todo/todo_feature.py';

<CodeBlock language="jsx">{Controller}</CodeBlock>
```

* `Required`
  * The controller needs to be decorated with the create_response decorator, that handles exception handling and returns unified response type.
  * The controller needs to have set the response_model and request_model, that is used to generate API documentation and used for validation.
* `Optional` 
  * Add [repository implementations](./../adding-infrastructure/02-repositories.md) to handle communication to external services such as databases and inject the repository implementations to the controller endpoint and pass the injected repository implementations to the use case

<!--
:::note

FastAPI is carefully built around the [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification) (formerly known as swagger) standards. In FastAPI, by coding your endpoints, you are automatically writing your API documentation. FastAPI maps your endpoint details to a [JSON Schema](https://json-schema.org/) document.  Under the hood, FastAPI uses Pydantic for data validation. With Pydantic along with [type hints](https://docs.python.org/3/library/typing.html), you get a nice editor experience with autocompletion.
You also get data validation, serialization and deserialization (for building an API), and automatic documentation (via JSON Schema and OpenAPI).

:::
-->