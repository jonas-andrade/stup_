# DevCode - A Jornada Profissional do Desenvolvedor

## 🎮 Visão Geral

**DevCode** é um jogo interativo que simula a jornada profissional de desenvolvimento de software, oferecendo diferentes contextos de trabalho, metodologias e formações de equipe. O jogo foi desenvolvido com **Three.js** para efeitos visuais profissionais e navegação completa por teclado.

## 🚀 Funcionalidades Principais

### 🎯 Contextos de Desenvolvimento
O jogo oferece 6 contextos profissionais únicos, cada um com metodologias específicas:

1. **🏢 Enterprise**: Grandes corporações com processos estruturados
   - Metodologias: Waterfall, ITIL
   - Equipes: Solution Architect, Project Manager, Business Analyst, Senior Developer, QA Manager

2. **🚀 Startup**: Ambiente ágil focado em inovação rápida
   - Metodologias: Lean Startup, Design Thinking, Growth Hacking
   - Equipes: Founder/CEO, Full Stack Developer, Product Designer, Growth Hacker

3. **⚡ Ágil**: Desenvolvimento iterativo e colaborativo
   - Metodologias: Scrum, Extreme Programming
   - Equipes: Scrum Master, Product Owner, Developer, Tester, UX Designer

4. **🔧 DevOps**: Integração contínua e entrega automatizada
   - Metodologias: CI/CD, GitOps, SRE
   - Equipes: Site Reliability Engineer, DevOps Engineer, Platform Engineer

5. **🌍 Open Source**: Colaboração global e transparente
   - Metodologias: Community-driven, Fork & Pull Request
   - Equipes: Maintainer, Contributor, Documentation Writer

6. **💼 Consultoria**: Projetos diversos com metodologias adaptáveis
   - Metodologias: PMBOK, Client-centric, Multi-stack
   - Equipes: Senior Consultant, Business Analyst, Technical Specialist

### 🎨 Design Visual Profissional

- **Three.js Integration**: Fundo 3D animado com elementos geométricos
- **Glassmorphism**: Efeitos de vidro com blur e transparência
- **Paleta Monocromática**: Tons de preto, cinza e branco com acentos cyan
- **Tipografia Moderna**: Inter + JetBrains Mono para interface profissional
- **Animações Suaves**: Transições cinematográficas entre telas

### ⌨️ Navegação por Teclado

- **↑/↓**: Navegar entre opções
- **ENTER**: Selecionar opção atual
- **ESC**: Voltar para tela anterior
- **Indicadores Visuais**: Hints de teclado sempre visíveis

### 🎭 Avatares de Personagens

- **SVG Gerados Dinamicamente**: Avatares únicos para cada profissão
- **Cores Temáticas**: Cada role tem sua cor característica
- **Iniciais Personalizadas**: Identificação rápida por iniciais
- **Gradientes Profissionais**: Efeitos visuais modernos

### 🏢 Sala de Reunião Virtual

- **Mesa de Conferência**: Visualização 3D da equipe
- **Contexto Específico**: Reuniões baseadas na metodologia escolhida
- **Ações Interativas**: Iniciar reunião, ver agenda, quadro Kanban
- **Posicionamento Dinâmico**: Membros da equipe posicionados automaticamente

## 🎯 Fluxo do Jogo

### 1. Tela de Boas-vindas
- Apresentação do jogo
- Instruções de navegação por teclado
- Animação de cursor piscando

### 2. Seleção de Contexto
- 6 contextos de desenvolvimento disponíveis
- Descrição detalhada de cada contexto
- Metodologias listadas para cada contexto

### 3. Escolha de Metodologia
- Metodologias específicas do contexto escolhido
- Descrição das fases de cada metodologia
- Tags visuais das fases principais

### 4. Formação da Equipe
- Roles específicos para cada contexto
- Skills detalhadas para cada profissional
- Limite de 5 membros por equipe
- Mínimo de 3 membros para prosseguir

### 5. Workspace Virtual
- Sala de reunião com mesa circular
- Equipe posicionada automaticamente
- Ações contextuais baseadas na metodologia
- Progressão para próximas fases

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Variáveis CSS, Grid, Flexbox, Animations
- **JavaScript ES6+**: Módulos, Classes, Async/Await
- **Three.js**: Renderização 3D e efeitos visuais
- **SVG**: Geração dinâmica de avatares
- **Web APIs**: Keyboard Events, Local Storage

## 🎨 Aspectos Técnicos

### Sistema de Estado
```javascript
const GameState = {
    currentScreen: 'welcomeScreen',
    selectedContext: null,
    selectedMethodology: null,
    selectedTeam: [],
    navigationIndex: 0,
    maxTeamSize: 5
};
```

