# Angular Pet Workshop

-How was this built?

npm install -g @angular/cli
ng new first-app --no-standalone

ng generate service cars

ng generate module cars
ng generate component cars/add
ng generate component cars/view
ng generate component cars/list
ng generate component cars/edit

ng generate module layout
ng generate component layout/menu

Order of Build:

- run above `ng serve`
- arrange app-routing.module.ts
- check all pets AND add pet view
- create model folder with a pet interface
- create data folder with an array of Pets!
- add pets array to pets.service.ts, importing - the pet interface, pets data collection
- list component: import car service into here and fill a Pets array property with it . Setup constructor correctly
- create add in service to add to pets array and - make id increment
- create FORM !

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

## Bootstrap

You could install bootstrap but I just pulled in a CDN from [here](https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_temp_portfolio&stacked=h)

## Json Server

- `npm install -g json-server`
- from within the data directory: `json-server --watch pets.json`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
