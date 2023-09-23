import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-test',
  templateUrl: './lazy-test.component.html',
  styleUrls: ['./lazy-test.component.scss']
})
export class LazyTestComponent {

  @Input() fromHost:any ;

  ngOnInit(){
    console.log("inside lazy component", this.fromHost);
    
  }
}
