WildZypher
1. Visão Geral
WildZypher conecta grafiteiros a oportunidades de trabalho freelance. Empresas e indivíduos podem postar projetos de arte urbana, enquanto grafiteiros entram em contato diretamente com os contratantes. O principal objetivo é facilitar a contratação de artistas urbanos, criando uma ponte entre contratantes e grafiteiros, utilizando a arquitetura MVVM.

Guia para Clonar o Repositório:
Pré-requisitos:
Node.js instalado
Expo instalado
Visual Studio Code (VS Code)
Passos:
Copie o link do repositório.
No terminal, navegue até o diretório desejado e rode:
bash
Copiar código
git clone https://github.com/giovaneserv/wildzypher.git
Após clonar, instale as dependências:
bash
Copiar código
npm install
Execute o projeto:
bash
Copiar código
npm run web
2. Funcionalidades Principais
Perfis de Usuário
Cadastro: Permite a criação de perfis completos, onde os usuários podem postar informações de contato, experiências anteriores e trabalhos realizados. Fotos podem ser adicionadas para exibir o estilo e a qualidade dos grafites.
3. Telas
Login

Tela de autenticação via email/senha e Google.
Cadastro

Tela de cadastro solicitando os seguintes campos:
Nome
Sobrenome
Email
Telefone
Endereço
Senha
Após o cadastro, o usuário é redirecionado para o Feed.
Feed

Exibe as postagens de usuários anunciando novos projetos ou grafiteiros postando seus trabalhos.
Contém navegação para as páginas Postar e Perfil.
Postar

Permite aos usuários publicarem oportunidades de trabalho para grafiteiros ou seus trabalhos.
Perfil

Tela que exibe as informações do usuário cadastrado e seus posts.
4. Requisitos Técnicos
Plataformas: Disponível para Android e iOS.
Frontend: Desenvolvido em React Native, utilizando Expo para facilitar o desenvolvimento e a integração com serviços nativos.
Backend: Firebase para autenticação (senha e Google) e Firestore como banco de dados.
API's: ViaCep para obtenção automática do endereço com base no CEP do usuário.
Tecnologias:
Node.js (v14 ou superior)
React Native (via Expo)
Firebase (Autenticação e Banco de Dados)
5. Arquitetura do Projeto
O projeto utiliza a estrutura MVVM e possui quatro pastas principais:

.expo

Descrição: Pasta gerada automaticamente pelo Expo com arquivos de configuração e metadados necessários para o ambiente de desenvolvimento.
Finalidade: Contém informações como a versão do SDK, histórico de builds, e outras configurações que auxiliam na gestão do projeto durante o desenvolvimento.
Observação: Não requer modificações manuais e geralmente é gerada ou atualizada automaticamente pelo Expo.
assets

Descrição: Esta pasta armazena todos os recursos estáticos usados na aplicação, como imagens, ícones, fontes e vídeos.
Finalidade: Centraliza os recursos de mídia utilizados na interface, como imagens de perfil, logotipos, ícones de navegação e qualquer outro tipo de conteúdo visual.
Exemplo: Imagens do feed, logotipo do aplicativo, e fontes personalizadas.
node_modules

Descrição: Pasta que contém todas as dependências e bibliotecas instaladas pelo projeto via npm ou yarn.
Finalidade: Armazena as bibliotecas externas necessárias para o funcionamento do projeto, como React Native, Firebase e outras ferramentas essenciais ao projeto.
Observação: Esta pasta é criada automaticamente após rodar o comando npm install e não deve ser incluída no controle de versão (como o Git), pois pode ser regenerada a partir do arquivo package.json.
src

Descrição: Pasta que contém imagens e os componentes navegáveis.
Finalidade: Organiza todo o código relacionado às funcionalidades da aplicação, incluindo componentes, telas (views), serviços, etc.
Dentro da pasta src, há duas subpastas principais:

imgs: Armazena as imagens usadas no aplicativo, como ícones personalizados, banners e outros gráficos necessários.
telas: Contém as telas da aplicação, como as páginas de Login, Cadastro, Perfil, Feed e Postar.
6. Integração com API
O projeto WildZypher utiliza a API ViaCep para buscar automaticamente o endereço do usuário a partir do seu CEP. Isso permite preencher os dados de endereço de forma mais eficiente durante o processo de cadastro.

7. Tecnologia Presente em Cada Página
Login:

