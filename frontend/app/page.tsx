import AppShell from "@/components/layout/app-shell";
import UploadCard from "@/features/upload/components/upload-card";

export default function HomePage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="mt-2 text-muted-foreground">
            Welcome to AI Video Editor.
          </p>
        </div>

        <UploadCard />
      </div>
    </AppShell>
  );
}