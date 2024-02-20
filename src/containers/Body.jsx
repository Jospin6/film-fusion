import { AllFilms } from "./AllFilms"
import { AllGenders } from "./AllGenders"

export const Body = () => {
    return <div className="grid grid-cols-1 md:grid-cols-8 md:gap-6">
        <AllFilms/>
        <AllGenders/>
    </div>
}