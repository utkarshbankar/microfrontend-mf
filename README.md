# MicrofrontendMf


we ahve basic 3 applications 
one is shell 
2nd is remote and third is 
library 

https://github.com/module-federation/module-federation-examples/blob/master/angular15-microfrontends-lazy-components

Steps : 
we have created one more application suing. 
    > cd microfrontend-mf
    
    > ng g application mf-shell

    install @angular-builders/custom-webpack
    install ngx-build-plus
    
Update the angular.json with build configration in respective places.

... 
"architect": {
        "build": {
          "builder": "ngx-build-plus:browser",
          "options": {
...
-----------------------------------------------------------------------------------------------------------------------------------------------------
...
 "serve": {
          "builder": "ngx-build-plus:dev-server",
          "options": {
...
-----------------------------------------------------------------------------------------------------------------------------------------------------
...
 "test": {
          "builder": "ngx-build-plus:karma",
          "options": {
...


https://github.com/module-federation/module-federation-examples/tree/master/angular15-vue3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

