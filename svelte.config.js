import adapter from '@sveltejs/adapter-static';

const base = process.env.BASE_PATH ?? (process.env.NODE_ENV === 'production' ? '/Agency' : '');

const config = {
	kit: {
		adapter: adapter(),
		paths: { base }
	}
};

export default config;
