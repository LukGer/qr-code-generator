import { Suspense } from "react";
import QrCodeGenerator from "./qrcode-generator";

export default function Home() {
  return (
    <Suspense>
      <QrCodeGenerator />
    </Suspense>
  );
}
