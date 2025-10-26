import { Component ,HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  scroll: boolean = true;
  @HostListener('window:scroll') onscrool(): void {
    if (scrollY == 0) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  }
}
