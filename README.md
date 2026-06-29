# Jose Rodriguez — Portfolio

Personal portfolio website for **Jose Rodriguez**, Senior Software Engineer.

**Live site:** [joserodriguez224.github.io](https://joserodriguez224.github.io)

## Branches (important)

| Branch | Purpose |
|--------|---------|
| **`source`** | Your code — always commit and push here |
| **`main`** | Built website only — **do not push to this branch** |

GitHub Pages serves the **`main`** branch automatically. GitHub Actions builds your code from **`source`** and updates **`main`** for you.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to github.io

**Always use the `source` branch:**

```powershell
git checkout source
git add .
git commit -m "Update portfolio"
npm run deploy
```

Or manually:

```powershell
git push origin source
```

Then:

1. Wait **1–2 minutes** for [GitHub Actions](https://github.com/JoseRodriguez224/joserodriguez224.github.io/actions) to finish (green checkmark)
2. Open [joserodriguez224.github.io](https://joserodriguez224.github.io)
3. **Hard refresh** your browser: **Ctrl + Shift + R**

### Common mistakes

- **Pushing to `main`** — this breaks the live site or skips the build step
- **Not on `source` branch** — run `git checkout source` before committing
- **Browser cache** — always hard refresh after deploy

## Links

- **GitHub:** [github.com/joserodriguez224](https://github.com/joserodriguez224)
- **LinkedIn:** [linkedin.com/in/jose-rodriguez-246047240](https://www.linkedin.com/in/jose-rodriguez-246047240)
- **Email:** joserodriguezlm2026@outlook.com

## License

MIT © Jose Rodriguez
