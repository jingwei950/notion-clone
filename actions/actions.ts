"use server";

import { auth } from "@clerk/nextjs/server";
import { adminDb } from "../firebase-admin";

// Servcer actions

export async function createNewDocument() {
  auth().protect();

  const { sessionClaims } = await auth();

  //  Referring to the collection that is about to pushed (Pushed into the "documents" collection)
  const docCollectionRef = adminDb.collection("documents");
  //   Creating a new document
  const docRef = await docCollectionRef.add({
    title: "New Doc",
  });

  //   Use the doccument id to add the logged in user to add them to their room
  await adminDb
    .collection("users")
    .doc(sessionClaims?.email!)
    .collection("rooms")
    .doc(docRef.id)
    .set({
      userId: sessionClaims?.email!,
      role: "owner",
      createdAt: new Date(),
      roomId: docRef.id,
    });

  return { docId: docRef.id };
}
