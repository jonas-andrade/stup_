// ==========================================
// ADVANCED 3D WORKSPACE SYSTEM
// ==========================================

class Advanced3DWorkspace {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        this.characters = [];
        this.table = null;
        this.room = null;
        this.lighting = {};
        
        this.init();
    }

    init() {
        this.createScene();
        this.createCamera();
        this.createRenderer();
        this.createLighting();
        this.createRoom();
        this.createTable();
        this.setupControls();
        this.animate();
    }

    createScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0a0a0a);
        this.scene.fog = new THREE.Fog(0x0a0a0a, 50, 200);
    }

    createCamera() {
        this.camera = new THREE.PerspectiveCamera(
            75, 
            this.container.clientWidth / this.container.clientHeight, 
            0.1, 
            1000
        );
        this.camera.position.set(0, 8, 12);
        this.camera.lookAt(0, 0, 0);
    }

    createRenderer() {
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
        });
        
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;
        
        this.container.appendChild(this.renderer.domElement);
    }

    createLighting() {
        // Ambient light
        this.lighting.ambient = new THREE.AmbientLight(0x404040, 0.3);
        this.scene.add(this.lighting.ambient);

        // Main directional light
        this.lighting.main = new THREE.DirectionalLight(0xffffff, 0.8);
        this.lighting.main.position.set(10, 20, 10);
        this.lighting.main.castShadow = true;
        this.lighting.main.shadow.mapSize.width = 2048;
        this.lighting.main.shadow.mapSize.height = 2048;
        this.lighting.main.shadow.camera.near = 0.5;
        this.lighting.main.shadow.camera.far = 50;
        this.lighting.main.shadow.camera.left = -20;
        this.lighting.main.shadow.camera.right = 20;
        this.lighting.main.shadow.camera.top = 20;
        this.lighting.main.shadow.camera.bottom = -20;
        this.scene.add(this.lighting.main);

        // Accent lights
        this.lighting.accent1 = new THREE.PointLight(0x00ffcc, 0.5, 30);
        this.lighting.accent1.position.set(-8, 5, 8);
        this.scene.add(this.lighting.accent1);

        this.lighting.accent2 = new THREE.PointLight(0x0080ff, 0.3, 25);
        this.lighting.accent2.position.set(8, 4, -8);
        this.scene.add(this.lighting.accent2);

        // Room lighting
        this.lighting.ceiling = new THREE.RectAreaLight(0xffffff, 2, 20, 20);
        this.lighting.ceiling.position.set(0, 15, 0);
        this.lighting.ceiling.lookAt(0, 0, 0);
        this.scene.add(this.lighting.ceiling);
    }

    createRoom() {
        const roomGroup = new THREE.Group();

        // Floor
        const floorGeometry = new THREE.PlaneGeometry(40, 40);
        const floorMaterial = new THREE.MeshLambertMaterial({ 
            color: 0x1a1a1a,
            transparent: true,
            opacity: 0.8
        });
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;
        roomGroup.add(floor);

        // Walls
        const wallHeight = 12;
        const wallMaterial = new THREE.MeshLambertMaterial({ 
            color: 0x2a2a2a,
            transparent: true,
            opacity: 0.6
        });

        // Back wall
        const backWallGeometry = new THREE.PlaneGeometry(40, wallHeight);
        const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
        backWall.position.set(0, wallHeight/2, -20);
        roomGroup.add(backWall);

        // Side walls
        const sideWallGeometry = new THREE.PlaneGeometry(40, wallHeight);
        const leftWall = new THREE.Mesh(sideWallGeometry, wallMaterial);
        leftWall.position.set(-20, wallHeight/2, 0);
        leftWall.rotation.y = Math.PI / 2;
        roomGroup.add(leftWall);

        const rightWall = new THREE.Mesh(sideWallGeometry, wallMaterial);
        rightWall.position.set(20, wallHeight/2, 0);
        rightWall.rotation.y = -Math.PI / 2;
        roomGroup.add(rightWall);

        // Ceiling
        const ceilingGeometry = new THREE.PlaneGeometry(40, 40);
        const ceilingMaterial = new THREE.MeshLambertMaterial({ 
            color: 0x4a4a4a,
            transparent: true,
            opacity: 0.3
        });
        const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
        ceiling.position.y = wallHeight;
        ceiling.rotation.x = Math.PI / 2;
        roomGroup.add(ceiling);

        this.room = roomGroup;
        this.scene.add(this.room);
    }

    createTable() {
        const tableGroup = new THREE.Group();

        // Table surface
        const tableGeometry = new THREE.CylinderGeometry(6, 6, 0.3, 32);
        const tableMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x8B4513,
            metalness: 0.1,
            roughness: 0.8
        });
        const tableTop = new THREE.Mesh(tableGeometry, tableMaterial);
        tableTop.position.y = 2;
        tableTop.castShadow = true;
        tableTop.receiveShadow = true;
        tableGroup.add(tableTop);

        // Table legs
        const legGeometry = new THREE.CylinderGeometry(0.2, 0.2, 2, 8);
        const legMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x654321,
            metalness: 0.2,
            roughness: 0.9
        });

        const legPositions = [
            { x: 4, z: 4 },
            { x: -4, z: 4 },
            { x: 4, z: -4 },
            { x: -4, z: -4 }
        ];

        legPositions.forEach(pos => {
            const leg = new THREE.Mesh(legGeometry, legMaterial);
            leg.position.set(pos.x, 1, pos.z);
            leg.castShadow = true;
            tableGroup.add(leg);
        });

        // Table accessories
        this.createTableAccessories(tableGroup);

        this.table = tableGroup;
        this.scene.add(this.table);
    }

    createTableAccessories(tableGroup) {
        // Laptop
        const laptopGeometry = new THREE.BoxGeometry(1.5, 0.1, 1);
        const laptopMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x333333,
            metalness: 0.8,
            roughness: 0.2
        });
        const laptop = new THREE.Mesh(laptopGeometry, laptopMaterial);
        laptop.position.set(0, 2.2, 0);
        laptop.castShadow = true;
        tableGroup.add(laptop);

        // Coffee cups
        const cupGeometry = new THREE.CylinderGeometry(0.3, 0.25, 0.4, 16);
        const cupMaterial = new THREE.MeshStandardMaterial({ 
            color: 0xffffff,
            metalness: 0.1,
            roughness: 0.8
        });

        for (let i = 0; i < 3; i++) {
            const cup = new THREE.Mesh(cupGeometry, cupMaterial);
            const angle = (i / 3) * Math.PI * 2;
            cup.position.set(
                Math.cos(angle) * 4,
                2.35,
                Math.sin(angle) * 4
            );
            cup.castShadow = true;
            tableGroup.add(cup);
        }

        // Documents
        const docGeometry = new THREE.PlaneGeometry(1, 1.4);
        const docMaterial = new THREE.MeshLambertMaterial({ 
            color: 0xffffff,
            transparent: true,
            opacity: 0.9
        });
        
        for (let i = 0; i < 4; i++) {
            const doc = new THREE.Mesh(docGeometry, docMaterial);
            const angle = (i / 4) * Math.PI * 2 + Math.PI / 4;
            doc.position.set(
                Math.cos(angle) * 3,
                2.2,
                Math.sin(angle) * 3
            );
            doc.rotation.x = -Math.PI / 2;
            doc.rotation.z = angle;
            tableGroup.add(doc);
        }
    }

    createCharacter(professionalData, position, index) {
        const characterGroup = new THREE.Group();

        // Character body (simplified human-like figure)
        const bodyGeometry = new THREE.CapsuleGeometry(0.3, 1.2, 4, 8);
        const bodyMaterial = new THREE.MeshStandardMaterial({ 
            color: this.getCharacterColor(professionalData.role),
            metalness: 0.1,
            roughness: 0.8
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.position.y = 1.2;
        body.castShadow = true;
        characterGroup.add(body);

        // Head
        const headGeometry = new THREE.SphereGeometry(0.25, 16, 16);
        const headMaterial = new THREE.MeshStandardMaterial({ 
            color: 0xfdbcb4,
            metalness: 0.1,
            roughness: 0.9
        });
        const head = new THREE.Mesh(headGeometry, headMaterial);
        head.position.y = 2.1;
        head.castShadow = true;
        characterGroup.add(head);

        // Professional badge
        const badgeGeometry = new THREE.PlaneGeometry(0.4, 0.6);
        const badgeTexture = this.createBadgeTexture(professionalData);
        const badgeMaterial = new THREE.MeshBasicMaterial({ 
            map: badgeTexture,
            transparent: true
        });
        const badge = new THREE.Mesh(badgeGeometry, badgeMaterial);
        badge.position.set(0, 1.2, 0.31);
        characterGroup.add(badge);

        // Chair
        const chair = this.createChair();
        chair.position.y = 0;
        characterGroup.add(chair);

        // Position character around table
        const angle = (index / 8) * Math.PI * 2;
        const radius = 8;
        characterGroup.position.set(
            Math.cos(angle) * radius,
            0,
            Math.sin(angle) * radius
        );
        characterGroup.rotation.y = angle + Math.PI;

        // Add interaction
        this.addCharacterInteraction(characterGroup, professionalData);

        this.characters.push(characterGroup);
        this.scene.add(characterGroup);

        return characterGroup;
    }

    createChair() {
        const chairGroup = new THREE.Group();

        // Seat
        const seatGeometry = new THREE.BoxGeometry(1, 0.1, 1);
        const chairMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x333333,
            metalness: 0.3,
            roughness: 0.7
        });
        const seat = new THREE.Mesh(seatGeometry, chairMaterial);
        seat.position.y = 0.5;
        seat.castShadow = true;
        chairGroup.add(seat);

        // Backrest
        const backGeometry = new THREE.BoxGeometry(1, 1, 0.1);
        const back = new THREE.Mesh(backGeometry, chairMaterial);
        back.position.set(0, 1, -0.45);
        back.castShadow = true;
        chairGroup.add(back);

        // Legs
        const legGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 8);
        const legPositions = [
            { x: 0.4, z: 0.4 },
            { x: -0.4, z: 0.4 },
            { x: 0.4, z: -0.4 },
            { x: -0.4, z: -0.4 }
        ];

        legPositions.forEach(pos => {
            const leg = new THREE.Mesh(legGeometry, chairMaterial);
            leg.position.set(pos.x, 0.25, pos.z);
            leg.castShadow = true;
            chairGroup.add(leg);
        });

        return chairGroup;
    }

    createBadgeTexture(professionalData) {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 384;
        const ctx = canvas.getContext('2d');

        // Background
        const gradient = ctx.createLinearGradient(0, 0, 0, 384);
        gradient.addColorStop(0, this.getCharacterColor(professionalData.role));
        gradient.addColorStop(1, '#1a1a1a');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 256, 384);

        // Border
        ctx.strokeStyle = '#00ffcc';
        ctx.lineWidth = 4;
        ctx.strokeRect(8, 8, 240, 368);

        // Role name
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(professionalData.name.split(' ')[0], 128, 60);
        
        // Subtitle
        ctx.font = '16px Arial';
        ctx.fillText(professionalData.name.split(' ').slice(1).join(' '), 128, 85);

        // Skills
        ctx.font = '14px Arial';
        ctx.textAlign = 'left';
        if (professionalData.skills) {
            professionalData.skills.slice(0, 3).forEach((skill, index) => {
                ctx.fillText(`• ${skill}`, 20, 140 + (index * 25));
            });
        }

        // Avatar placeholder (would use real image in production)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(64, 200, 128, 128);
        ctx.strokeStyle = '#00ffcc';
        ctx.strokeRect(64, 200, 128, 128);

        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;
        return texture;
    }

    getCharacterColor(role) {
        const colors = {
            'frontend': '#61dafb',
            'backend': '#68217a',
            'fullstack': '#ff6b35',
            'mobile': '#a4c639',
            'architect': '#4a90e2',
            'devops': '#326ce5',
            'qa': '#ff9500',
            'data': '#ff6b6b',
            'security': '#dc3545'
        };

        const roleKey = Object.keys(colors).find(key => 
            role.toLowerCase().includes(key)
        );
        
        return colors[roleKey] || '#888888';
    }

    addCharacterInteraction(characterGroup, professionalData) {
        characterGroup.userData = { professional: professionalData };
        
        // Add hover effect
        characterGroup.traverse((child) => {
            if (child.isMesh) {
                child.userData.originalY = child.position.y;
            }
        });
    }

    setupControls() {
        // Basic orbit controls (would need OrbitControls import)
        this.controls = {
            autoRotate: false,
            enableZoom: true,
            enablePan: true
        };

        // Mouse interaction
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        this.renderer.domElement.addEventListener('mousemove', (event) => {
            this.onMouseMove(event);
        });

        this.renderer.domElement.addEventListener('click', (event) => {
            this.onMouseClick(event);
        });
    }

    onMouseMove(event) {
        const rect = this.renderer.domElement.getBoundingClientRect();
        this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.characters, true);

        // Reset all character positions
        this.characters.forEach(char => {
            char.traverse(child => {
                if (child.isMesh && child.userData.originalY !== undefined) {
                    child.position.y = child.userData.originalY;
                }
            });
        });

        // Hover effect
        if (intersects.length > 0) {
            const hoveredCharacter = intersects[0].object.parent;
            hoveredCharacter.traverse(child => {
                if (child.isMesh && child.userData.originalY !== undefined) {
                    child.position.y = child.userData.originalY + 0.2;
                }
            });
            this.renderer.domElement.style.cursor = 'pointer';
        } else {
            this.renderer.domElement.style.cursor = 'default';
        }
    }

    onMouseClick(event) {
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.characters, true);

        if (intersects.length > 0) {
            const clickedCharacter = intersects[0].object.parent;
            const professionalData = clickedCharacter.userData.professional;
            
            this.showCharacterDetails(professionalData);
        }
    }

    showCharacterDetails(professionalData) {
        // Create modal or info panel
        const modal = document.createElement('div');
        modal.className = 'character-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h3>${professionalData.name}</h3>
                <p><strong>Skills:</strong> ${professionalData.skills?.join(', ') || 'N/A'}</p>
                <p><strong>Seniority:</strong> ${professionalData.seniority?.join(', ') || 'N/A'}</p>
                <p><strong>Pattern Affinity:</strong> ${professionalData.pattern_affinity?.join(', ') || 'N/A'}</p>
                <button onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        `;
        
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        `;
        
        modal.querySelector('.modal-content').style.cssText = `
            background: #1a1a1a;
            color: white;
            padding: 30px;
            border-radius: 10px;
            border: 1px solid #00ffcc;
            max-width: 500px;
            text-align: center;
        `;

        document.body.appendChild(modal);
    }

    loadTeam(teamMembers) {
        // Clear existing characters
        this.characters.forEach(char => {
            this.scene.remove(char);
        });
        this.characters = [];

        // Create new characters
        teamMembers.forEach((member, index) => {
            this.createCharacter(member, null, index);
        });
    }

    startMeeting(meetingType) {
        // Animate camera to meeting view
        this.animateCamera({ x: 0, y: 10, z: 15 }, { x: 0, y: 2, z: 0 });
        
        // Add meeting-specific elements
        this.addMeetingElements(meetingType);
    }

    addMeetingElements(meetingType) {
        // Remove existing meeting elements
        if (this.meetingElements) {
            this.scene.remove(this.meetingElements);
        }

        this.meetingElements = new THREE.Group();

        switch(meetingType) {
            case 'Daily Scrum':
                this.addScrumBoard();
                break;
            case 'Sprint Planning':
                this.addPlanningBoard();
                break;
            case 'Design Review':
                this.addDesignBoards();
                break;
            default:
                this.addGenericBoard();
        }

        this.scene.add(this.meetingElements);
    }

    addScrumBoard() {
        // Create Kanban board
        const boardGeometry = new THREE.PlaneGeometry(8, 4);
        const boardMaterial = new THREE.MeshBasicMaterial({ 
            color: 0x2a2a2a,
            transparent: true,
            opacity: 0.9
        });
        const board = new THREE.Mesh(boardGeometry, boardMaterial);
        board.position.set(0, 4, -12);
        
        // Add columns
        const columns = ['To Do', 'In Progress', 'Review', 'Done'];
        columns.forEach((col, index) => {
            const colGeometry = new THREE.PlaneGeometry(1.8, 3.5);
            const colMaterial = new THREE.MeshBasicMaterial({ 
                color: 0x4a4a4a,
                transparent: true,
                opacity: 0.7
            });
            const column = new THREE.Mesh(colGeometry, colMaterial);
            column.position.set((index - 1.5) * 2, 4, -11.9);
            this.meetingElements.add(column);
        });

        this.meetingElements.add(board);
    }

    animateCamera(position, target) {
        const duration = 2000;
        const startPos = this.camera.position.clone();
        const startTarget = new THREE.Vector3(0, 0, 0);
        
        const animate = (currentTime) => {
            const progress = Math.min(currentTime / duration, 1);
            const eased = this.easeInOutCubic(progress);
            
            this.camera.position.lerpVectors(startPos, new THREE.Vector3(...Object.values(position)), eased);
            this.camera.lookAt(new THREE.Vector3(...Object.values(target)));
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }

    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Rotate accent lights
        if (this.lighting.accent1) {
            this.lighting.accent1.position.x = Math.cos(Date.now() * 0.001) * 8;
            this.lighting.accent1.position.z = Math.sin(Date.now() * 0.001) * 8;
        }

        // Animate characters (subtle breathing effect)
        this.characters.forEach((char, index) => {
            const time = Date.now() * 0.002 + index;
            char.position.y = Math.sin(time) * 0.05;
        });

        this.renderer.render(this.scene, this.camera);
    }

    resize() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
}

// Export for use in main game
if (typeof window !== 'undefined') {
    window.Advanced3DWorkspace = Advanced3DWorkspace;
}