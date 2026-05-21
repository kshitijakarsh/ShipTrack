export default function Terminal() {
  return (
    <div className="w-150 h-100 rounded-lg shadow-lg flex flex-col border border-gray-700">
      <div className="flex bg-gray-400/10 backdrop-blur-sm rounded-tl-lg rounded-tr-lg px-4 py-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="flex justify-start gap-2">
            <div className="rounded-full h-3 w-3 bg-red-500" />
            <div className="rounded-full h-3 w-3 bg-yellow-500" />
            <div className="rounded-full h-3 w-3 bg-green-500" />
          </div>
          <div className="flex justify-center">
            <p className="text-md text-zinc-500 font-medium font-sans">
              Terminal
            </p>
          </div>
        </div>
      </div>
      <p className="px-4 font-mono"><span className="text-green-500">&gt; desktop</span> ship --version</p> 
      <p className="px-4 leading-snug font-mono">v1.0.0</p>
      <p className="px-4 font-mono"><span className="text-green-500">&gt; desktop</span> ship --version</p> 
      <p className="px-4 leading-snug font-mono">v1.0.0</p>
      <p className="px-4 font-mono"><span className="text-green-500">&gt; desktop</span> ship --version</p> 
      <p className="px-4 leading-snug font-mono">v1.0.0</p>
    </div>
  );
};