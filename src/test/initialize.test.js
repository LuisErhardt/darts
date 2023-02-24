import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Initialization from "../components/initialize";

describe("Initialization", () => {
  it("Spiel Starten button is clicked once", async () => {
    const user = userEvent.setup();
    const startGame = jest.fn();
    render(<Initialization startGame={startGame} />);

    await user.click(screen.getByText("Spiel starten"));
    expect(startGame).toBeCalledTimes(1);
  });

  it("Punkte label changes when button is clicked", async () => {
    const user = userEvent.setup();
    const startGame = jest.fn();
    render(<Initialization startGame={startGame} />);

    const button = screen.getByRole("button", { name: "Punkte" });

    await user.click(button);
    expect(button).toHaveTextContent("301");

    await user.click(button);
    expect(button).toHaveTextContent("501");

    await user.click(button);
    expect(button).toHaveTextContent("301");

    await user.click(button);
    expect(button).toHaveTextContent("501");
  });

  it("Text in Input changes, when user presses keys", async () => {
    const user = userEvent.setup();
    const startGame = jest.fn();

    render(<Initialization startGame={startGame} />);

    const input = screen.getByRole("textbox");

    await user.type(input, "M");
    await user.type(input, "a");
    await user.type(input, "x");

    expect(input).toHaveValue("Max");
  });

  it("Input is cleared, when user submits player", async () => {
    const user = userEvent.setup();
    const startGame = jest.fn();

    render(<Initialization startGame={startGame} />);

    const input = screen.getByRole("textbox");

    await user.type(input, "M");
    await user.type(input, "a");
    await user.type(input, "x");

    expect(input).toHaveValue("Max");

    const submit = screen.getByRole("button", { name: "submit" });

    await user.click(submit);
    expect(input).toHaveValue("");
  });

  it("Player is added, when input is not empty and submit button is clicked", async () => {
    const user = userEvent.setup();
    const startGame = jest.fn();

    render(<Initialization startGame={startGame} />);

    const input = screen.getByRole("textbox");

    await user.type(input, "M");
    await user.type(input, "a");
    await user.type(input, "x");

    const submit = screen.getByRole("button", { name: "submit" });

    await user.click(submit);
    expect(screen.getByLabelText("Spieler 1")).toBeInTheDocument;
    expect(screen.getByLabelText("Max")).toBeInTheDocument;
  });

  it("Heading of input is updated, when a player is added", async () => {
    const user = userEvent.setup();
    const startGame = jest.fn();

    render(<Initialization startGame={startGame} />);

    let heading = screen.getByLabelText("Name von Spieler 1 eingeben:");

    expect(heading).toHaveTextContent("Name von Spieler 1 eingeben:");

    const input = screen.getByRole("textbox");

    await user.type(input, "M");
    await user.type(input, "a");
    await user.type(input, "x");

    const submit = screen.getByRole("button", { name: "submit" });

    await user.click(submit);

    heading = screen.getByLabelText("Name von Spieler 2 eingeben:");
    expect(heading).toHaveTextContent("Name von Spieler 2 eingeben:");
  });

  it("No player is added, when the input is empty and submit is clicked", async () => {
    const user = userEvent.setup();
    const startGame = jest.fn();

    render(<Initialization startGame={startGame} />);

    let heading = screen.queryByLabelText("Spieler 1");
    const submit = screen.getByRole("button", { name: "submit" });

    await user.click(submit);
    expect(heading).toBeNull();
  });

  it("Input disappears, after fourth player was added", async () => {
    const user = userEvent.setup();
    const startGame = jest.fn();

    render(<Initialization startGame={startGame} />);

    let input = screen.getByRole("textbox");
    const submit = screen.getByRole("button", { name: "submit" });

    await user.type(input, "M");
    await user.type(input, "a");
    await user.type(input, "x");
    await user.click(submit);

    await user.type(input, "P");
    await user.type(input, "e");
    await user.type(input, "t");
    await user.click(submit);

    await user.type(input, "M");
    await user.type(input, "o");
    await user.type(input, "m");
    await user.click(submit);

    await user.type(input, "D");
    await user.type(input, "a");
    await user.type(input, "d");
    await user.click(submit);

    input = screen.queryByRole("textbox");

    expect(input).toBeNull();
  });

  it("Heading changes, after fourth player was added", async () => {
    const user = userEvent.setup();
    const startGame = jest.fn();

    render(<Initialization startGame={startGame} />);

    let input = screen.getByRole("textbox");
    const submit = screen.getByRole("button", { name: "submit" });

    await user.type(input, "M");
    await user.type(input, "a");
    await user.type(input, "x");
    await user.click(submit);

    await user.type(input, "P");
    await user.type(input, "e");
    await user.type(input, "t");
    await user.click(submit);

    await user.type(input, "M");
    await user.type(input, "o");
    await user.type(input, "m");
    await user.click(submit);

    await user.type(input, "D");
    await user.type(input, "a");
    await user.type(input, "d");
    await user.click(submit);

    const heading = screen.getByText("Maximal 4 Spieler möglich");
    expect(heading).toBeInTheDocument;
  });

  it("Last player is deleted, when user clicks delete button", async () => {
    const user = userEvent.setup();
    const startGame = jest.fn();

    render(<Initialization startGame={startGame} />);

    const input = screen.getByRole("textbox");
    const submit = screen.getByRole("button", { name: "submit" });

    await user.type(input, "M");
    await user.type(input, "a");
    await user.type(input, "x");
    await user.click(submit);

    await user.type(input, "P");
    await user.type(input, "i");
    await user.type(input, "t");
    await user.click(submit);

    const deleteButton = screen.getByRole("button", { name: "Letzten Spieler löschen" });

    expect(deleteButton).toBeInTheDocument();
    expect(screen.getByText("Pit")).toBeInTheDocument;

    await user.click(deleteButton);

    expect(screen.queryByText("Pit")).toBeNull();
  });

  it("Delete button only appears, when there is at least one player", async () => {
    const user = userEvent.setup();
    const startGame = jest.fn();

    render(<Initialization startGame={startGame} />);

    const input = screen.getByRole("textbox");
    const submit = screen.getByRole("button", { name: "submit" });
    let deleteButton = screen.queryByRole("button", { name: "Letzten Spieler löschen" });

    expect(deleteButton).toBeNull;

    await user.type(input, "M");
    await user.type(input, "a");
    await user.type(input, "x");
    await user.click(submit);

    deleteButton = screen.getByRole("button", { name: "Letzten Spieler löschen" });

    expect(deleteButton).toBeInTheDocument();
  });

  it("Darts Counter heading exists", async () => {
    const startGame = jest.fn();

    render(<Initialization startGame={startGame} />);

    const heading = screen.getByText("Darts Counter");
    expect(heading).toBeInTheDocument;
  });
});
