import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Router as WouterRouter } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { Router } from "@/App";

function renderRoute(path: string) {
  const { hook } = memoryLocation({ path });

  return render(
    <WouterRouter hook={hook}>
      <Router />
    </WouterRouter>,
  );
}

describe("Legal page routes", () => {
  it.each([
    ["/privacy", "Privacy Policy"],
    ["/cookies", "Cookie Policy"],
    ["/terms", "Terms of Service"],
  ])("renders %s", (path, heading) => {
    renderRoute(path);

    expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
  });
});