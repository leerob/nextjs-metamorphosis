export default function MinimalMode({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base">
            Minimal mode
          </label>
          <p className="text-sm text-gray-500">
            Display only the most important information for invoices.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background bg-gray-200"
        >
          <span className="block h-5 w-5 rounded-full bg-white shadow-lg ring-0" />
        </button>
      </div>
      <div className="relative">
        <div className="relative">{children}</div>
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
      </div>
    </>
  );
}
