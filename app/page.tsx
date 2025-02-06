import QrCodeGenerator from "./qrcode-generator";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100">
      <div className="flex-1 px-24 py-24 min-w-0">
        <QrCodeGenerator />
      </div>
    </div>
  );
}
