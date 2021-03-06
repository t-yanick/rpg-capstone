/* eslint-disable radix */

import Phaser from 'phaser';

class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    // ADD LOGO IMAGE
    this.add.image(400, 200, 'logo');

    // DISPLAY PROGRESS BAR
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading ... ',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // UPDATE PROGRESS BAR
    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // UPDATE FILE PROGRESS TEXT
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    // REMOVE PROGRESS BAR WHEN COMPLETE
    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    // LOAD ASSETS NEEDED IN THE GAME
    this.load.image('blueButton1', 'assets/ui/blue_button02.png');
    this.load.image('blueButton2', 'assets/ui/blue_button03.png');
    this.load.image('phaserLogo', 'assets/logo.png');
    this.load.image('box', 'assets/ui/grey_box.png');
    this.load.image('checkedBox', 'assets/ui/blue_boxCheckmark.png');
    this.load.image('upKey', 'assets/commands/KeyboardButtonsDir_up.png');
    this.load.image('downKey', 'assets/commands/KeyboardButtonsDir_down.png');
    this.load.image('leftKey', 'assets/commands/KeyboardButtonsDir_left.png');
    this.load.image('rightKey', 'assets/commands/KeyboardButtonsDir_right.png');
    this.load.image('spaceKey', 'assets/commands/OnscreenKeyboardButtonsSpace.png');
    this.load.image('upKey0', 'assets/commands/KeyboardButtonsDir_up0.png');
    this.load.image('downKey0', 'assets/commands/KeyboardButtonsDir_down0.png');
    this.load.image('leftKey0', 'assets/commands/KeyboardButtonsDir_left0.png');
    this.load.image('rightKey0', 'assets/commands/KeyboardButtonsDir_right0.png');
    this.load.image('spaceKey0', 'assets/commands/OnscreenKeyboardButtonsSpace0.png');
    this.load.audio('bgMusic', ['assets/KungFuFighting.mp3']);
  }

  ready() {
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}

export default PreloaderScene;