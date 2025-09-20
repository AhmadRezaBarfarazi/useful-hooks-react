import { useState } from "react";

export function useCopyToClipboard(): [string | null, (text: string) => void] {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => setCopied(text));
  };

  return [copied, copy];
}
