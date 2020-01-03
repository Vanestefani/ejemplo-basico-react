import React from 'react';
import ArticleContent from './article-content';
const Articulo = ({match}) =>{
    //url guarda el parametro name  en una constante name
    const name =match.params.name;
   
    const article=ArticleContent.find(article=>(article.name===name));
    if(!article) return(<h1>Este articulo no existe  </h1>)
    return(

<>
<h1>Articulo sobre {article.title}</h1>
    {article.content.map((paragraph,key)=>(
<p key={key}>{paragraph}</p>

    ))}
</>

)};
export default Articulo;