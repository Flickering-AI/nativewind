import { INTERNAL_RESET } from "../../shared";
import { Effect, observable } from "../observable";

const isSSR = globalThis.window === undefined;

export const _rem = observable(
  isSSR
    ? 16
    : Number.parseFloat(
        globalThis.window.getComputedStyle(
          globalThis.window.document.documentElement,
        ).fontSize,
      ) || 16,
);

export const rem = {
  get(effect?: Effect) {
    return _rem.get(effect);
  },
  set(value: number) {
    _rem.set(value);
    if (!isSSR) {
      globalThis.window.document.documentElement.style.fontSize = `${value}px`;
    }
  },
  [INTERNAL_RESET](value = 16) {
    _rem.set(value);
  },
};
export const _designRatio = observable(1);
export const designRatio = {
  get(effect?: Effect) {
    return _designRatio.get(effect);
  },
  set(value: number) {
    _designRatio.set(value);
    if (!isSSR) {
      globalThis.window.document.documentElement.style.fontSize = `${value}px`;
    }
  },
  [INTERNAL_RESET](value = 1) {
    _designRatio.set(value);
  },
};

export const _vw = observable(1);
export const vw = {
  get(effect?: Effect) {
    return _vw.get(effect);
  },
  set(value: number) {
    _vw.set(value);
    if (!isSSR) {
      globalThis.window.document.documentElement.style.fontSize = `${value}px`;
    }
  },
  [INTERNAL_RESET](value = 1) {
    _vw.set(value);
  },
};

export const _vh = observable(1);
export const vh = {
  get(effect?: Effect) {
    return _vh.get(effect);
  },
  set(value: number) {
    _vh.set(value);
    if (!isSSR) {
      globalThis.window.document.documentElement.style.fontSize = `${value}px`;
    }
  },
  [INTERNAL_RESET](value = 1) {
    _vh.set(value);
  },
};
