import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent   {

  constructor() { }

  openSource(src:string){
    window.open(src);
  }

}
