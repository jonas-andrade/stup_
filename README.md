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