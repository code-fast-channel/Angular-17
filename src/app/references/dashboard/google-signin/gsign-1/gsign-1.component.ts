import { Component, OnInit, Renderer2 } from '@angular/core';
// import { environment } from '../environments/environment';
// import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-gsign-1',
  standalone: true,
  imports: [],
  templateUrl: './gsign-1.component.html',
  styleUrl: './gsign-1.component.scss'
})
export class Gsign1Component implements OnInit {
  googleClientId: string = '388293788994-0rigeqckkmhucdbdtnua1o1ec438uhmk.apps.googleusercontent.com';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.loadGoogleScript();
    (window as any).handleCredentialResponse = this.handleCredentialResponse.bind(this);
  }

  loadGoogleScript(): void {
    const script = this.renderer.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = () => this.initializeGoogleSignIn();
    this.renderer.appendChild(document.body, script);
  }

  initializeGoogleSignIn(): void {
    const clientId = this.googleClientId;

    const googleSignInDiv = this.renderer.createElement('div');
    this.renderer.setAttribute(googleSignInDiv, 'id', 'g_id_onload');
    this.renderer.setAttribute(googleSignInDiv, 'data-client_id', '388293788994-0rigeqckkmhucdbdtnua1o1ec438uhmk.apps.googleusercontent.com');
    this.renderer.setAttribute(googleSignInDiv, 'data-context', 'signin');
    this.renderer.setAttribute(googleSignInDiv, 'data-ux_mode', 'popup');
    this.renderer.setAttribute(googleSignInDiv, 'data-callback', 'handleCredentialResponse');
    this.renderer.setAttribute(googleSignInDiv, 'data-itp_support', 'true');

    const signInButtonDiv = this.renderer.createElement('div');
    this.renderer.addClass(signInButtonDiv, 'g_id_signin');
    this.renderer.setAttribute(signInButtonDiv, 'data-type', 'standard');
    this.renderer.setAttribute(signInButtonDiv, 'data-shape', 'rectangular');
    this.renderer.setAttribute(signInButtonDiv, 'data-theme', 'filled_blue');
    this.renderer.setAttribute(signInButtonDiv, 'data-text', 'signin_with');
    this.renderer.setAttribute(signInButtonDiv, 'data-size', 'large');
    this.renderer.setAttribute(signInButtonDiv, 'data-logo_alignment', 'left');

    this.renderer.appendChild(document.body, googleSignInDiv);
    this.renderer.appendChild(document.body, signInButtonDiv);
  }

  handleCredentialResponse(response: any): void {
    console.log('Credential Response', response);

    // Decode the JWT token
    // const token = response.credential;
    // const decodedToken: any = jwt_decode(token);

    // Extract the email ID
    // const email = decodedToken.email;
    // console.log('Email ID:', email);

    // You can now use the email ID, for example, send it to your server
  }
}
