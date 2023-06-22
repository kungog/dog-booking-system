import { MongoClient } from 'mongodb';

const URI = process.env.MONGO_URL ?? '';

const getHeaders = () => {
	return {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Access-Control-Allow-Methods': ' GET,HEAD,POST,PUT,PATCH'
	};
};

const options = {};

/**
 * Get Mongo client
 */
const getMongoClient = async () => {
	return await new MongoClient(URI, options).connect();
};

/**
 * Remove objectId from mongo
 */
const removeObjectId = async (response: any): Promise<any[]> => {
	const parsedData = await JSON.stringify(response);
	return JSON.parse(parsedData);
};

export { getMongoClient, getHeaders, removeObjectId };
