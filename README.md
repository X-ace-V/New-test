hello there


## Linting

Run ESLint locally:

```sh
npm run lint
```


## Crux UI Changes — Verification

The following UI files were changed. Open them to view the `highlight-start` / `highlight-end` markers showing the exact edits:

- Frontend/src/components/EnvironmentView.tsx: fixed header height (consistent 48px) and moved actions to the main header area.
- Frontend/src/components/computerInterface.tsx: routes File Viewer actions into the main header.
- Frontend/src/components/ComputerInterfaceHeader.tsx: wraps buttons in tooltips and keeps header static.

How to verify in the app:
- Start a chat, then open the environment panel (top-right ‘Crux environment’).
- Open any file or this README; switch between Editor/Preview.
- The top header bar remains a consistent height and the File Viewer actions (Expand/Preview toggle) appear in the header next to the title.

Tip: search the code for `highlight-start` to jump to the changes.
\n\n## Repository Summary\n\nThis repository serves as a testing ground for SWE Agent tasks.
