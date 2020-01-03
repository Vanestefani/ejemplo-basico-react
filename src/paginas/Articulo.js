import React from 'react';
import articlecontent from './article-content';
const Articulo = ({match}) =>{
    const name =match.params.name;
    return(

<>
<h1>Articulo sobre {name}</h1>
<p>Proident eu ullamco qui ea culpa. Ipsum culpa incididunt eu fugiat irure ullamco esse. In ipsum aliqua sunt elit quis ad nisi dolore do cillum amet do commodo. Quis Lorem sunt exercitation consectetur anim culpa nulla Lorem cillum eiusmod ipsum. Cupidatat officia pariatur reprehenderit culpa velit cillum magna eu ipsum reprehenderit deserunt cupidatat esse. Consectetur dolor veniam aliquip consectetur velit duis quis ipsum officia esse consequat commodo reprehenderit.</p>
</>

)};
export default Articulo;