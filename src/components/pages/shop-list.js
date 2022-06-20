import {useState, useEffect} from 'react';
import apiUrl from '../ui/product_top';
import Preloader from './Preloader';
import ShopCard from './ShopCard';

export default function ShopList(props) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(apiUrl + "/product/", {
            headers: {
                Authorization: API_KEY
            }
        })
            .then(response => response.json())
            .then(data => {
                data.items && setItems(data.items.slice(0, 24));
                setLoading(false);
            });
    }, []);

    return (
        <div className="items">
            {loading ? (
                <Preloader />
            ) : items.length ? (
                items.map(item => (
                    <ShopCard key={item.id} {...item} />
                ))
            ) : (
                <p>Не удалось загрузить список</p>
            )}
        </div>
    )
}
