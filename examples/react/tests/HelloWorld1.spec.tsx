import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import HelloWorld from "../src/HelloWorld";

test("renders name", async () => {
  const { getByText, getByRole } = render(<HelloWorld name="haha" />);

  await expect.element(getByText("Hello Vitest x1!")).toBeInTheDocument();
  await getByRole("button", { name: "Increment" }).click();

  await expect.element(getByText("Hello Vitest x2!")).toBeInTheDocument();
});
