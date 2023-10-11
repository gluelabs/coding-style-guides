# Typescript Coding Style Guide
This document uses internal convention and best practice and it is ispired by [Google Typescript Style Guide](https://google.github.io/styleguide/jsguide.html).

## Naming Convention
The following naming convention **MUST** be used


### Use PascalCase (AKA UpperCamelCase) for: 
- classes 
- interfacees 
- types   
- enums 
- decorators 


### Use camelCase (AKA LowerCamelCase) for: 
- variables 
- functions 
- classes members 
- interfaces members 
- enums members
- methods 
- parameters

### Use CONSTANT_CASE for:
- global constant values, including enum values

### Use kebab-case for:
- files
- naming files to save on disk/object storage
- naming files to return to the users
- folders names 

## Naming Convention Best Practices

### Abbreviations
Treat abbreviations like acronyms in names as whole words, i.e. use *loadHttpUrl*, not *loadHTTPURL*, unless required by a platform name (e.g. XMLHttpRequest).

### Dollar sign
Identifiers **SHOULD NOT** generally use $, except when aligning with naming conventions for third party frameworks and for Observables.

### Observables
Observables **MUST** be Suffixed with $ in order to help resolve confusion regarding observable values vs concrete values. 

### Interfaces
Interfaces **MUST** be prefixed with I. The interface for the Class *Invoice* must be *IInvoice*

### JSDoc vs comments
There are two types of comments, JSDoc (/\*\* ... \*/) and non-JSDoc ordinary comments (// ... or /\* ... \*/).

Use /\*\* JSDoc \*/ comments for documentation, i.e. comments a user of the code should read.

Use // line comments for implementation comments, i.e. comments that only concern the implementation of the code itself.

JSDoc comments are understood by tools (such as editors and documentation generators), while ordinary comments are only for other humans.

JSDoc rules **MUST** follow the [JSDoc Google JavaScript Styleguide](https://google.github.io/styleguide/jsguide.html#jsdoc-tags)

In general, follow the JavaScript style guide's rules for JSDoc, sections 7.1 - 7.5. The remainder of this section describes exceptions to those rules.

## Documentation Coverage
We encourage the use of uthomating tools for build live documentation and we belive in the *Documentation by Design* Pattern 

The Following **MUST** be Always JSDoc-umented
- classes 
- interfacees 
- types   
- enums 
- variables 
- functions 
- classes members 
- interfaces members 
- enums members
- methods 
- parameters

## Files Grouping and Naming
Each Typescript File **SHOULD** include a single Class/Interface/Constant/ecc.

A single Typescript File **MAY** contain more items in case those items are strictly coupled such the case of an Interface and the Class who implements it or in case of very specific object coupling situtions. See [invoice.ts](./examples/invoice.ts) as admissible Coupling Example.  

Each Typescript file **MUST** be named against its content. Single Item files must be named against the item they contains using kebak-case.

File Containing multiple items **MUST** be named against the central item. 




