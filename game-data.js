// ==========================================
// DESIGN PATTERNS LIBRARY
// ==========================================

const DESIGN_PATTERNS = {
    creational: {
        name: 'Padrões Criacionais',
        patterns: {
            singleton: {
                name: 'Singleton',
                description: 'Garante que uma classe tenha apenas uma instância',
                complexity: 'Básico',
                useCase: 'Logging, Cache, Database Connection'
            },
            factory: {
                name: 'Factory Method',
                description: 'Cria objetos sem especificar a classe exata',
                complexity: 'Básico',
                useCase: 'UI Components, Database Drivers'
            },
            abstractFactory: {
                name: 'Abstract Factory',
                description: 'Família de objetos relacionados',
                complexity: 'Intermediário',
                useCase: 'Cross-platform UI, Different Themes'
            },
            builder: {
                name: 'Builder',
                description: 'Constrói objetos complexos passo a passo',
                complexity: 'Intermediário',
                useCase: 'SQL Queries, Configuration Objects'
            },
            prototype: {
                name: 'Prototype',
                description: 'Clona objetos existentes',
                complexity: 'Básico',
                useCase: 'Game Objects, Document Templates'
            }
        }
    },
    structural: {
        name: 'Padrões Estruturais',
        patterns: {
            adapter: {
                name: 'Adapter',
                description: 'Adapta interfaces incompatíveis',
                complexity: 'Básico',
                useCase: 'Third-party Libraries, Legacy Code'
            },
            bridge: {
                name: 'Bridge',
                description: 'Separa abstração da implementação',
                complexity: 'Avançado',
                useCase: 'Device Drivers, Graphics APIs'
            },
            composite: {
                name: 'Composite',
                description: 'Compõe objetos em estruturas de árvore',
                complexity: 'Intermediário',
                useCase: 'File Systems, UI Components'
            },
            decorator: {
                name: 'Decorator',
                description: 'Adiciona comportamento dinamicamente',
                complexity: 'Intermediário',
                useCase: 'Middleware, Feature Toggles'
            },
            facade: {
                name: 'Facade',
                description: 'Interface simplificada para subsistema',
                complexity: 'Básico',
                useCase: 'APIs, Complex Libraries'
            },
            flyweight: {
                name: 'Flyweight',
                description: 'Compartilha eficientemente objetos similares',
                complexity: 'Avançado',
                useCase: 'Game Particles, Text Rendering'
            },
            proxy: {
                name: 'Proxy',
                description: 'Placeholder ou substituto para outro objeto',
                complexity: 'Intermediário',
                useCase: 'Lazy Loading, Access Control'
            }
        }
    },
    behavioral: {
        name: 'Padrões Comportamentais',
        patterns: {
            chainOfResponsibility: {
                name: 'Chain of Responsibility',
                description: 'Passa requisições ao longo de uma cadeia',
                complexity: 'Intermediário',
                useCase: 'Event Handling, Validation'
            },
            command: {
                name: 'Command',
                description: 'Encapsula requisições como objetos',
                complexity: 'Intermediário',
                useCase: 'Undo/Redo, Macro Recording'
            },
            interpreter: {
                name: 'Interpreter',
                description: 'Interpreta linguagem ou expressões',
                complexity: 'Avançado',
                useCase: 'SQL Parsing, DSL'
            },
            iterator: {
                name: 'Iterator',
                description: 'Acessa elementos sequencialmente',
                complexity: 'Básico',
                useCase: 'Collections, Data Structures'
            },
            mediator: {
                name: 'Mediator',
                description: 'Define como objetos interagem',
                complexity: 'Intermediário',
                useCase: 'Chat Rooms, UI Components'
            },
            memento: {
                name: 'Memento',
                description: 'Captura e restaura estado interno',
                complexity: 'Intermediário',
                useCase: 'Undo/Redo, Snapshots'
            },
            observer: {
                name: 'Observer',
                description: 'Notifica mudanças para múltiplos objetos',
                complexity: 'Básico',
                useCase: 'Event Systems, MVC'
            },
            state: {
                name: 'State',
                description: 'Altera comportamento baseado no estado',
                complexity: 'Intermediário',
                useCase: 'State Machines, Game States'
            },
            strategy: {
                name: 'Strategy',
                description: 'Família de algoritmos intercambiáveis',
                complexity: 'Básico',
                useCase: 'Sorting, Payment Methods'
            },
            templateMethod: {
                name: 'Template Method',
                description: 'Define esqueleto de algoritmo',
                complexity: 'Básico',
                useCase: 'Data Processing, Frameworks'
            },
            visitor: {
                name: 'Visitor',
                description: 'Operações em elementos de estrutura',
                complexity: 'Avançado',
                useCase: 'AST Processing, Compilers'
            }
        }
    },
    architectural: {
        name: 'Padrões Arquiteturais',
        patterns: {
            mvc: {
                name: 'MVC (Model-View-Controller)',
                description: 'Separa dados, apresentação e controle',
                complexity: 'Intermediário',
                useCase: 'Web Applications, Desktop Apps'
            },
            mvp: {
                name: 'MVP (Model-View-Presenter)',
                description: 'Presenter controla View e Model',
                complexity: 'Intermediário',
                useCase: 'Android Apps, Desktop Apps'
            },
            mvvm: {
                name: 'MVVM (Model-View-ViewModel)',
                description: 'Data binding entre View e ViewModel',
                complexity: 'Intermediário',
                useCase: 'WPF, Angular, Vue.js'
            },
            repository: {
                name: 'Repository',
                description: 'Encapsula lógica de acesso a dados',
                complexity: 'Básico',
                useCase: 'Data Access Layer, ORM'
            },
            serviceLocator: {
                name: 'Service Locator',
                description: 'Registry central para services',
                complexity: 'Intermediário',
                useCase: 'Dependency Management'
            },
            dependencyInjection: {
                name: 'Dependency Injection',
                description: 'Injeta dependências externamente',
                complexity: 'Intermediário',
                useCase: 'IoC Containers, Testing'
            },
            layeredArchitecture: {
                name: 'Layered Architecture',
                description: 'Organiza código em camadas',
                complexity: 'Básico',
                useCase: 'Enterprise Applications'
            },
            hexagonalArchitecture: {
                name: 'Hexagonal Architecture',
                description: 'Ports and Adapters pattern',
                complexity: 'Avançado',
                useCase: 'Domain-Driven Design'
            },
            eventSourcing: {
                name: 'Event Sourcing',
                description: 'Armazena mudanças como eventos',
                complexity: 'Avançado',
                useCase: 'Audit Trails, CQRS'
            },
            cqrs: {
                name: 'CQRS',
                description: 'Separa Commands e Queries',
                complexity: 'Avançado',
                useCase: 'High-performance Systems'
            }
        }
    }
};

