# Code Style Guidelines for Portfolio Pro (Bernard Fiagbenu Portfolio)

## Project Overview
This portfolio app, "Portfolio Pro," is a contemporary, interactive digital platform built with Next.js. It highlights the skills and creativity of Bernard Fiagbenu, a Computer Scientist.

This document defines the coding standards and style guidelines for Portfolio Pro, ensuring consistency and maintainability across the codebase.

### Technical Stack
- Platform: Web (Desktop & Mobile Responsive)
- Framework: Next.js (React)
- Language: TypeScript
- Styling: Tailwind CSS, ShadCN UI Components
- Key Dependencies: `lucide-react`, `react-hook-form`, `zod`

## Style Guide Sections

### 1. File Organization
- **Directory Structure**:
    - `src/app/`: App Router, pages, layouts, loading/error UIs, route groups.
    - `src/components/`: Reusable UI components.
        - `src/components/ui/`: ShadCN UI components (generally not modified).
        - `src/components/layout/`: Layout components (Header, Footer, etc.).
        - `src/components/[feature]/`: Feature-specific components.
    - `src/lib/`: Utility functions, helper modules.
    - `src/hooks/`: Custom React hooks.
    - `src/types/`: Shared TypeScript type definitions.
    - `public/`: Static assets (images, fonts if not from CDN).
- **File Naming Conventions**:
    - Components: PascalCase (e.g., `MyComponent.tsx`).
    - Pages (App Router): `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `template.tsx`.
    - Hooks: camelCase with `use` prefix (e.g., `useCustomHook.ts`).
    - Utilities/Services: camelCase (e.g., `utils.ts`, `apiService.ts`).
    - Stylesheets (if not using Tailwind exclusively): kebab-case (e.g., `custom-styles.css`).
- **Module Organization**: Group related functionalities into modules/directories.
- **Import/Export Patterns**:
    - Use named exports by default. Default export for main component in a file.
    - Use absolute imports (`@/components/MyComponent`) configured via `tsconfig.json`.
    - Group imports: React imports, then external libraries, then internal modules/components.
- **Code Grouping within Files**: Logical grouping of functions, constants, types, and component logic.

### 2. Code Formatting
- **Indentation**: 2 spaces.
- **Line Length Limits**: 100-120 characters (Prettier default or configured).
- **Line Breaks and Spacing**: Consistent spacing around operators, after commas, etc. (handled by Prettier).
- **Bracket Placement**: Opening braces on the same line for blocks.
- **Quotes**: Single quotes (`'`) for strings, unless double quotes (`"`) are needed for specific cases (e.g., JSON, JSX props).
- **Semicolon Usage**: Use semicolons at the end of statements (Prettier default).
- **Trailing Commas**: Use trailing commas where applicable (e.g., in multi-line arrays and objects) for cleaner diffs.
- **Comments Formatting**:
    - Use `//` for single-line comments.
    - Use `/** ... */` for JSDoc-style multi-line comments for functions, classes, and complex logic.
    - Comments should explain *why*, not *what* (if the code is self-explanatory).

### 3. Naming Conventions
- **Variables**: camelCase (e.g., `myVariable`).
- **Functions and Methods**: camelCase (e.g., `myFunction()`).
- **Classes and Interfaces/Types**: PascalCase (e.g., `MyClass`, `MyInterface`, `MyType`).
- **Constants and Enums**: SCREAMING_SNAKE_CASE for true constants (e.g., `MAX_USERS`). PascalCase for enum names and members.
- **File Names**: As per File Organization section.
- **Component Naming**: PascalCase (e.g., `UserProfileCard.tsx`).
- **Test File Naming**: `[filename].test.ts` or `[filename].spec.ts` (e.g., `utils.test.ts`).

### 4. TypeScript Guidelines
- **Type Annotations Usage**:
    - Always use type annotations for function parameters, return types, and variable declarations where type inference is not obvious or explicit typing adds clarity.
    - Use `import type { ... } from '...'` for type-only imports.
- **Interface vs Type Aliases**:
    - Use `interface` for defining object shapes and for class implementation contracts, as they are extendable.
    - Use `type` for primitives, unions, intersections, tuples, or more complex types.
- **Generics Conventions**: Use descriptive names for generic type parameters (e.g., `T`, `K`, `V`, or more descriptive like `TData`, `TError`).
- **Null/Undefined Handling**:
    - Enable `strictNullChecks` in `tsconfig.json`.
    - Explicitly handle `null` and `undefined` values.
    - Use optional chaining (`?.`) and nullish coalescing (`??`) where appropriate.
    - Avoid non-null assertion operator (`!`) unless absolutely certain the value is not null/undefined and it's justified.
