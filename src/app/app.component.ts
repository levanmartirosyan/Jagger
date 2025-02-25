import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavComponent } from './navigation/nav/nav.component';
import { ToolsService } from './services/tools.service';
import { LoadingComponent } from './loadings/loading/loading.component';
import { FooterComponent } from './navigation/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, LoadingComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(public tools: ToolsService, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      window.scrollTo(0, 0);
    });
  }

  title = 'jagger';
}
