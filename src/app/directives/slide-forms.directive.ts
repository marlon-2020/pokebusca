import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[slideForms]'
})
export class SlideFormsDirective {

  @Input() slideForms = ''

  constructor(
    private renderer: Renderer2, 
    private element: ElementRef
  ) { }
  
  @HostListener('click') slide(){
    let container = this.renderer.selectRootElement(this.element.nativeElement, true)
    let sections = container.querySelectorAll('section')
    if(this.slideForms == 'login'){
      sections[0].style.transform = "translateY(-500px)"
      sections[1].style.transform = "translateY(-500px)"
      console.log('vai para o login')
    }else if(this.slideForms == 'cadastrar'){
      console.log('vai para o cadastro')
      
      sections[0].style.transform = "translateY(0px)"
      sections[1].style.transform = "translateY(0px)"
    }
  }

}
