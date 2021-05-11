import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img 
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="amazon banner"
                />
            </div>

            <div className="home_row">
                <Product 
                title="The Lean Startup"
                price={29.99}
                image="https://img1.od-cdn.com/ImageType-100/1191-1/%7BB2EB30D4-1759-447F-9BC6-3A6412CBEDE7%7DImg100.jpg"
                rating={5}
                />
                <Product 
                title="RYLAN face, nose and cough steamer 3 in 1 Plastic Steam vaporizer, nozzle inhaler, facial sauna"
                price={699}
                image="https://images-eu.ssl-images-amazon.com/images/I/51Y0t+PGqQS._AC_UL320_SR320,320_.jpg"
                rating={4}
                />
            </div>

            <div className="home_row">
                <Product 
                title="Pampers all round protection pants, extra large size baby diapers, 56 count, anti rash diapers, lotion with aloe vera"
                price={8}
                image="https://images-eu.ssl-images-amazon.com/images/I/810H65hJfJL._AC_UL320_SR320,320_.jpg"
                rating={5}
                />
                <Product 
                title="Philips MG3233/15 8 IN 1 Hair clipper & face multigroom trimmer kit (Black) "
                price={34}
                image="https://images-eu.ssl-images-amazon.com/images/I/61AkOaAeiWL._AC_UL320_SR320,320_.jpg"
                rating={3}
                />
                <Product 
                title="D2Q 3 Ply Disposable surgical face mask protective layer (Pack of 50) for men and women| use and throw face masks"
                price={12}
                image="https://images-eu.ssl-images-amazon.com/images/I/51u04TbngAS._AC_UL320_SR320,320_.jpg"
                rating={1}
                />
            </div>

            <div className="home_row">
                <Product 
                title="OnePLus 108 cm (43 inches) Y series Full HD LED Smart Android TV 43Y1 (Black) (2020 Model)"
                price={245}
                image="https://m.media-amazon.com/images/I/812wg+pfXAL._AC_UY327_FMwebp_QL65_.jpg"
                ratng={4}
                />
            </div>

            
        </div>
    )
};

export default Home
