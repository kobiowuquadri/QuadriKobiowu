# Quadri Kobiowu Portfolio

Personal portfolio website for Quadri Kobiowu, an independent Software Engineer, Full-Stack Developer, Mobile App Engineer, Backend Engineer, Technical Consultant, and System Architect based in Nigeria.

## Overview

This website showcases selected software engineering work, services, experience, skills, collaboration availability, and contact details.

The homepage project section is configured to show the first 6 projects from `src/data/projectsData.js`. A `See More Projects` button links to:

```txt
/projects
```

That page shows all projects, including projects outside the homepage limit, and includes filters for project type.

Each project card has its own `Read More` link that opens a dedicated project details page using:

```txt
/project/:id
```

Current homepage project flow:

```txt
Pagia -> Rekrutklin Mobile App -> SafeNaija -> ImprexiTrak -> GFB Strategic Consulting Limited Website -> Kodelift
```

Cyberblock, Modules, YACSN, Code Vortex Academy, and Siraj remain in the project data and appear on the `/projects` page even though they are outside the 6-card homepage limit.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- React Icons

## Project Structure

```txt
src/
  assets/                 Project images, profile assets, and CV
  components/             Portfolio sections and UI components
  data/projectsData.js    Project content and display order
  pages/Home/             Homepage composition
  pages/ProjectDetails/   Dynamic project detail page
```

## Managing Projects

Project content lives in:

```txt
src/data/projectsData.js
```

To change the homepage order, reorder the objects in the `projects` array.

To change how many projects show on the homepage, update:

```js
const FEATURED_PROJECT_LIMIT = 6;
```

in:

```txt
src/components/Projects/Projects.jsx
```

Each project supports fields such as:

- `id`
- `title`
- `shortDescription`
- `fullDescription`
- `problem`
- `impact`
- `image`
- `gallery`
- `technologies`
- `liveLink`
- `appStoreLink`
- `playStoreLink`
- `role`
- `features`
- `contributions`
- `highlight`

## CV

The resume file used by the website is:

```txt
src/assets/QUADRI_ KOBIOWU_ CV.pdf
```

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Notes

- The contact form opens a prefilled email draft using `mailto:`.
- Favicon and profile assets are generated from `devquat.png`.
- The project detail page automatically renders optional contribution/responsibility sections when a project defines them.
