import Header from "@/components/public/Header";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-darkblue ">
      <Header />
      {children}
    </div>
  );
}
