export const Data = {
    name: "Cássio S Carneiro",
    fullName: "Cássio da Silva Carneiro",
    title: "Programador Sênior com mais de 20 anos de carreira",
    linkedin: "https://www.linkedin.com/in/cássio-silva-04b9bb177",
    github: "https://github.com/oissac22",

    photo: "/img/smille-face.jpg",

    experience: [
        {
            title: "DBC Company / Unimed Porto alegre",
            state: "Porto Alegre/RS",
            job: "Programador Sênior frontend e backend",
            from: "novembro de 2020",
            to: "trabalho atual",
            description: `Atuo como lider técnico e no desenvolvendo sistemas frontend e backend,
            envolvendo principalmente React JS, Node JS, Next JS, javascript, css, html,
            além de uso e implementações de muitas tecnologias como o dialogflow,
            jenkins, devops azure, mysql, sqllitter, mongodb, oracledb, etc...
            `
        },
        {
            title: "NTD Soft",
            state: "Recife/PE",
            job: "Programador Sênior frontend e backend",
            from: "dezembro de 2010",
            to: "novembro de 2020",
            description: `Atuando em várias áreas da programação no frontend e backend, utilizando
            Javascript, html, css, php, node js, React JS, React Native, Delphi, Shell
            Script, mysql e noSql, Atuando também na segurança e administração de
            servidores, design e arte, além de ser líder de desenvolvimento e consultor.`
        },
        {
            title: "JBC Produções",
            state: "Recife/PE",
            job: "Programador Sênior frontend e backend",
            from: "fevereiro DE 2007",
            to: "dezembro DE 2010",
            description: `Trabalhava como programador web utilizando php, javascript, css e html,
            também era design, editor de vídeos e técnico em manutenção.`
        },
        {
            title: "Forrozão produções",
            state: "Recife/PE",
            job: "Programador Pleno and design",
            from: "janeiro DE 2006",
            to: "fevereiro DE 2007",
            description: `Atuei como programador web utilizando html, javascript, css e php. Também
            atuei como suporte de design.`
        },
        {
            title: "Autônomo",
            state: "Pernambuco",
            job: "Programador Pleno and design",
            from: "janeiro DE 2000",
            to: "janeiro DE 2006",
            description: `Atuei como programador utilizando html, javascript, css, php e delphi pascal,
            também como design, administrador de rede e técnico, para várias empresas
            e empresários.`
        },
    ],

    projects: [
        {
            company: "DBC Company / Unimed Porto alegre",
            job: "Monitoramento de conversas Cliente x Atendente",
            technologies: "NextJS, NodeJS, Typescript, Jest, Mongo DB, Json Web Token, Blip Api",
            description: `Neste projeto eu tive que construir um sistema administrativo de conversas
            que tinha como responsabilidade verificar e mostrar as mensagens que estavam em ocorrência,
            atrasadas e até antigas, este sistema sinalizava para que fosse identificado rapidamente os
            clientes em espera e outras situações, para este sistema eu construir um frontend e o backend
            além do uso de banco de dados noSQL mongodb, o sistema também registrava os logs, mantinha
            execuções em segundo plano para sicronizar os dados da BLIP com os dados locais, o sistema
            também era controlado por senha. Todo ele, design, código e estratégias eu desenvolvi de ponta
            a ponta. O mesmo era composto de boas práticas e testes unitários.`
        },
        {
            company: "DBC Company / Unimed Porto alegre",
            job: "webhook chatbot",
            technologies: "NestJS, NodeJS, Typescript, Jest, Mongo DB, Json Web Token, Blip Api",
            description: `Esse foi um projeto legado que foi passado pra mim durante meu trabalho na unimed,
            minha missão era corrigir as falhas e bugs que este tinha, criar testes unitário, e melhorar
            o mesmo, este sistema era na verdade um backend que dava suporte na conversação desenvolvida e
            administrada pela tecnologia da Blip Desk, fazendo as devidas comunicações entre o chat da blip
            e os dados da unimed. O mesmo era composto de boas práticas e testes unitários.`
        },
        {
            company: "DBC Company / Unimed Porto alegre",
            job: "PAD - Chatbot",
            technologies: "ReactJS, NodeJS, Typescript, Jest, Mongo DB, Json Web Token",
            description: `Este era um chatbot onde os clientes consultam os sintomas e recebem um direcionamento
            referente a isso, eu construir o front que era um chatbot e o backend que administrava o mesmo,
            também construir no front uma IA sem dependências de terceiros, usando apenas matemática e estratégias
            envolvendo algoritimos de NLP, o objetivo da inteligância era entender os sintomas independente do
            que fosse digitado, por exemplo, o sistema conseguia associar a frase "estou com muita dor de cabeça"
            a enxaqueca, náusea e outros referentes.
            Neste projeto fui responsável pela cordenação de mais 3 devs que me davam suporte no desenvolvimento.
            O mesmo era composto de boas práticas e testes unitários.`
        },
        {
            company: "DBC Company / Unimed Porto alegre",
            job: "PAD - Vídeo chamada",
            technologies: "NextJS, NodeJS, Typescript, Jest, Mongo DB, Json Web Token, Blip Api",
            description: `Este era um sistema que se vinculava ao chatbot, o objetivo era realizar a comunicação
            de vídeo, fone e/ou chat entre um cliente e um médico.
            Neste projeto fui responsável pela cordenação de mais 3 devs que me davam suporte no desenvolvimento.
            O mesmo era composto de boas práticas e testes unitários.`
        },
        {
            company: "DBC Company / Unimed Porto alegre",
            job: "Padrões de arquitetura ReactJS, NextJs e NodeJs",
            technologies: "Padrões de arquitetura ReactJS, NextJs e NodeJs",
            description: `Eu era o responsável junto com mais dois devs por definir e desenvolver
            os padrões de arquitetura das tecnologias que envolvesse NodeJS, ReactJS e NextJS.`
        },
        {
            company: "NTD Soft",
            job: "Portal de notas",
            technologies: "ReactJS, NodeJS, PHP, MySQL",
            description: `Desenvolvir um sistema de notas front e backend com as tecnologias sitadas,
            os usuários podiam configurar várias tabelas em um administrador de design que o sistema tinha,
            também poderiam configurar as formulas e imprimir a mesma, em resumo, administrava tudo que
            envolvesse as notas.`
        },
        {
            company: "NTD Soft",
            job: "Sistema de provas inteligênte",
            technologies: "ReactJS, NodeJS, PHP, MySQL",
            description: `Desenvolvi um sistema que gerava provas e depois os resultados dessas provas
            eram reconhecida apenas scaneando as mesmas e enviando para este mesmo sistema que interpretava
            as imagens e registrava os resultados no banco de dados.`
        },
        {
            company: "NTD Soft",
            job: "Sistema de exercícios",
            technologies: "ReactJS, NodeJS, PHP, MySQL",
            description: `Desenvolvi um sistema de exercícios onde os professores cadastravam os exercícios,
            e testes e os alunos pelo celular ou pc acessavam e respondiam, o sistema sortiava os exercícios
            e as respostas dificultando a fila entre alunos.`
        },
        {
            company: "NTD Soft",
            job: "Portal do aluno",
            technologies: "ReactJS, NodeJS, PHP, MySQL",
            description: `Desenvolvi um sistema completo para os alunos terem acesso a tudo, falta, dados,
            agenda, notas, provas, etc...`
        },
        {
            company: "NTD Soft",
            job: "Aplicativo do aluno",
            technologies: "React Native, NodeJS, PHP, MySQL",
            description: `Desenvolvi um aplicativo completo para os alunos terem acesso a tudo, falta, dados,
            agenda, notas, provas, etc...`
        },
        {
            company: "NTD Soft",
            job: "Portal de atendentes NTD Soft",
            technologies: "NextJS, NodeJS, MySql, ShellScript, Linux",
            description: `Desenvolvi um sistema completo onde os funcionários e atendentes da NTD Soft usavam
            para administrar os cliente e o servidor.`
        },
        {
            company: "NTD Soft",
            job: "Portal do Professor",
            technologies: "ReactJS, NodeJS, PHP, MySQL",
            description: `Desenvolvi um sistema completo onde os professores administravam tudo, disciplinas,
            provas, notas, aluno, espaço pessoal, etc...`
        },
        {
            company: "NTD Soft",
            job: "Servidores da NTD Soft",
            technologies: "Linux, ShellScript, MySQL, PHP, Apache, PM2, Docker",
            description: `Fui responsável por rever e reconstruir toda a infra dos servidores da NTD Soft,
            incluindo a segurança. Nos primeiros anos eu não tinha responsabilidade nenhum com este setor
            mas depois de "ocorridos" nos servidores e idéias que eu tive foi me passada toda a responsabilidade.`
        },
        {
            company: "NTD Soft",
            job: "Sicronizador de dados",
            technologies: "Delphi e Java",
            description: `Como o acesso a um tempo atrás era muito ruim para as escolas, principalmente no
            interior, era necessário que o sistema funcionasse off-line, então era instalado um banco mysql
            na máquina dos clientes e para manter os dados sicronizados eu desenvolvir em Delphi o programa
            responsável por isso que ficava na bandeija analizando os dados on e off, analizando a net e 
            sua qualidade e realizando todo o sicronismo. Como algumas máquinas tinha problema com o sistema
            desenvolvido em Delphi eu também fiz uma versão em Java`
        },
        {
            company: "NTD Soft",
            job: "Chat de atendimento",
            technologies: "HTML, Javascript, CSS, PHP",
            description: `Criei um chat de alto desempenho e baixo consumo/custo para ser usado pelos atendentes
            da ntd soft e pelos seus clientes`
        },
        {
            company: "NTD Soft",
            job: "Emoje Atendente Virtual",
            technologies: "HTML, Javascript, PHP, CSS, Photoshop, Corel Draw",
            description: `Criei um atendente virtual em forma de emoje animado que respondia com inteligência
            artificial as perguntas que os clientes faziam, o objetivo era minimizar a demanda de trabalho dos
            atendentes, no primeiro mês houve uma redução de atendimentos de 20%`
        },
        {
            company: "JBC Produções",
            job: "Site e designs de evento e propaganda da JBC no restaurante Italiana em Recife/PE",
            technologies: "HTML, Javascript, PHP, CSS, Photoshop, Corel Draw, After effect",
            description: `Desenvolvir os vídeos, e designs do evento da empresa além de um mini sistema
            da mesma para administração do evento`
        },
        {
            company: "Forrozão produções",
            job: "Site do Calango Aceso",
            technologies: "HTML, PHP, Adobe Flash, Corel Draw, Photoshop",
            description: `Desenvolvir o site da banda Calango Aceso e todo o design do mesmo`
        },
        {
            company: "Forrozão produções",
            job: "Site do Mel com terra",
            technologies: "HTML, PHP, Adobe Flash, Corel Draw, Photoshop",
            description: `Desenvolvir o site da banda Mel com terra e todo o design do mesmo`
        },
        {
            company: "Biox",
            job: "Site da empresa",
            technologies: "HTML, PHP, javascript, Corel Draw, Photoshop",
            description: `Era uma empresa de roupa com pouco tempo, desejavam desenvolver o
            site para exibir as roupas e contato, não tinha venda on-line, fiz o site como desejado`
        },
    ],

    skills: `
        <b>Node JS</b>,
        <b>Next JS</b>,
        <b>React JS</b>,
        <b>React Native</b>,
        <b>TypeScript</b>,
        <b>Nest JS</b>,
        JavaScript,
        Código limpo,
        Arquitetura Limpa,
        S.O.L.I.D,
        Teste unitário,
        Teste integrado,
        Teste E2E,
        TDD,
        CSS,
        HTML,
        C,
        PHP,
        Phyton,
        MongoDB,
        Big Query,
        MySQL,
        Git,
        GitHub,
        GraphQL,
        JSON,
        XML,
        Docker,
        Docker composer,
        processamento de linguagem natural,
        NLP,
        Processamento de imagens digitais,
        Interpretação de requisições web,
        Api,
        Shell script,
        SQL e NoSQL,
        Banco de dados em geral,
        Linux,
        DOS,
        Design de algoritmo,
        Gestão sênior,
        Analise de sistemas,
        Arquitetura de sistemas,
        Metodologia ágil,
        Azure Devops,
        Jenkins,
        Vim,
        Adobe Photoshop,
        Adobe XD,
        Figma,
        Delphi,
        JQuery,
        Servidor Apache,
        Adobe After Effects,
        Linguagem Assembly,
        Código de máquina,
        Corel Draw,
        Microsoft PowerPoint,
        Microsoft Word,
        Microsoft Excel,
        Microsoft Windows,
        jsx,
        SSH,
        FTP,
        Batch,
        Extensão para google chrome,
        Apache Cordova,
        Desenhista,
        músico
    `,

    certificate:[
        {
            title: "CS50's Introduction to Computer Science",
            school: "Harvard",
            date: "ano de 2023, cursando até o fim do ano",
            description: `Curso estrangeiro online em Haverd onde eles ensinam Strach, C, Phyton,
            SQL, Algorithms, HML, CSS, Javascript, Flask, Emoji, Memory e Cybersecurity`
        },
        {
            title: "NodeJs, Typescript, TDD, DDD, Clean Architecture e SOLID",
            school: "Rodrigo Manguinho - Udemy",
            date: "ano de 2022",
            description: `47.5 horas de curso com Rodrigo Manguinho, Certificado de código
            UC-a8617840-cf8a-4980-97d1-5f5d8462758e, link do certificado:
            https://www.udemy.com/certificate/UC-a8617840-cf8a-4980-97d1-5f5d8462758e/`
        },
        {
            title: "Aprenda tudo sobre o melhor NoSQL do mundo, o MongoDB!",
            school: "Vitor Mazuco - Udemy",
            date: "ano de 2020",
            description: `8.5 horas de curso com Vitor Mazuco, Certificado de código
            UC-956caca1-c6c1-4f0d-abdf-5200a9b84fb6, link do certificado:
            https://www.udemy.com/certificate/UC-956caca1-c6c1-4f0d-abdf-5200a9b84fb6/`
        },
        {
            title: "React Native: Desenvolva APPs Nativas para android e iOS",
            school: "Cod3r - Udemy",
            date: "ano de 2017",
            description: `45 horas de curso com Leonardo Moura Leitao, Francisco Wagner Costa Aquino.
            Cod3r Cursos Online. Certificado de código UC-588283d3-8010-4638-82b8-0d858d869f71,
            link do certificado: https://www.udemy.com/certificate/UC-588283d3-8010-4638-82b8-0d858d869f71/`
        },
        {
            title: "Formação Node.js",
            school: "Guia do Programador - Udemy",
            date: "ano de 2015",
            description: `50 horas de curso com Victor Lima do Guia do programador. Certificado de código
            UC-7822d2d7-93fc-4383-b88c-9d152a6ec824, link do certificado:
            https://www.udemy.com/certificate/UC-7822d2d7-93fc-4383-b88c-9d152a6ec824/`
        },
        {
            title: "Chatbot com JavaScript",
            school: "Ben-Hur Varriano",
            date: "ano de 2020",
            description: `15 horas de curso com Ben-Hur Varriano, Certificado de código
            UC-f224ef26-73e2-4d28-8ee8-b607062a91fb, link do certificado:
            https://www.udemy.com/certificate/UC-f224ef26-73e2-4d28-8ee8-b607062a91fb/`
        },
        {
            title: "Ensino médio",
            school: "Escola presidente Humberto Castelo Branch",
            date: "2003",
            description: `Formação escolar`
        },
    ]
}