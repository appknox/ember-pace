# [Pace.js](http://github.hubspot.com/pace/docs/welcome/) load progress bar for Ember apps

## Installation

Using latest Ember-cli, run the command:

`ember install @appknox/ember-pace`

## Configuration

All options, excluding `color` and `theme` related to the addon, are documented on [http://github.hubspot.com/pace/](http://github.hubspot.com/pace/#configuration).

```javascript
var ENV = {
  pace: {
  
    // addon-specific options to configure theme
    theme: 'minimal',
    color: 'blue',
    
    // pace-specific options
    // learn more on http://github.hubspot.com/pace/#configuration
    //           and https://github.com/HubSpot/pace/blob/master/pace.coffee#L1-L72
    catchupTime: 50,
    initialRate: .01,
    minTime: 100,
    ghostTime: 50,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: true,
    restartOnPushState: true,
    restartOnRequestAfter: 500,
    target: 'body',
    elements: {
      checkInterval: 100,
      selectors: ['body', '.ember-view']
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
      trackWebSockets: true,
      ignoreURLs: []
    }
  }
};
```

## Themes

This addon is bundled with Material spinner theme, which is set by default. See it on [demo page](http://vectart.github.io/ember-cli-pace/).

Pace.js originally provides [14 progress bar themes](https://github.com/HubSpot/pace/tree/master/themes/black) in [10 colors](https://github.com/HubSpot/pace/tree/master/themes). See the progress bars and spinners in action: http://github.hubspot.com/pace/docs/welcome/

## Pace API

More details on Pace events, methods and configuration could be found on http://github.hubspot.com/pace/

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
