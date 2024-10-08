# WildZypher

## 1. Visão Geral

WildZypher conecta grafiteiros a oportunidades de trabalho freelance. Empresas e indivíduos podem postar projetos de arte urbana, enquanto grafiteiros entram em contato diretamente com os contratantes. O principal objetivo é facilitar a contratação de artistas urbanos, criando uma ponte entre contratantes e grafiteiros, utilizando a arquitetura MVVM.

## 2. Guia para Clonar o Repositório

### Pré-requisitos:
- Node.js instalado
- Expo instalado
- Visual Studio Code (VS Code)

### Passos:
1. Copie o link do repositório.
2. No terminal, navegue até o diretório desejado e rode:
   ```bash
   git clone https://github.com/giovaneserv/wildzypher.git

3. Após clonar, instale as dependências
--npm install 

4. Execute o projeto
--npm run web

## 3. Funcionalidades Principais

### Perfis de Usuário

#### Cadastro:
Permite a criação de perfis completos, onde os usuários podem postar informações de contato, experiências anteriores e trabalhos realizados. Fotos podem ser adicionadas para exibir o estilo e a qualidade dos grafites.

#### Login:
Tela de autenticação via email/senha e Google.

### Cadastro
Tela de cadastro solicitando os seguintes campos:
- Nome
- Sobrenome
- Email
- Telefone
- Endereço
- Senha

Após o cadastro, o usuário é redirecionado para o Feed.

### Feed
Exibe as postagens de usuários anunciando novos projetos ou grafiteiros postando seus trabalhos. Contém navegação para as páginas Postar e Perfil.

### Postar
Permite aos usuários publicarem oportunidades de trabalho para grafiteiros ou seus trabalhos.

### Perfil
Tela que exibe as informações do usuário cadastrado e seus posts.

## 4. Requisitos Técnicos
- **Plataformas**: Disponível para Android e iOS.
- **Frontend**: Desenvolvido em React Native, utilizando Expo para facilitar o desenvolvimento e a integração com serviços nativos.
- **Backend**: Firebase para autenticação (senha e Google) e Firestore como banco de dados.
- **APIs**: ViaCep para obtenção automática do endereço com base no CEP do usuário.
- **Tecnologias**:
  - Node.js (v14 ou superior)
  - React Native (via Expo)
  - Firebase (Autenticação e Banco de Dados)

## 5. Arquitetura do Projeto
O projeto utiliza a estrutura MVVM e possui quatro pastas principais:

### .expo
- **Descrição**: Pasta gerada automaticamente pelo Expo com arquivos de configuração e metadados necessários para o ambiente de desenvolvimento.
- **Finalidade**: Contém informações como a versão do SDK, histórico de builds, e outras configurações que auxiliam na gestão do projeto durante o desenvolvimento.
  
### assets
- **Descrição**: Armazena todos os recursos estáticos usados na aplicação, como imagens, ícones, fontes e vídeos.
  
### node_modules
- **Descrição**: Contém todas as dependências e bibliotecas instaladas pelo projeto via npm.
  
### src
- **Descrição**: Pasta que contém imagens e os componentes navegáveis.
  - **imgs**: Armazena as imagens usadas no aplicativo.
  - **telas**: Contém as telas da aplicação, como Login, Cadastro, Perfil, Feed e Postar.

## 6. Integração com API
O projeto WildZypher utiliza a API ViaCep para buscar automaticamente o endereço do usuário a partir do seu CEP.

## 7. Tecnologia Presente em Cada Página

### Login
Utiliza Firebase Authentication e Firestore. Após a autenticação, a função `CheckUser` consulta o banco de dados para validar o email do usuário.

### Cadastro
Integra-se com a API ViaCep e a função `createUserWithEmailAndPassword` do Firebase.

### Perfil
Usa Firestore para exibir e gerenciar os dados do usuário autenticado.

### Feed
Recupera postagens de usuários e as exibe em cards, mostrando informações dos usuários que criaram os posts.

### Postar
Utiliza o Firestore para adicionar um novo post à coleção, incluindo imagem e descrição.

## 8. Estrutura do Banco de Dados

### Coleção: usuarios
- Campos:
  - nome, sobrenome, telefone, email, endereço (gerado com base no CEP), id (UID do Firebase).

### Coleção: posts
- Campos:
  - descricao, id, createdAt, userId (referência ao id da coleção usuarios).

## 9. Bibliotecas Externas Utilizadas

- `@expo-google-fonts/inter@0.2.3`
- `@expo/metro-runtime@3.2.3`
- `@fortawesome/fontawesome-svg-core@6.6.0`
- `@fortawesome/react-native-fontawesome@0.3.2`
- `@react-navigation/native-stack@6.11.0`
- `@react-navigation/native@6.1.18`
- `axios@1.7.7`
- `expo-font@10.2.1`
- `expo@49.0.11`
- `firebase@9.23.0`
- `react-dom@18.2.0`
- `react-native-gesture-handler@2.12.0`
- `react-native-safe-area-context@4.6.3`
- `react-native-screens@3.22.0`
- `react-native-svg@13.9.0`
- `react-native-vector-icons@9.2.0`
- `react-native-web@0.19.12`
- `react@18.2.0`
- `expo-image-picker@14.0.2`


Uso permitido apenas para uso pessoal e acadêmico.
