import { connectDB } from "@/lib/connectDB"
import { services } from "@/lib/service";

export const GET = async () => {
   const db = await connectDB()
   const servicesCollecton =  db.collection('services')
   try {
      await servicesCollecton.deleteMany();
      const resp = await servicesCollecton.insertMany(services)
      return Response.json({message: "Seeded successfully"})
   } catch (error) {
      console.log(error);
   }
}