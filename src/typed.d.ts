declare module 'typed.js' {
    export default class Typed {
      constructor(element: Element, options: TypedOptions);
      destroy(): void;
    }
  
    interface TypedOptions {
      strings?: string[];
      typeSpeed?: number;
      backSpeed?: number;
      backDelay?: number;
      startDelay?: number;
      loop?: boolean;
      onComplete?: (self: Typed) => void;
      onDestroy?: (self: Typed) => void;
    }
  }