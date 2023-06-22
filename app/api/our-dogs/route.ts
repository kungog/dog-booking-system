import { NextResponse } from 'next/server'
import { getMongoClient } from "@node/server/client";
import { COLLECTION, DATABASE } from "@node/server/database";

export async function GET() {
  const database = await getMongoClient();
	const response = await database.db(DATABASE).collection(COLLECTION.DOGS).find({}).toArray();

	// close connection
	database.close();

  return NextResponse.json(response)
}

