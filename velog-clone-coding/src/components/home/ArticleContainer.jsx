import React, { useEffect, useState } from 'react';
import {client} from '../../libs/api';
import ArticleCard from './ArticleCard';

const ArticleContainer = () => {
    const [articleData, setArticleData] = useState([]);

    const getArticleData = async () => {
        const {data} = await client.get("/article");
        setArticleData(data);
    }

    useEffect(() => {
        getArticleData();
    }, [])

    return (
        <div>
            {[...articleData].reverse().map((article,index)=><ArticleCard key={article.id} index={index} article={article} />)}
        </div>
    );
};

export default ArticleContainer;