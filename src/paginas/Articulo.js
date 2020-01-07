import React from 'react';
import ArticleContent from './article-content';
import ListaArticulos from '../Componentes/ListaArticulos';
import NoFoundPage from '../paginas/NoFoundPage';

const Articulo = ({match}) =>{
    //url guarda el parametro name  en una constante name
    const name =match.params.name;
      //arreglo que guarda la lista de articulos diferentes al
      const otrosarticulos= ArticleContent.filter ((articulos , key)=>(articulos.name !=name));
    const article=ArticleContent.find(article=>(article.name===name));
    if(!article) return(<NoFoundPage></NoFoundPage>)
    return(

<>
<h1>Articulo sobre {article.title}</h1>
    {article.content.map((paragraph,key)=>(
<p key={key}>{paragraph}</p>

    ))}
    <h3>Otros Articulos</h3>
    <ListaArticulos articulos={otrosarticulos}/>
</>

)};
export default Articulo;