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

# STUP_ - Simulador Corporativo de Desenvolvimento

## � Visão Geral

**STUP_** (Sistema de Treinamento Unificado de Projetos) é um simulador educacional 2D focado exclusivamente no **ambiente corporativo de desenvolvimento de software**. O jogo simula a experiência real de gerenciar equipes multidisciplinares em projetos de software empresarial, desde a análise inicial até o deployment.

### 🎯 Objetivo Educational

- **Compreender** as dinâmicas de equipes corporativas de desenvolvimento
- **Aprender** sobre metodologias e ferramentas utilizadas em ambiente empresarial
- **Praticar** a orquestração de projetos complexos com múltiplas equipes
- **Experimentar** diferentes abordagens metodológicas em cenários reais

## 🎮 Mecânicas do Jogo

### 1. **Apresentação das Equipes Corporativas**
O jogo apresenta uma estrutura organizacional realista com equipes especializadas:

#### 🛠️ **Equipe de Desenvolvimento**
- **Carlos Silva** - Desenvolvedor Sênior Full-Stack (Java, Angular, Spring, Microservices)
- **Ana Costa** - Desenvolvedora Frontend (React, TypeScript, CSS3, Figma)
- **João Santos** - DBA (Oracle, SQL Server, PostgreSQL, Performance)

#### 🧪 **Equipe de Quality Assurance**
- **Maria Oliveira** - QA Lead (Selenium, JUnit, TestNG, JIRA)
- **Pedro Almeida** - Engenheiro de Automação (Cypress, Jenkins, Robot Framework)

#### ⚙️ **Equipe DevOps**
- **Roberto Lima** - DevOps Engineer (AWS, Docker, Kubernetes, Terraform)

#### 🎨 **Equipe de Design**
- **Beatriz Ferreira** - UX/UI Designer (Figma, Adobe XD, Sketch, User Research)

#### 📊 **Equipe de Gestão**
- **Luiz Gomes** - Gerente de Projetos (PMP, Scrum, Jira, MS Project)
- **Fernanda Ribeiro** - Analista de Negócios (BPMN, UML, Bizagi, Confluence)

### 2. **Seleção de Projetos Corporativos**
Cinco projetos realistas com diferentes complexidades:

#### 🏢 **Módulo ERP Financeiro** (Alta Complexidade)
- **Prazo:** 6 meses | **Equipe:** 8 profissionais
- **Tecnologias:** Java, Oracle, Angular
- **Desafios:** Integração com sistemas legados, regras complexas

#### 🌐 **Portal do Cliente** (Média Complexidade)
- **Prazo:** 4 meses | **Equipe:** 6 profissionais
- **Tecnologias:** React, Node.js, PostgreSQL
- **Desafios:** Segurança de dados, performance

#### 📱 **App Mobile Corporativo** (Média Complexidade)
- **Prazo:** 5 meses | **Equipe:** 5 profissionais
- **Tecnologias:** React Native, Firebase
- **Desafios:** Compatibilidade, sincronização offline

#### 📊 **Dashboard BI Executivo** (Alta Complexidade)
- **Prazo:** 7 meses | **Equipe:** 7 profissionais
- **Tecnologias:** Power BI, SQL Server, Python
- **Desafios:** Qualidade dos dados, performance

#### � **API de Integração** (Baixa Complexidade)
- **Prazo:** 3 meses | **Equipe:** 4 profissionais
- **Tecnologias:** Spring Boot, Redis, Docker
- **Desafios:** Compatibilidade, latência

### 3. **Metodologias Corporativas**

#### 🏗️ **Waterfall**
- **Ideal para:** Projetos com requisitos estáveis, ambientes regulamentados
- **Fases:** Análise → Design → Implementação → Testes → Deployment
- **Vantagens:** Estrutura clara, documentação completa
- **Desvantagens:** Pouca flexibilidade, feedback tardio

#### 🏃‍♂️ **Scrum**
- **Ideal para:** Projetos inovadores, equipes autônomas
- **Fases:** Sprint Planning → Daily Scrum → Sprint Review → Retrospective
- **Vantagens:** Flexibilidade, feedback contínuo
- **Desvantagens:** Requer experiência, pode ser caótico

#### 📋 **Kanban**
- **Ideal para:** Manutenção de sistemas, equipes pequenas
- **Fases:** To Do → In Progress → Review → Done
- **Vantagens:** Visualização clara, fluxo contínuo
- **Desvantagens:** Falta de estrutura, difícil planejamento

### 4. **Configuração de Ferramentas por Equipe**

#### 💻 **Desenvolvimento**
- **IDEs:** IntelliJ IDEA Ultimate, VS Code, Eclipse
- **Versionamento:** Git + GitLab Enterprise, SVN
- **Frameworks:** Spring Boot, Angular, React

#### 🧪 **QA**
- **Automação:** Selenium WebDriver, Cypress.io, TestNG
- **Gestão:** JIRA + Zephyr, TestLink
- **Performance:** JMeter, LoadRunner

#### 🎨 **Design**
- **Interface:** Figma Enterprise, Sketch + Abstract, Adobe XD
- **Gráfico:** Adobe Photoshop, GIMP
- **Prototipagem:** InVision, Marvel

#### ⚙️ **DevOps**
- **Containers:** Docker, Kubernetes
- **Cloud:** AWS, Azure, Google Cloud
- **CI/CD:** Jenkins, GitLab CI, Azure DevOps

#### 📊 **Gestão**
- **Projetos:** JIRA, MS Project, Trello
- **Documentação:** Confluence, SharePoint, Notion
- **Comunicação:** Slack, Microsoft Teams, Zoom

