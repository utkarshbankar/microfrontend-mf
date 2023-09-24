import { Component, Injector, NgModuleRef, ViewChild, ViewContainerRef, createNgModule, OnInit, ComponentRef } from '@angular/core';
import { loadRemoteModule } from '../utils/federation-utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('moduleLoader', {read: ViewContainerRef}) remoteModule!: ViewContainerRef;
  viewContainer: any;

 constructor(private injector:Injector){}
  async ngOnInit() {
    const m = await loadRemoteModule({
      remoteName: 'dynamicRemoteApp' ,
      remoteEntry: 'http://localhost:4400/dynamicRemoteAppEntry.js',
      exposedModule: 'dynamicRemoteAppModule'
    }) ;
    const modRef:NgModuleRef<any> = createNgModule(m.LazyDynamicRemoteModule , this.injector);
    const moduleFactory = modRef.instance.resolveComponent();
    const dynamicCompRef:ComponentRef<any> = this.remoteModule.createComponent(moduleFactory, {ngModuleRef: modRef});
    if(dynamicCompRef){
      dynamicCompRef['instance'].inputFromShell = { home:'home Prop' , homeShell: 'shell  home Prop'};
    }
   }
}
