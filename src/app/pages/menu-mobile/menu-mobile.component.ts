import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.sass']
})
export class MenuMobileComponent {
  width: string = '0px'
  changeWidth() {
    if (this.width != "80dvw"){
      this.width = '80dvw'
    }else{
      this.width = '0px'
    }
  }
  className: string = '';
  changeClassName(){
    
    if(this.className != 'back-filter'){
      this.className = 'back-filter'
    }else{
      this.className = ''
    }
    console.log(this.className)
  }
}
