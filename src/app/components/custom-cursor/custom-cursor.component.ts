import { Component, OnInit, OnDestroy, HostListener, ElementRef, Renderer2, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { ThemeService, Theme } from '../../services/theme.service';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-cursor.component.html',
  styleUrl: './custom-cursor.component.scss'
})
export class CustomCursorComponent implements OnInit, OnDestroy {
  private cursorOuter!: HTMLElement;
  private cursorInner!: HTMLElement;
  private themeSubscription!: Subscription;
  private mouseX = 0;
  private mouseY = 0;
  private isHovering = false;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) {
      return; // Skip initialization on server
    }

    // Get cursor elements
    this.cursorOuter = this.el.nativeElement.querySelector('.cursor-outer');
    this.cursorInner = this.el.nativeElement.querySelector('.cursor-inner');

    // Subscribe to theme changes
    this.themeSubscription = this.themeService.currentTheme$.subscribe(theme => {
      this.updateCursorTheme(theme);
    });

    // Initial theme
    this.updateCursorTheme(this.themeService.getTheme());

    // Start animation loop
    this.animateCursor();

    // Add event listeners for interactive elements
    this.addInteractiveListeners();
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) {
      return;
    }

    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }

    // Remove event listeners
    this.removeInteractiveListeners();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (!this.isBrowser) {
      return;
    }
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  @HostListener('document:mousedown')
  onMouseDown(): void {
    if (!this.isBrowser) {
      return;
    }
    this.renderer.addClass(this.cursorOuter, 'cursor-click');
    this.renderer.addClass(this.cursorInner, 'cursor-click');

    setTimeout(() => {
      this.renderer.removeClass(this.cursorOuter, 'cursor-click');
      this.renderer.removeClass(this.cursorInner, 'cursor-click');
    }, 300);
  }

  private animateCursor(): void {
    if (!this.isBrowser) {
      return;
    }

    const render = () => {
      // Apply smooth animation with lerp (linear interpolation)
      const outerX = this.lerp(
        parseFloat(this.cursorOuter.style.left || this.mouseX + 'px'),
        this.mouseX,
        0.15
      );
      const outerY = this.lerp(
        parseFloat(this.cursorOuter.style.top || this.mouseY + 'px'),
        this.mouseY,
        0.15
      );

      // Position the cursors
      this.renderer.setStyle(this.cursorOuter, 'left', `${outerX}px`);
      this.renderer.setStyle(this.cursorOuter, 'top', `${outerY}px`);
      this.renderer.setStyle(this.cursorInner, 'left', `${this.mouseX}px`);
      this.renderer.setStyle(this.cursorInner, 'top', `${this.mouseY}px`);

      // Continue animation loop
      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
  }

  private lerp(start: number, end: number, factor: number): number {
    return start + (end - start) * factor;
  }

  private updateCursorTheme(theme: Theme): void {
    if (!this.isBrowser) {
      return;
    }

    if (theme === Theme.DARK) {
      this.renderer.addClass(this.cursorOuter, 'cursor-light');
      this.renderer.addClass(this.cursorInner, 'cursor-light');
      this.renderer.removeClass(this.cursorOuter, 'cursor-dark');
      this.renderer.removeClass(this.cursorInner, 'cursor-dark');
    } else {
      this.renderer.addClass(this.cursorOuter, 'cursor-dark');
      this.renderer.addClass(this.cursorInner, 'cursor-dark');
      this.renderer.removeClass(this.cursorOuter, 'cursor-light');
      this.renderer.removeClass(this.cursorInner, 'cursor-light');
    }
  }

  private addInteractiveListeners(): void {
    if (!this.isBrowser) {
      return;
    }

    // Find all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive');

    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
      element.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
    });
  }

  private removeInteractiveListeners(): void {
    if (!this.isBrowser) {
      return;
    }

    const interactiveElements = document.querySelectorAll('a, button, .interactive');

    interactiveElements.forEach(element => {
      element.removeEventListener('mouseenter', this.handleMouseEnter.bind(this));
      element.removeEventListener('mouseleave', this.handleMouseLeave.bind(this));
    });
  }

  private handleMouseEnter(): void {
    if (!this.isBrowser) {
      return;
    }

    this.isHovering = true;
    this.renderer.addClass(this.cursorOuter, 'cursor-hover');
    this.renderer.addClass(this.cursorInner, 'cursor-hover');
  }

  private handleMouseLeave(): void {
    if (!this.isBrowser) {
      return;
    }

    this.isHovering = false;
    this.renderer.removeClass(this.cursorOuter, 'cursor-hover');
    this.renderer.removeClass(this.cursorInner, 'cursor-hover');
  }
}
