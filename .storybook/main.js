/** @type { import('@storybook/html-vite').StorybookConfig } */
import { mergeConfig } from 'vite'

const config = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	staticDirs: ['../public'],
  addons: [
    '@storybook/manager-api',
    '@storybook/preview-api',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-themes',
	],
  framework: {
    name: '@storybook/html-vite',
    options: {},
	},
	async viteFinal(config) {
    return mergeConfig(config, {
      base: '/skeleton-kit/',
    })
  },
}
export default config
