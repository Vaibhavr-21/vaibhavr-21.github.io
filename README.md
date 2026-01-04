<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1EL2XpNp1IO3xyTrJ0sm_V9Ve9g7PIif6

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages ✅

This project is a Vite app and must be *built* before publishing. The repo includes a GitHub Actions workflow (`.github/workflows/pages.yml`) that runs `npm run build` and publishes the `dist` output to GitHub Pages automatically when you push to `main`.

Notes:
- Ensure `base` in `vite.config.ts` matches your repo path (e.g. `base: '/myprofile/'`).
- You can test the production build locally: `npm run build` then `npm run preview` or `npx serve -s dist`.
- After pushing, check *Settings → Pages* to confirm the site URL. If you previously pointed Pages at the source files (not the built `dist`), the browser will try to load TypeScript sources like `index.tsx` and fail with errors such as Firefox's `NS_ERROR_CORRUPTED_CONTENT`.