// ==========================================
// PROFESSIONALS LIBRARY
// ==========================================

const PROFESSIONALS = {
    development: {
        name: 'Desenvolvimento',
        roles: {
            frontendDev: {
                name: 'Desenvolvedor Front-End',
                skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js'],
                seniority: ['Junior', 'Pleno', 'Senior'],
                avatar: 'frontend-dev.jpg',
                pattern_affinity: ['mvc', 'observer', 'decorator']
            },
            backendDev: {
                name: 'Desenvolvedor Back-End',
                skills: ['Java', 'Python', 'Node.js', 'APIs', 'Database'],
                seniority: ['Junior', 'Pleno', 'Senior'],
                avatar: 'backend-dev.jpg',
                pattern_affinity: ['repository', 'factory', 'strategy']
            },
            fullstackDev: {
                name: 'Desenvolvedor Full Stack',
                skills: ['Frontend', 'Backend', 'Database', 'DevOps'],
                seniority: ['Pleno', 'Senior'],
                avatar: 'fullstack-dev.jpg',
                pattern_affinity: ['mvc', 'repository', 'facade']
            },
            mobileDev: {
                name: 'Desenvolvedor Mobile',
                skills: ['Android', 'iOS', 'React Native', 'Flutter'],
                seniority: ['Junior', 'Pleno', 'Senior'],
                avatar: 'mobile-dev.jpg',
                pattern_affinity: ['mvp', 'observer', 'command']
            },
            gameDev: {
                name: 'Desenvolvedor de Jogos',
                skills: ['Unity', 'Unreal', 'C#', 'C++', 'Graphics'],
                seniority: ['Junior', 'Pleno', 'Senior'],
                avatar: 'game-dev.jpg',
                pattern_affinity: ['state', 'observer', 'flyweight']
            }
        }
    },
    architecture: {
        name: 'Arquitetura',
        roles: {
            softwareArchitect: {
                name: 'Arquiteto de Software',
                skills: ['System Design', 'Architecture Patterns', 'Scalability'],
                seniority: ['Senior', 'Principal'],
                avatar: 'software-architect.jpg',
                pattern_affinity: ['hexagonalArchitecture', 'cqrs', 'eventSourcing']
            },
            solutionArchitect: {
                name: 'Arquiteto de Soluções',
                skills: ['Enterprise Architecture', 'Integration', 'Cloud'],
                seniority: ['Senior', 'Principal'],
                avatar: 'solution-architect.jpg',
                pattern_affinity: ['layeredArchitecture', 'facade', 'adapter']
            },
            cloudArchitect: {
                name: 'Arquiteto de Cloud',
                skills: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Microservices'],
                seniority: ['Senior', 'Principal'],
                avatar: 'cloud-architect.jpg',
                pattern_affinity: ['microservices', 'eventSourcing', 'cqrs']
            }
        }
    },
    dataScience: {
        name: 'Ciência de Dados',
        roles: {
            dataScientist: {
                name: 'Cientista de Dados',
                skills: ['Python', 'R', 'Machine Learning', 'Statistics'],
                seniority: ['Junior', 'Pleno', 'Senior'],
                avatar: 'data-scientist.jpg',
                pattern_affinity: ['strategy', 'template', 'observer']
            },
            dataEngineer: {
                name: 'Engenheiro de Dados',
                skills: ['ETL', 'Big Data', 'Spark', 'Kafka', 'Data Pipeline'],
                seniority: ['Pleno', 'Senior'],
                avatar: 'data-engineer.jpg',
                pattern_affinity: ['pipeline', 'observer', 'factory']
            },
            mlEngineer: {
                name: 'Engenheiro de Machine Learning',
                skills: ['MLOps', 'TensorFlow', 'PyTorch', 'Model Deployment'],
                seniority: ['Pleno', 'Senior'],
                avatar: 'ml-engineer.jpg',
                pattern_affinity: ['strategy', 'factory', 'observer']
            }
        }
    },
    quality: {
        name: 'Qualidade',
        roles: {
            qaEngineer: {
                name: 'Engenheiro de QA',
                skills: ['Test Automation', 'Selenium', 'API Testing'],
                seniority: ['Junior', 'Pleno', 'Senior'],
                avatar: 'qa-engineer.jpg',
                pattern_affinity: ['strategy', 'command', 'observer']
            },
            testAutomation: {
                name: 'Especialista em Automação de Testes',
                skills: ['Cypress', 'Jest', 'TestNG', 'CI/CD Integration'],
                seniority: ['Pleno', 'Senior'],
                avatar: 'test-automation.jpg',
                pattern_affinity: ['factory', 'builder', 'strategy']
            }
        }
    },
    devops: {
        name: 'DevOps',
        roles: {
            devopsEngineer: {
                name: 'Engenheiro de DevOps',
                skills: ['Docker', 'Kubernetes', 'CI/CD', 'Infrastructure'],
                seniority: ['Pleno', 'Senior'],
                avatar: 'devops-engineer.jpg',
                pattern_affinity: ['factory', 'builder', 'proxy']
            },
            sreEngineer: {
                name: 'Site Reliability Engineer',
                skills: ['Monitoring', 'Alerting', 'SLI/SLO', 'Incident Response'],
                seniority: ['Senior', 'Principal'],
                avatar: 'sre-engineer.jpg',
                pattern_affinity: ['observer', 'strategy', 'command']
            },
            platformEngineer: {
                name: 'Engenheiro de Plataforma',
                skills: ['Platform Design', 'Developer Experience', 'Automation'],
                seniority: ['Senior', 'Principal'],
                avatar: 'platform-engineer.jpg',
                pattern_affinity: ['facade', 'builder', 'factory']
            }
        }
    },
    security: {
        name: 'Segurança',
        roles: {
            securityEngineer: {
                name: 'Engenheiro de Segurança',
                skills: ['Security Architecture', 'Threat Modeling', 'SAST/DAST'],
                seniority: ['Pleno', 'Senior'],
                avatar: 'security-engineer.jpg',
                pattern_affinity: ['proxy', 'decorator', 'strategy']
            },
            ethicalHacker: {
                name: 'Hacker Ético',
                skills: ['Penetration Testing', 'Vulnerability Assessment'],
                seniority: ['Pleno', 'Senior'],
                avatar: 'ethical-hacker.jpg',
                pattern_affinity: ['proxy', 'adapter', 'strategy']
            }
        }
    }
};

