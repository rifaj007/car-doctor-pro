import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET = async () => {
   const db = await connectDB()
   const servicesCollecton =  db.collection('services')
   try {
      const services = await servicesCollecton.find().toArray()
      return NextResponse.json({services})
   } catch (error) {
      return NextResponse.json({message: "No data found", error})
   }
}