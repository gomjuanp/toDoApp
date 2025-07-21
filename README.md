# 📝 Angular To‑Do App

A simple Angular-based To‑Do app developed as a school project. In its first release, it allows users to **add**, **view**, and **delete** tasks with a **name**, **start date**, **deadline**, and **description**.

---

## 🏗️ Project Structure


src/

├── app/

│ ├── components/

│ │ ├── task-form/ ← Form to create new tasks

│ │ ├── task-list/ ← Displays list of added tasks

│ │ ├── header/ ← App header/navigation

│ │ └── footer/ ← App footer

│ ├── services/ ← TaskService for state & storage

│ └── app.module.ts

└── assets/

└── ... ← Static assets (icons, styles)

---

## 📌 App Overview

This To‑Do app currently enables users to:
- Add tasks with **name**, **start date**, **deadline**, and **description**
- View all added tasks in a list
- Delete tasks

All tasks are stored locally (e.g., in memory or localStorage). The app is **responsive** and works well on desktop, tablet, and mobile screens.

---

## 🚀 Future Enhancements

Planned improvements include:
- 🔐 **User accounts** for personal task management
- 🌙 **Dark mode** for better accessibility and aesthetics
- 🌐 **Localization** support in other languages
- ⏱️ Advanced task features (priority, reminders, etc.)

---

## 🛠️ Setup & Run Locally

```bash
# Install dependencies
npm install

# Run the app
ng serve

# Open in browser
http://localhost:4200
