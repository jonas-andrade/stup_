// ==========================================
// COMPREHENSIVE GAME PHASES SYSTEM
// ==========================================

class GamePhasesManager {
    constructor() {
        this.currentPhase = 'selection';
        this.selectedPatterns = [];
        this.assignedTasks = [];
        this.phaseProgress = {};
        this.gameScore = 0;
        this.workspace3D = null;
        
        this.initializePhases();
    }

    initializePhases() {
        this.phases = {
            selection: {
                name: 'Seleção de Arquitetura',
                description: 'Escolha os padrões de design para seu projeto',
                duration: 300, // seconds
                tasks: this.createSelectionTasks(),
                completionCriteria: 'Selecionar pelo menos 5 padrões adequados'
            },
            planning: {
                name: 'Planejamento Técnico',
                description: 'Defina a arquitetura e distribua tarefas',
                duration: 600,
                tasks: this.createPlanningTasks(),
                completionCriteria: 'Completar arquitetura e distribuir todas as tarefas'
            },
            development: {
                name: 'Desenvolvimento',
                description: 'Implemente as funcionalidades usando os padrões escolhidos',
                duration: 900,
                tasks: this.createDevelopmentTasks(),
                completionCriteria: 'Implementar todos os módulos com qualidade'
            },
            testing: {
                name: 'Testes e QA',
                description: 'Garanta a qualidade através de testes abrangentes',
                duration: 450,
                tasks: this.createTestingTasks(),
                completionCriteria: 'Atingir 90% de cobertura de testes'
            },
            deployment: {
                name: 'Deploy e Monitoramento',
                description: 'Coloque em produção e configure monitoramento',
                duration: 300,
                tasks: this.createDeploymentTasks(),
                completionCriteria: 'Deploy bem-sucedido com monitoramento ativo'
            }
        };
    }

    createSelectionTasks() {
        return [
            {
                id: 'choose_creational',
                name: 'Escolher Padrões Criacionais',
                description: 'Selecione padrões para criação de objetos',
                type: 'pattern_selection',
                category: 'creational',
                required: 2,
                points: 100,
                timeLimit: 60
            },
            {
                id: 'choose_structural',
                name: 'Escolher Padrões Estruturais',
                description: 'Selecione padrões para organização do código',
                type: 'pattern_selection',
                category: 'structural',
                required: 2,
                points: 100,
                timeLimit: 60
            },
            {
                id: 'choose_behavioral',
                name: 'Escolher Padrões Comportamentais',
                description: 'Selecione padrões para comunicação entre objetos',
                type: 'pattern_selection',
                category: 'behavioral',
                required: 2,
                points: 100,
                timeLimit: 60
            },
            {
                id: 'choose_architectural',
                name: 'Definir Arquitetura',
                description: 'Escolha o padrão arquitetural principal',
                type: 'pattern_selection',
                category: 'architectural',
                required: 1,
                points: 150,
                timeLimit: 90
            }
        ];
    }

    createPlanningTasks() {
        return [
            {
                id: 'create_architecture',
                name: 'Criar Diagrama de Arquitetura',
                description: 'Monte a arquitetura usando drag & drop',
                type: 'architecture_building',
                components: ['Database', 'API', 'Frontend', 'Cache', 'Queue'],
                points: 200,
                timeLimit: 180
            },
            {
                id: 'assign_roles',
                name: 'Distribuir Responsabilidades',
                description: 'Atribua tarefas específicas para cada membro da equipe',
                type: 'task_assignment',
                points: 150,
                timeLimit: 120
            },
            {
                id: 'define_interfaces',
                name: 'Definir Interfaces',
                description: 'Especifique as interfaces entre componentes',
                type: 'interface_design',
                points: 100,
                timeLimit: 90
            },
            {
                id: 'setup_environment',
                name: 'Configurar Ambiente',
                description: 'Configure o ambiente de desenvolvimento',
                type: 'environment_setup',
                tools: ['IDE', 'Database', 'Framework', 'Testing Tools'],
                points: 100,
                timeLimit: 60
            }
        ];
    }

