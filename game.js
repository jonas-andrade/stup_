// ===============================================
// STUP_ - Software Development Lifecycle Game
// Educational 2D Game Simulating Complete SDLC
// ===============================================

class STUPGame {
    constructor() {
        this.currentScreen = 'initial-screen';
        this.gameState = {
            selectedUniverse: null,
            selectedRole: null,
            selectedMethodology: null,
            playerCharacter: null,
            teamMembers: [],
            currentPhase: 'planning',
            phaseProgress: 0,
            overallProgress: 0,
            score: 0,
            completedTasks: [],
            gameMetrics: {
                teamMorale: 85,
                codeQuality: 92,
                customerSatisfaction: 88,
                projectEfficiency: 76
            }
        };
        
        this.gamePhases = [
            {
                name: 'Planning',
                description: 'Define project scope, requirements, and team structure',
                tasks: ['Create User Stories', 'Define Architecture', 'Set Up Project Board', 'Plan Sprints'],
                minigameType: 'planning'
            },
            {
                name: 'Design & Architecture',
                description: 'Create system design, UI/UX mockups, and technical specifications',
                tasks: ['Design System Architecture', 'Create UI Wireframes', 'Define API Contracts', 'Database Schema'],
                minigameType: 'design'
            },
            {
                name: 'Implementation',
                description: 'Write code, implement features, and integrate components',
                tasks: ['Setup Development Environment', 'Implement Core Features', 'API Development', 'Frontend Implementation'],
                minigameType: 'coding'
            },
            {
                name: 'Testing & QA',
                description: 'Test functionality, fix bugs, and ensure quality',
                tasks: ['Unit Testing', 'Integration Testing', 'User Acceptance Testing', 'Performance Testing'],
                minigameType: 'testing'
            },
            {
                name: 'Deployment',
                description: 'Deploy to production and monitor system performance',
                tasks: ['Setup CI/CD Pipeline', 'Production Deployment', 'Monitor Systems', 'Documentation'],
                minigameType: 'deployment'
            }
        ];
        
        this.universeData = {
            corporate: {
                name: 'Corporate Company',
                teamTypes: ['Enterprise Architect', 'Senior Developer', 'QA Manager', 'Project Manager', 'Business Analyst'],
                methodology: 'Waterfall',
                challenges: ['Bureaucracy', 'Long approval cycles', 'Complex requirements'],
                benefits: ['Stable environment', 'Clear processes', 'Good resources']
            },
            startup: {
                name: 'Startup',
                teamTypes: ['Full Stack Developer', 'Product Manager', 'UI/UX Designer', 'Growth Hacker'],
                methodology: 'Agile',
                challenges: ['Limited resources', 'Tight deadlines', 'Changing requirements'],
                benefits: ['Innovation freedom', 'Fast decisions', 'Learning opportunities']
            },
            opensource: {
                name: 'Open Source Community',
                teamTypes: ['Maintainer', 'Contributor', 'Community Manager', 'Documentation Lead'],
                methodology: 'Community-driven',
                challenges: ['Volunteer coordination', 'Different timezones', 'Consensus building'],
                benefits: ['Global collaboration', 'Skill sharing', 'Impact visibility']
            },
            freelancer: {
                name: 'Freelancer',
                teamTypes: ['Solo Developer', 'Client Liaison', 'Consultant'],
                methodology: 'Client-focused',
                challenges: ['Multiple clients', 'Scope creep', 'Time management'],
                benefits: ['Flexibility', 'Diverse projects', 'Direct client contact']
            }
        };
        
        this.initializeGame();
    }
    
    initializeGame() {
        this.setupEventListeners();
        this.setupKeyboardNavigation();
        this.showInitialScreen();
    }
    
