import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private _isMenuOpen = signal(false);
  readonly isMenuOpen = this._isMenuOpen.asReadonly();

  toggleMenu() {
    this._isMenuOpen.update((isOpen) => !isOpen);
  }

  closeMenu() {
    this._isMenuOpen.set(false);
  }
}
