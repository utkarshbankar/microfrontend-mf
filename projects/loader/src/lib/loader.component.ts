import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-loader',
  template: `
    <div [attr.aria-label]="loaderLabel" [attr.id]="loaderId" [ngClass]="loaderClasses" 
         #loaderContainer>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `.loading{
      animation-duration:1s;
      animation-name: loading;
      animation-iteration-count: infinite;
      animation-timing-function:linear;
      animation-direction: alternate;
    }
    
    @keyframes loading{
      0%{
        opacity:0.25%;
      }
      50%{
        opacity:1;
      }
      100%{
        opacity:1;
      }
    }
    `
  ],
  standalone:true,
  imports:[CommonModule]
})
export class LoaderComponent implements AfterViewInit {

  @Input() loaderLabel = '';
  @Input() loaderId = '';
  @Input() loaderClasses = '';

  @ViewChild('loaderContainer') loaderSelector!: ElementRef<HTMLElement>;

  ngAfterViewInit():void{
    const loaderHtmlElement = this.loaderSelector.nativeElement.querySelector('svg');
    if(loaderHtmlElement){
      this.loaderSelector.nativeElement.style.height = loaderHtmlElement.attributes.getNamedItem('height')?.value + 'px';
      this.loaderSelector.nativeElement.style.width = loaderHtmlElement.attributes.getNamedItem('width')?.value + 'px';
      
      loaderHtmlElement.removeAttribute('height');
      loaderHtmlElement.removeAttribute('width');
    }
  }
}
