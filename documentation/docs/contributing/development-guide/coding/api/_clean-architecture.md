---
sidebar_position: 1
---



## Different types of logic

Enterprise business logic (entities) vs. application business logic (use-cases): The business logic are divided between two layers: the domain layer (aka entities) and the application layer (aka use cases). The domain layer contains the enterprise business logic, and the application layer contains the application business logic. The difference being that enterprise logic could be shared with other systems whereas application logic would typically be specific to single system.

### Example: Bank application

For example let's say we have a banking app with three functionalities: login, view balance and transfer funds.

So, to be able to transfer funds the user must be logged in and should have sufficient balance.

Entities:
  * User (holds user name, hashed&salted password; logic like validate user name, hash plain-text password)
  * Balance (holds user dependency, amount, limits, logic like verify if given transfer amount is OK)

Use cases:
  * Authenticate (based on user-name/password input, validate it and (using some sort of repository or gateway to data) pull user entity from backend, along with some token likely), likely cache it if success or report errors if any
  * View Balance (based on user entity input, pull balance entity from backend (same as above...), report errors if any
  * Transfer Funds (based on user entity and amount input, pull balance entity, verify if transfer permitted, perform if so or report error if not)

