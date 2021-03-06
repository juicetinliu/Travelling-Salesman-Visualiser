import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[app-pointrowhost]',
})

// Acts as a container for the pointrows - use in html as <ng-template app-pointrowhost></ng-template>
export class PointrowDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
