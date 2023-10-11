# GIT Coding Style Guide

This document define internal conventions and best practices using GIT to be followed in any work related project.

## Commit Messages

Every Commit Message **MUST** have the following structure:

> type(scope): subject

### The type
The type field **MUST** be chosen from the options listed below:

- **build** : Changes related to building the code (e.g. adding npm dependencies or external libraries).
- **chore**: Changes that do not affect the external user (e.g. updating the .gitignore file or .prettierrc file).
- **feat**: A new feature.
- **fix**: A bug fix.
- **docs**: Documentation a related changes.
- **refactor**: A code that neither fix bug nor adds a feature. (eg: You can use this when there is semantic changes like renaming a variable/ function name).
- **perf**: A code that improves performance style: A code that is related to styling.
- **test**: Adding new test or making changes to existing test

### The Scope
The *scope* is optional
The *scope* field should be a noun that represents the part of the codebase affected by the commit.

For example, if the commit changes the login page, the scope could be “login”. If the commit affects multiple areas of the codebase, “global” or “all” could be used as the scope.


## The Subject
“The “subject” field should be a brief description of the commit, written in the imperative present tense. It should not end with a period and the first letter should not be capitalized.

For example, “add login page” or “fix bug in search functionality” are both appropriate subjects.”


## Branching
The [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) Branching Model **MUST** be followed.

The following Branches are allowed: 

 - master
 - develop
 - feat/feature-name
 - feat/relese-name
 - feat/hotfix-name

## Tagging
Releses **MUST** be tagged using [Semantic Versioning](https://semver.org/)


## References
- https://www.conventionalcommits.org/en/v1.0.0/
- https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716
- https://github.com/fteem/git-semantic-commits

