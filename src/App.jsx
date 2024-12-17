import React from "react";
import "./app.css"
import Posters from "./component"
const movies = [
    {title: "A Christmas Carol", imgSrc: "https://i.pinimg.com/originals/0d/c6/f5/0dc6f569c8d25e0eb9d9603cd19eae22.jpg"},
    {title: "The Grinch", imgSrc: "https://m.media-amazon.com/images/M/MV5BODQwOGFjNGEtMTg1ZS00MmY4LTg0NTctYjVlNTNjZjRmZTcxXkEyXkFqcGc@._V1_.jpg"},
    {title: "The Nightmare Before Christmas", imgSrc: "https://media.womanmagazine.co.nz/wp-content/uploads/2022/11/Nightmare-Before-Christmas.jpg?strip=all&lossy=1&quality=88&webp=85&sharp=1&ssl=1"},
    {title: "Home Alone", imgSrc: "https://i.ebayimg.com/00/s/MTYwMFgxMDQ4/z/O6AAAOxy0x1TSETh/$_57.JPG?set_id=880000500F"}
]
const App = () => {
    const header = "Chrismas movies";
    return (
    <div className="body">
        <h1>{header}</h1>
        <div className="container">
            {movies.map((movie) => {
                return (
                    <Posters 
                        title={movie.title}
                        poster={movie.imgSrc}
                    />
                )
            })}
        </div>
    </div>
    )
};
export default App;