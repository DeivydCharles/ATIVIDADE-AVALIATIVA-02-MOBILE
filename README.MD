# 🎬 App de Filmes: React Native + Expo

Aplicativo mobile desenvolvido em **React Native** com **Expo** que consome a **API OMDb** para listar filmes do Homem-Aranha e exibir os detalhes de cada um. Projeto criado como exercício da Aula 5, para praticar **React Navigation** e **consumo de APIs REST**.

## ✨ Funcionalidades

- Lista de filmes na tela principal (pôster, título, ano e tipo)
- Navegação entre telas com **React Navigation** (Stack)
- Tela de detalhes com sinopse, gênero, diretor, duração e nota do IMDb
- Interface estilizada com **React Native Paper** (Material Design 3)
- Tema escuro
- Indicadores de carregamento e tratamento de erros

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| [React Native](https://reactnative.dev/) | Desenvolvimento do app mobile |
| [Expo](https://expo.dev/) | Ambiente de desenvolvimento e execução |
| [React Navigation](https://reactnavigation.org/) | Navegação entre telas |
| [React Native Paper](https://callstack.github.io/react-native-paper/) | Componentes e estilização |
| [OMDb API](https://www.omdbapi.com/) | Fonte de dados dos filmes |

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS)
- npm (já vem com o Node.js)
- Uma das opções para executar o app:
  - **Expo Go** instalado no celular (Play Store / App Store), ou
  - **Android Studio** com um emulador configurado

## 🚀 Como executar

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd filme
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Iniciar o projeto

```bash
npx expo start
```

### 4. Abrir o app

- **Celular:** abra o Expo Go e escaneie o QR code exibido no terminal (celular e computador devem estar na mesma rede Wi-Fi).
- **Emulador Android:** com o emulador aberto, pressione `a` no terminal.

## 📁 Estrutura do projeto

```
filme/
├── App.js                   
├── app.json                  
├── package.json
└── screens/
    ├── HomeScreen.js         
    └── DetalhesScreen.js    
```

## 🌐 API utilizada

**Busca de filmes (tela principal):**

```
GET https://www.omdbapi.com/?s=spider%20man&apikey=SUA_CHAVE
```

**Detalhes de um filme (tela de detalhes):**

```
GET https://www.omdbapi.com/?i={imdbID}&plot=full&apikey=SUA_CHAVE
```

> Você pode gerar uma chave gratuita em [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx).
> Em um projeto real, a chave não deve ficar exposta no código. Use variáveis de ambiente.

## 🧭 Fluxo de navegação

```
Home (lista de filmes)  ──toque no card──▶  Detalhes (informações do filme)
```

Ao tocar em um filme, o `imdbID` é enviado como parâmetro para a tela de detalhes, que faz uma nova requisição à API.

## 🌙 Tema escuro

O tema escuro é aplicado no `App.js` com `MD3DarkTheme` (Paper) e `DarkTheme` (React Navigation), adaptados com `adaptNavigationTheme`. Para trocar para o tema claro, use `MD3LightTheme` e o `DefaultTheme` do React Navigation.


## 📚 Referências

- [Documentação do Expo](https://docs.expo.dev/)
- [Documentação do React Navigation](https://reactnavigation.org/docs/getting-started)
- [Documentação do React Native Paper](https://callstack.github.io/react-native-paper/)
- [OMDb API](https://www.omdbapi.com/)

## 👨‍💻 Autor

Desenvolvido por **Deivyd Charles** como atividade da disciplina de Soluções mobile.