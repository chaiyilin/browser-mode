import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import HelloWorld from "../src/HelloWorld";

test("renders name1", async () => {
  const { getByText, getByRole } = render(<HelloWorld name="haha" />);

  await expect.element(getByText("Hello haha x1!")).toBeInTheDocument();
  await getByRole("button", { name: "Increment" }).click();

  await expect.element(getByText("Hello haha x2!")).toBeInTheDocument();
});
