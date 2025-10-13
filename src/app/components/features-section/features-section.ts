import { Component } from '@angular/core';
import { FeatureItem } from './feature-item/feature-item';

export type Feature = {
  title: string;
  description: string;
  benefits: string[];
  imageSrc: string;
  imageAlt: string;
};

@Component({
  selector: 'app-features-section',
  imports: [FeatureItem],
  templateUrl: './features-section.html',
  styleUrl: './features-section.scss',
})
export class FeaturesSection {
  features: Feature[] = [
    {
      title: 'Criação e Subdivisão de Lotes',
      description:
        'Nossa ferramenta permite ajustar o número de fileiras, colunas, dimensões e rotação, oferecendo controle',
      benefits: [
        'Ajuste de número de fileiras e colunas.',
        'Definição de altura e largura em metros.',
        'Controle de rotação para alinhamento perfeito.',
      ],
      imageSrc: 'imgs/plot-creation-feature.png',
      imageAlt:
        'Imagem da ferramenta de criação de lotes, mostrando ajustes de dimensões e colunas no mapa',
    },
    {
      title: 'Edição de Lote Individual e de Forma Livre',
      description:
        'Assuma o controle total sobre o desenho de cada propriedade. Nossa ferramenta de edição livre permite ajustar cada vértice do polígono, garantindo que o registro digital corresponda perfeitamente à realidade do terreno.',
      benefits: [
        'Ajuste fino de polígonos: Mova os pontos para refinar a forma do lote.',
        'Personalização visual: Altere cores de fundo e borda para melhor organização.',
        'Identificação clara: Nomeie cada lote para fácil referência e gerenciamento.',
      ],
      imageSrc: 'imgs/plot-edit-feature.png',
      imageAlt:
        'Imagem da ferramenta de edição de um lote individual, mostrando a personalização de nome e cores',
    },
    {
      title: 'Visualização de Satélite de Alta Precisão',
      description:
        'Obtenha uma perspectiva real do terreno com imagens de satélite de alta resolução',
      benefits: [
        'Imagens de alta resolução fornecidas pelo Google.',
        'Contexto real para registros mais precisos.',
      ],
      imageSrc: 'imgs/satellite-view-feature.png',
      imageAlt:
        'Imagem da plataforma em modo satélite, exibindo lotes sobrepostos em uma foto aérea de alta resolução',
    },
    {
      title: 'Planejamento com Modo Rascunho',
      description:
        'Planeje os lotes com o modo de rascunho, faça o esboço antes de finalizar o registro do lote.',
      benefits: [
        'Esboços livres: Desenhe e ajuste de forma livre.',
        'Salve para depois: Guarde seus rascunhos para futura referência ou edição',
        'Planejamento seguro: Finalize e salve o lote apenas quando tiver certeza.',
      ],
      imageSrc: 'imgs/draft-mode-feature.png',
      imageAlt:
        'Imagem do modo rascunho, mostrando um loteamento sendo esboçado no mapa antes de ser salvo.',
    },
    {
      title: 'Registro de Imóvel Detalhado',
      description:
        'Complete o registro do seu imóvel com um formulário intuitivo e abrangente. Insira todas as informações essenciais, desde a matrícula no cartório até os detalhes do endereço e do loteamento.',
      benefits: [
        'Dados da Matrícula: Informe a matrícula do cartório, municipal, livro e ficha.',
        'Endereço Completo: Preencha todos os campos de endereço para uma localização exata.',
        'Detalhes do Lote: Especifique quadra, lote, loteamento e tamanho do imóvel.',
      ],
      imageSrc: 'imgs/form-feature.png',
      imageAlt:
        'Imagem do formulário de registro de imóvel com campos para matrícula, endereço e detalhes do lote',
    },
  ];
}
