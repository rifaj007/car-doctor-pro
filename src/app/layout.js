import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/services/AuthProvider";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
   default: "Car Doctor",
   template: "%s | Car Doctor"
  },
  description: "Car Repairing Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
         <body className={inter.className}>
      <AuthProvider>
            <NavBar/>
            {children}
          <Footer/>
          <Toaster />
      </AuthProvider>
         </body>
    </html>
  );
}
