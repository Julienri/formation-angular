import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  afficherLogo = false;
  titreBouton = 'cacher';

  @Output()
  // import sur angular core, très très important !!! Quand j'émets un événement, j'indique ce qu'on renvoie
  clickSurImage = new EventEmitter<boolean>();

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
  }

  afficherImage() {
    this.titreBouton = 'cacher';
    this.afficherLogo = ! this.afficherLogo;

    if (! this.afficherLogo) {
      this.titreBouton = 'afficher';

    }

    this.clickSurImage.emit(this.afficherLogo);
  }

}
