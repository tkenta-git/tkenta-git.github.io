/*
 * Hooks Index
 * Barrel exports for custom hooks
 */

export {
  useAnimation,
  useStaggeredAnimation,
  useParallax,
  useTilt,
  useReducedMotion,
  useAnimationCleanup
} from './useAnimation';

// Re-export types
export type {
  AnimationHookOptions,
  IntersectionObserverHookReturn
} from '../types';