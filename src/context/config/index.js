const path = require('path');
const merge = require('lodash.merge');

/* 
    Loads production config by default, and overlays development config if NODE_ENV is 'development'.
    If production config is missing, the app exits. Development config is optional and only loaded in development.
    The final exported Config merges production and development settings, with development taking precedence. 
*/

const env =
  process.env.NODE_ENV === 'development' ? 'development' : 'production';

let productionConfig = {};
try {
  productionConfig = require(path.join(__dirname, 'production'));
} catch (e) {
  console.error('Error loading production configuration:', e.message || e);
  process.exit(1);
}

let envConfig = {};
if (env === 'development') {
  try {
    envConfig = require(path.join(__dirname, 'development'));
  } catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
      console.error(
        `Error loading configuration for environment "${env}":`,
        e.message || e
      );
    }
  }
}

const Config = merge(productionConfig, envConfig);

module.exports = { Config };
