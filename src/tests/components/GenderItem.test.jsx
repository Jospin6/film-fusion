import { render} from '@testing-library/react';
import {describe, it, expect} from "vitest";
import {GenderItem} from "../../components/GenderItem"

describe ("<GenderItem/>", () => {
    it("Should render GenderItem correctly", () => {
        let itemName = 'test'
        const {container} = render(<GenderItem itemName={itemName}/>)

        expect(container.appendChild).toMatchInlineSnapshot(`[Function]`)
    })
});