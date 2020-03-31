import { Directive,  TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIsSpinner]'
})
export class IsSpinnerDirective {

  constructor(
    private templateRef: TemplateRef<any>, 
    private viewContainer: ViewContainerRef
  ) { }
  @Input() set appIsSpinner(condition: boolean) {
    if (condition) {
     this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
     this.viewContainer.clear();
    } 
 }

}