- **Error Handling Patterns**:
    - Use `try...catch` blocks for synchronous errors.
    - Handle Promise rejections with `.catch()` or `async/await` with `try...catch`.
    - Define custom error types if needed.
    - Server Actions should return structured error states.
- **Async/Await Patterns**: Prefer `async/await` over Promise chains for readability in asynchronous code.
- **Default Values**: Provide default values for optional props and function parameters.
- **Optional Chaining Usage**: Use `?.` for safe access to nested properties/methods.

### 5. Component Guidelines (React/Next.js)
- **Component Composition**: Favor composition over inheritance. Build complex UIs from smaller, reusable components.
- **Props Interface Definitions**: Define props types/interfaces clearly for every component. Place them near the component definition. Use `Readonly<{...}>` for props where appropriate.
- **State Management**:
    - Use `useState` for simple local component state.
    - Use `useReducer` for more complex local state logic.
    - For global state, consider React Context, Zustand, or Jotai if necessary. Avoid prop drilling.
    - Server Components should fetch data directly. Client Components can use hooks like `useSWR` or `React Query` or fetch within `useEffect`.
- **Event Handling**:
    - Name event handlers `handleEventName` (e.g., `handleClick`, `handleSubmit`).
    - Pass event handlers as props (e.g., `onClick`, `onSubmit`).
- **Lifecycle Methods Usage**: Primarily use Hooks (`useEffect`, `useState`, etc.) in functional components.
- **Custom Hooks Patterns**: Extract reusable logic into custom hooks (`useMyLogic`). Custom hooks should follow standard hook rules.
- **Render Optimization**:
    - Use `React.memo` for functional components if props are unlikely to change or comparison is cheap.
    - Use `useCallback` and `useMemo` judiciously to memoize functions and values when profiling indicates a need.
    - Avoid unnecessary re-renders by optimizing state updates and component structure.
    - Leverage Next.js Server Components to minimize client-side JavaScript.
- **Error Boundaries**: Implement error boundaries (`error.tsx` in App Router) at appropriate levels to catch and handle runtime errors in component trees.

### 6. Documentation Standards
- **JSDoc Requirements**:
    - Document all public functions, custom hooks, and complex component props using JSDoc syntax.
    - Include descriptions, `@param`, `@returns`, `@example`.
- **README Structure**: The main `README.md` should cover project overview, setup, development, testing, and deployment. Component-level READMEs for complex component libraries (if any).
- **Code Comments Style**: Clear, concise, and explain the 'why' not the 'what'.
- **API Documentation**: For Server Actions or internal APIs, document parameters, return values, and potential errors.
- **Type Documentation**: Add comments to complex type definitions or interfaces.
- **Example Usage**: Provide examples for reusable components and utility functions in JSDoc or Storybook (if used).
- **Changelog Format**: Maintain a `CHANGELOG.md` (e.g., Keep a Changelog format) if the project is library-like or has distinct versions.

### 7. Testing Standards
- **Test File Organization**: Place test files alongside the code they are testing (e.g., `MyComponent.test.tsx` next to `MyComponent.tsx`) or in a `__tests__` subdirectory.
- **Naming Conventions**: Test descriptions should be clear and descriptive (e.g., "should render correctly with given props").
- **Test Structure (Arrange-Act-Assert)**:
    - **Arrange**: Set up test conditions, mock data.
    - **Act**: Execute the function/render the component.
    - **Assert**: Verify the outcome.
- **Mock Data Handling**: Use realistic mock data. Consider libraries like Faker.js if needed. Mock external dependencies and API calls.
- **Test Coverage Requirements**: Aim for high test coverage (e.g., >80%) for critical business logic and UI components. Use coverage tools to monitor.
- **Integration Test Patterns**: Test interactions between components or modules.
- **E2E Test Guidelines**: For key user flows (e.g., contact form submission). Use tools like Playwright or Cypress (future consideration).

### 8. Performance Guidelines
- **Bundle Optimization**:
    - Leverage Next.js code splitting by page.
    - Analyze bundle size with `@next/bundle-analyzer`.
    - Dynamically import large components/libraries (`next/dynamic`).
- **Code Splitting**: Automatic with Next.js App Router.
- **Lazy Loading**: Lazy load images (`next/image`) and off-screen components.
- **Memory Management**: Be mindful of memory leaks, especially in `useEffect` cleanup functions.
- **State Management**: Optimize state updates to prevent unnecessary re-renders.
- **Rendering Optimization**: As per Component Guidelines. Use Server Components where possible.
- **Asset Optimization**: Optimize images (`next/image`), use efficient formats (WebP). Minify CSS and JS (handled by Next.js build).

