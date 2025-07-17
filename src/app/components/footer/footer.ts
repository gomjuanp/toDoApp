import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  // Function to copy email address to clipboard
  copied = false;

  copyEmail() {
  navigator.clipboard.writeText('gomjuan@sheridancollege.ca');
  this.copied = true;
  setTimeout(() => this.copied = false, 500);
  }

}