### Estrutura de Contextos
```javascript
const CONTEXTS = {
    contextName: {
        name: 'Display Name',
        description: 'Context description',
        methodologies: {
            methodologyKey: {
                name: 'Methodology Name',
                description: 'Description',
                phases: ['Phase1', 'Phase2'],
                meetings: ['Meeting1', 'Meeting2'],
                artifacts: ['Artifact1', 'Artifact2']
            }
        },
        roles: {
            roleKey: {
                name: 'Role Name',
                skills: ['Skill1', 'Skill2', 'Skill3']
            }
        }
    }
};
```

### Three.js Setup
- Scene com iluminação ambiente e direcional
- Geometrias wireframe animadas
- Renderização em tempo real
- Responsividade automática

## 🎯 Metodologias Implementadas

### Enterprise
- **Waterfall**: Desenvolvimento sequencial estruturado
- **ITIL**: Framework de gerenciamento de serviços de TI

### Startup
- **Lean Startup**: Build-Measure-Learn ciclo
- **Design Thinking**: Abordagem centrada no usuário
- **Growth Hacking**: Estratégias de crescimento acelerado

### Ágil
- **Scrum**: Framework com sprints e cerimônias
- **XP**: Práticas técnicas extremas para qualidade

### DevOps
- **CI/CD**: Integração e entrega contínua
- **GitOps**: Operações declarativas via Git
- **SRE**: Engenharia de confiabilidade

### Open Source
- **Community-driven**: Desenvolvimento orientado pela comunidade
- **Fork & PR**: Modelo de contribuição padrão

### Consultoria
- **PMBOK**: Guia de gerenciamento de projetos
- **Client-centric**: Metodologia centrada no cliente
- **Multi-stack**: Adaptação tecnológica por projeto

## 🎨 Guia de Estilo

### Cores
- `--void-black`: #000000 (Background principal)
- `--graphite`: #1a1a1a (Painéis)
- `--steel-gray`: #2a2a2a (Elementos UI)
- `--neon-cyan`: #00ffcc (Acentos e highlights)
- `--crystal-white`: #ffffff (Texto principal)

### Tipografia
- **Família Principal**: 'Inter' (Interface)
- **Família Mono**: 'JetBrains Mono' (Código e dados)
- **Pesos**: 300, 400, 500, 600

### Animações
- **Transições**: cubic-bezier(0.16, 1, 0.3, 1)
- **Durações**: 300ms (rápidas), 1.2s (telas)
- **Efeitos**: Transform, Opacity, Filter

## 🚀 Como Usar

1. **Abrir o Jogo**: Acesse `index.html` no navegador
2. **Navegar**: Use as setas ↑/↓ para navegar
3. **Selecionar**: Pressione ENTER para confirmar
4. **Voltar**: Use ESC para retornar à tela anterior
5. **Progredir**: Complete cada etapa para avançar

## 🎯 Objetivos Pedagógicos

- **Contextualização**: Diferentes ambientes de desenvolvimento
- **Metodologias**: Compreensão prática de frameworks
- **Formação de Equipes**: Importância dos diferentes papéis
- **Processo de Desenvolvimento**: Fluxo completo de projetos
- **Tomada de Decisão**: Impacto das escolhas no projeto

## 🔄 Futuras Melhorias

- **Mais Contextos**: Adicionar Gaming, IoT, Blockchain
- **Fases Expandidas**: Implementar gameplay completo
- **Multiplayer**: Colaboração em tempo real
- **Persistência**: Salvar progresso do jogador
- **Métricas**: Analytics de performance da equipe
- **Localização**: Suporte a múltiplos idiomas

## 🎮 Experiência do Usuário

O jogo oferece uma experiência imersiva que combina:
- **Aprendizado Prático**: Situações reais de desenvolvimento
- **Interface Intuitiva**: Navegação simples e clara
- **Feedback Visual**: Animações e transições profissionais
- **Progressão Lógica**: Fluxo natural de decisões
- **Personalização**: Múltiplas combinações de contexto/metodologia/equipe

---

**DevCode** representa uma nova abordagem para o aprendizado de desenvolvimento de software, combinando gamificação, design profissional e conhecimento técnico em uma experiência única e envolvente.

## 📱 Responsividade

O jogo é totalmente responsivo e funciona em:
- **Desktop**: Experiência completa com todas as funcionalidades
- **Tablet**: Interface adaptada para toque
- **Mobile**: Layout otimizado para telas menores

## 🌟 Destaques Técnicos

- **Zero Dependências**: Apenas Three.js como biblioteca externa
- **Performance Otimizada**: Animações GPU-accelerated
- **Código Limpo**: Estrutura modular e bem documentada
- **Acessibilidade**: Suporte completo a navegação por teclado
- **Cross-browser**: Compatível com navegadores modernos

