import { Directive, Input, OnChanges, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[listFor]'
})
export class ForDirective implements OnChanges{
  @Input('listForIn') numbers: number[]

  constructor(
    private container:ViewContainerRef,
    private template: TemplateRef<any>
  ) { 
  }

  ngOnChanges(): void {
    for(let number of this.numbers){
      this.container.createEmbeddedView(this.template, { $implicit: number })
    }
    console.log(this.numbers)
  }
}
