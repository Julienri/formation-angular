import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestContainerComponent } from './test-container/test-container.component';

// 'routes' fait un lien entre un composant et une URL
// + exemple de rendu des routes
const routes: Routes = [
  {component: TestContainerComponent, path: 'wookies' }
];

@NgModule({
  // import parce que j'ai besoin d'un module extérieur, forRoot permets de créer un constructeur static
  imports: [RouterModule.forRoot(routes)],
  // ce que je mets en accessibilité
  exports: [RouterModule]
})
export class AppRoutingModule { }
