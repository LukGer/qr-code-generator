"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { DownloadIcon, MoonIcon, SunIcon } from "lucide-react";
import { parseAsBoolean, useQueryState } from "nuqs";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [content, setContent] = useQueryState("content", { defaultValue: "" });
  const [errorCorrection, setErrorCorrection] = useQueryState(
    "errorCorrection",
    { defaultValue: "L" }
  );

  const [isDarkMode, setIsDarkMode] = useQueryState<boolean>(
    "isDarkMode",
    parseAsBoolean.withDefault(false)
  );

  const onSliderChange = (value: number) => {
    setErrorCorrection(["L", "M", "Q", "H"][value - 1]);
  };

  return (
    <main className={cn("h-screen w-screen", isDarkMode && "dark")}>
      <div className="h-full w-full px-24 py-24 flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors">
        <div className="h-full rounded-xl shadow-sm bg-white dark:bg-gray-800 flex flex-col md:flex-row p-8 gap-4 min-w-0">
          <div className="flex-1 p-8 flex flex-col gap-8 items-center justify-center">
            <QRCode
              value={content}
              level={errorCorrection}
              className="w-full flex-1 *:transition-colors"
              bgColor={isDarkMode ? "#1f2937" : "#ffffff"}
              fgColor={isDarkMode ? "#ffffff" : "#000000"}
            />

            <div className="flex flex-row items-center justify-center gap-4">
              <Button
                className="rounded-full cursor-pointer size-10"
                variant="secondary"
              >
                <DownloadIcon />
              </Button>

              <Button
                className="rounded-full cursor-pointer size-10"
                variant="secondary"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? <MoonIcon /> : <SunIcon />}
              </Button>
            </div>
          </div>

          <hr className="w-px rounded-full h-full bg-gray-200 dark:bg-gray-700" />

          <div className="flex-1 flex flex-col gap-8">
            <div className="grid w-full max-w-sm items-center gap-2">
              <Label htmlFor="Content" className="font-bold dark:text-white">
                Content
              </Label>
              <Input
                id="content"
                value={content}
                onChange={(event) => setContent(event.currentTarget.value)}
                className="dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-2">
              <Label
                htmlFor="errorCorrection"
                className="font-bold dark:text-white"
              >
                Error Correction
              </Label>

              <div className="flex flex-row items-center gap-2">
                <span className="text-lg font-mono dark:text-white">
                  {errorCorrection}
                </span>

                <Slider
                  defaultValue={[1]}
                  min={1}
                  max={4}
                  step={1}
                  value={[["L", "M", "Q", "H"].indexOf(errorCorrection) + 1]}
                  onValueChange={(value) => onSliderChange(value[0])}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default QrCodeGenerator;
