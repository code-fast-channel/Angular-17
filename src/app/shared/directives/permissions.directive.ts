import { Directive } from '@angular/core';

@Directive({
  selector: 'appPermissions',
  standalone: true
})
export class PermissionsDirective implements OnInit {

  @Input() hideIfNotAuthorized: string = null;
  @Input() multipleHideIfNotAuthorized: Array<string> = [];
  

  constructor() { }

  ngOnInit() {

  }

}
