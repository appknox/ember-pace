'use strict';
var fs = require('fs');
const path = require('path');
const resolve = require('resolve');
const Funnel = require('broccoli-funnel');
const BroccoliMergeTrees = require('broccoli-merge-trees');


const defaultPaceConfig = {
  color: 'blue',
  theme: 'minimal',
  catchupTime: 50,
  initialRate: 0.01,
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
};

module.exports = {
  name: require('./package').name,
  treeForAddonStyles() {
    const tree = this._super.treeForStyles.apply(this, arguments);
    const trees = tree ? [tree]: []
    const paceThemeName = path.join(this.emberPaceConfig.color, 'pace-theme-' + this.emberPaceConfig.theme + '.css')
    const emberPaceThemeFile = path.join('themes', paceThemeName);
    const fullThemeFilePath = path.join(this.pathBase('pace-progressbar'), emberPaceThemeFile);
    if (fs.existsSync(fullThemeFilePath)) {
      const emberPaceCssFiles = new Funnel(this.pathBase('pace-progressbar'), {
        files: [emberPaceThemeFile],
        destDir: 'app/styles',
        annotation: 'EmberPaceThemeFunnel'
      });
      trees.push(emberPaceCssFiles);
      const mergedTrees = new BroccoliMergeTrees(trees, { overwrite: true });
      return mergedTrees;
    }
    throw new Error('Pace theme CSS file was not found: ' + paceThemeName);
  },
  config(environment, appConfig) {
    const appPaceConfig = appConfig.pace || {};
    const emberPaceConfig = Object.keys(
      defaultPaceConfig
    ).reduce(function(config, key) {
      const value = appPaceConfig.hasOwnProperty(key) ? appPaceConfig[key] : defaultPaceConfig[key];
      config[key] = value;
      return config;
    }, {});
    this.emberPaceConfig = emberPaceConfig;
    return {
      'pace': emberPaceConfig
    };
  },
  pathBase(packageName) {
    return path.dirname(resolve.sync(`${packageName}/package.json`, { basedir: __dirname }));
  },
};
