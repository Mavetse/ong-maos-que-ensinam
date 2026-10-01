# Mãos que Ensinam

Site institucional de uma ONG dedicada à educação. O projeto apresenta a missão e os valores da organização, os projetos ativos (doações e voluntariado) e um formulário de cadastro para beneficiários, voluntários e doadores.

O site é uma aplicação de página única (SPA) feita apenas com HTML, CSS e JavaScript puro, sem frameworks e sem dependências externas.

## Tecnologias utilizadas

- **HTML5:** estrutura semântica (`header`, `nav`, `main`, `section`, `fieldset`, `legend`), elementos `template` e formulários com `type` adequado a cada dado.
- **CSS3:** CSS Grid de 12 colunas, Flexbox, variáveis customizadas (Design System), `@media` com cinco pontos de quebra, menu hambúrguer com dropdown e estados interativos (`hover`, `focus`, `active`, `disabled`).
- **JavaScript (Vanilla):** roteamento por hash, templates com Template Literals, expressões regulares, manipulação do DOM, `localStorage` e código dividido em módulos por responsabilidade.
- **Git e GitHub:** GitFlow, Conventional Commits, versionamento semântico, pull requests, issues e milestones.

## Funcionalidades

- Navegação sem recarregar a página (Início, Como ajudar, Doações, Voluntariado e Cadastro).
- Menu responsivo: horizontal com submenu em telas grandes e ícone hambúrguer no celular.
- Cartões de projetos gerados dinamicamente a partir de um array de dados.
- Formulário de cadastro com máscaras (CPF, telefone e CEP) e validação em tempo real, com mensagens de erro inseridas no DOM.
- Histórico de cadastros enviados, guardado no navegador com `localStorage` (apenas nome, perfil e data).

## Estrutura de pastas

```
/
├── index.html
├── css/
│   └── styles.css
├── imagens/
└── js/
    ├── mascaras.js
    ├── validacao.js
    ├── armazenamento.js
    ├── templates.js
    ├── rotas.js
    └── script1.js
```

- `index.html`: página principal, com o cabeçalho, o rodapé e os templates de cada tela.
- `css/`: todo o visual do projeto, em um único arquivo.
- `imagens/`: recursos de mídia usados nas páginas.
- `js/`: scripts separados por responsabilidade (máscaras, validação, armazenamento, templates, rotas e ponto de entrada).

## Pré-requisitos

Apenas um navegador atual (Chrome, Edge, Firefox ou similar). Não é preciso instalar dependências, gerar build nem rodar testes.

## Como executar localmente

1. Acesse o repositório no GitHub e clique em **Code > Download ZIP**, ou clone o projeto:

   ```
   git clone https://github.com/Mavetse/ong-maos-que-ensinam.git
   ```

2. Extraia o ZIP (se tiver baixado o arquivo compactado).
3. Abra a pasta do projeto e dê dois cliques em `index.html`.

Os scripts são carregados em sequência no final do `body`, por isso o site funciona abrindo o arquivo direto, sem servidor local.

## Versionamento

- **GitFlow:** `main` guarda as versões estáveis de lançamento, `develop` concentra o desenvolvimento, as branches `feature/` recebem as novas funcionalidades e as branches `hotfix/` recebem correções urgentes. A integração é feita por pull requests.
- **Conventional Commits:** as mensagens seguem o padrão `tipo: descrição`, como `feat:` (nova funcionalidade), `fix:` (correção) e `chore:` (organização do projeto).
- **Versionamento semântico:** versões no formato `MAJOR.MINOR.PATCH`. Novas funcionalidades incrementam o MINOR, correções incrementam o PATCH e mudanças incompatíveis incrementam o MAJOR. As versões de lançamento recebem tag na `main` (por exemplo, `v1.0.0`).

## Autor

Guilherme Estevam ([@Mavetse](https://github.com/Mavetse))
