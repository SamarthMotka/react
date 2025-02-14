import { render,screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom"

test('should load contact us', () => {
    render(<ContactUs></ContactUs>);

    const heading = screen.getByRole("heading");
    
    expect(heading).toBeInTheDocument();
});