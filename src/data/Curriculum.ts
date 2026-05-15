import type { ExperienceCardProps } from "../components/experiences/ExperienceCard"
import logoElotech from '../assets/logo_elotech.png'
import logoSGSistemas from '../assets/logo_sgsistemas.png'

export interface ICurriculum{
    experiences: ExperienceCardProps[],
}


const Curriculum:ICurriculum ={
    experiences:[
        {   
            logoPath: logoElotech, 
            title:'Elotech - Gestão Pública', 
            atuation:'Desenvolvedor Full Stack',
            period:'OUT-2022 - Atuamente', 
            tools:
                {   backend:{
                                language:['Java'],
                                framework:['SpringBoot', 'Spring JPA', 'Hibernate']
                            }, 
                    frontend:{
                                language:['Javascript'],
                                framework:['ReactJS', 'Angular']
                             },
                    database:['PostgreSQL']
                },
            experiences:[
                'Manutenção do sistema de controle tributário web (OXY Tributário);',
                'Manutenção em rotina de controle de login e manutenção de usuários;',
                'Realizada reuniões com clientes para registro da solicitação;',
                'Realizadas visitas in loco em algumas entidades, por exemplo,  Prefeitura Municipal de Maringá e Prefeitura Municipal de Foz do Iguaçu;',
                'Parte integrante da equipe de análise técnica dos requisitos, de pontuação das tasks e direcionamento para a equipe, com acompanhamento;',
                'Realizado refatoração de rotinas complexas, como controle de créditos, consultas massivas de débitos, rotina de geração de boleto em lote, dentre outros aplicando conceitos de SOLID, visando maximização da eficiência e diminuição de processamento desnecessários;',
                'Realizado criação e manutenção de jobs, em pipelines do gitlab, para o fluxo diário;',
                'Realizado a migração de job único de testes para paralelizar em outros jobs, utilizando o TestSuite do JUnit. Feito em parceria com outros integrantes da equipe;',
                'Realizados Ajustes em classes de testes para garantir máximo aproveitamento de contextos, em caso de testes integrados, utilizando os mocks em comum centralizado em uma única classe e os testes de fato estendendo da classe de mocks. Sempre dando prioridade para SpyBean, para mockar somente o necessário;',
                'Realizados implantações e configurações de web services  para os clientes, bem como acompanhamento para eventuais problemas de conversão durante esse período;',
                'Acompanhamento com a equipe de suporte, para eventuais medidas de urgência;',
                'Prontidão para eventuais situações que poderia vir a ocorrer durante apresentação dos produtos em processos licitatórios;',
                'Investigações de situações encontradas em produção, visando agilidade na entrega da resolução;',
                'Utilizado Spring Batch para execução de rotinas em lotes, utilizando a estrutura de Reader, Processor e Writer;'
            ],
        },
         {   
            logoPath: logoSGSistemas, 
            title:'SGSistemas', 
            atuation:'Desenvolvedor Full Stack',
            period:'OUT-2021 - OUT-2022', 
            tools:
                {   backend:{
                                language:['Java'],
                                framework:['SpringBoot', 'Spring JPA', 'Hibernate']
                            }, 
                    frontend:{
                                language:['Javascript'],
                                framework:['AngularJS']
                             },
                    database:['PostgreSQL']
                },
            experiences:[
               'Manutenção e implementação de novas features em  ERP Cloud, voltado para comércios varejistas, tendo uma ou mais filiais;',
               'Responsável integração do ERP com outros produtos internos;',
               'Realizado integração com a plataforma Tray E-Commerce ;',
               'Reuniôes com cliente para compreender as demandas'

            ],
        },
        {
            logoPath: logoSGSistemas, 
            title:'SGSistemas', 
            atuation:'Tester - QA',
            period:'MAI-2019 - OUT-2021', 
            experiences:[
                'Responsável por realizar testes E2E de funcionalidades em ERP Local, incluindo integrações;',
                'Apresentado o Python como ferramenta para automatização de testes;'
            ],
             tools:
                {   backend:{
                                language:['Python'],
                                framework:['PYAutoGui', 'Selenium', 'TestComplete']
                            }, 
                }
        },
    ]
}

export default Curriculum;