# info

info is a personal website built using webpack, webpack-dashboard, and jest.

## Installation

1.  Clone the repository: `git clone git@github.com:zkm/info.git`
    
2.  Navigate to the project directory: `cd info`
    
3.  Install the dependencies: `yarn`

## Development

To run the app in development mode with webpack-dashboard: `yarn start`

This will start the development server and open the app in your default browser. Any changes you make to the source code will automatically trigger a hot reload.

## Build

To build the app for production: `yarn build`

This will generate optimized and minified assets in the `dist` directory.

## Testing

To run the tests: `yarn test`

This will execute the test suite and provide feedback on the test results.


## Deployment

To deploy the application:
1. Update the necessary deployment configuration settings, such as API keys or deployment targets.
2. Run the deploy command: `yarn deploy`

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
