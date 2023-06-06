import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-comp',
  templateUrl: './portfolio-comp.component.html',
  styleUrls: ['./portfolio-comp.component.css']
})
export class PortfolioCompComponent {

  content:{img:string, titulo: string, descripcion:string, btn_text: string}[] = [
    {
      img:"https://firebasestorage.googleapis.com/v0/b/deipesa.appspot.com/o/construction%20service%202-compressed.jpg?alt=media&token=aa08756f-0a3a-4616-957f-f52bf99bd159",
      titulo:'Building Make',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi moditemporibus alias iste. Accusantium?',
      btn_text: 'Learn More'
    },
    {
      img:"https://firebasestorage.googleapis.com/v0/b/deipesa.appspot.com/o/construction%20service%202-compressed.jpg?alt=media&token=aa08756f-0a3a-4616-957f-f52bf99bd159",
      titulo:'Building Make',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi moditemporibus alias iste. Accusantium?',
      btn_text:'Learn More',
    },
    {
      img:"https://firebasestorage.googleapis.com/v0/b/deipesa.appspot.com/o/construction%20service%202-compressed.jpg?alt=media&token=aa08756f-0a3a-4616-957f-f52bf99bd159",
      titulo:'Building Make',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi moditemporibus alias iste. Accusantium?',
      btn_text:'Learn More'
    }
]

}
