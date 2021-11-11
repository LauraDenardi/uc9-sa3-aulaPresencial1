import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public textoDiferencial! : string;
  public textoBannerCorpo! : string;

  constructor() { }

  ngOnInit(): void {
    this.textoDiferencial! = 'Venha conhecer nosso diferencial!';
    this.textoBannerCorpo! = "Aqui você descobre uma variedade incível de jogos!" +
                             "Além de poder montar seu próprio pc gamer completamente" +
                             "estilizado! E encontra acessorios únicos com um preço ótimo!" +
                             "Tudo especialmente para você!!"
  }

}