### 9. Security Guidelines
- **Authentication Handling**: If authentication is added, use established libraries/services (e.g., NextAuth.js). Securely store tokens.
- **Data Validation**: Validate all user inputs on both client and server (e.g., contact form, API inputs) using Zod.
- **API Security**: If creating backend APIs:
    - Use HTTPS.
    - Implement rate limiting.
    - Sanitize inputs to prevent injection attacks (SQLi, XSS).
    - Set appropriate CORS headers.
- **Dependency Management**: Regularly update dependencies (`npm audit`). Use tools like Snyk or Dependabot.
- **Environment Variables**: Store sensitive information (API keys, secrets) in environment variables. Do not commit `.env.local` files. Prefix client-side env vars with `NEXT_PUBLIC_`.
- **Sensitive Data Handling**: Avoid logging sensitive data. Be mindful of what data is exposed to the client.
- **Security Best Practices**: Follow OWASP Top 10. Use `eslint-plugin-security`. Set secure HTTP headers (e.g., Content-Security-Policy, X-Content-Type-Options).

### 10. Development Workflow
- **Git Workflow**:
    - Use a feature branching workflow (e.g., GitFlow-like).
    - `main` branch for production, `develop` for integration.
    - Create feature branches from `develop` (e.g., `feature/add-contact-form`).
- **Branch Naming**: `feature/descriptive-name`, `bugfix/issue-id-name`, `hotfix/urgent-fix-name`.
- **Commit Message Format**: Follow Conventional Commits (e.g., `feat: add user login page`, `fix: resolve rendering bug in component X`).
- **PR (Pull Request) Requirements**:
    - Link to issue (if applicable).
    - Clear description of changes.
    - Self-review before requesting review.
    - All CI checks must pass.
    - At least one approval from another team member (if applicable).
- **Code Review Process**:
    - Constructive and respectful feedback.
    - Focus on code quality, correctness, performance, and adherence to guidelines.
    - Reviewers should test changes locally if significant.
- **CI/CD Practices**:
    - CI (Continuous Integration): Automate build, linting, testing on every push/PR (e.g., GitHub Actions).
    - CD (Continuous Deployment): Automate deployment to staging/production environments after PR merge to `develop`/`main` (e.g., Vercel deployments).
- **Version Control Guidelines**: Commit frequently with meaningful messages. Rebase feature branches onto `develop` before merging to maintain a clean history.

## Enforcement and Tools

### Linting and Formatting
- **ESLint Configuration**: Use a comprehensive ESLint config (e.g., `eslint-config-next`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `@typescript-eslint/eslint-plugin`).
- **Prettier Setup**: Integrate Prettier for automatic code formatting. Ensure ESLint and Prettier configurations do not conflict (`eslint-config-prettier`).
- **TypeScript Compiler Options**: Use strict mode (`"strict": true` in `tsconfig.json`).
- **Git Hooks**: Use Husky and lint-staged to run linters/formatters on pre-commit.
- **CI Checks**: Include linting and formatting checks in the CI pipeline.

### IDE Configuration
- **VS Code Settings**: Share recommended VS Code settings (`.vscode/settings.json`) for consistency (e.g., default formatter, indent size).
- **Extensions**: Recommend extensions: ESLint, Prettier, Tailwind CSS IntelliSense, Import Cost, GitLens.
- **Snippets**: Consider shared snippets for common patterns.
- **Debugging Setup**: Configure `launch.json` for easy debugging of Next.js app.

## Best Practices

### 1. Code Quality
- **Keep functions small and focused**: Single Responsibility Principle.
- **Follow DRY (Don't Repeat Yourself) principles**: Abstract reusable logic.
- **Maintain separation of concerns**: UI, business logic, data fetching.
- **Use meaningful names**: For variables, functions, components, etc.
- **Write self-documenting code**: Clear logic, good naming. Comments for complex parts.
- **Handle errors appropriately**: Graceful error handling, user feedback.

### 2. Performance
- **Optimize bundle size**: As detailed above.
- **Implement code splitting**: Handled by Next.js.
- **Use proper caching**: For data fetching, static assets.
- **Optimize rendering**: Minimize re-renders, use Server Components.
- **Follow lazy loading patterns**: For images and components.

### 3. Maintainability
- **Write clear documentation**: JSDoc, READMEs.
- **Use consistent patterns**: Throughout the codebase.
- **Implement proper error handling**: Robust and user-friendly.
- **Follow SOLID principles**: Where applicable in component design and logic.
- **Keep dependencies updated**: Regularly review and update.

### 4. Collaboration
- **Write clear commit messages**: Conventional Commits.
- **Document breaking changes**: In PRs and changelogs.
- **Maintain changelog**: If applicable.
- **Review code thoroughly**: Constructive feedback.
- **Share knowledge**: Document decisions, pair program if needed.
