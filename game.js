// ===============================================
// STUP_ - Software Development Lifecycle Game
// Educational 2D Game Simulating Complete SDLC
// ===============================================

class STUPCorporateGame {
    constructor() {
        this.gameState = {
            currentScreen: 'initial-screen',
            selectedProject: null,
            selectedMethodology: null,
            selectedTools: {},
            currentTeam: 'development',
            projectProgress: 0,
            currentPhase: 'analysis',
            teamMembers: this.initializeTeamMembers(),
            metrics: {
                teamMorale: 75,
                codeQuality: 80,
                customerSatisfaction: 70,
                projectEfficiency: 65
            }
        };
        
        this.projects = this.initializeProjects();
        this.methodologies = this.initializeMethodologies();
        this.tools = this.initializeTools();
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.animateInitialScreen();
    }

    initializeTeamMembers() {
        return {
            development: [
                {
                    id: 'senior-dev',
                    name: 'Carlos Silva',
                    role: 'Desenvolvedor Sênior Full-Stack',
                    skills: ['Java', 'Angular', 'Spring', 'Microservices'],
                    experience: 15,
                    productivity: 90,
                    currentTask: null
                },
                {
                    id: 'frontend-dev',
                    name: 'Ana Costa',
                    role: 'Desenvolvedora Frontend',
                    skills: ['React', 'TypeScript', 'CSS3', 'Figma'],
                    experience: 8,
                    productivity: 85,
                    currentTask: null
                },
                {
                    id: 'dba',
                    name: 'João Santos',
                    role: 'Administrador de Banco de Dados',
                    skills: ['Oracle', 'SQL Server', 'PostgreSQL', 'Performance'],
                    experience: 12,
                    productivity: 88,
                    currentTask: null
                }
            ],
            qa: [
                {
                    id: 'qa-lead',
                    name: 'Maria Oliveira',
                    role: 'QA Lead',
                    skills: ['Selenium', 'JUnit', 'TestNG', 'JIRA'],
                    experience: 10,
                    productivity: 87,
                    currentTask: null
                },
                {
                    id: 'automation-tester',
                    name: 'Pedro Almeida',
                    role: 'Engenheiro de Automação',
                    skills: ['Cypress', 'Jenkins', 'Robot Framework', 'API Testing'],
                    experience: 6,
                    productivity: 82,
                    currentTask: null
                }
            ],
            devops: [
                {
                    id: 'devops-lead',
                    name: 'Roberto Lima',
                    role: 'DevOps Engineer',
                    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
                    experience: 9,
                    productivity: 89,
                    currentTask: null
                }
            ],
            design: [
                {
                    id: 'ux-designer',
                    name: 'Beatriz Ferreira',
                    role: 'UX/UI Designer',
                    skills: ['Figma', 'Adobe XD', 'Sketch', 'User Research'],
                    experience: 7,
                    productivity: 84,
                    currentTask: null
                }
            ],
            management: [
                {
                    id: 'project-manager',
                    name: 'Luiz Gomes',
                    role: 'Gerente de Projetos',
                    skills: ['PMP', 'Scrum', 'Jira', 'MS Project'],
                    experience: 12,
                    productivity: 91,
                    currentTask: null
                },
                {
                    id: 'business-analyst',
                    name: 'Fernanda Ribeiro',
                    role: 'Analista de Negócios',
                    skills: ['BPMN', 'UML', 'Bizagi', 'Confluence'],
                    experience: 8,
                    productivity: 86,
                    currentTask: null
                }
            ]
        };
    }

