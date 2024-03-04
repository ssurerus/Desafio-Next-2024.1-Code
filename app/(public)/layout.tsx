import Footer from "@/components/public/Footer";
import Header from "@/components/public/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-darkblue ">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