    createDevelopmentTasks() {
        return [
            {
                id: 'implement_backend',
                name: 'Desenvolver Backend',
                description: 'Implemente a lógica de negócio usando os padrões escolhidos',
                type: 'coding_challenge',
                patterns_used: ['repository', 'factory', 'strategy'],
                complexity: 'high',
                points: 300,
                timeLimit: 300
            },
            {
                id: 'implement_frontend',
                name: 'Desenvolver Frontend',
                description: 'Crie a interface do usuário',
                type: 'coding_challenge',
                patterns_used: ['mvc', 'observer', 'decorator'],
                complexity: 'medium',
                points: 250,
                timeLimit: 240
            },
            {
                id: 'implement_database',
                name: 'Modelar Dados',
                description: 'Implemente o modelo de dados',
                type: 'database_design',
                patterns_used: ['repository', 'dao'],
                complexity: 'medium',
                points: 200,
                timeLimit: 180
            },
            {
                id: 'integrate_systems',
                name: 'Integrar Sistemas',
                description: 'Conecte todos os componentes',
                type: 'integration',
                patterns_used: ['facade', 'adapter', 'mediator'],
                complexity: 'high',
                points: 250,
                timeLimit: 200
            }
        ];
    }

    createTestingTasks() {
        return [
            {
                id: 'unit_tests',
                name: 'Testes Unitários',
                description: 'Crie testes para componentes individuais',
                type: 'test_creation',
                test_type: 'unit',
                coverage_target: 95,
                points: 150,
                timeLimit: 120
            },
            {
                id: 'integration_tests',
                name: 'Testes de Integração',
                description: 'Teste a comunicação entre módulos',
                type: 'test_creation',
                test_type: 'integration',
                coverage_target: 80,
                points: 200,
                timeLimit: 150
            },
            {
                id: 'e2e_tests',
                name: 'Testes End-to-End',
                description: 'Teste o fluxo completo da aplicação',
                type: 'test_creation',
                test_type: 'e2e',
                scenarios: 5,
                points: 200,
                timeLimit: 180
            },
            {
                id: 'performance_tests',
                name: 'Testes de Performance',
                description: 'Verifique a performance do sistema',
                type: 'performance_testing',
                metrics: ['Response Time', 'Throughput', 'Memory Usage'],
                points: 150,
                timeLimit: 90
            }
        ];
    }

    createDeploymentTasks() {
        return [
            {
                id: 'setup_cicd',
                name: 'Configurar CI/CD',
                description: 'Configure pipeline de deployment',
                type: 'pipeline_setup',
                stages: ['Build', 'Test', 'Deploy', 'Monitor'],
                points: 200,
                timeLimit: 120
            },
            {
                id: 'configure_monitoring',
                name: 'Configurar Monitoramento',
                description: 'Configure alertas e dashboards',
                type: 'monitoring_setup',
                metrics: ['CPU', 'Memory', 'Response Time', 'Error Rate'],
                points: 150,
                timeLimit: 90
            },
            {
                id: 'deploy_production',
                name: 'Deploy Produção',
                description: 'Execute o deployment para produção',
                type: 'deployment_execution',
                environment: 'production',
                points: 100,
                timeLimit: 60
            }
        ];
    }

    startPhase(phaseName) {
        this.currentPhase = phaseName;
        const phase = this.phases[phaseName];
        
        this.showPhaseInterface(phase);
        this.startPhaseTimer(phase.duration);
        
        // Initialize 3D workspace for this phase
        if (this.workspace3D) {
            this.workspace3D.setupPhase(phaseName);
        }
    }

    showPhaseInterface(phase) {
        const container = document.getElementById('gameContainer');
        container.innerHTML = this.createPhaseHTML(phase);
        
        this.bindPhaseEvents(phase);
        this.updateProgress();
    }

