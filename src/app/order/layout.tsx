import Banner from "@/components/Banner";
import FloatingIcons from "@/components/FloatingIcons";
import Voice from "@/components/Voice";

export default function LayoutOrder({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Banner />
      </header>
      <main className="flex-1 flex items-center justify-between">
        {children}
      </main>
      <footer className="my-4 m-auto">
        <Voice />
      </footer>
    </div>
  );
}
