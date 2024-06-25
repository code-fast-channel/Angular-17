import { Component, OnInit } from '@angular/core';
declare global {
  interface Window { google: any; }
}
// 388293788994-0rigeqckkmhucdbdtnua1o1ec438uhmk.apps.googleusercontent.com
@Component({
  selector: 'app-gsign',
  standalone: true,
  imports: [],
  templateUrl: './gsign.component.html',
  styleUrl: './gsign.component.scss'
})
export class GsignComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Ensure Google Sign-In script is loaded before initializing
    this.loadGoogleSignInScript();
  }

  loadGoogleSignInScript(): void {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      // Script loaded successfully
      this.initializeGoogleSignIn();
    };
    document.head.appendChild(script);
  }

  initializeGoogleSignIn(): void {
    if (window.google && window.google.accounts) {
      window.google.accounts.id.initialize({
        client_id: '388293788994-0rigeqckkmhucdbdtnua1o1ec438uhmk.apps.googleusercontent.com', // Replace with your actual client ID
        callback: this.handleCredentialResponse.bind(this)
      });
    } else {
      console.error('Google API client is not available.');
    }
  }

  handleGoogleSignIn(): void {
    if (window.google && window.google.accounts) {
      window.google.accounts.id.prompt((notification: any) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          console.error('Sign-In prompt not displayed or skipped');
        }
      });
    } else {
      console.error('Google API client is not available.');
    }
  }

  handleCredentialResponse(response: any): void {
    console.log('Credential Response', response);
    // Process the credential response (e.g., send the token to your server)
  }
}