    initializeProjects() {
        return {
            'erp-module': {
                name: 'Módulo ERP Financeiro',
                description: 'Sistema de gestão financeira integrado ao ERP corporativo.',
                complexity: 'high',
                duration: 6,
                teamSize: 8,
                technologies: ['Java', 'Oracle', 'Angular'],
                phases: ['Análise', 'Design', 'Implementação', 'Testes', 'Deployment'],
                risks: ['Integração com sistemas legados', 'Complexidade das regras de negócio'],
                deliverables: ['Módulo de Contas a Pagar', 'Módulo de Contas a Receber', 'Relatórios Gerenciais']
            },
            'portal-cliente': {
                name: 'Portal do Cliente',
                description: 'Portal web para clientes acessarem serviços e consultarem informações.',
                complexity: 'medium',
                duration: 4,
                teamSize: 6,
                technologies: ['React', 'Node.js', 'PostgreSQL'],
                phases: ['Análise', 'Design', 'Implementação', 'Testes', 'Deployment'],
                risks: ['Segurança de dados', 'Performance com alto volume'],
                deliverables: ['Portal Web', 'API Backend', 'Sistema de Autenticação']
            },
            'app-mobile': {
                name: 'App Mobile Corporativo',
                description: 'Aplicativo mobile para funcionários acessarem sistemas internos.',
                complexity: 'medium',
                duration: 5,
                teamSize: 5,
                technologies: ['React Native', 'Firebase'],
                phases: ['Análise', 'Design', 'Implementação', 'Testes', 'Deployment'],
                risks: ['Compatibilidade entre plataformas', 'Sincronização offline'],
                deliverables: ['App Android', 'App iOS', 'Sistema de Notificações']
            },
            'bi-dashboard': {
                name: 'Dashboard BI Executivo',
                description: 'Sistema de Business Intelligence com dashboards e relatórios.',
                complexity: 'high',
                duration: 7,
                teamSize: 7,
                technologies: ['Power BI', 'SQL Server', 'Python'],
                phases: ['Análise', 'Design', 'Implementação', 'Testes', 'Deployment'],
                risks: ['Qualidade dos dados', 'Performance de consultas'],
                deliverables: ['Dashboards Executivos', 'Relatórios Automatizados', 'Data Warehouse']
            },
            'api-integration': {
                name: 'API de Integração',
                description: 'API REST para integração entre sistemas legados e novas aplicações.',
                complexity: 'low',
                duration: 3,
                teamSize: 4,
                technologies: ['Spring Boot', 'Redis', 'Docker'],
                phases: ['Análise', 'Design', 'Implementação', 'Testes', 'Deployment'],
                risks: ['Compatibilidade com sistemas legados', 'Latência de rede'],
                deliverables: ['API REST', 'Documentação', 'Sistema de Monitoramento']
            }
        };
    }

    initializeMethodologies() {
        return {
            waterfall: {
                name: 'Waterfall',
                description: 'Metodologia sequencial ideal para projetos com requisitos bem definidos.',
                phases: ['Análise', 'Design', 'Implementação', 'Testes', 'Deployment'],
                advantages: ['Estrutura clara', 'Documentação completa', 'Cronograma previsível'],
                disadvantages: ['Pouca flexibilidade', 'Feedback tardio', 'Risco de mudanças'],
                bestFor: ['Projetos com requisitos estáveis', 'Ambientes regulamentados']
            },
            scrum: {
                name: 'Scrum',
                description: 'Framework ágil com sprints de 2-4 semanas.',
                phases: ['Sprint Planning', 'Daily Scrum', 'Sprint Review', 'Retrospective'],
                advantages: ['Flexibilidade', 'Feedback contínuo', 'Entregas frequentes'],
                disadvantages: ['Requer experiência', 'Pode ser caótico', 'Documentação limitada'],
                bestFor: ['Projetos inovadores', 'Equipes autônomas']
            },
            kanban: {
                name: 'Kanban',
                description: 'Sistema visual de fluxo contínuo.',
                phases: ['To Do', 'In Progress', 'Review', 'Done'],
                advantages: ['Visualização clara', 'Fluxo contínuo', 'Flexibilidade total'],
                disadvantages: ['Falta de estrutura', 'Pode gerar gargalos', 'Difícil planejamento'],
                bestFor: ['Manutenção de sistemas', 'Equipes pequenas']
            }
        };
    }

    initializeTools() {
        return {
            development: {
                ides: ['IntelliJ IDEA Ultimate', 'Visual Studio Code', 'Eclipse IDE'],
                versionControl: ['Git + GitLab Enterprise', 'Apache Subversion'],
                frameworks: ['Spring Boot', 'Angular', 'React'],
                databases: ['Oracle', 'PostgreSQL', 'SQL Server']
            },
            qa: {
                automation: ['Selenium WebDriver', 'Cypress.io', 'TestNG Framework'],
                management: ['JIRA + Zephyr', 'TestLink'],
                performance: ['JMeter', 'LoadRunner'],
                api: ['Postman', 'SoapUI']
            },
            design: {
                ui: ['Figma Enterprise', 'Sketch + Abstract', 'Adobe XD'],
                graphic: ['Adobe Photoshop', 'GIMP'],
                prototyping: ['InVision', 'Marvel'],
                research: ['Hotjar', 'Google Analytics']
            },
            devops: {
                containers: ['Docker', 'Kubernetes'],
                cloud: ['AWS', 'Azure', 'Google Cloud'],
                cicd: ['Jenkins', 'GitLab CI', 'Azure DevOps'],
                monitoring: ['Prometheus', 'Grafana', 'New Relic']
            },
            management: {
                project: ['JIRA', 'MS Project', 'Trello'],
                documentation: ['Confluence', 'SharePoint', 'Notion'],
                communication: ['Slack', 'Microsoft Teams', 'Zoom'],
                reporting: ['Power BI', 'Tableau', 'Excel']
            }
        };
    }

