# GIT Coding Style Guide

This document define internal conventions and best practices using GIT to be followed in any work related project.

## Commit Messages

Every Commit Message **MUST** have the following structure:

> type: subject

or
> type(scope): subject

or in case of commit with breaking changes
> type!: subject

or
> type(scope)!: subject

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

### Breaking Changes
In case the commit introduces Breaking Changes to the internal interfaces or i.e. in case of changes to the APIs Interfaces, the commit message **MUST** include the **!** character to the type or the scope (if existent)

For example:

> type!: subject

or
> type(scope)!: subject


## The Subject
“The “subject” field should be a brief description of the commit, written in the imperative present tense. It should not end with a period and the first letter should not be capitalized.

For example, “add login page” or “fix bug in search functionality” are both appropriate subjects.”


## Branching
The [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) Branching Model **MUST** be followed.

The following Branches are allowed: 

 - master
 - develop
 - feature/feature-name
 - release/release-name
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

### Hotfix

Hotfix branches are used for emergency fixes on the production version (master branch). They follow a specific workflow and versioning convention to track different types of issues and their resolution attempts.

#### Versioning Convention
Format: `x.y.z-hotfix.{a|b|c|...}-n` (**Master branch only**)
- `x.y.z`: Current production version on master
- `{a|b|c|...}`: Issue identifier (increments alphabetically for different issues in same version)
- `n`: Patch number (increments for attempts to fix same issue)

**Important:** This hotfix tagging convention is exclusively for fixes on the master branch. Development branch follows regular semantic versioning.

#### Workflow Example

Let's consider a scenario:
- Develop branch is on version `2.1.5` (k)
- Master branch is on version `2.1.3` (z)

1. **First Critical Issue**
   ```bash
   # Create hotfix branch from master (production)
   git checkout master  # Important: Always start from master
   git checkout -b hotfix/critical-auth-issue
   
   # After fixing, tag and merge
   git tag v2.1.3-hotfix.a-1  # Hotfix tag only on master
   ```
   - If fix fails, create new patch: `2.1.3-hotfix.a-2`
   - Continue until issue is resolved (e.g., `2.1.3-hotfix.a-3`)

2. **New Unrelated Issue**
   - If a new issue occurs while still on version 2.1.3:
   ```bash
   git checkout master
   git checkout -b hotfix/payment-system-issue
   
   # Tag with next letter since it's a different issue
   git tag v2.1.3-hotfix.b-1
   ```

#### Merging Process
1. Merge hotfix into master
   ```bash
   git checkout master
   git merge hotfix/issue-name
   ```

2. Merge hotfix into develop
   ```bash
   git checkout develop
   git merge hotfix/issue-name
   # Develop version increments: 2.1.5 -> 2.1.6
   ```

3. Delete hotfix branch
   ```bash
   git branch -d hotfix/issue-name
   ```

#### Important Notes
- Hotfix tags (x.y.z-hotfix.{a|b|c|...}-n) are **exclusively** for master branch fixes
- Always create hotfix branches from master
- Each different issue gets a new letter (a, b, c...)
- Same issue patches increment the number (-1, -2, -3...)
- Develop branch version should increment after merging hotfix, following regular semantic versioning
- All hotfixes must be merged to both master and develop
- Notify relevant team members before starting a hotfix
- Don't include unrelated changes in hotfix branches
- Don't forget to merge into both master AND develop
- Don't create hotfix branches from develop
- Don't use hotfix process for non-emergency changes
- Delete hotfix branches after successful merge

#### Using Git Flow Commands
Git flow provides simplified commands for hotfix management:

1. **Start a hotfix**
   ```bash
   # This will create a hotfix branch from master
   git flow hotfix start issue-name x.y.z-hotfix.a-1
   ```

2. **Finish a hotfix**
   ```bash
   # This will:
   # - Merge hotfix into master
   # - Tag the merge in master with the specified version
   # - Merge hotfix into develop
   # - Remove the hotfix branch
   git flow hotfix finish 'issue-name'
   ```

This is equivalent to the following git commands:
```bash
git checkout master
git merge hotfix/issue-name
git tag x.y.z-hotfix.a-1
git checkout develop
git merge hotfix/issue-name
git branch -d hotfix/issue-name
```

**Note:** When using git-flow for hotfixes, you still need to follow the hotfix versioning convention (x.y.z-hotfix.{a|b|c|...}-n) for tags on master branch.


## Tagging
Releses **MUST** be tagged using [Semantic Versioning](https://semver.org/)


## References
- https://www.conventionalcommits.org/en/v1.0.0/
- https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716
- https://github.com/fteem/git-semantic-commits

