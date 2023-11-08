export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-96 h-96 bg-gray p-6 rounded-3xl shadow-md">
      {children}
    </div>
  );
}
