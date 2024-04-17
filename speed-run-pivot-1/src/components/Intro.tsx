"use client";

export const Intro = () => {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="container text-center">
        <div className="flex items-center justify-center gap-6">
          <img src="/intro/relume-logo.svg" className="h-12" />
          <img src="/intro/tailwind-logo.svg" className="h-6" />
          <img src="/intro/nextjs-logo.svg" className="h-5" />
        </div>
        <h1 className="mt-6 text-6xl font-bold">Pivot Header Speed Build</h1>
      </div>
    </main>
  );
};