# STUP_ - Software Development Lifecycle Educational Game

## 🎯 Overview

**STUP_** is a comprehensive 2D educational game that simulates the complete software development lifecycle. Players experience realistic software engineering roles, methodologies, and challenges through interactive gameplay and educational mini-games.

The game's title features a blinking red underscore cursor (`_`) that mimics a terminal interface, emphasizing the technical nature of software development.

## 🚀 Features

### 🌍 Multiple Development Universes
Choose from diverse software development environments, each with unique challenges and team dynamics:

- **Corporate Company** - Structured enterprise environment with formal processes
- **Startup** - Fast-paced, agile environment with limited resources  
- **Open Source Community** - Collaborative global development with community-driven decisions
- **Hobbyist (Solo Developer)** - Personal projects with complete creative freedom
- **Freelancer** - Client-based work with diverse project requirements
- **Consultancy** - Expert advisory role with multiple clients
- **Student** - Academic environment focused on learning fundamentals
- **Hackathon** - Intense 24-48 hour competitive development sprints
- **Indie Game Development** - Creative game development with artistic vision
- **Unemployed Programmer** - Self-directed skill building and portfolio development

### 👥 Comprehensive Role System
Select from detailed professional roles across multiple disciplines:

#### Development Team
- **Frontend Developer** - UI/UX implementation and user experience
- **Backend Developer** - API development and business logic
- **Full Stack Developer** - Complete application development
- **Database Administrator** - Database design and optimization

#### Quality Assurance
- **Manual Tester** - User experience and functional testing
- **Automation Engineer** - Test automation and CI/CD integration

#### DevOps Team
- **CI/CD Engineer** - Pipeline automation and deployment
- **Infrastructure Engineer** - System architecture and scalability

#### Design Team
- **UX Designer** - User research and experience design
- **UI Designer** - Interface design and visual aesthetics
- **Graphic Artist** - Visual assets and brand elements

#### Security Team
- **Red Team (Offensive)** - Penetration testing and vulnerability assessment
- **Blue Team (Defensive)** - Security monitoring and incident response
- **Gray Team (Hybrid)** - Balanced offensive and defensive security

#### Product & Management
- **Product Owner** - Requirements and stakeholder management
- **Scrum Master** - Process facilitation and team coaching
- **Project Manager** - Timeline and resource coordination
- **Technical Lead** - Technical guidance and architecture decisions

### 🔄 Software Development Methodologies
Experience various development approaches:

- **Scrum** - Iterative development with sprints and ceremonies
- **Kanban** - Visual workflow management with continuous delivery
- **Extreme Programming (XP)** - Engineering practices focused on quality
- **Waterfall** - Sequential development phases with formal documentation
- **Lean** - Waste elimination and continuous improvement
- **SAFe** - Scaled Agile Framework for enterprise coordination
- **DevOps** - Development and operations integration with automation
- **Test-Driven Development** - Tests written before implementation

### 🎮 Interactive Game Phases

#### 1. Planning Phase
- **Tasks**: Create User Stories, Define Architecture, Set Up Project Board, Plan Sprints
- **Mini-game**: Interactive planning activities with requirement analysis
- **Learning**: Project scoping, estimation, and resource allocation

#### 2. Design & Architecture
- **Tasks**: Design System Architecture, Create UI Wireframes, Define API Contracts, Database Schema
- **Mini-game**: Design pattern selection and application
- **Learning**: Software architecture principles and design patterns

#### 3. Implementation
- **Tasks**: Setup Development Environment, Implement Core Features, API Development, Frontend Implementation
- **Mini-game**: Drag-and-drop code building with realistic code blocks
- **Learning**: Coding practices, component integration, and development workflows

#### 4. Testing & QA
- **Tasks**: Unit Testing, Integration Testing, User Acceptance Testing, Performance Testing
- **Mini-game**: Test case design and priority management
- **Learning**: Testing strategies, quality assurance, and bug detection

#### 5. Deployment
- **Tasks**: Setup CI/CD Pipeline, Production Deployment, Monitor Systems, Documentation
- **Mini-game**: Pipeline configuration and deployment automation
- **Learning**: DevOps practices, monitoring, and production management

## 🎪 Mini-Games & Educational Mechanics

### Planning Mini-Game
- Select appropriate planning activities
- Define user requirements and acceptance criteria
- Estimate effort and identify dependencies
- Set priority levels for features

### Design Mini-Game
- Choose and apply design patterns
- Make architectural decisions
- Balance performance and maintainability
- Create system blueprints

### Coding Mini-Game
- Drag-and-drop code block assembly
- Build functional implementations
- Follow coding best practices
- Integrate different components

### Testing Mini-Game
- Design comprehensive test cases
- Set testing priorities
- Cover edge cases and security scenarios
- Plan automated testing strategies

