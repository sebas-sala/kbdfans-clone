import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, afterEach } from "vitest";
import Home from "../app/page";

describe("Home page", () => {
  afterEach(cleanup);

  it("should render", () => {
    render(<Home />);
  });
});
