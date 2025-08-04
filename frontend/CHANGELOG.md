# Changelog

All notable changes to this project will be documented in this file.

## [2025-08-04] - Frontend Interview Template Implementation

### Fixed
- **Development Server Issues**
  - Resolved react-refresh runtime errors by disabling FAST_REFRESH in .env
  - Fixed ESLint configuration conflicts with Create React App
  - Removed incompatible react-refresh plugin from ESLint config
  - Server now starts successfully on port 3999

### Implemented

#### Evaluation 1 - Name Input and Greeting
- Added controlled input field for name entry
- Implemented submit button with validation
- Created centered modal popup displaying "Hello, {name}"
- Added support for Enter key submission
- Included validation to ensure name is not empty

#### Evaluation 2 - Counter with Conditional Display
- Implemented counter starting at 0
- Added increment and decrement buttons
- Created conditional display logic:
  - Divisible by 4: shows "Super"
  - Divisible by 5: shows "Man"
  - Divisible by 20 (both 4 and 5): shows "Superman"
  - Otherwise: shows the number
- Styled counter with large, prominent display

#### Evaluation 3 - Handlebars to React Conversion
- Successfully converted users.hbs template to React component
- Implemented user management table with:
  - Username column (with "Not Registered" fallback)
  - Email column (with "No Email" fallback)
  - Role dropdown selector (functional)
  - Disable account action with confirmation modal
- Added invite user functionality with form modal
- Included sample data to demonstrate functionality
- Maintained original styling intent with Ant Design components

### Technical Details
- Used React Hooks (useState) for state management
- Leveraged Ant Design components throughout
- Implemented proper form validation
- Added user feedback with success messages
- Maintained clean, readable code structure
