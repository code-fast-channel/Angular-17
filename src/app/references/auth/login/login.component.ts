import { Component,ChangeDetectionStrategy } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import {ToastrService} from '../../../shared/toaster/toaster.service';
import {ToastrType} from '../../../shared/toaster/toaster/toaster.constant';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  userName: any = null;
  password: any = null;
  constructor(private router: Router,private toast: ToastrService) {

  }
submit(): void {
  if(!this.userName || !this.password) {
   this.toast.showToast('Enter username password',ToastrType.Error);
  } else {
    localStorage.setItem('loginToken','loggedIn');
    this.toast.showToast('Login Successfully',ToastrType.Success);
    this.router.navigate(['/dashboard']);
  }

}
}
