import { connectDB } from "@/lib/connectDB"

export const POST = async (request) => {
   const booking = await request.json()
   const db = await connectDB()
   const bookingsCollecton =  db.collection('bookings')
   try {
      const newBooking = await bookingsCollecton.insertOne(booking)
      return Response.json({message: "service booked successfully"})
   } catch (error) {
      console.log(error);
   }

} 