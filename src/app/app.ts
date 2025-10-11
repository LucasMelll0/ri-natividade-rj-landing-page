import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { MainSection } from "./components/main-section/main-section";
import { FeaturesSection } from "./components/features-section/features-section";

@Component({
  selector: 'app-root',
  imports: [Header, MainSection, FeaturesSection],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
