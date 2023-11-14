'use server'

import { collection, doc, getDocs, addDoc, updateDoc } from 'firebase/firestore';
import { database } from '../../firebase'

const dbInstance = collection(database, 'feedbacks');

export const addComment = async (feedBack: any) => {
    console.log("feedback data",feedBack)
    const newFeedBack = await addDoc(dbInstance,feedBack)
    console.log(newFeedBack)
    console.log(feedBack)
}