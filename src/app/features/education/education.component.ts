import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements AfterViewInit, OnDestroy {

  @ViewChildren('timelineItem')
  timelineItems!: QueryList<ElementRef>;

  private observer!: IntersectionObserver;

  constructor() {}

  ngAfterViewInit(): void {
    this.setupScrollAnimation();
  }

  private setupScrollAnimation(): void {

    const options: IntersectionObserverInit = {
      threshold: 0.35,
      rootMargin: '-50px 0px -80px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }

      });

    }, options);

    this.timelineItems.forEach((item) => {
      this.observer.observe(item.nativeElement);
    });
  }

  ngOnDestroy(): void {

    if (this.observer) {
      this.observer.disconnect();
    }

  }

}