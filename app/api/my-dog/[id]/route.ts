import { NextRequest, NextResponse } from 'next/server'
import { getMongoClient } from "@node/server/client";
import { COLLECTION, DATABASE } from "@node/server/database";
import { ObjectId } from "mongodb";

export async function GET(request: NextRequest, context: { params: { id: string} }) {
	//TODO - If no id return 404 osm 
	const database = await getMongoClient();
	const response = await database
		.db(DATABASE)
		.collection(COLLECTION.DOGS)
		.findOne({ _id: new ObjectId(context.params.id) });

	// close connection
	database.close();

  return NextResponse.json(response)
}
