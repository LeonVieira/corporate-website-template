import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private readonly storageKey = 'theme';

  private darkMode = false;

  constructor() {
    this.loadTheme();
  }

  toggle(): void {
    this.darkMode = !this.darkMode;

    this.applyTheme();

    localStorage.setItem(
      this.storageKey,
      this.darkMode ? 'dark' : 'light'
    );
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem(this.storageKey);

    this.darkMode = savedTheme === 'dark';

    this.applyTheme();
  }

  private applyTheme(): void {
    document.body.classList.toggle(
      'dark-mode',
      this.darkMode
    );
  }
}