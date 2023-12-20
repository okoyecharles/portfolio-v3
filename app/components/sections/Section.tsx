export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-container mx-6 md:mx-8">
      <section className="w-full max-w-screen-lg mx-auto py-6 md:py-8">
        {children}
      </section>
    </div>
  );
}
