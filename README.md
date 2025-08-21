# info

[![CI Tests](https://github.com/zkm/info/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/zkm/info/actions/workflows/test.yml)
[![Deploy to Pages](https://github.com/zkm/info/actions/workflows/gh-pages.yml/badge.svg?branch=main)](https://github.com/zkm/info/actions/workflows/gh-pages.yml)

info is a personal website built using webpack, webpack-dashboard, and jest. It is automatically deployed to GitHub Pages via GitHub Actions.

## Installation

1.  Clone the repository: `git clone git@github.com:zkm/info.git`
    
2.  Navigate to the project directory: `cd info`
    
3.  Install the dependencies: `yarn`

Requirements
- Node.js 20
- Yarn 1.x

## Try it locally

Install dependencies and start the dev server with HMR:

```zsh
yarn
yarn start
```

Build a production bundle to `dist`:

```zsh
yarn build
```

## Development

To run the app in development mode with webpack-dashboard: `yarn start`

This will start the development server and open the app in your default browser. Any changes you make to the source code will automatically trigger a hot reload.

## Build

To build the app for production: `yarn build`

This will generate optimized and minified assets in the `dist` directory.

## Testing

To run the tests: `yarn test`

This will execute the test suite and provide feedback on the test results.


## Deployment (GitHub Pages via Actions)

Deployments are automated. On every push to `main`:
- GitHub Actions builds the app (`yarn build`).
- The `dist` folder is published to GitHub Pages (Source: GitHub Actions).

View your live site at: https://zkm.github.io/info/

Manual deploy: You can trigger the workflow from the Actions tab using “Run workflow”.

Notes
- Build output directory: `dist` (see `webpack.config.prod.js`).
- The workflow file is at `.github/workflows/gh-pages.yml` and uses the official Pages actions (`upload-pages-artifact` and `deploy-pages`).

## Troubleshooting

- If the site looks outdated, check the latest runs of the deploy workflow and confirm the "Deploy to GitHub Pages" job succeeded. A page URL is shown on success.
- Ensure `dist` contains `index.html` and assets after `yarn build`.
- Pages source should be set to "GitHub Actions" in repo Settings → Pages.

## Additional Dashboard Options

The webpack-dashboard provides additional options for customization:

*   Progress Bar: To enable the progress bar during the build process, set the `showProgress` option to `true` in the webpack configuration file.
    
*   Customizations: You can customize the appearance of the dashboard by specifying custom colors and layouts in the webpack configuration file.

Refer to the webpack-dashboard documentation for more information on how to utilize these options.

## Resources

*   [Webpack Documentation](https://webpack.js.org/)
*   [Webpack Dashboard Documentation](https://github.com/FormidableLabs/webpack-dashboard)
*   [Jest Documentation](https://jestjs.io/docs/getting-started)

### License

This project is licensed under the [MIT License](LICENSE).
