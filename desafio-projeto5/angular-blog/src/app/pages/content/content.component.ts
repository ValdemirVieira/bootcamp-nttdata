import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover:string = "https://foxdiaryfatec.files.wordpress.com/2020/08/89500-black2bcharacter2b-2banime.jpg?w=1360"
  contentTitle:string = "TÍTULO DA NOTÍCIA"
  contentDescription:string = "Conteúdo da notícia"
}
