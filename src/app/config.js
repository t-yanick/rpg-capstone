import Phaser from 'phaser';

// Scenes
const scenes = [
    BootScene
];

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-app',
    title: 'Dungeon Crawler',
    url: '',
    width: 800,
    height: 600,

    dom: {
        createContainer: true,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false,
        },
    },
    scene: scenes,
    pixelArt: true,
    backgroundColor: 0x333333,
};

export default config;