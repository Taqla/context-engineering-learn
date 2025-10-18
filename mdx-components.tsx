import type { MDXComponents } from 'mdx/types';
import QuizEmbed from '@/components/QuizEmbed';
import ProgressTracker from '@/components/ProgressTracker';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    QuizEmbed,
    ProgressTracker,
    ...components,
  };
}