### Deployment Mini-Game
- Configure deployment pipelines
- Execute deployment steps
- Monitor system health
- Manage production environments

## 🎯 Educational Value

### Learning Objectives
- **Role Understanding**: Experience different software engineering roles and their responsibilities
- **Methodology Familiarity**: Learn various development methodologies and when to apply them
- **Process Comprehension**: Understand the complete software development lifecycle
- **Team Dynamics**: Experience collaborative development in different environments
- **Technical Skills**: Practice planning, design, coding, testing, and deployment concepts
- **Decision Making**: Make realistic choices faced by software professionals

### Skill Development
- Project management and planning
- Software architecture and design
- Coding practices and standards
- Quality assurance and testing
- DevOps and deployment
- Team collaboration and communication
- Problem-solving and critical thinking

## 🎨 Visual Design

### 2D Modern Interface
- **Color Scheme**: Monochromatic design with green, blue, and red accents
- **Typography**: Inter font for UI, JetBrains Mono for code elements
- **Character Sprites**: Unique visual representations for each role
- **Animations**: Smooth transitions, hover effects, and progress indicators
- **Responsive Design**: Optimized for desktop and mobile devices

### Terminal Aesthetics
- Blinking red cursor effect in the title
- Code-style fonts for technical elements
- Modern dark theme with subtle lighting effects
- Glassmorphism effects for enhanced visual appeal

## 🎮 How to Play

### 1. Initial Setup
1. **Start Screen**: Press ENTER when you see the blinking cursor
2. **Universe Selection**: Choose your development environment
3. **Role Selection**: Pick your professional role
4. **Methodology Selection**: Select your development approach

### 2. Gameplay
1. **Phase Progression**: Complete tasks in each development phase
2. **Mini-Games**: Engage with role-specific challenges
3. **Team Interaction**: Communicate with AI team members
4. **Progress Tracking**: Monitor your advancement through metrics

### 3. Controls
- **Keyboard Navigation**: Use arrow keys and ENTER for selection
- **Mouse Interaction**: Click on cards, buttons, and interactive elements
- **Drag & Drop**: Use in coding mini-games for building implementations
- **ESC Key**: Pause game or return to previous screen

## 📊 Scoring & Metrics

### Performance Tracking
- **Team Morale** - How well you work with your team
- **Code Quality** - Technical excellence of your implementations
- **Customer Satisfaction** - Meeting user requirements and expectations
- **Project Efficiency** - Time management and resource utilization

### Progress Indicators
- Phase completion percentages
- Task completion tracking
- Overall project progress
- Individual skill development

## 🎓 Educational Applications

### Classroom Use
- Software engineering courses
- Project management training
- Computer science education
- Professional development workshops

### Self-Learning
- Career exploration in tech
- Understanding software roles
- Learning development methodologies
- Practicing project management skills

### Team Training
- Onboarding new developers
- Cross-functional team understanding
- Process improvement exercises
- Role empathy building

## 🔧 Technical Requirements

### Browser Compatibility
- Modern web browsers (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Local storage support for progress saving

### Performance
- Optimized for 60 FPS animations
- Responsive design for various screen sizes
- Efficient memory usage
- Fast loading times

## 🎪 Random Events & Challenges

The game includes realistic scenarios that software teams face:
- Scope changes and requirement updates
- Security incidents and vulnerability discoveries
- Performance issues and optimization needs
- Team conflicts and communication challenges
- Technology changes and learning requirements
- Client feedback and iteration requests

## 🏆 Achievements & Progression

### Completion Rewards
- Phase mastery certificates
- Role-specific achievements
- Methodology expertise badges
- Team collaboration awards

### Learning Milestones
- Understanding of SDLC phases
- Familiarity with professional roles
- Knowledge of development methodologies
- Experience with project challenges

## 🎯 Getting Started

1. **Open** `index.html` in a modern web browser
2. **Press ENTER** to start your software development journey
3. **Choose** your universe, role, and methodology
4. **Complete** tasks and mini-games through each phase
5. **Learn** about software engineering through interactive gameplay

## 🌟 Why STUP_?

**STUP_** provides a unique educational experience that:
- **Demystifies** software development roles and processes
- **Provides** hands-on experience without real-world risks
- **Teaches** through interactive engagement rather than passive learning
- **Prepares** students and newcomers for real software engineering challenges
- **Builds** empathy and understanding across different roles
- **Makes** learning about software development fun and engaging

Whether you're a student exploring career options, a professional looking to understand other roles, or an educator seeking engaging teaching tools, **STUP_** offers a comprehensive and enjoyable way to learn about the software development lifecycle.

---

*Start your software engineering journey today with STUP_ - where every underscore represents a new possibility in code!*