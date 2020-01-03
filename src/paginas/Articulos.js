import React from 'react';
import Articulo from './Articulo';
import { Link } from 'react-router-dom';
import ArticleContent from './article-content';
const Articulos = () => (
    <>
        <h1>Articulos </h1>
        {ArticleContent.map(
            (article, key) => (
                <Link className="article-list-item" key={key} to={`/articulo/${article.name}`}><h3>{article.title}
                </h3>
                    <p>{article.content[0].substring(0, 150)}</p>
                </Link>

            )
        )}
    </>
);
export default Articulos;