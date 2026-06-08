# Generate Professional Git Commit Message

1. Analyze the entire Git repository and review all uncommitted changes, including:

- Newly added files
- Modified files
- Deleted files
- Renamed files
- Refactored code
- Configuration changes
- Documentation updates
- Dependency updates

2. Inspect the actual code changes (git diff), not just file names.
3. Based on the changes, generate a concise and professional commit message.
4. Use Git status and Git diff to analyze all pending repository changes before generating the commit message.

## Mandatory Repository Analysis

Before generating the commit message, you MUST execute and analyze the output of the following Git commands from the repository root:

```bash
git status --short
git diff
git diff --staged
git log --oneline -n 10
```

Additional commands may be executed if required to fully understand the changes:

```bash
git diff --name-status
git diff --stat
git ls-files --others --exclude-standard
```

## Rules

- Determine the most appropriate commit type:
  - feat
  - fix
  - refactor
  - chore
  - docs
  - test
  - build
  - ci
  - perf
  - style
- Summarize the overall purpose of the change.
- Mention only meaningful changes.
- Avoid generic messages such as "updated files" or "minor fixes".
- Group related changes together.
- Keep the summary concise and professional.
- Do not include file paths unless absolutely necessary.
- If multiple commit types are involved, choose the dominant one.
- Do not generate a commit message until all repository changes have been analyzed.
- Analyze the actual code/content changes, not just filenames.
- Include both staged and unstaged changes.
- If no changes are detected, respond with:

```txt
No pending Git changes found.
```

- If the repository cannot be accessed, respond with:

```txt
Unable to analyze repository changes.
```

- Base the commit message entirely on the Git command outputs rather than assumptions from file names or documentation.

## Output Format

Header: v<version> changes

Message:
<commit-type>: <one-line summary>

- Add: <new functionality or files added>
- Modify: <important updates or improvements>
- Delete: <removed functionality or files>
- Refactor: <code restructuring if applicable>

## Example Output

Header: v4.00 changes

Message:
feat: add Playwright API testing framework enhancements

- Add: reusable API request utilities and response validators
- Add: environment-specific configuration support
- Modify: test execution and reporting workflow
- Refactor: common request handling logic for improved maintainability

NOTE: Generate only the commit message in the specified format without any additional explanation and also provide the output in a way that is easy to copy and paste.
