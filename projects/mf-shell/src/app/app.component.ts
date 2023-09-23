import { Component } from '@angular/core';
import { MicrofrontendService } from './services/microfrontend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mf-shell';
  constructor(public mfService: MicrofrontendService) {}

  passDataToRemote(componentReference:any){
    componentReference.fromHost = {prop1:'shell', prop2:'shell_app'}
  }
}
