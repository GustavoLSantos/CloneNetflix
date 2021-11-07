import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import './App.css';
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

export default () => {

  const [movieList, setmovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

useEffect(()=>{
  //Pegando a lista total
  const loadAll = async () => {
    let list = await Tmdb.getHomeList();
    setmovieList(list);
  //Pegando o filme em destaque
    let originals = list.filter(i=>i.slug === 'originals');
    let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
    let chosen = originals[0].items.results[randomChosen];
    let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
    setFeaturedData(chosenInfo);
    }

  loadAll();
}, []);

useEffect(() => {
  const scrollListener = () => {
    if(window.scrollY > 10) {
      setBlackHeader(true);
    } else {
      setBlackHeader(false);
    }
  }

  window.addEventListener('scroll', scrollListener);

  return () => {
    window.removeEventListener('scroll', scrollListener);
  }
}, []);


  return(
    <div className='page'>
    
      <Header black={blackHeader} />

      {featuredData && 
        <FeaturedMovie item={featuredData} /> 
      }
      <section className='lists'>
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <footer>
        Feito com <span role="img" aria-label="coração">❤</span> por GustavoLSantos<br/>
        Direitos de imagem para Netflix<br/>
        Dados pegos pelo site themoviedb.org
      </footer>

    </div>
  )
}