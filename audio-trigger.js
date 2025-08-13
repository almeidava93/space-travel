export class Trigger {
  constructor({ id, condition, onEnter, onExit=null, once=false, cooldownMs=0 }) {
    this.id = id;
    this.condition = condition;
    this.onEnter = onEnter;
    this.onExit = onExit;
    this.once = once;
    this.cooldownMs = cooldownMs;
    this._active = false;
    this._lastFire = -Infinity;
    this._firedOnce = false;
  }

  update(state, nowMs) {
    if (this.once && this._firedOnce) return;
    if (nowMs - this._lastFire < this.cooldownMs) return;

    const ok = this.condition(state);
    if (ok && !this._active) {
      this._active = true;
      this._lastFire = nowMs;
      this.onEnter?.(state);
      if (this.once) this._firedOnce = true;
    } else if (!ok && this._active) {
      this._active = false;
      this.onExit?.(state);
    }
  }
}

export class TriggerManager {
  constructor() { this.triggers = []; }
  add(trigger) { this.triggers.push(trigger); return trigger; }
  update(state) {
    const now = performance.now();
    for (const t of this.triggers) t.update(state, now);
  }
}
 