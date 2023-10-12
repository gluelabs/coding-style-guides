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
 - relese/relese-name
 - hotfix/hotfix-name

You **MUST** use branch master for production releases and branch development for next releases.

You **MAY** use git-flow tool to perform a release branch process. It has the advantage of reducing the number of commands compared to git.

These set of commands takes you through a typical GitFlow lifecycle.

To initialize an empty git repository
 ```bash
git flow init
```

When you start working on a new project functionality you create a new feature branch
 ```bash
 git flow feature start feature_branch
```

Once the new feature is complete, you merge the feature branch on develop and delete it
 ```bash
 git flow feature finish feature_branch
```

Once the develop branch has accumulated enough features, we are ready to create a public release
 ```bash
git flow release start x.x.x
```
Now you are switched to the new release branch.
On this branch we can perform bugfixes.
When release branch is stable we are ready to publish a new version of our application
```bash
git flow release finish x.x.x
```
This command is equivalent to git command
```bash
git checkout develop
git merge release/x.x.x
git checkout master
git merge release/x.x.x
git tag x.x.x
git branch -D release/x.x.x
```

## Tagging
Releses **MUST** be tagged using [Semantic Versioning](https://semver.org/)


## References
- https://www.conventionalcommits.org/en/v1.0.0/
- https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716
- https://github.com/fteem/git-semantic-commits