### 5. **Sistema de Navegação entre Equipes**
- **Orquestração Total:** O jogador atua como orchestrador geral
- **Navegação Fluida:** Sistema "Choose Team" para visitar diferentes equipes
- **Monitoramento:** Interface verbosa com métricas detalhadas por equipe
- **Interação:** Atribuição de tarefas, reuniões e acompanhamento

## 🎨 Design Visual

### **Identidade Corporativa**
- **Empresa Fictícia:** TechCorp Solutions
- **Paleta de Cores:** Azul corporativo, verde de destaque, tons profissionais
- **Tipografia:** Inter (interface) + JetBrains Mono (código)

### **Animações Elegantes**
- **Cards de Membros:** Animação de entrada escalonada com efeitos hover
- **Transições:** Suaves entre telas com feedback visual
- **Efeitos Visuais:** Glassmorphism, gradientes corporativos

### **Interface Responsiva**
- **Desktop First:** Otimizado para ambientes corporativos
- **Mobile Friendly:** Adaptável para tablets e smartphones
- **Acessibilidade:** Navegação por teclado, indicadores de foco

## 🚀 Como Jogar

### **Controles**
- **ENTER:** Iniciar o jogo na tela inicial
- **Mouse:** Navegação principal e seleção
- **Clique:** Seleção de projetos, metodologias, ferramentas
- **Navegação:** Botões de equipe no header principal

### **Fluxo do Jogo**
1. **Tela Inicial:** Apresentação da TechCorp
2. **Conhecer Equipes:** Visualização detalhada dos profissionais
3. **Escolher Projeto:** Seleção entre 5 projetos corporativos
4. **Definir Metodologia:** Escolha da abordagem de desenvolvimento
5. **Configurar Ferramentas:** Seleção do stack tecnológico
6. **Gerenciar Projeto:** Navegação entre equipes e orquestração

### **Métricas e Acompanhamento**
- **Produtividade por Membro:** Monitoramento individual
- **Status em Tempo Real:** Disponível, trabalhando, bloqueado
- **Progresso de Tarefas:** Barras de progresso visuais
- **Estatísticas de Equipe:** Visão consolidada por área

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- **HTML5:** Estrutura semântica e acessível
- **CSS3:** Animações, gradientes, efeitos visuais modernos
- **JavaScript ES6+:** Lógica do jogo orientada a objetos

### **Recursos Visuais**
- **SVG Inline:** Avatares gerados dinamicamente
- **CSS Variables:** Sistema de cores consistente
- **Animations:** Keyframes CSS para movimento fluido
- **Responsive Grid:** Layout adaptável

### **Arquitetura**
- **Modular:** Classe principal com métodos especializados
- **State Management:** Gerenciamento centralizdo do estado
- **Event Driven:** Sistema de eventos para interações
- **Data Structures:** Objetos estruturados para dados do jogo

## � Requisitos Técnicos

### **Navegadores Suportados**
- **Chrome/Chromium:** Versão 88+
- **Firefox:** Versão 85+
- **Safari:** Versão 14+
- **Edge:** Versão 88+

### **Resolução Recomendada**
- **Desktop:** 1366x768 ou superior
- **Tablet:** 768x1024
- **Mobile:** 375x667 (mínimo)

### **Performance**
- **Recursos:** Baixo consumo de CPU e memória
- **Carregamento:** Instantâneo (arquivos locais)
- **Animações:** 60fps em hardware moderno

## 🎓 Aplicações Educacionais

### **Ensino Superior**
- **Engenharia de Software:** Disciplinas de processo e gestão
- **Sistemas de Informação:** Metodologias e ferramentas
- **Administração:** Gestão de projetos de TI

### **Treinamento Corporativo**
- **Onboarding:** Novos funcionários em TI
- **Capacitação:** Gestores de projetos
- **Simulação:** Cenários de tomada de decisão

### **Certificações**
- **PMP:** Prática em gestão de projetos
- **Scrum Master:** Dinâmicas ágeis
- **DevOps:** Integração de equipes

## 🔧 Instalação e Execução

### **Método 1: Servidor Local**
```bash
# Clone o repositório
git clone <repository-url>
cd stup-corporate-game

# Inicie um servidor HTTP local
python -m http.server 8000
# ou
npx serve .

# Acesse no navegador
http://localhost:8000
```

### **Método 2: Arquivo Local**
1. Baixe todos os arquivos (`index.html`, `styles.css`, `game.js`)
2. Abra `index.html` diretamente no navegador
3. ⚠️ **Nota:** Alguns recursos podem não funcionar devido a CORS

## 🔮 Próximas Funcionalidades

### **Fase 2: Interações Avançadas**
- [ ] **Sistema de Tarefas:** Atribuição e acompanhamento detalhado
- [ ] **Mini-games:** Atividades específicas por função
- [ ] **Reuniões Virtuais:** Simulação de dailys e retrospectivas
- [ ] **Relatórios:** Dashboards gerenciais completos

### **Fase 3: Dinâmicas Corporativas**
- [ ] **Eventos Aleatórios:** Mudanças de escopo, bugs críticos
- [ ] **Pressão de Cliente:** Cenários de prazo apertado
- [ ] **Conflitos de Equipe:** Resolução de problemas humanos
- [ ] **Aprovações:** Fluxos de approval corporativo

### **Fase 4: Multiplayer**
- [ ] **Colaboração:** Múltiplos jogadores como diferentes gerentes
- [ ] **Competição:** Rankings entre projetos
- [ ] **Integração:** APIs para sistemas de RH/LMS

## 📄 Licença

Este projeto é desenvolvido para fins educacionais. Livre para uso em contextos acadêmicos e de treinamento corporativo.

---

**TechCorp Solutions** - Simulando o futuro do desenvolvimento de software corporativo.

*"Onde cada decisão conta, e cada equipe importa."*