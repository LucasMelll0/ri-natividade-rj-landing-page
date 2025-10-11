import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { MainSection } from "./components/main-section/main-section";
import { FeaturesSection } from "./components/features-section/features-section";
import { AboutSection } from "./components/about-section/about-section";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, MainSection, FeaturesSection, AboutSection, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
