
import { faker } from '@faker-js/faker';

export default {
	async fetch(request, env) {
		const id = faker.mersenne.rand()

		await env.KV.put(id, JSON.stringify({
			name: faker.name.findName(),
			age: faker.mersenne.rand(100, 1)
		}));

		return new Response(id);
	},
};
