import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string =""
  contentTitle:string =""
  contentText:string =""
  private id:string | null = "0"

  // ativando rota para pegar parametros
  /*
    Fornece acesso a informações sobre uma rota associada a um componente carregado em uma tomada. 
    Use para percorrer a árvore RouterState e extrair informações dos nós.
  */
  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    //recuperando parametro da url
    this.route.paramMap.subscribe(value=> 
      // captura o id dos dados dinamicamente
      this.id = value.get("id")
    )
    
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    // pegando os dados do arquivo dataFake
    const result = dataFake.filter(article => article.id == id)[0]
    console.log(result);
    this.contentTitle = result.title
    this.contentText = result.text
    this.photoCover = result.photoCover
  }
}
