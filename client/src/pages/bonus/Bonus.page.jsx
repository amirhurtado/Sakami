import './bonus.page.css';

import { useProducts } from '../../context';

import { Footer, Header, IconBackText, MainBody } from '../../components';

export const BonusPage = () => {

    const { products } = useProducts();
    let bonos;

    Object.entries(products).map(([category, products]) => {
        if (category === 'Bonos regalo') {
            bonos = {
                "Bonos Regalo" : products
            }
        }
    })
    return (
        <div className='bonusPage'>
            <Header />
            <div className="contenedorBodyBonusPage">
                <IconBackText text="Volver" />
            </div>
            <MainBody products={bonos} />
            <Footer />
        </div>
    )
}