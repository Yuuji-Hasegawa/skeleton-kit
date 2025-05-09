/** @type { import('@storybook/html').Preview } */
import { themes } from '@storybook/theming'

const preview = {
	parameters: {
		options: {
			storySort: {
				order: [
					'Getting Started',
					'Components',
					'Objects',
					'Utility',
					'Tokens',
					'*',
				],
			},
		},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
