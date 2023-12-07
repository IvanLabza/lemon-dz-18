import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormAppComponent } from "./form-app/form-app.component";
import { FtrAppComponent } from "./ftr-app/ftr-app.component";
import { HeadAppComponent } from "./head-app/head-app.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, FormAppComponent, FtrAppComponent, HeadAppComponent]
})
export class AppComponent {
  title = 'lemon-dz-18';
}
