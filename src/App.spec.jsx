import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import "@testing-library/jest-dom"

describe("String Calculator TDD Kata", () => {
    it("Case - 1: Should provide output 0 if '' as input", () => {
        render(<App />);

       const seachInput = screen.getByRole('textbox');
       fireEvent.change(seachInput, { target: { value: "" } })
       const btn = screen.getByRole("button");
       fireEvent.click(btn);
       const result = screen.getByTestId("result");

       expect(result).toHaveTextContent(0);
    })

    it("Case - 2: Should provide output 1 if '1' as input", () => {
        render(<App />);

       const seachInput = screen.getByRole('textbox');
       fireEvent.change(seachInput, { target: { value: "1" } })
       const btn = screen.getByRole("button");
       fireEvent.click(btn);
       const result = screen.getByTestId("result");

       expect(result).toHaveTextContent(1);
    })

    it("Case - 3: Should provide output 3 if '1,2' as input", () => {
        render(<App />);

       const seachInput = screen.getByRole('textbox');
       fireEvent.change(seachInput, { target: { value: "1,2" } })
       const btn = screen.getByRole("button");
       fireEvent.click(btn);
       const result = screen.getByTestId("result");

       expect(result).toHaveTextContent(3);
    })

    it("Case - 4: Should provide output 6 if '1,\n2,3' as input", () => {
        render(<App />);

       const seachInput = screen.getByRole('textbox');
       fireEvent.change(seachInput, { target: { value: "1,\n2,3" } })
       const btn = screen.getByRole("button");
       fireEvent.click(btn);
       const result = screen.getByTestId("result");
        console.log(result);
       expect(result).toHaveTextContent(6);
    })

    it("Case - 5: Should provide output 1 if '1,\n' as input", () => {
        render(<App />);

       const seachInput = screen.getByRole('textbox');
       fireEvent.change(seachInput, { target: { value: "1,\n" } })
       const btn = screen.getByRole("button");
       fireEvent.click(btn);
       const result = screen.getByTestId("result");

       expect(result).toHaveTextContent(1);
    })

    it("Case - 6: Should provide output 3 if '//;\n1;2' as input", () => {
        render(<App />);

       const seachInput = screen.getByRole('textbox');
       fireEvent.change(seachInput, { target: { value: "//;\n1;2" } })
       const btn = screen.getByRole("button");
       fireEvent.click(btn);
       const result = screen.getByTestId("result");

       expect(result).toHaveTextContent(3);
    })

    it("Case - 7: Should provide output 9 if '//;\n1;8' as input", () => {
        render(<App />);

       const seachInput = screen.getByRole('textbox');
       fireEvent.change(seachInput, { target: { value: "//;\n1;8" } })
       const btn = screen.getByRole("button");
       fireEvent.click(btn);
       const result = screen.getByTestId("result");

       expect(result).toHaveTextContent(9);
    })

    it("Case - 8: Should provide error if '//;\n-1;2' as input", () => {
        render(<App />);

       const seachInput = screen.getByRole('textbox');
       fireEvent.change(seachInput, { target: { value: "//;\n-1;2" } })
       const btn = screen.getByRole("button");
       fireEvent.click(btn);
       const error = screen.getByTestId("error");

       expect(error).toHaveTextContent('-1 - these negative numbers are not allowed');
    })

    it("Case - 9: Should provide error if '//;\n-1;-2,-3' as input", () => {
        render(<App />);

       const seachInput = screen.getByRole('textbox');
       fireEvent.change(seachInput, { target: { value: "//;\n-1;-2,-3" } })
       const btn = screen.getByRole("button");
       fireEvent.click(btn);
       const error = screen.getByTestId("error");

       expect(error).toHaveTextContent('-1, -2, -3 - these negative numbers are not allowed');
    })

    it("Case - 10: Should provide output 1 if '1,\n1001' as input", () => {
        render(<App />);

       const seachInput = screen.getByRole('textbox');
       fireEvent.change(seachInput, { target: { value: "1,\n1001" } })
       const btn = screen.getByRole("button");
       fireEvent.click(btn);
       const result = screen.getByTestId("result");

       expect(result).toHaveTextContent(1);
    })

    it("Case - 11: Should provide output 1 if '1,1001' as input", () => {
        render(<App />);

       const seachInput = screen.getByRole('textbox');
       fireEvent.change(seachInput, { target: { value: "1,1001" } })
       const btn = screen.getByRole("button");
       fireEvent.click(btn);
       const result = screen.getByTestId("result");

       expect(result).toHaveTextContent(1);
    })

    it("Case - 12: Should provide output 6 if '//[***]\n1***2***3' as input", () => {
        render(<App />);

       const seachInput = screen.getByRole('textbox');
       fireEvent.change(seachInput, { target: { value: "//[***]\n1***2***3" } })
       const btn = screen.getByRole("button");
       fireEvent.click(btn);
       const result = screen.getByTestId("result");

       expect(result).toHaveTextContent(6);
    })

    it("Case - 13: Should provide output 6 if '//[*][%]\n1*2%3' as input", () => {
        render(<App />);

       const seachInput = screen.getByRole('textbox');
       fireEvent.change(seachInput, { target: { value: "//[*][%]\n1*2%3" } })
       const btn = screen.getByRole("button");
       fireEvent.click(btn);
       const result = screen.getByTestId("result");

       expect(result).toHaveTextContent(6);
    })
})