import { Directive, effect, ElementRef, inject, Input, signal } from '@angular/core';

@Directive({
  selector: '[appHighlightCompleteTodo]',
  standalone: true
})

export class HighlightCompleteTodoDirective {
  private _isCompleted = signal(false);
  
  @Input({ required: true }) set isCompleted(value: boolean) {
    this._isCompleted.set(value);
  }

  el = inject(ElementRef);

  stylesEffect = effect(() => {
    if (this._isCompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = '#d3f9d8';
      this.el.nativeElement.style.color = '#6c757d';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = 'transparent';
      this.el.nativeElement.style.color = 'inherit';
    }
  });
}
