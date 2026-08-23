# Repository instructions

## Commit messages

Use Conventional Commits:

`<type>(<scope>): <description>`

Allowed types:

- `feat`: add user-facing functionality
- `fix`: correct broken behavior
- `refactor`: restructure code without changing behavior
- `style`: formatting-only changes
- `docs`: documentation changes
- `test`: add or update tests
- `ci`: CI/CD workflow changes
- `build`: dependencies or build configuration
- `chore`: repository maintenance

Preferred scopes:

- `receipt`
- `dashboard`
- `button`
- `counter`
- `store`
- `eslint`
- `prettier`
- `storybook`
- `ci`
- `deps`

Rules:

- Write commit messages in English with simple words.
- Use lowercase imperative descriptions.
- Do not end the subject with a period.
- Keep the subject at or below 72 characters.
- Describe one logical change per commit.
- Do not use an issue number as the scope.
- Put issue references in the commit body as `Refs #<number>`.
- For breaking changes, add `!` after the type or scope and explain
  `BREAKING CHANGE:` in the commit body.

Examples:

- `feat(receipt): add removable receipt rows`
- `fix(button): forward native button props`
- `ci(prettier): check formatting in pull requests`
- `refactor(store): add typed Redux hooks`
- `docs(readme): document local setup`

When suggesting a commit message, inspect the actual staged diff and describe
only the staged changes. Do not claim that tests passed unless they were run.
