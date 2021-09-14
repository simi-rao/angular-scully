# AngularScully

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Command usage

npm i -g @angular/cli

npm i -g @angular/cli@next

ng new <--workspace name-->

ng g m home --route home --module app.module.ts

ng g m blog --route blog --module app.module.ts

ng add @scullyio/init

ng build && npm run scully

ng g @scullyio/blog

ng g @scullyio/init:post --name="First post"

…or create a new repository on the command line
echo "# angular-scully" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/simi-rao/angular-scully.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/simi-rao/angular-scully.git
git branch -M main
git push -u origin main

enable netlify from local

npm install netlify-cli -g
netlify.toml
netlify init
ntl open
