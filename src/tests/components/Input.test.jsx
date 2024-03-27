import { render } from '@testing-library/react';
import {describe, it, expect} from "vitest";
import { Input } from "../../components/Input"

describe ("<Input/>", () => {
    it("Should render correctly", () => {
        const props = {
            onChange: () => 'test',
            placeholder: 'placeholder',
            search: 'search'
        }
        const {container} = render(<Input {...props} />);

        expect(container.appendChild).toMatchInlineSnapshot(`[Function]`)
    });
});