import LightDarkToggle from "@/components/light-dark-toggle";

export default function LoggedOutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col gap-4 min-h-screen justify-center items-center p-24">
        {children}
      </div>
      
      <LightDarkToggle className="fixed top-[calc(50%-12px)] right-2"/>
    </>
  );
}
