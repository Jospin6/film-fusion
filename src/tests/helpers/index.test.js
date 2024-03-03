import {describe, it, expect} from "vitest";
import {percentageConverter} from '../../helpers/index'

describe("percentage converter", () =>{
    it("Should return the pourcentage for a value between 1.0 and 10", () => {
        const value = 7.6
        expect(percentageConverter(value)).toBe("76")
    })
})