// ==========================================
// METHODOLOGIES LIBRARY
// ==========================================

const METHODOLOGIES = {
    traditional: {
        name: 'Metodologias Tradicionais',
        methods: {
            waterfall: {
                name: 'Waterfall',
                description: 'Desenvolvimento sequencial linear',
                phases: ['Requirements', 'Design', 'Implementation', 'Testing', 'Deployment', 'Maintenance'],
                ceremonies: ['Kick-off', 'Design Review', 'Testing Review', 'Go-Live'],
                artifacts: ['Requirements Document', 'Design Document', 'Test Plan'],
                team_size: [5, 15],
                duration: '6-18 months',
                best_for: ['Large Enterprise', 'Regulated Industries']
            },
            vmodel: {
                name: 'V-Model',
                description: 'Verification and Validation model',
                phases: ['Requirements', 'System Design', 'Architecture', 'Module Design', 'Coding', 'Unit Testing', 'Integration Testing', 'System Testing', 'Acceptance Testing'],
                ceremonies: ['Requirements Review', 'Design Review', 'Code Review'],
                artifacts: ['V&V Plan', 'Test Cases', 'Traceability Matrix'],
                team_size: [8, 20],
                duration: '8-24 months',
                best_for: ['Critical Systems', 'Healthcare', 'Automotive']
            }
        }
    },
    agile: {
        name: 'Metodologias Ágeis',
        methods: {
            scrum: {
                name: 'Scrum',
                description: 'Framework ágil iterativo',
                phases: ['Sprint Planning', 'Daily Scrum', 'Sprint Review', 'Sprint Retrospective'],
                ceremonies: ['Daily Standup', 'Sprint Planning', 'Sprint Review', 'Retrospective', 'Backlog Refinement'],
                artifacts: ['Product Backlog', 'Sprint Backlog', 'Product Increment', 'Burndown Chart'],
                team_size: [3, 9],
                duration: '2-4 weeks sprints',
                best_for: ['Product Development', 'Startups', 'Innovation']
            },
            xp: {
                name: 'Extreme Programming',
                description: 'Práticas técnicas extremas',
                phases: ['Planning Game', 'Small Releases', 'Pair Programming', 'Test-Driven Development'],
                ceremonies: ['Planning Game', 'Standup Meeting', 'Iteration Planning'],
                artifacts: ['User Stories', 'Release Plan', 'Code', 'Automated Tests'],
                team_size: [2, 12],
                duration: '1-2 weeks iterations',
                best_for: ['High-quality Code', 'Technical Excellence']
            },
            kanban: {
                name: 'Kanban',
                description: 'Fluxo contínuo visual',
                phases: ['To Do', 'In Progress', 'Review', 'Done'],
                ceremonies: ['Daily Standup', 'Replenishment Meeting', 'Delivery Planning'],
                artifacts: ['Kanban Board', 'Cumulative Flow Diagram', 'Lead Time Chart'],
                team_size: [3, 15],
                duration: 'Continuous flow',
                best_for: ['Maintenance', 'Support', 'Operations']
            }
        }
    },
    devops: {
        name: 'DevOps & Continuous',
        methods: {
            cicd: {
                name: 'CI/CD',
                description: 'Integração e entrega contínua',
                phases: ['Code', 'Build', 'Test', 'Deploy', 'Monitor'],
                ceremonies: ['Pipeline Review', 'Deployment Review', 'Post-mortem'],
                artifacts: ['Pipeline Configuration', 'Deployment Scripts', 'Monitoring Dashboards'],
                team_size: [3, 10],
                duration: 'Continuous',
                best_for: ['Fast Delivery', 'Cloud Native', 'Microservices']
            },
            gitops: {
                name: 'GitOps',
                description: 'Git como source of truth',
                phases: ['Git Commit', 'Automated Sync', 'Deploy', 'Monitor'],
                ceremonies: ['Config Review', 'Sync Meeting', 'Incident Response'],
                artifacts: ['Infrastructure as Code', 'Config Manifests', 'Sync Policies'],
                team_size: [2, 8],
                duration: 'Continuous',
                best_for: ['Kubernetes', 'Cloud Infrastructure']
            }
        }
    },
    modern: {
        name: 'Metodologias Modernas',
        methods: {
            shapeUp: {
                name: 'Shape Up',
                description: 'Basecamp methodology',
                phases: ['Shaping', 'Betting', 'Building'],
                ceremonies: ['Betting Table', 'Show and Tell', 'Cool-down'],
                artifacts: ['Pitch', 'Circuit Breaker', 'Progress Report'],
                team_size: [2, 6],
                duration: '6 weeks cycles',
                best_for: ['Product Teams', 'Remote Work']
            },
            designSprint: {
                name: 'Design Sprint',
                description: 'Google 5-day process',
                phases: ['Understand', 'Ideate', 'Decide', 'Prototype', 'Test'],
                ceremonies: ['Lightning Demos', 'Dot Voting', 'User Testing'],
                artifacts: ['HMW Notes', 'Prototype', 'Test Results'],
                team_size: [5, 8],
                duration: '5 days',
                best_for: ['Innovation', 'Problem Solving', 'UX Design']
            }
        }
    }
};

