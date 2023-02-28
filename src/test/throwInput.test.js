import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ThrowInput from "../components/throwInput";

describe("ThrowInput", () => {
  it("MyClick event is called when button is clicked", async () => {
    const user = userEvent.setup();
    const myClick = jest.fn();
    render(<ThrowInput myClick={myClick} name="1" value={1} inputDisabled={false} />);

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByRole("button"));
    await user.click(screen.getByRole("button"));
    expect(myClick).toBeCalledTimes(3);
  });

  it("Displays name", async () => {
    const myClick = jest.fn();
    render(<ThrowInput myClick={myClick} name="1" value={1} inputDisabled={false} />);

    expect(screen.getByText("1")).toBeInTheDocument;
  });

  it("Button is not disabled", async () => {
    const myClick = jest.fn();
    render(<ThrowInput myClick={myClick} name="1" value={1} inputDisabled={false} />);

    expect(screen.getByRole("button")).not.toHaveAttribute("disabled");
  });

  it("Button is disabled", async () => {
    const myClick = jest.fn();
    render(<ThrowInput myClick={myClick} name="1" value={1} inputDisabled={true} />);

    expect(screen.getByRole("button")).toHaveAttribute("disabled");
  });
});
