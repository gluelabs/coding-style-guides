# Postman Collection Management Style Guide

## Folder Structure

![API Folder Structure](api-folder-structure.png)
- Group APIs into folders named with `#ID - MAIN ENTITY OR CONCEPT`.
- ID: 1-3 uppercase letters.


## API Call Naming
![Naming Api](api-naming.png)
- Name API calls by referencing folder ID and a method number for easy identification.

## Handling API Variants
![Api Variant](api-variants.png)
- Document API variants, including query string values.
- Append a lowercase letter to the API's ID for differentiation.

## Environment Use

![Environment Settings](environment-settings.png)
- Use Environments for testing APIs and defining PATHs.
- Use the `{{url}}` variable for base path addresses.
- Pre-prepared environments available, including localhost.

![API Call Example](api-call-example.png)
- 
## Authentication
- Manage authentication via Postman.
- Use "test" in login calls to save tokens.
- Set authentication at the collection level, excluding login.

![Authentication Process Step 1](authentication-process-1.png)

![Authentication Process Step 2](authentication-process-2.png)

![Authentication Process Step 3](authentication-process-3.png)

## Additional Best Practices

1. **Descriptive Annotations:** Include comments or descriptions for complex API calls to aid understanding.
2. **Consistent Parameter Naming:** Use a consistent naming scheme for query and path parameters.
3. **Error Handling:** Document common error responses for each API call.
4. **Version Control:** Keep track of changes using version numbers in the collection metadata.
5. **Automated Tests:** Write basic tests for each API call to validate response status, format, and key values.