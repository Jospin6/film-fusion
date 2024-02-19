import { render, screen } from '@testing-library/react';
import {describe, it, expect} from "vitest";
import { SearchBar } from "../../components/SearchBar"


describe("<SearchBar/>", () => {
    it("Should render correctly", () => {
        const {container} = render(<SearchBar search="Search" close="x"/>);
        expect(container.appendChild).toMatchInlineSnapshot(`[Function]`)
    });
});

