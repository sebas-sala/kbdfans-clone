import { render } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import { toMatchImageSnapshot } from "jest-image-snapshot"
import Header from "../app/components/Header"; 

expect.extend({ toMatchImageSnapshot })

describe("Header component", () => {

    it("should render the header component", () => {
        render(<Header />);
    })
  

  });