import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("Render image in home", () => {
  render(<Home />);
  const img = screen.getByRole("img");
  expect(img).toBeInTheDocument;
});
