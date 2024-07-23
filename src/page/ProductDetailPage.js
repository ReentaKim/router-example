import React from 'react';
import {useParams} from "react-router-dom";

const ProductDetailPage = () => {
    const params = useParams();
    const {id} = useParams();
    console.log(params);
    return (
        <div>
            <h1>Show Detail Product! No.{id}</h1>
        </div>
    );
};

export default ProductDetailPage;