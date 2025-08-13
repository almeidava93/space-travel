import * as THREE from 'three';

export class AudioManager {
    constructor(camera) {
        this.listener = new THREE.AudioListener();
        camera.add(this.listener);

        this.loader = new THREE.AudioLoader();
        this.buffers = new Map(); 
        this.playing = new Map(); 

        // Required for browser autoplay policies
        const resume = () => {
            const ctx = this.listener.context;
            if (ctx.state !== 'running') ctx.resume();
            window.removeEventListener('pointerdown', resume);
            window.removeEventListener('keydown', resume);
        };

        window.addEventListener('pointerdown', resume, { once: true });
        window.addEventListener('keydown', resume, { once: true });
    }

    async load(name, path) {
        // return cached buffer if available
        if (this.buffers.has(name)) return this.buffers.get(name);
        // load if not loaded yet
        const buf = await new Promise((res, rej) => this.loader.load(path, res, undefined, rej));
        this.buffers.set(name, buf);
        return buf;
    }

    playGlobal(name, { loop=false, volume=1, fadeMs=0 } = {}) {
        const src = this._ensureGlobal(name); // get a global source of audio
        src.setLoop(loop);
        src.setVolume(0);
        src.play();
        this.fadeTo(name, volume, fadeMs);
        return src;
    }

    _ensureGlobal(name) {
        const existing = this.playing.get(name);
        if (existing) return existing;
        const buf = this.buffers.get(name);
        if (!buf) throw new Error(`Buffer "${name}" not loaded`);
        const audio = new THREE.Audio(this.listener);
        audio.setBuffer(buf);
        this.playing.set(name, audio);
        return audio;
    }

    fadeTo(name, targetVolume, ms=300) {
        const src = this.playing.get(name);
        if (!src) return;
        this._fade(src, src.getVolume(), targetVolume, ms);
    }

    _fade(src, v0, v1, ms, onDone) {
        const start = performance.now();
        const step = (t) => {
            const k = Math.min(1, (t - start) / ms);
            src.setVolume(v0 + (v1 - v0) * k);
            if (k < 1) requestAnimationFrame(step);
            else onDone && onDone();
        };
        if (ms <= 0) { src.setVolume(v1); onDone && onDone(); return; }
        requestAnimationFrame(step);
    }

    // Spatial/positional
    playPositional(name, parentMesh, {
        loop=true, volume=1, refDistance=10, maxDistance=1e6, rolloff='inverse', fadeMs=0
    } = {}) {
        const src = this._ensurePositional(name, parentMesh);
        src.setLoop(loop);
        src.setRefDistance(refDistance);
        src.setMaxDistance(maxDistance);
        src.setRolloffFactor(1);
        src.panner.distanceModel = rolloff; // 'inverse' | 'linear' | 'exponential'
        src.setVolume(0);
        if (!src.isPlaying) src.play();
        this.fadeTo(name, volume, fadeMs);
        return src;
    }

    _ensurePositional(name, parentMesh) {
        let src = this.playing.get(name);
        const buf = this.buffers.get(name);
        if (!buf) throw new Error(`Buffer "${name}" not loaded`);

        if (!(src instanceof THREE.PositionalAudio)) {
        src = new THREE.PositionalAudio(this.listener);
        src.setBuffer(buf);
        this.playing.set(name, src);
        }
        if (src.parent !== parentMesh) { // (re)attach if needed
        parentMesh.add(src);
        src.position.set(0, 0, 0);
        }
        return src;
    }

    isPlaying(name) { 
        return !!(this.playing.get(name)?.isPlaying); 
    }

    stop(name, { fadeMs=0 } = {}) {
        const src = this.playing.get(name);
        if (!src) return;
        if (fadeMs > 0) {
        this._fade(src, src.getVolume(), 0, fadeMs, () => { src.stop(); this.playing.delete(name); });
        } else {
        src.stop(); this.playing.delete(name);
        }
    }
}