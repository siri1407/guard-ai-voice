import { useEffect, useRef, useState } from "react";

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

export function AudioUploader({
  file,
  onFileChange,
}: {
  file: File | null;
  onFileChange: (file: File | null) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setUrl(null);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  if (file) {
    return (
      <div className="glass animate-rise rounded-3xl p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-3xl">🎧</span>
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold">{file.name}</p>
            <p className="text-sm text-muted-foreground">{formatSize(file.size)}</p>
          </div>
          <button
            type="button"
            onClick={() => onFileChange(null)}
            className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            Remove file
          </button>
        </div>
        {url && <audio controls src={url} className="mt-5 w-full" />}
      </div>
    );
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        const dropped = e.dataTransfer.files?.[0];
        if (dropped) onFileChange(dropped);
      }}
      className={`glass rounded-3xl border-2 border-dashed p-10 text-center transition-colors sm:p-16 ${
        dragging ? "border-primary bg-primary/10" : "border-border"
      }`}
    >
      <p className="text-5xl">🎙️</p>
      <h2 className="mt-5 font-display text-2xl font-bold">Upload Call Recording</h2>
      <p className="mt-2 text-muted-foreground">Drag &amp; drop your audio file here</p>
      <p className="mt-1 text-sm text-muted-foreground">MP3, WAV, M4A</p>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="mt-7 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
      >
        Choose Audio File
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="audio/*"
        className="hidden"
        onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
      />
    </div>
  );
}
