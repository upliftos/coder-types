/**
 * @upliftos/coder — Type definitions for Coder projects.ts configuration files.
 *
 * Usage:
 *
 *   import type { ProjectsConfig } from '@upliftos/coder-types';
 *
 *   const config: ProjectsConfig = {
 *     repo: { url: 'https://github.com/org/repo' },
 *     projects: {
 *       myapp: {
 *         description: 'My application',
 *         color: [14, 165, 233],
 *         platforms: {
 *           web: { path: 'apps/web', port: 3000, url: 'http://localhost:3000' },
 *           api: { path: 'apps/api', port: 3001, url: 'http://localhost:3001' },
 *         },
 *       },
 *     },
 *     defaults: { color: [128, 128, 128] },
 *   };
 *
 *   export default config;
 */

export interface CustomTerminalConfig {
  /** Display label for the terminal tab */
  label: string;
  /** Working directory relative to repo root */
  cwd: string;
  /** Shell command to run */
  command: string;
  /** Show in mosaic layout (default: true) */
  visible?: boolean;
  /** Start automatically on "Run All" (default: false) */
  autoStart?: boolean;
}

export interface ProjectConfig {
  /** Short description of the project */
  description: string;
  /** Project path relative to repo root */
  path?: string;
  /** Tab color — CSS color string or [r, g, b] tuple */
  color: string | [number, number, number];
  /** Platform configurations (web server, API server, mobile app) */
  platforms: {
    web?: {
      /** Path relative to repo root */
      path: string;
      /** Dev server port */
      port: number;
      /** Dev server URL */
      url: string;
      /** URL to open in browser on start (defaults to url) */
      startUrl?: string;
    };
    api?: {
      /** Path relative to repo root */
      path: string;
      /** API server port */
      port: number;
      /** API server URL */
      url: string;
      /** URL to open on start (defaults to url) */
      startUrl?: string;
    };
    mobile?: {
      /** Path relative to repo root */
      path: string;
      /** Mobile framework */
      framework: 'flutter' | 'react-native' | 'swift' | 'kotlin' | string;
      /** Project file (e.g. "MyApp.xcodeproj" for Xcode) */
      project?: string;
      /** Android application ID for logcat filtering */
      applicationId?: string;
    };
  };
  /** Custom terminal panes */
  terminals?: CustomTerminalConfig[];
}

export interface ProjectsConfig {
  /** Repository metadata */
  repo?: {
    /** GitHub repo URL (e.g., https://github.com/org/repo) */
    url: string;
  };
  /** Project definitions keyed by name */
  projects: Record<string, ProjectConfig>;
  /** Default values for projects */
  defaults: {
    /** Default tab color */
    color: string | [number, number, number];
  };
}

/**
 * Helper to define a projects config with full type checking.
 *
 * Usage:
 *   import { defineConfig } from '@upliftos/coder-types';
 *   export default defineConfig({ ... });
 */
export declare function defineConfig(config: ProjectsConfig): ProjectsConfig;
