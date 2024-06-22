import { connectDB } from "@/lib/connectDB"
import { services } from "@/lib/service";
import { NextResponse } from "next/server";

export const GET = async () => {
   const db = await connectDB()
   const servicesCollecton =  db.collection('services')
   try {
      await servicesCollecton.deleteMany();
      const resp = await servicesCollecton.insertMany(services)
      return NextResponse.json({message: "Seeded successfully"})
   } catch (error) {
      return NextResponse.json({message: "No data found", error})
   }
}