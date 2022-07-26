// import { Wave } from './wave.js';
import { WaveGroup } from './wavegroup.js';

export default class App {
    constructor() {
        this.canvas = document.createElement('canvas');

        this.ctx = this.canvas.getContext('2d');

        document.getElementById("Background").appendChild(this.canvas);

        this.waveGroup = new WaveGroup();

        window.addEventListener('resize', this.resize.bind(this), {
            once: false,
            passive: false,
            capture: false,
        });
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {

        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        /* 캔버스의 크기를 스테이지의 사이즈 조절 */
        this.canvas.width = this.stageWidth * 1.3;
        this.canvas.height = this.stageHeight * 1.3;

        this.ctx.scale(2, 2);

        this.waveGroup.resize(this.stageWidth, this.stageHeight);
    }

    animate(t) {

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.waveGroup.draw(this.ctx);

        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () => {
    new App();
};