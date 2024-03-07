
# MicrofrontendMf


https://github.com/module-federation/module-federation-examples/blob/master/angular15-microfrontends-lazy-components

https://github.com/module-federation/module-federation-examples/tree/master/angular15-vue3

Steps : 
we have created one more application suing. 
    > cd microfrontend-mf
    
    > ng g application mf-shell

    install @angular-builders/custom-webpack
    install ngx-build-plus
    
Update the angular.json with build configration in respective places.


"architect": {
        "build": {
          "builder": "ngx-build-plus:browser",
          "options": {
          ...
}


 "serve": {
          "builder": "ngx-build-plus:dev-server",
          "options": {
          ...

 "test": {
          "builder": "ngx-build-plus:karma",
          "options": {
          ...

-----------------------------------------------------------------------------------------------------------------------------------------------------
we have to add webpack.config files and their content here.


https://github.com/module-federation/module-federation-examples/tree/master/angular15-vue3

Here we can find imp details to load the remote app in to shell.

https://github.com/module-federation/module-federation-examples/tree/master/angular15-microfrontends-lazy-components/projects/mdmf-shell/src

most of the things are same, webpack confing is there and other details like utils to load the remote app creating bootstraping module and route.

custome webpack link -https://github.com/cascornelissen/event-hooks-webpack-plugin
## Adding new application
- create new application without routing.
- add the webpack config files.
- update the angular json file.
- now update the shell app to load the app dynamically in side shell's one of the component.

## webpack plugin ref- 

- https://webpack.js.org/contribute/writing-a-plugin/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
Need to update this dist path.






