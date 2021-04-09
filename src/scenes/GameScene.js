import Phaser from 'phaser';
import PlayerContainer from '../Classes/player/PlayerContainer';
// import Chest from '../Classes/Chest';
// import Monster from '../Classes/Monster';
import Map from '../Classes/Map';
import GameManager from '../GameManager/GameManager';

class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    init() {
        this.scene.launch('Ui');
    }

    create() {
        this.createMap();
        this.createAudio();
        this.createGroups();
        this.createInput();
        this.createGameManager();

    }

    update() {
        if (this.player) this.player.update(this.cursors);
    }

    createAudio() {
        this.goldPickupAudio = this.sound.add('goldSound', { loop: false, volume: 0.5 });
        this.playerAttackAudio = this.sound.add('playerAttack', { loop: false, volume: 0.2 });
        this.playerDamageAudio = this.sound.add('playerDamage', { loop: false, volume: 0.3 });
        this.playerDeathAudio = this.sound.add('playerDeath', { loop: false, volume: 0.5 });
        this.monsterDeathAudio = this.sound.add('enemyDeath', { loop: false, volume: 0.3 });
    }

    createPlayer(playerObject) {
        this.player = new PlayerContainer(
            this,
            playerObject.x * 2,
            playerObject.y * 2,
            'characters',
            0,
            playerObject.health,
            playerObject.maxHealth,
            playerObject.id,
            this.playerAttackAudio,
        );
    }

    createGroups() {
        //     this.chests = this.physics.add.group();
        //     this.monsters = this.physics.add.group();
        //     this.monsters.runChildUpdate = true;
        // }

        // spawnChest(chestObject) {
        //     let chest = this.chests.getFirstDead();
        //     if (!chest) {
        //         chest = new Chest(
        //             this,
        //             chestObject.x * 2,
        //             chestObject.y * 2,
        //             'items',
        //             0,
        //             chestObject.gold,
        //             chestObject.id,
        //         );
        //         this.chests.add(chest);
        //     } else {
        //         chest.coins = chestObject.gold;
        //         chest.id = chestObject.id;
        //         chest.setPosition(chestObject.x * 2, chestObject.y * 2);
        //         chest.makeActive();
        //     }
        // }

        // spawnMonster(monsterObject) {
        //     let monster = this.monsters.getFirstDead();
        //     if (!monster) {
        //         monster = new Monster(
        //             this,
        //             monsterObject.x,
        //             monsterObject.y,
        //             'monsters',
        //             monsterObject.frame,
        //             monsterObject.id,
        //             monsterObject.health,
        //             monsterObject.maxHealth,
        //         );
        //         this.monsters.add(monster);
        //     } else {
        //         monster.id = monsterObject.id;
        //         monster.health = monsterObject.health;
        //         monster.maxHealth = monsterObject.maxHealth;
        //         monster.setTexture('monsters', monsterObject.frame);
        //         monster.setPosition(monsterObject.x, monsterObject.y);
        //         monster.makeActive();
        //     }
    }

    createInput() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    addCollisions() {
        this.physics.add.collider(this.player, this.map.blockedLayer);
    }

    enemyOverlap() {

    }

    collectChest() {

    }

    createMap() {
        this.map = new Map(this, 'map', 'background', 'background', 'blocked');
    }

    createGameManager() {
        this.events.on('spawnPlayer', (playerObject) => {
            this.createPlayer(playerObject);
            this.addCollisions();
        });

        this.events.on('updatePlayerHealth', (playerId, health) => {
            if (health < this.player.health) {
                this.playerDamageAudio.play()
            }
            this.player.updateHealth(health);
        });

        this.events.on('respawnPlayer', (playerObject) => {
            this.playerDeathAudio.play();
            this.player.respawn(playerObject);
        });

        this.gameManager = new GameManager(this, this.map.map.objects);
        this.gameManager.setup();
    }
}

export default GameScene;