    setupEventListeners() {
        // Universe selection
        document.querySelectorAll('.universe-card').forEach(card => {
            card.addEventListener('click', () => this.selectUniverse(card.dataset.universe));
        });
        
        // Role selection
        document.querySelectorAll('.role-card').forEach(card => {
            card.addEventListener('click', () => this.selectRole(card.dataset.role));
        });
        
        // Methodology selection
        document.querySelectorAll('.methodology-card').forEach(card => {
            card.addEventListener('click', () => this.selectMethodology(card.dataset.methodology));
        });
        
        // Game action buttons
        document.getElementById('start-game-btn')?.addEventListener('click', () => this.startGame());
        document.getElementById('next-task-btn')?.addEventListener('click', () => this.completeCurrentTask());
        document.getElementById('team-communication-btn')?.addEventListener('click', () => this.openTeamCommunication());
        document.getElementById('review-progress-btn')?.addEventListener('click', () => this.reviewProgress());
        document.getElementById('restart-btn')?.addEventListener('click', () => this.restartGame());
        document.getElementById('new-setup-btn')?.addEventListener('click', () => this.newSetup());
        
        // Modal close
        document.querySelector('.close')?.addEventListener('click', () => this.closeModal());
    }
    
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'Enter':
                    e.preventDefault();
                    this.handleEnterKey();
                    break;
                case 'Escape':
                    e.preventDefault();
                    this.handleEscapeKey();
                    break;
                case 'ArrowUp':
                case 'ArrowDown':
                case 'ArrowLeft':
                case 'ArrowRight':
                    e.preventDefault();
                    this.handleArrowKeys(e.key);
                    break;
            }
        });
    }
    
    showInitialScreen() {
        // Activate terminal cursor blinking effect
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            cursor.style.animation = 'cursorBlink 1s infinite step-start';
        }
    }
    
    handleEnterKey() {
        switch(this.currentScreen) {
            case 'initial-screen':
                this.transitionToScreen('universe-screen');
                break;
            case 'universe-screen':
                if (this.gameState.selectedUniverse) {
                    this.transitionToScreen('role-screen');
                }
                break;
            case 'role-screen':
                if (this.gameState.selectedRole) {
                    this.transitionToScreen('methodology-screen');
                }
                break;
            case 'methodology-screen':
                if (this.gameState.selectedMethodology) {
                    this.startGame();
                }
                break;
        }
    }
    
    handleEscapeKey() {
        switch(this.currentScreen) {
            case 'universe-screen':
                this.transitionToScreen('initial-screen');
                break;
            case 'role-screen':
                this.transitionToScreen('universe-screen');
                break;
            case 'methodology-screen':
                this.transitionToScreen('role-screen');
                break;
            case 'game-screen':
                this.pauseGame();
                break;
        }
    }
    
    handleArrowKeys(key) {
        // Navigation logic for different screens
        // Implementation would depend on current screen
    }
    
    transitionToScreen(screenId) {
        const currentScreenEl = document.getElementById(this.currentScreen);
        const newScreenEl = document.getElementById(screenId);
        
        if (currentScreenEl) currentScreenEl.classList.remove('active');
        
        setTimeout(() => {
            if (newScreenEl) {
                newScreenEl.classList.add('active');
                this.currentScreen = screenId;
                this.setupCurrentScreen();
            }
        }, 300);
    }
    
    setupCurrentScreen() {
        switch(this.currentScreen) {
            case 'universe-screen':
                this.setupUniverseScreen();
                break;
            case 'role-screen':
                this.setupRoleScreen();
                break;
            case 'methodology-screen':
                this.setupMethodologyScreen();
                break;
            case 'game-screen':
                this.setupGameScreen();
                break;
        }
    }
    
    setupUniverseScreen() {
        // Update universe descriptions based on selection
        document.querySelectorAll('.universe-card').forEach(card => {
            card.classList.remove('selected');
        });
    }
    
    setupRoleScreen() {
        const universeDescription = document.getElementById('universe-description');
        if (universeDescription && this.gameState.selectedUniverse) {
            const universe = this.universeData[this.gameState.selectedUniverse];
            universeDescription.textContent = `In the ${universe.name}, choose your role to begin your software development journey.`;
        }
    }
    
    setupMethodologyScreen() {
        // Enable start button if methodology is selected
        const startBtn = document.getElementById('start-game-btn');
        if (startBtn) {
            startBtn.disabled = !this.gameState.selectedMethodology;
        }
    }
    
    setupGameScreen() {
        this.updateGameUI();
        this.loadCurrentPhase();
        this.createPlayerCharacter();
        this.generateTeamMembers();
    }
    
    selectUniverse(universeId) {
        this.gameState.selectedUniverse = universeId;
        
        // Update UI
        document.querySelectorAll('.universe-card').forEach(card => {
            card.classList.toggle('selected', card.dataset.universe === universeId);
        });
        
        // Auto-advance after selection
        setTimeout(() => {
            this.transitionToScreen('role-screen');
        }, 1000);
    }
    
    selectRole(roleId) {
        this.gameState.selectedRole = roleId;
        
        // Update UI
        document.querySelectorAll('.role-card').forEach(card => {
            card.classList.toggle('selected', card.dataset.role === roleId);
        });
        
        // Set player character
        this.gameState.playerCharacter = {
            role: roleId,
            name: this.getRoleName(roleId),
            skills: this.getRoleSkills(roleId),
            avatar: roleId
        };
        
        // Auto-advance after selection
        setTimeout(() => {
            this.transitionToScreen('methodology-screen');
        }, 1000);
    }
    
    selectMethodology(methodologyId) {
        this.gameState.selectedMethodology = methodologyId;
        
        // Update UI
        document.querySelectorAll('.methodology-card').forEach(card => {
            card.classList.toggle('selected', card.dataset.methodology === methodologyId);
        });
        
        // Enable start button
        const startBtn = document.getElementById('start-game-btn');
        if (startBtn) {
            startBtn.disabled = false;
        }
    }
    
    startGame() {
        this.transitionToScreen('game-screen');
        this.showMessage('🚀 Welcome to your software development journey!', 'success');
    }
    
    updateGameUI() {
        // Update status bar
        const currentUniverse = document.getElementById('current-universe');
        const currentRole = document.getElementById('current-role');
        const currentMethodology = document.getElementById('current-methodology');
        
        if (currentUniverse) {
            currentUniverse.textContent = this.universeData[this.gameState.selectedUniverse]?.name || 'Unknown';
        }
        if (currentRole) {
            currentRole.textContent = this.getRoleName(this.gameState.selectedRole);
        }
        if (currentMethodology) {
            currentMethodology.textContent = this.getMethodologyName(this.gameState.selectedMethodology);
        }
        
        // Update progress bar
        this.updateProgressBar();
    }
    
    updateProgressBar() {
        const progressFill = document.getElementById('overall-progress');
        if (progressFill) {
            progressFill.style.width = `${this.gameState.overallProgress}%`;
        }
    }
    
    loadCurrentPhase() {
        const phase = this.gamePhases[this.getCurrentPhaseIndex()];
        
        // Update phase header
        const phaseTitle = document.getElementById('current-phase');
        const phaseDescription = document.getElementById('phase-description');
        
        if (phaseTitle) phaseTitle.textContent = phase.name;
        if (phaseDescription) phaseDescription.textContent = phase.description;
        
        // Load phase tasks
        this.loadPhaseTasks(phase);
    }
    
    loadPhaseTasks(phase) {
        const taskList = document.getElementById('task-list');
        if (!taskList) return;
        
        taskList.innerHTML = '';
        
        phase.tasks.forEach((task, index) => {
            const taskElement = this.createTaskElement(task, index);
            taskList.appendChild(taskElement);
        });
    }
    
    createTaskElement(taskName, index) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task-item';
        taskDiv.dataset.taskIndex = index;
        
        const isCompleted = this.gameState.completedTasks.includes(`${this.getCurrentPhaseIndex()}-${index}`);
        const progress = isCompleted ? 100 : (index === 0 ? 50 : 0); // First task is in progress
        
        taskDiv.innerHTML = `
            <h4>${taskName}</h4>
            <p>Click to ${isCompleted ? 'review' : 'work on'} this task</p>
            <div class="task-progress">
                <div class="task-progress-bar" style="width: ${progress}%"></div>
            </div>
        `;
        
        if (isCompleted) {
            taskDiv.classList.add('completed');
        }
        
        taskDiv.addEventListener('click', () => this.startTask(taskName, index));
        
        return taskDiv;
    }
    
    createPlayerCharacter() {
        const playerCharacter = document.getElementById('player-character');
        if (playerCharacter && this.gameState.playerCharacter) {
            playerCharacter.className = `character-sprite ${this.gameState.playerCharacter.avatar}`;
        }
    }
    
    generateTeamMembers() {
        const teamMembers = document.getElementById('team-members');
        if (!teamMembers) return;
        
        const universe = this.universeData[this.gameState.selectedUniverse];
        const memberCount = Math.min(4, universe.teamTypes.length);
        
        teamMembers.innerHTML = '';
        
        for (let i = 0; i < memberCount; i++) {
            const memberType = universe.teamTypes[i];
            const memberElement = this.createTeamMemberElement(memberType, i);
            teamMembers.appendChild(memberElement);
        }
    }
    
    createTeamMemberElement(memberType, index) {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'team-member-card';
        
        memberDiv.innerHTML = `
            <div class="team-member-avatar"></div>
            <div class="team-member-name">${memberType}</div>
            <div class="team-member-role">Team Member ${index + 1}</div>
        `;
        
        return memberDiv;
    }
    
    startTask(taskName, taskIndex) {
        const phaseIndex = this.getCurrentPhaseIndex();
        const phase = this.gamePhases[phaseIndex];
        
        // Check if task is already completed
        const taskId = `${phaseIndex}-${taskIndex}`;
        if (this.gameState.completedTasks.includes(taskId)) {
            this.showMessage(`✅ Task "${taskName}" is already completed!`, 'info');
            return;
        }
        
        // Launch appropriate mini-game
        this.launchMiniGame(phase.minigameType, taskName, taskIndex);
    }
    
    launchMiniGame(type, taskName, taskIndex) {
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-body');
        
        if (!modal || !modalBody) return;
        
        modalBody.innerHTML = this.generateMiniGameContent(type, taskName);
        modal.classList.add('active');
        
        // Setup mini-game specific interactions
        this.setupMiniGameInteractions(type, taskIndex);
    }
    
    generateMiniGameContent(type, taskName) {
        switch(type) {
            case 'planning':
                return this.generatePlanningMiniGame(taskName);
            case 'design':
                return this.generateDesignMiniGame(taskName);
            case 'coding':
                return this.generateCodingMiniGame(taskName);
            case 'testing':
                return this.generateTestingMiniGame(taskName);
            case 'deployment':
                return this.generateDeploymentMiniGame(taskName);
            default:
                return `<h3>${taskName}</h3><p>Complete this task to progress.</p>`;
        }
    }
    
    generatePlanningMiniGame(taskName) {
        const planningOptions = [
            'Define user requirements',
            'Create acceptance criteria',
            'Estimate effort required',
            'Identify dependencies',
            'Set priority level'
        ];
        
        return `
            <h3>📋 Planning: ${taskName}</h3>
            <p>Select the planning activities you want to focus on:</p>
            <div class="minigame-options">
                ${planningOptions.map((option, index) => `
                    <label class="minigame-option">
                        <input type="checkbox" data-option="${index}">
                        ${option}
                    </label>
                `).join('')}
            </div>
            <button class="primary-btn minigame-complete" onclick="game.completeMiniGame()">Complete Planning</button>
        `;
    }
    
    generateDesignMiniGame(taskName) {
        const designPatterns = [
            'MVC Pattern',
            'Observer Pattern',
            'Factory Pattern',
            'Singleton Pattern',
            'Strategy Pattern'
        ];
        
        return `
            <h3>🎨 Design: ${taskName}</h3>
            <p>Choose appropriate design patterns for this task:</p>
            <div class="minigame-options">
                ${designPatterns.map((pattern, index) => `
                    <div class="pattern-card" data-pattern="${index}">
                        <h4>${pattern}</h4>
                        <p>Click to apply this pattern</p>
                    </div>
                `).join('')}
            </div>
            <button class="primary-btn minigame-complete" onclick="game.completeMiniGame()">Finalize Design</button>
        `;
    }
    
    generateCodingMiniGame(taskName) {
        const codeBlocks = [
            'function initializeApp() {}',
            'class UserService {}',
            'const apiClient = new ApiClient()',
            'export default MyComponent',
            'await database.connect()'
        ];
        
        return `
            <h3>💻 Coding: ${taskName}</h3>
            <p>Drag and drop code blocks to build your implementation:</p>
            <div class="code-builder">
                <div class="available-blocks">
                    ${codeBlocks.map((block, index) => `
                        <div class="code-block" draggable="true" data-block="${index}">
                            ${block}
                        </div>
                    `).join('')}
                </div>
                <div class="code-workspace" id="code-workspace">
                    <p>Drop code blocks here...</p>
                </div>
            </div>
            <button class="primary-btn minigame-complete" onclick="game.completeMiniGame()">Submit Code</button>
        `;
    }
    
    generateTestingMiniGame(taskName) {
        const testCases = [
            'Test valid user input',
            'Test invalid data handling',
            'Test edge cases',
            'Test performance limits',
            'Test security vulnerabilities'
        ];
        
        return `
            <h3>🧪 Testing: ${taskName}</h3>
            <p>Design test cases for this functionality:</p>
            <div class="test-designer">
                ${testCases.map((testCase, index) => `
                    <div class="test-case" data-test="${index}">
                        <input type="checkbox" id="test-${index}">
                        <label for="test-${index}">${testCase}</label>
                        <select class="test-priority">
                            <option value="high">High Priority</option>
                            <option value="medium">Medium Priority</option>
                            <option value="low">Low Priority</option>
                        </select>
                    </div>
                `).join('')}
            </div>
            <button class="primary-btn minigame-complete" onclick="game.completeMiniGame()">Run Tests</button>
        `;
    }
    
    generateDeploymentMiniGame(taskName) {
        const deploymentSteps = [
            'Build application',
            'Run automated tests',
            'Deploy to staging',
            'Verify deployment',
            'Deploy to production'
        ];
        
        return `
            <h3>🚀 Deployment: ${taskName}</h3>
            <p>Configure your deployment pipeline:</p>
            <div class="deployment-pipeline">
                ${deploymentSteps.map((step, index) => `
                    <div class="pipeline-step" data-step="${index}">
                        <div class="step-indicator">${index + 1}</div>
                        <div class="step-content">
                            <h4>${step}</h4>
                            <button class="step-action" onclick="game.executeDeploymentStep(${index})">Execute</button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <button class="primary-btn minigame-complete" onclick="game.completeMiniGame()">Complete Deployment</button>
        `;
    }
    
    setupMiniGameInteractions(type, taskIndex) {
        this.currentTaskIndex = taskIndex;
        
        if (type === 'coding') {
            this.setupDragAndDrop();
        } else if (type === 'design') {
            this.setupPatternSelection();
        }
    }
    
    setupDragAndDrop() {
        const codeBlocks = document.querySelectorAll('.code-block');
        const workspace = document.getElementById('code-workspace');
        
        codeBlocks.forEach(block => {
            block.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', e.target.dataset.block);
            });
        });
        
        if (workspace) {
            workspace.addEventListener('dragover', (e) => e.preventDefault());
            workspace.addEventListener('drop', (e) => {
                e.preventDefault();
                const blockIndex = e.dataTransfer.getData('text/plain');
                const blockElement = document.querySelector(`[data-block="${blockIndex}"]`);
                if (blockElement) {
                    workspace.appendChild(blockElement.cloneNode(true));
                }
            });
        }
    }
    
    setupPatternSelection() {
        document.querySelectorAll('.pattern-card').forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('selected');
            });
        });
    }
    
    executeDeploymentStep(stepIndex) {
        const stepElement = document.querySelector(`[data-step="${stepIndex}"]`);
        if (stepElement) {
            stepElement.classList.add('completed');
            this.showMessage(`✅ Step ${stepIndex + 1} completed!`, 'success');
        }
    }
    
    completeMiniGame() {
        const phaseIndex = this.getCurrentPhaseIndex();
        const taskId = `${phaseIndex}-${this.currentTaskIndex}`;
        
        // Mark task as completed
        this.gameState.completedTasks.push(taskId);
        
        // Update progress
        this.updateTaskProgress();
        
        // Close modal
        this.closeModal();
        
        // Update UI
        this.loadCurrentPhase();
        
        // Check if phase is complete
        this.checkPhaseCompletion();
        
        this.showMessage('🎉 Task completed successfully!', 'success');
    }
    
    updateTaskProgress() {
        const currentPhase = this.gamePhases[this.getCurrentPhaseIndex()];
        const phaseTasksCompleted = this.gameState.completedTasks.filter(taskId => 
            taskId.startsWith(`${this.getCurrentPhaseIndex()}-`)
        ).length;
        
        this.gameState.phaseProgress = (phaseTasksCompleted / currentPhase.tasks.length) * 100;
        this.gameState.overallProgress = ((this.getCurrentPhaseIndex() + (this.gameState.phaseProgress / 100)) / this.gamePhases.length) * 100;
        
        this.updateProgressBar();
    }
    
    checkPhaseCompletion() {
        const currentPhase = this.gamePhases[this.getCurrentPhaseIndex()];
        const phaseTasksCompleted = this.gameState.completedTasks.filter(taskId => 
            taskId.startsWith(`${this.getCurrentPhaseIndex()}-`)
        ).length;
        
        if (phaseTasksCompleted >= currentPhase.tasks.length) {
            this.completePhase();
        }
    }
    
    completePhase() {
        const currentPhaseIndex = this.getCurrentPhaseIndex();
        
        if (currentPhaseIndex < this.gamePhases.length - 1) {
            // Move to next phase
            this.gameState.currentPhase = this.gamePhases[currentPhaseIndex + 1].name.toLowerCase();
            this.loadCurrentPhase();
            this.showMessage(`🎯 ${this.gamePhases[currentPhaseIndex].name} phase completed! Moving to ${this.gamePhases[currentPhaseIndex + 1].name}.`, 'success');
        } else {
            // Game completed
            this.completeGame();
        }
    }
    
    completeGame() {
        this.calculateFinalMetrics();
        this.transitionToScreen('end-screen');
        this.displayFinalResults();
    }
    
    calculateFinalMetrics() {
        // Base metrics on performance
        const completionRate = (this.gameState.completedTasks.length / this.getTotalTasks()) * 100;
        const efficiency = Math.min(100, completionRate + Math.random() * 20);
        
        this.gameState.gameMetrics = {
            teamMorale: Math.round(75 + Math.random() * 25),
            codeQuality: Math.round(80 + Math.random() * 20),
            customerSatisfaction: Math.round(70 + Math.random() * 30),
            projectEfficiency: Math.round(efficiency)
        };
    }
    
    displayFinalResults() {
        // Update metric displays
        Object.entries(this.gameState.gameMetrics).forEach(([key, value]) => {
            const element = document.getElementById(key.replace(/([A-Z])/g, '-$1').toLowerCase());
            if (element) {
                element.textContent = `${value}%`;
            }
        });
    }
    
    getCurrentPhaseIndex() {
        return this.gamePhases.findIndex(phase => 
            phase.name.toLowerCase() === this.gameState.currentPhase
        );
    }
    
    getTotalTasks() {
        return this.gamePhases.reduce((total, phase) => total + phase.tasks.length, 0);
    }
    
    completeCurrentTask() {
        const phaseIndex = this.getCurrentPhaseIndex();
        const currentPhase = this.gamePhases[phaseIndex];
        
        // Find next incomplete task
        const nextTaskIndex = currentPhase.tasks.findIndex((task, index) => 
            !this.gameState.completedTasks.includes(`${phaseIndex}-${index}`)
        );
        
        if (nextTaskIndex !== -1) {
            this.startTask(currentPhase.tasks[nextTaskIndex], nextTaskIndex);
        } else {
            this.showMessage('All tasks in this phase are completed!', 'info');
        }
    }
    
    openTeamCommunication() {
        this.showModal('Team Communication', `
            <h3>💬 Team Communication</h3>
            <div class="communication-panel">
                <div class="team-chat">
                    <div class="chat-message">
                        <strong>Product Owner:</strong> How's the progress on the current sprint?
                    </div>
                    <div class="chat-message">
                        <strong>Developer:</strong> We're on track to complete 80% of planned tasks.
                    </div>
                    <div class="chat-message">
                        <strong>QA:</strong> Found a few edge cases that need attention.
                    </div>
                </div>
                <div class="team-status">
                    <h4>Team Status</h4>
                    <div class="status-item">
                        <span>Overall Morale:</span>
                        <span class="status-value">${this.gameState.gameMetrics.teamMorale}%</span>
                    </div>
                    <div class="status-item">
                        <span>Sprint Progress:</span>
                        <span class="status-value">${Math.round(this.gameState.phaseProgress)}%</span>
                    </div>
                </div>
            </div>
        `);
    }
    
    reviewProgress() {
        const phaseIndex = this.getCurrentPhaseIndex();
        const completedInPhase = this.gameState.completedTasks.filter(taskId => 
            taskId.startsWith(`${phaseIndex}-`)
        ).length;
        const totalInPhase = this.gamePhases[phaseIndex].tasks.length;
        
        this.showModal('Progress Review', `
            <h3>📊 Project Progress Review</h3>
            <div class="progress-review">
                <div class="progress-section">
                    <h4>Current Phase: ${this.gamePhases[phaseIndex].name}</h4>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${this.gameState.phaseProgress}%"></div>
                    </div>
                    <p>Tasks completed: ${completedInPhase} / ${totalInPhase}</p>
                </div>
                <div class="progress-section">
                    <h4>Overall Project Progress</h4>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${this.gameState.overallProgress}%"></div>
                    </div>
                    <p>${Math.round(this.gameState.overallProgress)}% complete</p>
                </div>
                <div class="metrics-preview">
                    <h4>Current Metrics</h4>
                    <div class="metric-item">Team Morale: ${this.gameState.gameMetrics.teamMorale}%</div>
                    <div class="metric-item">Code Quality: ${this.gameState.gameMetrics.codeQuality}%</div>
                </div>
            </div>
        `);
    }
    
    showModal(title, content) {
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-body');
        
        if (modal && modalBody) {
            modalBody.innerHTML = `<h2>${title}</h2>${content}`;
            modal.classList.add('active');
        }
    }
    
    closeModal() {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.classList.remove('active');
        }
    }
    
    pauseGame() {
        this.showModal('Game Paused', `
            <h3>⏸️ Game Paused</h3>
            <p>Your progress has been saved.</p>
            <div class="pause-actions">
                <button class="primary-btn" onclick="game.closeModal()">Resume Game</button>
                <button class="secondary-btn" onclick="game.restartGame()">Restart Game</button>
                <button class="secondary-btn" onclick="game.newSetup()">New Setup</button>
            </div>
        `);
    }
    
    restartGame() {
        // Reset game state
        this.gameState = {
            selectedUniverse: null,
            selectedRole: null,
            selectedMethodology: null,
            playerCharacter: null,
            teamMembers: [],
            currentPhase: 'planning',
            phaseProgress: 0,
            overallProgress: 0,
            score: 0,
            completedTasks: [],
            gameMetrics: {
                teamMorale: 85,
                codeQuality: 92,
                customerSatisfication: 88,
                projectEfficiency: 76
            }
        };
        
        this.closeModal();
        this.transitionToScreen('initial-screen');
    }
    
    newSetup() {
        this.gameState.selectedUniverse = null;
        this.gameState.selectedRole = null;
        this.gameState.selectedMethodology = null;
        
        this.closeModal();
        this.transitionToScreen('universe-screen');
    }
    
    showMessage(message, type = 'info') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `game-message ${type}`;
        messageDiv.textContent = message;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => messageDiv.classList.add('show'), 100);
        setTimeout(() => messageDiv.remove(), 4000);
    }
    
    getRoleName(roleId) {
        const roleNames = {
            'frontend': 'Frontend Developer',
            'backend': 'Backend Developer',
            'fullstack': 'Full Stack Developer',
            'dba': 'Database Administrator',
            'manual-tester': 'Manual Tester',
            'automation-engineer': 'Automation Engineer',
            'cicd-engineer': 'CI/CD Engineer',
            'infrastructure-engineer': 'Infrastructure Engineer',
            'ux-designer': 'UX Designer',
            'ui-designer': 'UI Designer',
            'graphic-artist': 'Graphic Artist',
            'red-team': 'Red Team (Offensive)',
            'blue-team': 'Blue Team (Defensive)',
            'gray-team': 'Gray Team (Hybrid)',
            'product-owner': 'Product Owner',
            'scrum-master': 'Scrum Master',
            'project-manager': 'Project Manager',
            'tech-lead': 'Technical Lead'
        };
        return roleNames[roleId] || roleId;
    }
    
    getRoleSkills(roleId) {
        const roleSkills = {
            'frontend': ['JavaScript', 'React', 'CSS', 'HTML'],
            'backend': ['Node.js', 'Python', 'Database', 'API Design'],
            'fullstack': ['Frontend', 'Backend', 'DevOps', 'Database'],
            'dba': ['SQL', 'Database Design', 'Performance Tuning', 'Backup'],
            'manual-tester': ['Test Cases', 'Bug Reporting', 'User Testing'],
            'automation-engineer': ['Test Automation', 'Selenium', 'CI/CD'],
            'cicd-engineer': ['Jenkins', 'Docker', 'Kubernetes', 'Automation'],
            'infrastructure-engineer': ['AWS', 'Terraform', 'Monitoring'],
            'ux-designer': ['User Research', 'Wireframing', 'Prototyping'],
            'ui-designer': ['Visual Design', 'Figma', 'Design Systems'],
            'graphic-artist': ['Photoshop', 'Illustration', 'Branding'],
            'red-team': ['Penetration Testing', 'Vulnerability Assessment'],
            'blue-team': ['Security Monitoring', 'Incident Response'],
            'gray-team': ['Security Analysis', 'Risk Assessment'],
            'product-owner': ['Product Vision', 'Stakeholder Management'],
            'scrum-master': ['Agile Coaching', 'Process Facilitation'],
            'project-manager': ['Project Planning', 'Risk Management'],
            'tech-lead': ['Technical Architecture', 'Team Leadership']
        };
        return roleSkills[roleId] || [];
    }
    
    getMethodologyName(methodologyId) {
        const methodologyNames = {
            'scrum': 'Scrum',
            'kanban': 'Kanban',
            'xp': 'Extreme Programming',
            'waterfall': 'Waterfall',
            'lean': 'Lean',
            'safe': 'SAFe',
            'devops': 'DevOps',
            'tdd': 'Test-Driven Development'
        };
        return methodologyNames[methodologyId] || methodologyId;
    }
}

// Initialize game when DOM is loaded
let game;
document.addEventListener('DOMContentLoaded', () => {
    game = new STUPGame();
    
    // Add global styles for dynamic content
    const style = document.createElement('style');
    style.textContent = `
        .minigame-options {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 20px 0;
        }
        
        .minigame-option {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            background: var(--dark-gray);
            border-radius: 6px;
            cursor: pointer;
        }
        
        .minigame-option:hover {
            background: var(--medium-gray);
        }
        
        .pattern-card {
            background: var(--dark-gray);
            border: 2px solid var(--medium-gray);
            border-radius: 8px;
            padding: 15px;
            margin: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .pattern-card:hover,
        .pattern-card.selected {
            border-color: var(--accent-green);
            background: rgba(0, 255, 136, 0.1);
        }
        
        .code-builder {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 20px 0;
        }
        
        .available-blocks,
        .code-workspace {
            background: var(--dark-gray);
            border: 2px solid var(--medium-gray);
            border-radius: 8px;
            padding: 20px;
            min-height: 200px;
        }
        
        .code-block {
            background: var(--medium-gray);
            border: 1px solid var(--light-gray);
            border-radius: 4px;
            padding: 8px 12px;
            margin: 5px 0;
            font-family: 'JetBrains Mono', monospace;
            cursor: grab;
            transition: all 0.2s ease;
        }
        
        .code-block:hover {
            background: var(--accent-green);
            color: var(--primary-black);
        }
        
        .test-designer {
            margin: 20px 0;
        }
        
        .test-case {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 10px;
            background: var(--dark-gray);
            border-radius: 6px;
            margin: 10px 0;
        }
        
        .test-priority {
            background: var(--medium-gray);
            border: 1px solid var(--light-gray);
            border-radius: 4px;
            padding: 5px;
            color: var(--text-white);
        }
        
        .deployment-pipeline {
            margin: 20px 0;
        }
        
        .pipeline-step {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 15px;
            background: var(--dark-gray);
            border-radius: 8px;
            margin: 10px 0;
            position: relative;
        }
        
        .pipeline-step.completed {
            background: rgba(0, 255, 136, 0.1);
            border: 1px solid var(--accent-green);
        }
        
        .step-indicator {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: var(--medium-gray);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
        
        .step-content {
            flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .step-action {
            background: var(--accent-blue);
            border: none;
            border-radius: 4px;
            color: white;
            padding: 8px 16px;
            cursor: pointer;
        }
        
        .communication-panel {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 20px;
            margin: 20px 0;
        }
        
        .team-chat {
            background: var(--dark-gray);
            border-radius: 8px;
            padding: 15px;
            max-height: 300px;
            overflow-y: auto;
        }
        
        .chat-message {
            margin: 10px 0;
            padding: 8px;
            background: var(--medium-gray);
            border-radius: 4px;
        }
        
        .team-status {
            background: var(--dark-gray);
            border-radius: 8px;
            padding: 15px;
        }
        
        .status-item {
            display: flex;
            justify-content: space-between;
            margin: 8px 0;
        }
        
        .status-value {
            color: var(--accent-green);
            font-weight: bold;
        }
        
        .game-message {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 1001;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        }
        
        .game-message.show {
            transform: translateX(0);
        }
        
        .game-message.success {
            background: var(--accent-green);
            color: var(--primary-black);
        }
        
        .game-message.error {
            background: var(--accent-red);
        }
        
        .game-message.info {
            background: var(--accent-blue);
        }
        
        .progress-review {
            margin: 20px 0;
        }
        
        .progress-section {
            margin: 20px 0;
            padding: 15px;
            background: var(--dark-gray);
            border-radius: 8px;
        }
        
        .metrics-preview {
            margin: 20px 0;
            padding: 15px;
            background: var(--dark-gray);
            border-radius: 8px;
        }
        
        .metric-item {
            margin: 8px 0;
            color: var(--text-gray);
        }
        
        .pause-actions {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 20px 0;
        }
    `;
    document.head.appendChild(style);
});

// Export for global access
window.game = game;