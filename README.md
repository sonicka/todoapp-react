# TODO App

A simple TODO application built with React/TypeScript and Tailwind CSS.

The app allows users to create, manage, and organize tasks with priorities, filtering by status, and a modal-based task creation flow.

It uses mock data for todos and predefined templates.

Frontend-only application with no backend or data persistence.

---

## Deployed preview available [here](https://todoapp-react-ashy-chi.vercel.app/)

## Same app built in Vue available [here](https://github.com/sonicka/todoapp-vue/)

---

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS

---

## Features

### Task List

- Displays all tasks, each shows title, priority and status
- Tasks are sorted by:
  - **Status** (unfinished first)
  - **Priority** (High → Normal → Low)
- Filter option:
  - “Show only unfinished tasks”
- Tasks can be set as finished or deleted

---

### Create New Task

A "New Task" button opens a modal with two options:

#### 1. Create from scratch

- Opens a form for manual task creation
- User fills in the task title and chooses priority

#### 2. Create from template

- Shows predefined templates
- Selecting a template pre-fills the form
- User can still edit before saving

---

## Getting Started

```bash
npm install
npm run dev
```
