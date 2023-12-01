'use strict';

/**
 * meh service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meh.meh');
