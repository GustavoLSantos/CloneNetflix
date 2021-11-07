import React, { useState } from "react";
import './MovieRow.css';
import leftie from './esquerda.png';
import rightie from './direita.png';


export default ({title, items}) => {
    const [scrollX, setscrollX] = useState(-400);


    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 3);
        if(x>0){
            x=0;
        }
        setscrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 3);
        let w = items.results.length * 150;
        if((window.innerWidth - w) > x){
            x = (window.innerWidth - w) - 60;
        } 
        setscrollX(x);
    }

    return(
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movierow--left" onClick={handleLeftArrow}>
                <img classname="movierow--leftarrow" src={leftie}/>
            </div>
            <div className="movierow--right" onClick={handleRightArrow}>
                <img classname="movierow--rightarrow" src={rightie}/>
            </div>

            <div className='movieRow--listarea'>
                <div className='movieRow--list' style={{marginLeft: scrollX, width: items.results.length * 150}}  >
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>                
            </div>
        </div>
    )
}