    setupEventListeners() {
        try {
            // Enter key to start
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && this.gameState.currentScreen === 'initial-screen') {
                    this.transitionToScreen('teams-presentation');
                }
            });

            // Continue to projects button
            const continueBtn = document.getElementById('continue-to-projects');
            if (continueBtn) {
                continueBtn.addEventListener('click', () => {
                    this.transitionToScreen('project-selection');
                });
            }

            // Project selection
            this.setupProjectSelection();

            // Methodology selection
            this.setupMethodologySelection();

            // Tools setup
            this.setupToolsConfiguration();

            // Team navigation
            this.setupTeamNavigation();

            // Member card interactions
            this.setupMemberCardInteractions();
        } catch (error) {
            console.error('Error setting up event listeners:', error);
        }
    }

    setupProjectSelection() {
        try {
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                card.addEventListener('click', () => {
                    // Remove previous selection
                    projectCards.forEach(c => c.classList.remove('selected'));
                    
                    // Select current card
                    card.classList.add('selected');
                    this.gameState.selectedProject = card.dataset.project;
                    
                    // Auto-advance after selection
                    setTimeout(() => {
                        this.transitionToScreen('methodology-selection');
                    }, 800);
                });

                // Hover effects
                card.addEventListener('mouseenter', () => {
                    if (!card.classList.contains('selected')) {
                        this.animateCardHover(card, true);
                    }
                });

                card.addEventListener('mouseleave', () => {
                    if (!card.classList.contains('selected')) {
                        this.animateCardHover(card, false);
                    }
                });
            });
        } catch (error) {
            console.error('Error setting up project selection:', error);
        }
    }

    setupMethodologySelection() {
        try {
            const methodologyCards = document.querySelectorAll('.methodology-card');
            methodologyCards.forEach(card => {
                card.addEventListener('click', () => {
                    // Remove previous selection
                    methodologyCards.forEach(c => c.classList.remove('selected'));
                    
                    // Select current card
                    card.classList.add('selected');
                    this.gameState.selectedMethodology = card.dataset.methodology;
                    
                    // Auto-advance after selection
                    setTimeout(() => {
                        this.transitionToScreen('tools-setup');
                    }, 800);
                });
            });
        } catch (error) {
            console.error('Error setting up methodology selection:', error);
        }
    }

    setupToolsConfiguration() {
        try {
            const startProjectBtn = document.getElementById('start-project');
            if (startProjectBtn) {
                startProjectBtn.addEventListener('click', () => {
                    this.collectSelectedTools();
                    this.transitionToScreen('main-game');
                    this.initializeMainGame();
                });
            }

            // Tool selection
            const toolOptions = document.querySelectorAll('.tool-option');
            toolOptions.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.preventDefault();
                    const checkbox = option.querySelector('input[type="checkbox"]');
                    if (checkbox) {
                        checkbox.checked = !checkbox.checked;
                        
                        // Visual feedback
                        if (checkbox.checked) {
                            option.style.background = 'rgba(39, 174, 96, 0.2)';
                            option.style.borderLeft = '4px solid var(--accent-green)';
                        } else {
                            option.style.background = 'rgba(255, 255, 255, 0.05)';
                            option.style.borderLeft = 'none';
                        }
                    }
                });
            });
        } catch (error) {
            console.error('Error setting up tools configuration:', error);
        }
    }

    setupTeamNavigation() {
        try {
            const teamNavBtns = document.querySelectorAll('.team-nav-btn');
            teamNavBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active class from all buttons
                    teamNavBtns.forEach(b => b.classList.remove('active'));
                    
                    // Add active class to clicked button
                    btn.classList.add('active');
                    
                    // Update current team
                    this.gameState.currentTeam = btn.dataset.team;
                    
                    // Update workspace
                    this.updateTeamWorkspace();
                });
            });
        } catch (error) {
            console.error('Error setting up team navigation:', error);
        }
    }

    setupMemberCardInteractions() {
        try {
            const memberCards = document.querySelectorAll('.member-card');
            memberCards.forEach(card => {
                card.addEventListener('click', () => {
                    this.showMemberDetails(card.dataset.member);
                });
            });
        } catch (error) {
            console.error('Error setting up member card interactions:', error);
        }
    }

    animateInitialScreen() {
        // Animate letters with stagger
        const letters = document.querySelectorAll('.game-title .letter');
        letters.forEach((letter, index) => {
            letter.style.animationDelay = `${0.2 + index * 0.2}s`;
        });

        // Animate cursor after letters
        const cursor = document.querySelector('.game-title .cursor');
        if (cursor) {
            cursor.style.animationDelay = '1s';
        }
    }

    animateCardHover(card, isHover) {
        if (isHover) {
            card.style.transform = 'translateY(-8px) scale(1.02)';
            card.style.boxShadow = '0 20px 40px rgba(39, 174, 96, 0.3)';
        } else {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = 'none';
        }
    }

    transitionToScreen(screenId) {
        const currentScreen = document.querySelector('.screen.active');
        const nextScreen = document.getElementById(screenId);

        if (currentScreen && nextScreen) {
            // Fade out current screen
            currentScreen.style.opacity = '0';
            currentScreen.style.transform = 'translateX(-30px)';

            setTimeout(() => {
                currentScreen.classList.remove('active');
                nextScreen.classList.add('active');
                
                // Animate in new screen
                nextScreen.style.opacity = '0';
                nextScreen.style.transform = 'translateX(30px)';
                
                setTimeout(() => {
                    nextScreen.style.opacity = '1';
                    nextScreen.style.transform = 'translateX(0)';
                }, 50);

                // Update game state
                this.gameState.currentScreen = screenId;

                // Trigger screen-specific animations
                this.triggerScreenAnimations(screenId);
            }, 300);
        }
    }

    triggerScreenAnimations(screenId) {
        switch(screenId) {
            case 'teams-presentation':
                this.animateTeamMemberCards();
                break;
            case 'project-selection':
                this.animateProjectCards();
                break;
            case 'methodology-selection':
                this.animateMethodologyCards();
                break;
            case 'main-game':
                this.animateMainGameInterface();
                break;
        }
    }

    animateTeamMemberCards() {
        const memberCards = document.querySelectorAll('.member-card');
        memberCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8) translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
                card.style.opacity = '1';
                card.style.transform = 'scale(1) translateY(0)';
            }, index * 100);
        });
    }

    animateProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.8s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }

    animateMethodologyCards() {
        const methodologyCards = document.querySelectorAll('.methodology-card');
        methodologyCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.9) rotateY(15deg)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'scale(1) rotateY(0deg)';
            }, index * 200);
        });
    }

    animateMainGameInterface() {
        const gameHeader = document.querySelector('.game-header');
        const teamWorkspace = document.querySelector('.team-workspace');

        if (gameHeader) {
            gameHeader.style.transform = 'translateY(-100%)';
            setTimeout(() => {
                gameHeader.style.transition = 'transform 0.6s ease';
                gameHeader.style.transform = 'translateY(0)';
            }, 100);
        }

        if (teamWorkspace) {
            teamWorkspace.style.opacity = '0';
            setTimeout(() => {
                teamWorkspace.style.transition = 'opacity 0.8s ease';
                teamWorkspace.style.opacity = '1';
            }, 400);
        }
    }

    collectSelectedTools() {
        const checkboxes = document.querySelectorAll('.tool-option input[type="checkbox"]:checked');
        const selectedTools = {};

        checkboxes.forEach(checkbox => {
            const toolName = checkbox.value;
            const category = checkbox.name;
            
            if (!selectedTools[category]) {
                selectedTools[category] = [];
            }
            selectedTools[category].push(toolName);
        });

        this.gameState.selectedTools = selectedTools;
        console.log('Selected Tools:', selectedTools);
    }

    initializeMainGame() {
        // Set project info
        const project = this.projects[this.gameState.selectedProject];
        const projectNameEl = document.getElementById('current-project-name');
        const projectPhaseEl = document.getElementById('project-phase');
        const projectProgressEl = document.getElementById('project-progress');

        if (projectNameEl) projectNameEl.textContent = project.name;
        if (projectPhaseEl) projectPhaseEl.textContent = `Fase: ${this.gameState.currentPhase}`;
        if (projectProgressEl) projectProgressEl.textContent = `Progresso: ${this.gameState.projectProgress}%`;

        // Initialize team workspace
        this.updateTeamWorkspace();
    }

    updateTeamWorkspace() {
        try {
            const workspace = document.getElementById('team-workspace');
            const currentTeam = this.gameState.currentTeam;
            const teamMembers = this.gameState.teamMembers[currentTeam];

            if (!workspace) {
                console.warn('Team workspace element not found');
                return;
            }

            if (!teamMembers) {
                console.warn(`Team members not found for team: ${currentTeam}`);
                return;
            }

            workspace.innerHTML = this.generateTeamWorkspaceHTML(currentTeam, teamMembers);
            this.setupWorkspaceInteractions();
        } catch (error) {
            console.error('Error updating team workspace:', error);
        }
    }

    generateTeamWorkspaceHTML(teamName, members) {
        const teamDisplayNames = {
            development: 'Desenvolvimento',
            qa: 'Quality Assurance',
            devops: 'DevOps',
            design: 'Design',
            management: 'Gestão'
        };

        const teamIcons = {
            development: '💻',
            qa: '🧪',
            devops: '⚙️',
            design: '🎨',
            management: '📊'
        };

        return `
            <div class="workspace-header">
                <h2>${teamIcons[teamName]} Equipe de ${teamDisplayNames[teamName]}</h2>
                <p>Gerencie as atividades e monitore o progresso da equipe</p>
            </div>

            <div class="workspace-content">
                <div class="team-overview">
                    <div class="team-stats">
                        <div class="stat-card">
                            <h4>Membros Ativos</h4>
                            <span class="stat-value">${members.length}</span>
                        </div>
                        <div class="stat-card">
                            <h4>Produtividade Média</h4>
                            <span class="stat-value">${Math.round(members.reduce((acc, m) => acc + m.productivity, 0) / members.length)}%</span>
                        </div>
                        <div class="stat-card">
                            <h4>Tarefas Ativas</h4>
                            <span class="stat-value">${members.filter(m => m.currentTask).length}</span>
                        </div>
                    </div>
                </div>

                <div class="members-workspace">
                    ${members.map(member => this.generateMemberWorkspaceCard(member)).join('')}
                </div>

                <div class="team-actions">
                    <button class="action-btn primary" onclick="game.assignTasks('${teamName}')">
                        Atribuir Tarefas
                    </button>
                    <button class="action-btn secondary" onclick="game.showTeamMeeting('${teamName}')">
                        Reunião de Equipe
                    </button>
                    <button class="action-btn secondary" onclick="game.viewTeamReports('${teamName}')">
                        Relatórios
                    </button>
                </div>
            </div>
        `;
    }

    generateMemberWorkspaceCard(member) {
        const statusColors = {
            available: '#27ae60',
            busy: '#f39c12',
            blocked: '#e74c3c'
        };

        const currentStatus = member.currentTask ? 'busy' : 'available';
        const statusText = {
            available: 'Disponível',
            busy: 'Trabalhando',
            blocked: 'Bloqueado'
        };

        return `
            <div class="member-workspace-card" data-member="${member.id}">
                <div class="member-header">
                    <div class="member-avatar">
                        <div class="avatar-img" style="background: linear-gradient(135deg, ${this.getTeamColor(member.role)});">
                            ${member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <div class="status-indicator" style="background: ${statusColors[currentStatus]}"></div>
                    </div>
                    <div class="member-basic-info">
                        <h4>${member.name}</h4>
                        <p>${member.role}</p>
                        <span class="status-text">${statusText[currentStatus]}</span>
                    </div>
                </div>

                <div class="member-current-work">
                    ${member.currentTask ? `
                        <div class="current-task">
                            <h5>Tarefa Atual:</h5>
                            <p>${member.currentTask}</p>
                            <div class="task-progress">
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${Math.random() * 100}%"></div>
                                </div>
                            </div>
                        </div>
                    ` : `
                        <div class="no-task">
                            <p>Aguardando atribuição de tarefa</p>
                            <button class="mini-btn" onclick="game.assignTaskToMember('${member.id}')">
                                Atribuir Tarefa
                            </button>
                        </div>
                    `}
                </div>

                <div class="member-skills-quick">
                    ${member.skills.slice(0, 3).map(skill => `
                        <span class="skill-tag">${skill}</span>
                    `).join('')}
                    ${member.skills.length > 3 ? `<span class="more-skills">+${member.skills.length - 3}</span>` : ''}
                </div>

                <div class="member-productivity">
                    <div class="productivity-bar">
                        <div class="productivity-fill" style="width: ${member.productivity}%"></div>
                    </div>
                    <span class="productivity-text">${member.productivity}% produtividade</span>
                </div>
            </div>
        `;
    }

    getTeamColor(role) {
        const colorMap = {
            'Desenvolvedor Sênior Full-Stack': '#4a90e2, #357abd',
            'Desenvolvedora Frontend': '#ff6b35, #f7931e',
            'Administrador de Banco de Dados': '#50e3c2, #4ecdc4',
            'QA Lead': '#f5a623, #e67e22',
            'Engenheiro de Automação': '#bd10e0, #9c88ff',
            'DevOps Engineer': '#7ed321, #68bc00',
            'UX/UI Designer': '#ff1744, #d50000',
            'Gerente de Projetos': '#795548, #5d4037',
            'Analista de Negócios': '#9013fe, #6a0d83'
        };
        return colorMap[role] || '#666, #888';
    }

    setupWorkspaceInteractions() {
        // Add CSS for workspace if not already added
        if (!document.getElementById('workspace-styles')) {
            const workspaceStyles = document.createElement('style');
            workspaceStyles.id = 'workspace-styles';
            workspaceStyles.textContent = `
                .workspace-header {
                    text-align: center;
                    margin-bottom: 40px;
                    padding: 30px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 15px;
                    backdrop-filter: blur(10px);
                }

                .workspace-header h2 {
                    font-size: 2rem;
                    color: var(--accent-green);
                    margin-bottom: 10px;
                }

                .workspace-content {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                }

                .team-stats {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 20px;
                    margin-bottom: 30px;
                }

                .stat-card {
                    background: rgba(255, 255, 255, 0.05);
                    border: 2px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 20px;
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .stat-card:hover {
                    border-color: var(--accent-green);
                    background: rgba(255, 255, 255, 0.08);
                }

                .stat-card h4 {
                    color: var(--corporate-silver);
                    margin-bottom: 10px;
                    font-size: 0.9rem;
                }

                .stat-value {
                    color: var(--accent-green);
                    font-size: 2rem;
                    font-weight: 700;
                    font-family: 'JetBrains Mono', monospace;
                }

                .members-workspace {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 25px;
                }

                .member-workspace-card {
                    background: rgba(255, 255, 255, 0.05);
                    border: 2px solid rgba(255, 255, 255, 0.1);
                    border-radius: 15px;
                    padding: 25px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .member-workspace-card:hover {
                    transform: translateY(-5px);
                    border-color: var(--accent-green);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                }

                .member-header {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 20px;
                }

                .member-avatar {
                    position: relative;
                }

                .avatar-img {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: 600;
                    font-size: 1.2rem;
                }

                .status-indicator {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    border: 3px solid var(--corporate-dark);
                }

                .member-basic-info h4 {
                    color: var(--corporate-white);
                    margin-bottom: 5px;
                }

                .member-basic-info p {
                    color: var(--corporate-silver);
                    font-size: 0.9rem;
                    margin-bottom: 5px;
                }

                .status-text {
                    font-size: 0.8rem;
                    color: var(--accent-green);
                    font-weight: 500;
                }

                .member-current-work {
                    margin-bottom: 15px;
                    padding: 15px;
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 8px;
                }

                .current-task h5 {
                    color: var(--accent-green);
                    margin-bottom: 8px;
                    font-size: 0.9rem;
                }

                .current-task p {
                    color: var(--corporate-silver);
                    margin-bottom: 10px;
                    line-height: 1.4;
                }

                .task-progress .progress-bar {
                    width: 100%;
                    height: 6px;
                    background: var(--corporate-gray);
                    border-radius: 3px;
                    overflow: hidden;
                }

                .task-progress .progress-fill {
                    height: 100%;
                    background: var(--accent-green);
                    transition: width 0.5s ease;
                }

                .no-task {
                    text-align: center;
                    color: var(--corporate-silver);
                }

                .mini-btn {
                    background: var(--accent-green);
                    border: none;
                    border-radius: 6px;
                    color: white;
                    padding: 8px 16px;
                    margin-top: 10px;
                    cursor: pointer;
                    font-size: 0.8rem;
                    transition: all 0.3s ease;
                }

                .mini-btn:hover {
                    background: var(--corporate-light-blue);
                    transform: translateY(-2px);
                }

                .member-skills-quick {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                    margin-bottom: 15px;
                }

                .skill-tag {
                    background: var(--accent-purple);
                    color: white;
                    padding: 3px 8px;
                    border-radius: 12px;
                    font-size: 0.7rem;
                    font-weight: 500;
                }

                .more-skills {
                    background: var(--corporate-gray);
                    color: var(--corporate-silver);
                    padding: 3px 8px;
                    border-radius: 12px;
                    font-size: 0.7rem;
                }

                .member-productivity {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .productivity-bar {
                    flex: 1;
                    height: 8px;
                    background: var(--corporate-gray);
                    border-radius: 4px;
                    overflow: hidden;
                }

                .productivity-fill {
                    height: 100%;
                    background: linear-gradient(90deg, var(--accent-red), var(--accent-yellow), var(--accent-green));
                    transition: width 0.5s ease;
                }

                .productivity-text {
                    color: var(--corporate-silver);
                    font-size: 0.8rem;
                    font-weight: 500;
                }

                .team-actions {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    margin-top: 30px;
                    padding: 20px;
                }

                .action-btn {
                    padding: 12px 24px;
                    border: 2px solid;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .action-btn.primary {
                    background: var(--accent-green);
                    border-color: var(--accent-green);
                    color: white;
                }

                .action-btn.primary:hover {
                    background: var(--corporate-light-blue);
                    border-color: var(--corporate-light-blue);
                    transform: translateY(-2px);
                }

                .action-btn.secondary {
                    background: transparent;
                    border-color: var(--corporate-silver);
                    color: var(--corporate-silver);
                }

                .action-btn.secondary:hover {
                    border-color: var(--accent-green);
                    color: var(--accent-green);
                    background: rgba(39, 174, 96, 0.1);
                }

                @media (max-width: 768px) {
                    .members-workspace {
                        grid-template-columns: 1fr;
                    }
                    
                    .team-actions {
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    .action-btn {
                        width: 100%;
                        max-width: 250px;
                    }
                }
            `;
            document.head.appendChild(workspaceStyles);
        }
    }

    // Placeholder methods for future implementation
    assignTasks(teamName) {
        try {
            console.log(`Assigning tasks to ${teamName} team`);
            
            // Create a simple modal for task assignment
            const modal = this.createModal('Atribuição de Tarefas', `
                <div style="text-align: center; padding: 20px;">
                    <h3>📋 Atribuir Tarefas - Equipe de ${teamName}</h3>
                    <p>Sistema de atribuição de tarefas será implementado em breve!</p>
                    <p>Esta funcionalidade permitirá:</p>
                    <ul style="text-align: left; max-width: 300px; margin: 20px auto;">
                        <li>Criar novas tarefas</li>
                        <li>Atribuir a membros específicos</li>
                        <li>Definir prioridades</li>
                        <li>Acompanhar progresso</li>
                    </ul>
                    <button onclick="this.closest('.game-modal').remove()" style="
                        background: var(--accent-green);
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        color: white;
                        cursor: pointer;
                        margin-top: 20px;
                    ">Fechar</button>
                </div>
            `);
            
            document.body.appendChild(modal);
        } catch (error) {
            console.error('Error in assignTasks:', error);
        }
    }

    assignTaskToMember(memberId) {
        try {
            console.log(`Assigning task to member ${memberId}`);
            const member = this.findMemberById(memberId);
            const memberName = member ? member.name : memberId;
            
            const modal = this.createModal('Atribuir Tarefa Individual', `
                <div style="text-align: center; padding: 20px;">
                    <h3>👤 Atribuir Tarefa - ${memberName}</h3>
                    <p>Funcionalidade em desenvolvimento...</p>
                    <button onclick="this.closest('.game-modal').remove()" style="
                        background: var(--accent-green);
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        color: white;
                        cursor: pointer;
                        margin-top: 20px;
                    ">Fechar</button>
                </div>
            `);
            
            document.body.appendChild(modal);
        } catch (error) {
            console.error('Error in assignTaskToMember:', error);
        }
    }

    showTeamMeeting(teamName) {
        try {
            console.log(`Starting team meeting for ${teamName}`);
            
            const modal = this.createModal('Reunião de Equipe', `
                <div style="text-align: center; padding: 20px;">
                    <h3>🤝 Reunião - Equipe de ${teamName}</h3>
                    <p>Sistema de reuniões virtuais em desenvolvimento...</p>
                    <p>Funcionalidades planejadas:</p>
                    <ul style="text-align: left; max-width: 300px; margin: 20px auto;">
                        <li>Daily standups</li>
                        <li>Sprint planning</li>
                        <li>Retrospectivas</li>
                        <li>Revisões de código</li>
                    </ul>
                    <button onclick="this.closest('.game-modal').remove()" style="
                        background: var(--accent-green);
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        color: white;
                        cursor: pointer;
                        margin-top: 20px;
                    ">Fechar</button>
                </div>
            `);
            
            document.body.appendChild(modal);
        } catch (error) {
            console.error('Error in showTeamMeeting:', error);
        }
    }

    viewTeamReports(teamName) {
        try {
            console.log(`Viewing reports for ${teamName} team`);
            
            const modal = this.createModal('Relatórios da Equipe', `
                <div style="text-align: center; padding: 20px;">
                    <h3>📊 Relatórios - Equipe de ${teamName}</h3>
                    <p>Dashboard de relatórios em desenvolvimento...</p>
                    <p>Métricas disponíveis:</p>
                    <ul style="text-align: left; max-width: 300px; margin: 20px auto;">
                        <li>Produtividade da equipe</li>
                        <li>Tempo por tarefa</li>
                        <li>Qualidade do código</li>
                        <li>Burndown charts</li>
                    </ul>
                    <button onclick="this.closest('.game-modal').remove()" style="
                        background: var(--accent-green);
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        color: white;
                        cursor: pointer;
                        margin-top: 20px;
                    ">Fechar</button>
                </div>
            `);
            
            document.body.appendChild(modal);
        } catch (error) {
            console.error('Error in viewTeamReports:', error);
        }
    }

    showMemberDetails(memberId) {
        try {
            console.log(`Showing details for member ${memberId}`);
            const member = this.findMemberById(memberId);
            
            if (!member) {
                console.warn(`Member not found: ${memberId}`);
                return;
            }
            
            const modal = this.createModal(`Detalhes - ${member.name}`, `
                <div style="padding: 20px;">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div style="
                            width: 80px;
                            height: 80px;
                            border-radius: 50%;
                            background: linear-gradient(135deg, ${this.getTeamColor(member.role)});
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            color: white;
                            font-weight: 600;
                            font-size: 1.5rem;
                            margin-bottom: 15px;
                        ">
                            ${member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <h3>${member.name}</h3>
                        <p style="color: var(--accent-green);">${member.role}</p>
                    </div>
                    
                    <div style="text-align: left; max-width: 400px; margin: 0 auto;">
                        <p><strong>Experiência:</strong> ${member.experience} anos</p>
                        <p><strong>Produtividade:</strong> ${member.productivity}%</p>
                        <p><strong>Status:</strong> ${member.currentTask ? 'Trabalhando' : 'Disponível'}</p>
                        
                        <div style="margin: 15px 0;">
                            <strong>Habilidades:</strong>
                            <div style="margin-top: 10px;">
                                ${member.skills.map(skill => `
                                    <span style="
                                        background: var(--accent-purple);
                                        color: white;
                                        padding: 4px 8px;
                                        border-radius: 12px;
                                        font-size: 0.8rem;
                                        margin: 2px;
                                        display: inline-block;
                                    ">${skill}</span>
                                `).join('')}
                            </div>
                        </div>
                        
                        ${member.currentTask ? `
                            <div style="margin: 15px 0;">
                                <strong>Tarefa Atual:</strong>
                                <p style="color: var(--corporate-silver);">${member.currentTask}</p>
                            </div>
                        ` : ''}
                    </div>
                    
                    <div style="text-align: center; margin-top: 20px;">
                        <button onclick="this.closest('.game-modal').remove()" style="
                            background: var(--accent-green);
                            border: none;
                            padding: 10px 20px;
                            border-radius: 5px;
                            color: white;
                            cursor: pointer;
                        ">Fechar</button>
                    </div>
                </div>
            `);
            
            document.body.appendChild(modal);
        } catch (error) {
            console.error('Error in showMemberDetails:', error);
        }
    }

    // Helper methods
    findMemberById(memberId) {
        try {
            for (const teamName in this.gameState.teamMembers) {
                const member = this.gameState.teamMembers[teamName].find(m => m.id === memberId);
                if (member) return member;
            }
            return null;
        } catch (error) {
            console.error('Error finding member:', error);
            return null;
        }
    }

    createModal(title, content) {
        try {
            const modal = document.createElement('div');
            modal.className = 'game-modal';
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            const modalContent = document.createElement('div');
            modalContent.style.cssText = `
                background: var(--corporate-gray);
                border: 2px solid var(--accent-green);
                border-radius: 15px;
                max-width: 90%;
                max-height: 90%;
                overflow-y: auto;
                position: relative;
            `;
            
            modalContent.innerHTML = `
                <div style="
                    background: var(--accent-green);
                    color: white;
                    padding: 15px 20px;
                    font-size: 1.2rem;
                    font-weight: 600;
                    border-radius: 13px 13px 0 0;
                ">${title}</div>
                ${content}
            `;
            
            modal.appendChild(modalContent);
            
            // Close on outside click
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
            
            // Animate in
            setTimeout(() => {
                modal.style.opacity = '1';
            }, 10);
            
            return modal;
        } catch (error) {
            console.error('Error creating modal:', error);
            return null;
        }
    }
}

// Initialize the game when DOM is loaded
let game;
document.addEventListener('DOMContentLoaded', () => {
    game = new STUPCorporateGame();
    console.log('STUP_ Corporate Game Initialized');
});