"use client";

export const Intro = (props: any) => {
  const {heading} = props;
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="container text-center">
        <h1 className="mt-6 text-10xl font-medium mb-12">
          <span className="font-bold">{`Header26`}</span> Speed Build
          <pre className="bg-gray-50 inline-flex font-mono p-2 px-6 rounded text-gray-500"></pre>
        </h1>
        <div className="flex items-center justify-center gap-6">
          <img src="/intro/relume-logo.svg" className="h-24" /> <span className="text-lg font-medium">+</span>
          <img src="/intro/tailwind-logo.svg" className="h-12" /> <span className="text-lg font-medium">+</span>
          <img src="/intro/nextjs-logo.svg" className="h-10" />
        </div>
      </div>
    </main>
  );
};
