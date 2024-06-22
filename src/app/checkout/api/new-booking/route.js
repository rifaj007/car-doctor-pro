import { connectDB } from "@/lib/connectDB"

export const POST = async (request) => {
   const newBooking = await request.json()

   const db = await connectDB()
   const bookingsCollecton = db.collection('bookings')

   try {
      const res = await bookingsCollecton.insertOne(newBooking)
      return Response.json({message : "Booked successfully"}, {status: 200})

   } catch (error) {
      console.log(error);
      return Response.json({message : "Something Went Wrong"}, {status: 400})
   }
}