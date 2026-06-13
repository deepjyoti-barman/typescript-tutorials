# Generate Professional Git Commit Message

## Repository Analysis

Analyze all pending Git changes before generating the commit message.

### Execute

```bash
git status --short
git diff --staged
git log --oneline -n 5
```

If staged changes are not present, execute:

```bash
git diff
```

### Review

- Added files
- Modified files
- Deleted files
- Renamed files
- Refactoring
- Configuration updates
- Documentation changes
- Dependency updates

Base the commit message on the actual code/content changes, not filenames alone.

## Commit Rules

- Select the most appropriate commit type:
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
- Choose the dominant change type when multiple types exist.
- Focus on meaningful repository changes.
- Avoid vague summaries such as:
  - updated files
  - fixes
  - improvements
  - miscellaneous changes
- Group related changes together.
- Do not include file paths unless required for clarity.

## Version Header

### Format

```text
Header: v<previous-version + 0.1> changes
```

### Examples

```text
0.9 -> 1.0
1.9 -> 2.0
2.9 -> 3.0
4.3 -> 4.4
```

## Failure Conditions

If no pending changes exist:

```text
No pending Git changes found.
```

If the repository cannot be analyzed:

```text
Unable to analyze repository changes.
```

## Output Format

```text
Header: v<version> changes

Message:
<type>: <summary>

- Add: <added functionality>
- Modify: <important updates>
- Delete: <removed functionality>
- Refactor: <structural improvements>
```

Only include sections that contain changes.

Generate only the final commit message. Do not provide explanations, analysis, markdown fences, or additional commentary.

The output must be immediately copy-pasteable and ready for use as-is.
