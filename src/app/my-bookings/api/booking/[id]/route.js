import {
   connectDB
} from "@/lib/connectDB"
import { ObjectId } from "mongodb"

export const DELETE = async (request, {
   params
}) => {
   const db = await connectDB()
   const bookingsCollecton = db.collection("bookings")

   try {
      const resp = await bookingsCollecton.deleteOne({
         _id: new ObjectId(params.id)
      })
      return Response.json({
         message: "deleted the booking",
         response: resp
      })
   } catch (error) {
      console.log(error);
      return Response.json({
         message: "Something went wrong"
      })
   }
}

export const PATCH = async (request, {
   params
}) => {
   const db = await connectDB()
   const bookingsCollecton = db.collection("bookings")
   const updateDoc = await request.json()

   try {
      const resp = await bookingsCollecton.updateOne({
         _id: new ObjectId(params.id)
      }, {$set: {...updateDoc}}, {upsert: true})
      return Response.json({
         message: "deleted the booking",
         response: resp
      })
   } catch (error) {
      console.log(error);
      return Response.json({
         message: "Something went wrong"
      })
   }
}


export const GET = async (request, {
   params
}) => {
   const db = await connectDB()
   const bookingsCollecton = db.collection("bookings")

   try {
      const resp = await bookingsCollecton.findOne({
         _id: new ObjectId(params.id)
      })
      return Response.json({
         message: "booking found",
         data: resp
      })
   } catch (error) {
      console.log(error);
      return Response.json({
         message: "Something went wrong"
      })
   }
}