    createPhaseHTML(phase) {
        return `
            <div class="phase-container">
                <div class="phase-header">
                    <h2>${phase.name}</h2>
                    <p>${phase.description}</p>
                    <div class="phase-timer" id="phaseTimer">
                        <span class="timer-text">Tempo Restante: </span>
                        <span class="timer-value" id="timerValue">${this.formatTime(phase.duration)}</span>
                    </div>
                </div>
                
                <div class="phase-content">
                    <div class="tasks-panel">
                        <h3>Tarefas</h3>
                        <div class="tasks-list" id="tasksList">
                            ${this.createTasksHTML(phase.tasks)}
                        </div>
                    </div>
                    
                    <div class="work-area">
                        <h3>Área de Trabalho</h3>
                        <div class="workspace" id="workspace">
                            ${this.createWorkspaceHTML(phase)}
                        </div>
                    </div>
                    
                    <div class="team-panel">
                        <h3>Equipe</h3>
                        <div class="team-members" id="teamMembers">
                            ${this.createTeamHTML()}
                        </div>
                    </div>
                </div>
                
                <div class="phase-footer">
                    <div class="progress-section">
                        <div class="progress-bar">
                            <div class="progress-fill" id="progressFill" style="width: 0%"></div>
                        </div>
                        <span class="progress-text" id="progressText">0% Completo</span>
                    </div>
                    
                    <div class="score-section">
                        <span class="score-label">Pontuação: </span>
                        <span class="score-value" id="scoreValue">${this.gameScore}</span>
                    </div>
                    
                    <button class="next-phase-btn" id="nextPhaseBtn" disabled>
                        Próxima Fase
                    </button>
                </div>
            </div>
        `;
    }

    createTasksHTML(tasks) {
        return tasks.map(task => `
            <div class="task-item" data-task-id="${task.id}">
                <div class="task-header">
                    <h4>${task.name}</h4>
                    <span class="task-points">+${task.points} pts</span>
                </div>
                <p class="task-description">${task.description}</p>
                <div class="task-progress">
                    <div class="task-progress-bar">
                        <div class="task-progress-fill" style="width: 0%"></div>
                    </div>
                    <span class="task-time-limit">${this.formatTime(task.timeLimit)}</span>
                </div>
                <button class="start-task-btn" onclick="gamePhases.startTask('${task.id}')">
                    Iniciar Tarefa
                </button>
            </div>
        `).join('');
    }

    createWorkspaceHTML(phase) {
        switch(phase.name) {
            case 'Seleção de Arquitetura':
                return this.createPatternSelectionHTML();
            case 'Planejamento Técnico':
                return this.createPlanningWorkspaceHTML();
            case 'Desenvolvimento':
                return this.createDevelopmentWorkspaceHTML();
            case 'Testes e QA':
                return this.createTestingWorkspaceHTML();
            case 'Deploy e Monitoramento':
                return this.createDeploymentWorkspaceHTML();
            default:
                return '<div class="workspace-placeholder">Área de trabalho será carregada...</div>';
        }
    }

