import { Component, Injector, NgModuleRef, ViewChild, ViewContainerRef, createNgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mf-DynamicRemote';
  // Here we are going to load the lazy module dynamically that means we can load the the module using the ngModuleRef, that code will go here.

  @ViewChild('moduleLoader', {read: ViewContainerRef}) remoteModule!: ViewContainerRef;
  viewContainer: any;

 constructor(private injector:Injector){}
  async ngAfterViewInit() {
    // const m = await loadRemoteModule({
    //   type: 'module',
    //   remoteEntry: 'http://localhost:9014/remoteModuleExposeEntry.js',
    //   exposedModule: './module'
    // }) ;
    const m = (await import('./lazy-dynamic-remote/lazy-dynamic-remote.module')); 
    const modRef:NgModuleRef<any> = createNgModule(m.LazyDynamicRemoteModule , this.injector);
    const moduleFactory = modRef.instance.resolveComponent();
    this.remoteModule.createComponent(moduleFactory, {ngModuleRef: modRef});
   }
}
