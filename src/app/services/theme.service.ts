import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export enum Theme {
  LIGHT = 'light-theme',
  DARK = 'dark-theme'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentThemeSubject: BehaviorSubject<Theme>;
  public currentTheme$: Observable<Theme>;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    // Default to light theme for SSR
    this.currentThemeSubject = new BehaviorSubject<Theme>(Theme.LIGHT);
    this.currentTheme$ = this.currentThemeSubject.asObservable();

    if (this.isBrowser) {
      // Initialize with proper theme in browser
      this.currentThemeSubject.next(this.getInitialTheme());

      // Check for theme preference changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const newTheme = e.matches ? Theme.DARK : Theme.LIGHT;
        this.setTheme(newTheme);
      });
    }
  }

  private getInitialTheme(): Theme {
    if (!this.isBrowser) {
      return Theme.LIGHT;
    }

    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && Object.values(Theme).includes(savedTheme as Theme)) {
      return savedTheme as Theme;
    }

    // Otherwise use system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? Theme.DARK
      : Theme.LIGHT;
  }

  public getTheme(): Theme {
    return this.currentThemeSubject.value;
  }

  public setTheme(theme: Theme): void {
    // Update the subject
    this.currentThemeSubject.next(theme);

    if (this.isBrowser) {
      // Save to localStorage
      localStorage.setItem('theme', theme);

      // Apply theme to document
      document.body.classList.remove(...Object.values(Theme));
      document.body.classList.add(theme);
    }
  }

  public toggleTheme(): void {
    const newTheme = this.currentThemeSubject.value === Theme.LIGHT
      ? Theme.DARK
      : Theme.LIGHT;
    this.setTheme(newTheme);
  }
}
