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
            atendentes, no primeiro mês ouve uma redução de atendimentos de 20%`
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
    ]
}