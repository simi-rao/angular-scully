import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "angular-scully",
  outDir: './dist/static',
  puppeteerLaunchOptions: {
    args: ["-no-sandbox", "-disable-setuid-sandbox"],
  },
  routes: {
  }
};