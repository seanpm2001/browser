/**
 * @file Encode our channel name constants in one place to avoid typos when
 * using them in different places.
 *
 * Process: Main or Renderer
 */
module.exports = {
  NAVIGATION_REQUESTED: 'navigation-requested',
  RELOAD_REQUESTED: 'reload-requested',
  TOGGLE_DEV_TOOLS_REQUESTED: 'toggle-dev-tools-requested',
};