Firebase Authentication, Firestore
Após a autenticação, a função CheckUser consulta o banco de dados para validar o email do usuário. Se encontrado, o usuário é redirecionado para a tela de Feed; caso contrário, uma mensagem de erro é exibida.
Cadastro:

ViaCep API, createUserWithEmailAndPassword
Após a autenticação, a função CheckUser consulta o Firestore para verificar se o email do usuário existe na coleção "usuarios". Se o usuário for encontrado, ele é redirecionado para a tela de Feed; caso contrário, uma mensagem de erro é exibida, informando que o usuário não foi encontrado.
Perfil:

Firestore
Após a autenticação, a função fetchUserData consulta o Firestore para obter os dados do usuário com base no seu UID. Se encontrado, os dados do usuário são exibidos na tela. A função fetchUserPosts recupera as postagens do usuário autenticado, que são exibidas em cards. O usuário pode editar ou excluir suas postagens. Ao editar, a descrição é atualizada no Firestore. A função handleLogout permite que o usuário saia da conta, redirecionando-o para a tela de login.
Feed:

Firestore
Após a autenticação, a função obterNomeUsuario busca os dados do usuário logado no Firestore utilizando o seu UID. Se encontrado, o nome do usuário é exibido na tela. A função buscarPosts recupera todas as postagens da coleção "posts", ordenando-as pela data de criação. Para cada post, busca-se também os dados do usuário que fez a postagem, incluindo nome, email e telefone. Essas informações são exibidas em cards no feed. O usuário pode digitar uma descrição para um novo post na caixa de texto na parte superior da tela.
Postar:

Firestore
A tela "Postar" permite que o usuário compartilhe projetos na plataforma. O componente utiliza o ImagePicker para selecionar uma imagem da galeria do dispositivo. O estado descricao armazena a descrição do projeto, enquanto o estado image guarda a URI da imagem selecionada.
Ao clicar no botão "Postar", a função postarProjeto é chamada, que verifica se o usuário está autenticado. Se sim, cria um objeto postData contendo a descrição, o ID do usuário e um timestamp. Se uma imagem foi escolhida, sua URI é adicionada aos dados do post. O documento é então adicionado à coleção "posts" no Firestore, e o usuário é redirecionado de volta ao feed. Caso o usuário não esteja logado, uma mensagem de alerta é exibida.
8. Estrutura do Banco de Dados
Coleção: usuarios
Campos:
nome: Nome do usuário.
sobrenome: Sobrenome do usuário.
telefone: Número de telefone do usuário.
email: Endereço de e-mail do usuário.
endereco: Endereço do usuário (gerado com base no CEP).
id: Identificador único do usuário (UID do Firebase).
Coleção: posts
Campos:
descricao: Descrição do post.
id: Identificador único do post.
createdAt: Data e hora de criação do post.
userId: Identificador do usuário que criou o post (referência ao id da coleção usuarios).
Relação entre usuarios e posts
Cada post criado armazena o id do usuário que o publicou na propriedade userId. Isso estabelece uma relação entre os dois, permitindo que você identifique quem fez o post.
A cada novo post, o ID do usuário que postou é automaticamente adicionado ao documento do post.
Os posts podem ser alterados ou excluídos posteriormente, permitindo que os usuários gerenciem seu conteúdo.
9. Bibliotecas Externas Utilizadas
@expo-google-fonts/inter@0.2.3
@expo/metro-runtime@3.2.3
@fortawesome/fontawesome-svg-core@6.6.0
`@fortawesome

Componentes e bibliotecas utilizadas:

├── @expo-google-fonts/inter@0.2.3
├── @expo/metro-runtime@3.2.3
├── @fortawesome/fontawesome-svg-core@6.6.0
├── @fortawesome/react-native-fontawesome@0.3.2
├── @react-navigation/native-stack@6.11.0
├── @react-navigation/native@6.1.18
├── axios@1.7.7
├── expo-font@12.0.10
├── expo-image-picker@15.0.7
├── expo-splash-screen@0.27.5
├── expo-status-bar@1.12.1
├── expo@51.0.32
├── firebase@10.9.0
├── react-dom@18.2.0
├── react-native-image-picker@7.1.2
├── react-native-svg@15.7.1
├── react-native-vector-icons@10.2.0
├── react-native-web@0.19.12
├── react-native@0.74.5
└── react@18.2.0

Desenvolvido por: Giovane, Eduardo e Leonardo