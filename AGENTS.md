# Agent Guidelines

## Command Execution Restrictions

- **Do NOT** execute commands such as `dev`, `build`, `start`, `lint`, `ship`, `check`, `typecheck`, `format`, or similar long-running/pipeline scripts unless explicitly requested by the user.
- Wait for explicit user instruction before triggering project build or dev processes.
