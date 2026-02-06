import { AfterViewInit, Component, ElementRef, OnDestroy, signal } from '@angular/core';
import { gsap } from 'gsap';
import { Experience } from './experience/experience';

@Component({
  selector: 'app-root',
  imports: [Experience],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly title = signal('Levent Enyiro');
  private animationContext?: gsap.Context;

  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.animationContext = gsap.context(() => {
      gsap.from('.navbar', { y: -20, opacity: 0, duration: 0.8, ease: 'power2.out' });
      gsap.from('.nav-item', {
        y: -10,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1
      });
      gsap.from('.hero-title', { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out' });
      gsap.from('.hero-subtitle', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        delay: 0.2
      });
      gsap.from('.hero-actions', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.35
      });
      gsap.from('.hero-image', {
        scale: 0.96,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      });
      gsap.from('.about, .work, .cv, .footer', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
        delay: 0.3
      });
    }, this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.animationContext?.revert();
  }
}
