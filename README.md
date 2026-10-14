# Life Allocation

Live site: https://aggelosemiris.github.io/life-allocation/

A local, customizable time budgeting app. Built with React, TypeScript, Vite, Tailwind CSS, FullCalendar, IndexedDB, Recharts, and Lucide icons.

## Run

```bash
pnpm install
pnpm dev
```

Open the local address printed by Vite. You can use `npm install` and `npm run dev` instead.

## Verify

```bash
pnpm test
pnpm build
```

## Architecture

- `src/model.ts`: types, budget calculations, overlap detection, sample data, import validation.
- `src/db.ts`: IndexedDB persistence.
- `src/main.tsx`: screens, forms, calendar, analytics, import and export.
- `src/style.css`: responsive light and dark styling.

Everything is stored in the current browser. Export a JSON backup in Settings regularly. Clearing browser storage or losing the device can erase local data.

New repeating activities create the next 12 occurrences. Each occurrence can then be edited independently. Future work could include open ended recurrence rules, series wide editing, drag and drop backlog scheduling, richer goal to activity links, and automated backup reminders.