// ==========================================
// GAME SCENARIOS
// ==========================================

const SCENARIOS = {
    development_phases: {
        planning: {
            name: 'Planejamento',
            description: 'Definir requisitos e arquitetura',
            tasks: ['Gather Requirements', 'Design Architecture', 'Choose Patterns', 'Plan Timeline'],
            patterns_needed: ['factory', 'builder', 'strategy'],
            team_roles: ['architect', 'pm', 'ba'],
            success_criteria: 'All tasks completed with appropriate patterns'
        },
        development: {
            name: 'Desenvolvimento',
            description: 'Implementar funcionalidades',
            tasks: ['Setup Environment', 'Implement Core', 'Add Features', 'Code Review'],
            patterns_needed: ['mvc', 'repository', 'observer'],
            team_roles: ['frontendDev', 'backendDev', 'fullstackDev'],
            success_criteria: 'Code quality and pattern implementation'
        },
        testing: {
            name: 'Testes',
            description: 'Garantir qualidade do software',
            tasks: ['Unit Tests', 'Integration Tests', 'E2E Tests', 'Performance Tests'],
            patterns_needed: ['strategy', 'factory', 'command'],
            team_roles: ['qaEngineer', 'testAutomation'],
            success_criteria: 'Test coverage and automation'
        },
        deployment: {
            name: 'Deploy',
            description: 'Colocar em produção',
            tasks: ['Setup CI/CD', 'Configure Environment', 'Deploy Application', 'Monitor'],
            patterns_needed: ['factory', 'proxy', 'observer'],
            team_roles: ['devopsEngineer', 'sreEngineer'],
            success_criteria: 'Successful deployment and monitoring'
        }
    }
};

// Export for use in main game
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DESIGN_PATTERNS, PROFESSIONALS, METHODOLOGIES, SCENARIOS };
}