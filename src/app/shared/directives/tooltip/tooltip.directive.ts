import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective {
  @Input() appTooltipText: string = '';
  @Input() appTooltipPosition: 'top' | 'right' | 'bottom' | 'left' = 'top';

  private tooltipElement!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltipElement, 'custom-tooltip');
    this.renderer.appendChild(this.tooltipElement, this.renderer.createText(this.appTooltipText));
    this.setPosition();
    this.renderer.appendChild(document.body, this.tooltipElement);
  }

  private hideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
    }
  }

  private setPosition() {
    const hostRect = this.el.nativeElement.getBoundingClientRect();
    const tooltipRect = this.tooltipElement.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;

    let top = 0;
    let left = 0;

    switch (this.appTooltipPosition) {
      case 'top':
        top = hostRect.top + scrollY - tooltipRect.height;
        left = hostRect.left + hostRect.width / 2 - tooltipRect.width / 2;
        break;
      case 'right':
        top = hostRect.top + scrollY + hostRect.height / 2 - tooltipRect.height / 2;
        left = hostRect.right;
        break;
      case 'bottom':
        top = hostRect.bottom + scrollY;
        left = hostRect.left + hostRect.width / 2 - tooltipRect.width / 2;
        break;
      case 'left':
        top = hostRect.top + scrollY + hostRect.height / 2 - tooltipRect.height / 2;
        left = hostRect.left - tooltipRect.width;
        break;
    }

    this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
  }
}
