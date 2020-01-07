import React from 'react';
import { Link } from 'react-router-dom';
const ListaArticulos =({articulos}) => (
    <>
    <h1>Articulos </h1>
    {articulos.map(
        (article, key) => (
            <Link className="article-list-item" key={key} to={`/articulo/${article.name}`}><h3>{article.title}
            </h3>
                <p>{article.content[0].substring(0, 150)}</p>
            </Link>

        )
    )}
</>
)
export default ListaArticulos;