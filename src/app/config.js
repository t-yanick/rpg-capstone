// import Phaser from 'phaser';
// import BootScene from './scenes/BootScene'

// // Scenes
// const scenes = [
//     BootScene
// ];

// const config = {
//     type: Phaser.AUTO,
//     parent: 'phaser-app',
//     title: 'Dungeon Crawler',
//     url: '',
//     width: 800,
//     height: 600,

//     dom: {
//         createContainer: true,
//     },
//     physics: {
//         default: 'arcade',
//          arcade: {
//     gravity: { y: 0 },
//     debug: false,
// },
//     },
//     scene: scenes,
//     pixelArt: true,
//     backgroundColor: 0x333333,
// };

// export default config;

// import Phaser from 'phaser';


// export default {
//     type: Phaser.AUTO,
//     parent: 'phaser-app',
//     width: 800,
//     height: 600,

//     scale: {
//         mode: Phaser.DOM.ENVELOP,
//         autoCenter: Phaser.DOM.CENTER_BOTH,
//         parent: 'phaser-app',
//         dom: {
//             createContainer: true,
//         },
//         min: {
//             width: 800,
//             height: 600,
//         },
//         max: {
//             // width: 1024,
//             // height: 720,
//             width: 800,
//             height: 600,
//         },
//     },
//     physics: {
//         default: 'arcade',
//         arcade: {
//             gravity: { y: 0 },
//             debug: false,
//         },
//     },
//     // scene: scenes,
// };