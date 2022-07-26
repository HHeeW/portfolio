import { Wave } from './wave.js'

export class WaveGroup {
    constructor() {
        // 웨이브 갯수
        this.totalWaves = 3;
        // 웨이브 파도의 갯수
        this.totalPoints = 9;

        this.color = ['rgba(0,200,250,0.4)', 'rgba(0,150,200,0.4)', 'rgba(0,100,150,0.4)'];
        this.waves = [];

        for (let i = 0; i < this.totalWaves; i++) {
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i],
            );
            this.waves[i] = wave;
        }
    }
    resize(stageWidth, stageHeight) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }
    draw(ctx) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}