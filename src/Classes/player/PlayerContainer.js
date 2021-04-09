import Phaser, { LEFT } from 'phaser';
import Player from './Player';

const Direction = {
    RIGHT: 'RIGHT',
    LEFT: 'LEFT',
    UP: 'UP',
    DOWN: 'DOWN',
};

export default class PlayerContainer extends Phaser.GameObjects.Container {
    constructor(scene, x, y, key, frame, health, maxHealth, id, attackAudio) {
        super(scene, x, y);
        this.scene = scene;
        this.velocity = 160;
        this.currentDirection = Direction.RIGHT;
        this.playerAttacking = false;
        this.flipX = true;
        this.swordHit = false;
        this.health = health;
        this.maxHealth = maxHealth;
        this.id = id;
        this.attackAudio = attackAudio;

        this.setSize(64, 64);
        this.scene.physics.world.enable(this);

        this.body.setCollideWorldBounds(true);
        this.scene.add.existing(this);
        this.scene.cameras.main.startFollow(this);

        this.player = new Player(this.scene, 0, 0, key, frame);
        this.add(this.player);

        // this.weapon = this.scene.add.image(40, 0, 'items', 4);
        // this.scene.add.existing(this.weapon);
        // this.weapon.setScale(1.5);
        // this.scene.physics.world.enable(this.weapon);
        // this.add(this.weapon);
        // this.weapon.alpha = 0;

        this.createHealthBar();
    }

    createHealthBar() {
        this.healthBar = this.scene.add.graphics();
        this.updateHealthBar();
    }

    updateHealthBar() {
        this.healthBar.clear();
        this.healthBar.fillStyle(0xffffff, 1);
        this.healthBar.fillRect(this.x - 32, this.y - 40, 64, 5);

        this.healthBar.fillGradientStyle(0xff0000, 0xffffff, 4);
        this.healthBar.fillRect(this.x - 32, this.y - 40, 64 * (this.health / this.maxHealth), 5);
    }

    updateHealth(health) {
        this.health = health;
        this.updateHealthBar();
    }

    respawn() {
        this.scene.time.addEvent({
            callback() {
                this.scene.scene.stop('Ui');
                this.scene.start('GameOver');
            },
            callbackScope: this,
            loop: false,
        });
    }

    update(cursors) {
        this.body.setVelocity(0);

        if (cursors.left.isDown) {
            this.body.setVelocityX(-this.velocity);
            this.currentDirection = Direction.LEFT;
            this.player.flipX = false;
        } else if (cursors.right.isDown) {
            this.body.setVelocityX(this.velocity);
            this.currentDirection = Direction.RIGHT;
            this.player.flipX = true;
        }

        if (cursors.up.isDown) {
            this.body.setVelocityY(-this.velocity);
            this.currentDirection = Direction.UP;
            this.player.flipX = false;
        } else if (cursors.down.isDown) {
            this.body.setVelocityY(this.velocity);
            this.currentDirection = Direction.DOWN;
            this.player.flipX = true;
        }

        this.updateHealthBar();
    }
}