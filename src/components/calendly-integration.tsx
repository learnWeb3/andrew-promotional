"use client";

import { useEffect, useState } from "react";

export interface CalendlyIntegrationProps {
  url: string;
}

export function CalendlyIntegration({
  url = "https://calendly.com/andrew-automotive-partner/andrew-insurance-support?text_color=030635&primary_color=f46036",
}: CalendlyIntegrationProps) {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  return rendered ? (
    <>
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </>
  ) : null;
}
