import { useParams } from 'react-router-dom';

export const SingleFilm = () => {
    const {id} =  useParams();
    // const backgroundImage = {
    //     backgroundImage: url(''),
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat", 
    // }
    return <div>
        <div className="w-full h-[60vh]">
            <div>Img</div>
            <div>{id}</div>
        </div>
        <div>cast</div>
    </div>
}