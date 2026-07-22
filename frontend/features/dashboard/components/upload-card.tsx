import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function UploadCard() {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle>Upload New Video</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 p-12">
          <Upload className="mb-4 h-12 w-12 text-gray-500" />

          <h3 className="text-lg font-semibold">
            Drag & Drop your video
          </h3>

          <p className="mt-2 text-center text-sm text-gray-500">
            Supports MP4, MOV, AVI and MKV
          </p>

          <Button className="mt-6">
            Browse Files
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}