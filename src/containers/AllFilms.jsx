import { FilmItem } from "../components/FilmItem";

export const AllFilms = props => {
    const {} = props;
    return (
        <div className="order-2 md:order-1 grid grid-cols-4 gap-2 px-2 md:px-0 md:grid-cols-8 md:gap-4 h-auto md:col-span-6 pt-4">
            <FilmItem/>
            <FilmItem/>
            <FilmItem/>
            <FilmItem/>
        </div>
    )
}