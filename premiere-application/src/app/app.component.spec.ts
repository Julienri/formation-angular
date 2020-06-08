import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ListeWookiesComponent } from './features/wookie/liste-wookies/liste-wookies.component';
import { LogoComponent } from './shared/components/logo/logo.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({ // la partie module correspond au app en Jasmine
      declarations: [
        AppComponent,
        LogoComponent, // mocker ce composant
        ListeWookiesComponent // mocker ce composant
      ],
    }).compileComponents();
  }));

  it('should create the app', () => { // correspond au test unitaire, test de comportement
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Gestion des naissances de Wookies !'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.monTitre).toEqual('Gestion des naissances de Wookies !');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    // query selector, test du html5 le . permet de tester dans la classe direct
    expect(compiled.querySelector('h1').textContent).toEqual('Gestion des naissances de Wookies !');
  });
});
