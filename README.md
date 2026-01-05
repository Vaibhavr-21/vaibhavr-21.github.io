# Vaibhav Reddy Portfolio

This is a React application for Vaibhav Reddy's professional portfolio.

## Automatic Deployment

This repository is configured to deploy automatically to GitHub Pages using GitHub Actions.

### How it works
1.  Any push to the `main` branch triggers the action.
2.  The action builds the project and pushes the output (`dist/` folder) to the `gh-pages` branch.
3.  GitHub Pages serves the website from the `gh-pages` branch.

### Required Settings
For this to work, you must configure your repository settings:
1.  Wait for the Action to run successfully at least once (this creates the `gh-pages` branch).
2.  Go to **Settings** > **Pages**.
3.  Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4.  Under **Branch**, select **gh-pages** and ensure the folder is **/(root)**.
5.  Click **Save**.
