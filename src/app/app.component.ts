import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './navigation/nav/nav.component';
import { ToolsService } from './services/tools.service';
import { LoadingComponent } from './loadings/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public tools: ToolsService) {}
  title = 'jagger';
}
