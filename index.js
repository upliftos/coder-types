/**
 * @upliftos/coder
 *
 * Type-only package for Coder projects.ts configuration.
 * This file provides the defineConfig runtime helper.
 */

/** Identity function that provides type checking for projects config */
function defineConfig(config) {
  return config;
}

module.exports = { defineConfig };
module.exports.defineConfig = defineConfig;
