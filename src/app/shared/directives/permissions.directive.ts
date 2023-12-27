import { Directive, Input,  ElementRef, Renderer2,OnInit } from '@angular/core';
import { permissionsConfig, permissions } from '../guards/auth.permissions.constant';
@Directive({
  selector: '[appPermissions]',
  standalone: true
})
export class PermissionsDirective implements OnInit {

  @Input() appPermissions: any = null;
  @Input() hideIfNotAuthorized: any = null;
  @Input() multipleHideIfNotAuthorized: Array<string> = [];
  

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if(this.multipleHideIfNotAuthorized.length > 0) {
      const isHide = this.multipleHideIfNotAuthorized.some(val => permissions.hasOwnProperty(val) && val[permissions]);
      if(!isHide) {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
      }
    }

    if(this.hideIfNotAuthorized) {
      if(permissions.hasOwnProperty(this.hideIfNotAuthorized) && !permissions[this.hideIfNotAuthorized]) {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
      }
    }
  }

}
