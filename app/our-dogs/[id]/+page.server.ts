import { error } from '@sveltejs/kit';
import { getMongoClient, removeObjectId } from '$lib/server/client';
import type { PageServerLoad } from './$types';
import { DATABASE, COLLECTION } from '$lib/server/database';
import { ObjectId } from 'mongodb';

export const load = (async ({ params: { id } }) => {
	const database = await getMongoClient();
	const response = await database
		.db(DATABASE)
		.collection(COLLECTION.DOGS)
		.find({ _id: new ObjectId(id) })
		.toArray();

	// close connection
	database.close();

	if (response) {
		const cleaned = await removeObjectId(response);

		if (cleaned.length > 0) {
			return cleaned[0];
		}
	}

	throw error(404, 'Not found');
}) satisfies PageServerLoad;
