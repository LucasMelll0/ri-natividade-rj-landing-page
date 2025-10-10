import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { MainSection } from "./components/main-section/main-section";

@Component({
  selector: 'app-root',
  imports: [Header, MainSection],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
