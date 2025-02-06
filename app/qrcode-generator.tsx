"use client";

const QrCodeGenerator = () => {
  return (
    <div className="h-full rounded-xl shadow bg-white flex flex-row p-8 gap-4 min-w-0">
      <canvas className="flex-1 min-w-0"></canvas>

      <hr className="w-px rounded-full h-full bg-gray-200" />

      <div className="flex-1">Seas</div>
    </div>
  );
};

export default QrCodeGenerator;
