import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-dynamic-remote',
  templateUrl: './lazy-dynamic-remote.component.html',
  styleUrls: ['./lazy-dynamic-remote.component.scss']
})
export class LazyDynamicRemoteComponent implements OnInit {
  @Input() inputFromShell:any;
  inputProp:any;
  ngOnInit(){
    console.log("inside the dynamic remote", this.inputFromShell);
     
  }
}
