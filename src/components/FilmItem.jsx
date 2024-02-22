
export const FilmItem = props => {
    const {} = props
    return <div className="col-span-2 mb-2 md:mb-0 rounded-lg itemShadow">
        <div className="w-full h-[200px] bg-red-400 rounded-t-lg"></div>
        <div className="w-full h-[100px] px-2 pt-2 rounded-b-lg">
            <div className="font-bold">title</div>
            <div className="text-gray-500 pt-2">Date sortie</div>
        </div>
    </div>
}