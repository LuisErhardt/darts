import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Multiplier from "../components/multiplier";

describe("Multiplier", () => {
  it("MyClick event is called when button is clicked", async () => {
    const user = userEvent.setup();
    const myClick = jest.fn();
    render(<Multiplier myClick={myClick} name="Double" doubleIsPressed={false} />);

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByRole("button"));
    await user.click(screen.getByRole("button"));
    expect(myClick).toBeCalledTimes(3);
  });

  it("Double: btn-success class when double is pressed", async () => {
    const myClick = jest.fn();
    render(<Multiplier myClick={myClick} name="Double" doubleIsPressed={true} />);

    expect(screen.getByRole("button").classList.contains("btn-success")).toBe(true);
  });

  it("Double: btn-secondary class when double is not pressed", async () => {
    const myClick = jest.fn();
    render(<Multiplier myClick={myClick} name="Double" doubleIsPressed={false} />);

    expect(screen.getByRole("button").classList.contains("btn-secondary")).toBe(true);
  });

  it("Triple: btn-success class when triple is pressed", async () => {
    const myClick = jest.fn();
    render(<Multiplier myClick={myClick} name="Triple" tripleIsPressed={true} />);

    expect(screen.getByRole("button").classList.contains("btn-success")).toBe(true);
  });

  it("Triple: btn-secondary class when triple is not pressed", async () => {
    const myClick = jest.fn();
    render(<Multiplier myClick={myClick} name="Triple" tripleIsPressed={false} />);

    expect(screen.getByRole("button").classList.contains("btn-secondary")).toBe(true);
  });

  it("Displays Double", async () => {
    const myClick = jest.fn();
    render(<Multiplier myClick={myClick} name="Double" doubleIsPressed={false} />);

    expect(screen.getByText("Double")).toBeInTheDocument;
  });

  it("Displays Triple", async () => {
    const myClick = jest.fn();
    render(<Multiplier myClick={myClick} name="Triple" tripleIsPressed={false} />);

    expect(screen.getByText("Triple")).toBeInTheDocument;
  });
});
