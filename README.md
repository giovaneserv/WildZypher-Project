WildZypher

1. Visão Geral
 WildZypher tem a finalidade de conectar grafiteiros a oportunidades de trabalho freelance. Com ele, empresas e indivíduos podem postar projetos de arte urbana, enquanto grafiteiros podem navegar pelas oportunidades, enviar propostas, customizar seu perfil e negociar diretamente com os clientes. O objetivo principal é facilitar o processo de contratação de artistas urbanos, criando uma ponte direta entre contratantes e grafiteiros.
Público-Alvo
•	Grafiteiros e Artistas Urbanos: Para exibir seu trabalho, construir um portfólio e encontrar novas oportunidades de freelances.
•	Empresas e Indivíduos: Para contratar artistas para projetos personalizados de grafite em espaços comerciais, residenciais ou públicos.
________________________________________
2. Funcionalidades Principais
Perfis de Usuário
Artistas (Freelancers):
•	Cadastro e Criação de Portfólio: Os artistas podem criar perfis completos com informações pessoais, portfólio, e experiências anteriores. Fotos de trabalhos realizados podem ser adicionadas para exibir o estilo e a qualidade do grafite do artista.
•	Busca e Candidatura a Projetos: O aplicativo permite que grafiteiros naveguem por oportunidades de trabalho baseadas em sua localização, preço e estilo desejado. Eles podem enviar uma proposta, incluindo orçamento e tempo estimado para execução do projeto.
•	Avaliações: Após a conclusão do trabalho, os grafiteiros recebem avaliações de seus clientes, criando uma reputação dentro da plataforma, o que facilita a conquista de novos projetos.
Clientes (Contratantes):
•	Publicação de Projetos: Empresas ou indivíduos podem postar projetos com uma descrição detalhada do trabalho, incluindo localização, orçamento estimado e fotos do local onde o grafite será feito.
•	Busca por Artistas: Os clientes podem procurar artistas com base em seu estilo, portfólio e localização, tendo a liberdade de convidar diretamente aqueles que se encaixam melhor nas suas necessidades.
•	Avaliações: Os contratantes podem avaliar o desempenho do artista após a conclusão do projeto, ajudando outros usuários a tomarem decisões melhores na hora de contratar.
Comunicação e Transações
•	Chat Integrado: Clientes e artistas podem se comunicar diretamente por meio de um sistema de mensagens dentro do aplicativo, agilizando a negociação e tirando dúvidas antes da contratação.
Geolocalização e Projetos Próximos
•	Mapas Integrados: O aplicativo utiliza a API do Google Maps para mostrar oportunidades de freelances perto da localização do artista, permitindo que ele veja trabalhos disponíveis em sua área e escolha o que é mais conveniente em termos de distância e deslocamento.
________________________________________
3. Fluxo de Usuário
Para Artistas:
1.	Cadastro: O artista cria uma conta e completa seu perfil com informações e portfólio.
2.	Customização do perfil: Ele pode customizar seu perfil freelancer ee portfólio adicionando fotos de seus projetos, a localidade e a avaliação que recebeu pelo cliente.
3.	Candidatura: Após encontrar um projeto interessante, o grafiteiro envia uma proposta com orçamento e prazo de entrega.
4.	Negociação: Se o cliente aceitar, ambos podem negociar detalhes adicionais pelo chat integrado.
5.	Execução e Pagamento: O artista realiza o trabalho e recebe o pagamento via plataforma após a conclusão.
Para Clientes:
1.	Cadastro e Publicação de Projetos: O cliente cria um projeto descrevendo os detalhes, como tamanho da área, estilo de grafite desejado e orçamento disponível.
2.	Recepção de Candidaturas: Ele recebe propostas dos grafiteiros e pode avaliar os perfis e portfólios antes de tomar uma decisão.
3.	Negociação: Após escolher um artista, o cliente negocia detalhes finais e acerta os prazos de entrega.
4.	Pagamento e Avaliação: O pagamento é feito de forma segura pela plataforma, e após a conclusão do trabalho, o cliente avalia o artista.
________________________________________
4. Requisitos Técnicos
•	Plataforma: Disponível para Android e iOS.
•	Frontend: Desenvolvido em React Native, utilizando Expo para facilitar o desenvolvimento e a integração com serviços nativos.
•	Backend: Node.js com Express para gerenciar as APIs, Firebase para autenticação e notificações push.
•	Banco de Dados: MongoDB para armazenamento de dados de usuários, projetos e transações.
•	Integração com Pagamentos: Stripe ou PayPal para gerenciamento de pagamentos seguros e controle de transações.
•	Geolocalização: Integração com a Google Maps API para mostrar projetos e oportunidades próximas.
Dependências
•	Node.js (v14 ou superior)
•	React Native (usando Expo)
•	MongoDB (para banco de dados)
•	Firebase (autenticação e notificações push)
•	Stripe ou PayPal SDK (para pagamentos)

_______________________________________
5. Telas

As telas serão únicas para grafiteiros e contratantes do serviço.
A tela de login será a mesma para ambos, com a verificação sendo feita apartir do login, e na hora do cadastro, será perguntado qual dos dois usuários a conta será: grafiteiro ou contratante.

•O Contratante poderá postar o projeto que ele deseja, com o estilo de grafitti, cores, tamanho e largura.
•O grafiteiro poderá colocar no perfil com qual tipo de grafitti ele tem mais experiência e também poderá postar os grafites feitos por ele, marcando o cliente e a localização.