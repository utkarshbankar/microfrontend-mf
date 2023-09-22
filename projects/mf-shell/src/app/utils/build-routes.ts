import { LoadRemoteModuleOptions, loadRemoteModule } from './federation-utils';
import { Routes } from '@angular/router';
import { APP_ROUTES } from '../app-routing.module';

export type Microfrontend = LoadRemoteModuleOptions & {
    displayName: string;
    routePath: string;
    ngModuleName: string;
};

export function buildRoutes(options: Microfrontend[]): Routes {
    const lazyRoutes: Routes = options.map(o => ({
        path: o.routePath,
        loadChildren: () => loadRemoteModule(o).then(m => m[o.ngModuleName]),
    }));

    return [...APP_ROUTES, ...lazyRoutes];
}