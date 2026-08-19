import { useEffect } from "react";

interface DocumentMetaProps {
  title: string;
  description?: string;
}

export function DocumentMeta({ title, description }: DocumentMetaProps) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${title} | Why Design Matters`;

    let metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription?.getAttribute("content") ?? null;
    let created = false;
    if (description) {
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
        created = true;
      }
      metaDescription.setAttribute('content', description);
    }

    return () => {
      document.title = originalTitle;
      if (created && metaDescription) {
        document.head.removeChild(metaDescription);
      } else if (metaDescription) {
        if (originalDescription === null) {
          metaDescription.removeAttribute("content");
        } else {
          metaDescription.setAttribute("content", originalDescription);
        }
      }
    };
  }, [title, description]);

  return null;
}
