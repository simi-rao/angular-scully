import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "angular-scully",
  outDir: './dist/static',
  puppeteerLaunchOptions: {executablePath: process.env.CHROMIUM_PATH},
  routes: {
  }
};