# Software Engineering Basics: a course

29 beginner-friendly modules (processes, networking, HTTP, auth, Git, databases, testing, containers, CI/CD, security, AI tools and more).
Each module has a Head First style intro, a quick reference, a multiple-choice quiz and open questions. Quiz scores are stored in the browser (`localStorage`).

Plain static HTML/CSS/JS in `course/`. No build step.

## Structure
- `course/index.html`: landing page and progress
- `course/NN-*.html`: modules 01–29
- `course/style.css`: shared styles (light/dark)
- `course/quiz.js`: shared quiz renderer
- `vercel.json`: serves `course/` as the site root

## Run locally
    npm run dev        # or: python3 -m http.server -d course

## Deploy to Vercel
- Dashboard: import the GitHub repo and keep the defaults (`vercel.json` sets the output directory).
- CLI: `npx vercel --prod`
