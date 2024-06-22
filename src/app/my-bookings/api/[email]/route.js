import { connectDB } from "@/lib/connectDB"

export const GET = async (request, {params}) => {
   const db = await connectDB()
   const bookingsCollecton =  db.collection('bookings')
   try {
      const booking = await bookingsCollecton.find({email: params.email}).toArray()
      return Response.json({booking})
   } catch (error) {
      console.log(error);
   }
}