// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Intro',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'The Transformation',
      items: [
        'transformation/value-shift',
        'transformation/self-managing-organizations',
        'transformation/individual-collective-growth',
      ],
    },
    {
      type: 'category',
      label: 'Our Approach',
      items: [
        'approach/human-ai-partnership',
        'approach/purpose-driven-organizations',
        'approach/inner-led-development',
      ],
    },
    {
      type: 'category',
      label: 'What We Do',
      items: [
        'services/services-overview',
        'services/ai-strategy-implementation',
        'services/process-automation',
        'services/organizational-development',
        'services/personal-purpose-alignment',
      ],
    },
    {
      type: 'category',
      label: 'How We Work',
      items: [
        'methodology/technical-implementation',
        'methodology/our-methodology',
        'methodology/integration-approach',
      ],
    },
    {
      type: 'category',
      label: 'Real-World Impact',
      items: [
        'impact/transformation-stories',
        'impact/use-cases-patterns',
        'impact/outcomes-results',
      ],
    },
    {
      type: 'category',
      label: 'Get Started',
      items: [
        'get-started/discovery-process',
        'get-started/faq',
        'get-started/next-steps',
      ],
    },
  ],
};

export default sidebars;