    createPatternSelectionHTML() {
        const categories = Object.keys(DESIGN_PATTERNS);
        
        return `
            <div class="pattern-selection-workspace">
                <div class="pattern-categories">
                    ${categories.map(category => `
                        <div class="pattern-category" data-category="${category}">
                            <h4>${DESIGN_PATTERNS[category].name}</h4>
                            <div class="patterns-grid">
                                ${Object.entries(DESIGN_PATTERNS[category].patterns).map(([key, pattern]) => `
                                    <div class="pattern-card" data-pattern="${key}">
                                        <h5>${pattern.name}</h5>
                                        <p>${pattern.description}</p>
                                        <span class="complexity ${pattern.complexity?.toLowerCase()}">${pattern.complexity}</span>
                                        <button class="select-pattern-btn" onclick="gamePhases.selectPattern('${key}', '${category}')">
                                            Selecionar
                                        </button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="selected-patterns">
                    <h4>Padrões Selecionados</h4>
                    <div class="selected-patterns-list" id="selectedPatternsList">
                        <!-- Selected patterns will appear here -->
                    </div>
                </div>
            </div>
        `;
    }

    createDevelopmentWorkspaceHTML() {
        return `
            <div class="development-workspace">
                <div class="code-editor">
                    <div class="editor-tabs">
                        <div class="tab active" data-file="main.js">main.js</div>
                        <div class="tab" data-file="models.js">models.js</div>
                        <div class="tab" data-file="views.js">views.js</div>
                        <div class="tab" data-file="controllers.js">controllers.js</div>
                    </div>
                    <div class="editor-content">
                        <textarea class="code-textarea" id="codeEditor" placeholder="// Comece a implementar usando os padrões selecionados..."></textarea>
                    </div>
                </div>
                
                <div class="implementation-status">
                    <h4>Status da Implementação</h4>
                    <div class="implementation-items">
                        <div class="impl-item" data-component="backend">
                            <span class="impl-name">Backend API</span>
                            <div class="impl-progress">
                                <div class="impl-progress-fill" style="width: 0%"></div>
                            </div>
                        </div>
                        <div class="impl-item" data-component="frontend">
                            <span class="impl-name">Frontend UI</span>
                            <div class="impl-progress">
                                <div class="impl-progress-fill" style="width: 0%"></div>
                            </div>
                        </div>
                        <div class="impl-item" data-component="database">
                            <span class="impl-name">Database Layer</span>
                            <div class="impl-progress">
                                <div class="impl-progress-fill" style="width: 0%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    startTask(taskId) {
        const phase = this.phases[this.currentPhase];
        const task = phase.tasks.find(t => t.id === taskId);
        
        if (!task) return;
        
        // Mark task as started
        task.started = true;
        task.startTime = Date.now();
        
        // Show task-specific interface
        this.showTaskInterface(task);
        
        // Start task timer
        this.startTaskTimer(task);
    }

    showTaskInterface(task) {
        const modal = document.createElement('div');
        modal.className = 'task-modal';
        modal.innerHTML = this.createTaskModalHTML(task);
        
        document.body.appendChild(modal);
        this.bindTaskEvents(task, modal);
    }

    createTaskModalHTML(task) {
        switch(task.type) {
            case 'pattern_selection':
                return this.createPatternSelectionModalHTML(task);
            case 'coding_challenge':
                return this.createCodingChallengeModalHTML(task);
            case 'architecture_building':
                return this.createArchitectureBuildingModalHTML(task);
            default:
                return this.createGenericTaskModalHTML(task);
        }
    }

    createPatternSelectionModalHTML(task) {
        const patterns = DESIGN_PATTERNS[task.category].patterns;
        
        return `
            <div class="modal-content pattern-selection-modal">
                <div class="modal-header">
                    <h3>${task.name}</h3>
                    <span class="close-modal" onclick="this.closest('.task-modal').remove()">&times;</span>
                </div>
                
                <div class="modal-body">
                    <p>${task.description}</p>
                    <p class="requirement">Selecione ${task.required} padrão(ões) da categoria ${task.category}</p>
                    
                    <div class="patterns-selection-grid">
                        ${Object.entries(patterns).map(([key, pattern]) => `
                            <div class="pattern-selection-card" data-pattern="${key}">
                                <h4>${pattern.name}</h4>
                                <p>${pattern.description}</p>
                                <div class="pattern-details">
                                    <span class="complexity">${pattern.complexity}</span>
                                    <span class="use-case">${pattern.useCase}</span>
                                </div>
                                <input type="checkbox" class="pattern-checkbox" value="${key}">
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="modal-footer">
                    <div class="timer">Tempo: <span id="taskTimer">${this.formatTime(task.timeLimit)}</span></div>
                    <button class="confirm-selection-btn" onclick="gamePhases.confirmPatternSelection('${task.id}')">
                        Confirmar Seleção
                    </button>
                </div>
            </div>
        `;
    }

    selectPattern(patternKey, category) {
        if (this.selectedPatterns.find(p => p.key === patternKey)) {
            this.showMessage('Padrão já selecionado!', 'warning');
            return;
        }
        
        const pattern = DESIGN_PATTERNS[category].patterns[patternKey];
        this.selectedPatterns.push({
            key: patternKey,
            category: category,
            ...pattern
        });
        
        this.updateSelectedPatternsDisplay();
        this.updateProgress();
        
        // Add points
        this.gameScore += 50;
        this.updateScore();
        
        this.showMessage(`Padrão ${pattern.name} selecionado!`, 'success');
    }

    confirmPatternSelection(taskId) {
        const selectedCheckboxes = document.querySelectorAll('.pattern-checkbox:checked');
        const task = this.phases[this.currentPhase].tasks.find(t => t.id === taskId);
        
        if (selectedCheckboxes.length < task.required) {
            this.showMessage(`Selecione pelo menos ${task.required} padrão(ões)`, 'error');
            return;
        }
        
        // Process selections
        selectedCheckboxes.forEach(checkbox => {
            this.selectPattern(checkbox.value, task.category);
        });
        
        // Complete task
        this.completeTask(taskId);
        
        // Close modal
        document.querySelector('.task-modal').remove();
    }

    completeTask(taskId) {
        const phase = this.phases[this.currentPhase];
        const task = phase.tasks.find(t => t.id === taskId);
        
        if (!task) return;
        
        task.completed = true;
        task.completionTime = Date.now();
        
        // Calculate score based on time taken
        const timeTaken = (task.completionTime - task.startTime) / 1000;
        const timeBonus = Math.max(0, task.timeLimit - timeTaken) / task.timeLimit;
        const finalPoints = Math.round(task.points * (1 + timeBonus * 0.5));
        
        this.gameScore += finalPoints;
        this.updateScore();
        
        // Update task display
        this.updateTaskDisplay(taskId);
        
        // Check phase completion
        this.checkPhaseCompletion();
        
        this.showMessage(`Tarefa ${task.name} concluída! +${finalPoints} pontos`, 'success');
    }

    updateSelectedPatternsDisplay() {
        const container = document.getElementById('selectedPatternsList');
        if (!container) return;
        
        container.innerHTML = this.selectedPatterns.map(pattern => `
            <div class="selected-pattern-item">
                <h5>${pattern.name}</h5>
                <span class="pattern-category">${pattern.category}</span>
                <button class="remove-pattern-btn" onclick="gamePhases.removePattern('${pattern.key}')">
                    Remover
                </button>
            </div>
        `).join('');
    }

    removePattern(patternKey) {
        this.selectedPatterns = this.selectedPatterns.filter(p => p.key !== patternKey);
        this.updateSelectedPatternsDisplay();
        this.updateProgress();
    }

    updateProgress() {
        const phase = this.phases[this.currentPhase];
        const completedTasks = phase.tasks.filter(t => t.completed).length;
        const progress = (completedTasks / phase.tasks.length) * 100;
        
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        if (progressFill) progressFill.style.width = progress + '%';
        if (progressText) progressText.textContent = Math.round(progress) + '% Completo';
        
        // Enable next phase button if phase is complete
        const nextBtn = document.getElementById('nextPhaseBtn');
        if (nextBtn && progress === 100) {
            nextBtn.disabled = false;
            nextBtn.onclick = () => this.nextPhase();
        }
    }

    checkPhaseCompletion() {
        const phase = this.phases[this.currentPhase];
        const allTasksCompleted = phase.tasks.every(t => t.completed);
        
        if (allTasksCompleted) {
            this.showMessage(`Fase ${phase.name} concluída!`, 'success');
            
            // Trigger 3D celebration
            if (this.workspace3D) {
                this.workspace3D.celebratePhaseCompletion();
            }
        }
    }

    nextPhase() {
        const phaseNames = Object.keys(this.phases);
        const currentIndex = phaseNames.indexOf(this.currentPhase);
        
        if (currentIndex < phaseNames.length - 1) {
            const nextPhaseName = phaseNames[currentIndex + 1];
            this.startPhase(nextPhaseName);
        } else {
            this.completeGame();
        }
    }

    completeGame() {
        this.showGameCompletion();
    }

    showGameCompletion() {
        const container = document.getElementById('gameContainer');
        container.innerHTML = `
            <div class="game-completion">
                <h2>🎉 Projeto Concluído com Sucesso!</h2>
                <div class="final-stats">
                    <div class="stat">
                        <span class="stat-label">Pontuação Final:</span>
                        <span class="stat-value">${this.gameScore}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Padrões Utilizados:</span>
                        <span class="stat-value">${this.selectedPatterns.length}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Tempo Total:</span>
                        <span class="stat-value">${this.calculateTotalTime()}</span>
                    </div>
                </div>
                
                <div class="achievements">
                    <h3>Conquistas Desbloqueadas</h3>
                    ${this.generateAchievements()}
                </div>
                
                <div class="completion-actions">
                    <button class="restart-btn" onclick="gamePhases.restartGame()">
                        Jogar Novamente
                    </button>
                    <button class="share-btn" onclick="gamePhases.shareResults()">
                        Compartilhar Resultado
                    </button>
                </div>
            </div>
        `;
    }

    generateAchievements() {
        const achievements = [];
        
        if (this.gameScore > 2000) achievements.push('🏆 Mestre Arquiteto');
        if (this.selectedPatterns.length >= 10) achievements.push('📚 Colecionador de Padrões');
        if (this.calculateTotalTime() < 1800) achievements.push('⚡ Desenvolvedor Relâmpago');
        
        return achievements.map(achievement => 
            `<div class="achievement">${achievement}</div>`
        ).join('');
    }

    // Utility methods
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    updateScore() {
        const scoreElement = document.getElementById('scoreValue');
        if (scoreElement) {
            scoreElement.textContent = this.gameScore;
            scoreElement.classList.add('score-updated');
            setTimeout(() => scoreElement.classList.remove('score-updated'), 500);
        }
    }

    showMessage(message, type = 'info') {
        const messageEl = document.createElement('div');
        messageEl.className = `game-message ${type}`;
        messageEl.textContent = message;
        
        document.body.appendChild(messageEl);
        
        setTimeout(() => {
            messageEl.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            messageEl.remove();
        }, 3000);
    }

    bindPhaseEvents(phase) {
        // Add event listeners for phase-specific interactions
        this.bindDragAndDrop();
        this.bindKeyboardShortcuts();
    }

    bindDragAndDrop() {
        // Implement drag and drop functionality
        const draggables = document.querySelectorAll('[draggable="true"]');
        const dropZones = document.querySelectorAll('.drop-zone');
        
        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', this.handleDragStart.bind(this));
        });
        
        dropZones.forEach(zone => {
            zone.addEventListener('dragover', this.handleDragOver.bind(this));
            zone.addEventListener('drop', this.handleDrop.bind(this));
        });
    }

    handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        e.target.classList.add('dragging');
    }

    handleDragOver(e) {
        e.preventDefault();
        e.currentTarget.classList.add('drag-over');
    }

    handleDrop(e) {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(data);
        
        if (draggedElement && this.validateDrop(draggedElement, e.currentTarget)) {
            e.currentTarget.appendChild(draggedElement);
            this.processDrop(draggedElement, e.currentTarget);
        }
        
        e.currentTarget.classList.remove('drag-over');
        draggedElement?.classList.remove('dragging');
    }

    validateDrop(element, target) {
        // Implement drop validation logic
        return true;
    }

    processDrop(element, target) {
        // Process the drop action
        this.gameScore += 25;
        this.updateScore();
        this.updateProgress();
    }

    bindKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'Escape':
                    this.closeModals();
                    break;
                case 'Enter':
                    if (e.ctrlKey) this.quickSave();
                    break;
                case 's':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        this.saveProgress();
                    }
                    break;
            }
        });
    }

    closeModals() {
        document.querySelectorAll('.task-modal').forEach(modal => modal.remove());
    }

    saveProgress() {
        const gameState = {
            currentPhase: this.currentPhase,
            selectedPatterns: this.selectedPatterns,
            gameScore: this.gameScore,
            phaseProgress: this.phaseProgress
        };
        
        localStorage.setItem('devcode_progress', JSON.stringify(gameState));
        this.showMessage('Progresso salvo!', 'success');
    }

    loadProgress() {
        const saved = localStorage.getItem('devcode_progress');
        if (saved) {
            const gameState = JSON.parse(saved);
            Object.assign(this, gameState);
            return true;
        }
        return false;
    }
}

// Initialize game phases manager
const gamePhases = new GamePhasesManager();

// Export for use in main game
if (typeof window !== 'undefined') {
    window.GamePhasesManager = GamePhasesManager;
    window.gamePhases = gamePhases;
}