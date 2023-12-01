import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from './auth.service';

@Directive({
  selector: '[bmLoggedinOnly]',
  standalone: true,
})
export class LoggedinOnlyDirective {
  private destroy$ = new Subject<void>();
  constructor(
    private authService: AuthService,
    private template: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef,
  ) {
    this.authService.isAuthenticated$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isAuthenticated) => {
        if (isAuthenticated) {
          this.viewContainer.createEmbeddedView(this.template);
        } else {
          this.viewContainer.clear();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next;
  }
}
