import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import "../../css/card.css"
import AOS from "aos";
import {createAxios} from "../../utils/Helpars/AxiosHelpers";
import {useSelector} from "react-redux";
import * as Swal from "../../utils/Helpars/SwalHelper";


const api = createAxios();
AOS.init();

const CockTailList = () => {
    const user = useSelector(state => state.User);

    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {

        Swal.loading()
        api.get('search.php?s')
            .then((response) => {
                const data = response.data
                setCocktails(data.drinks)
                Swal.close()

            })
            .catch(() => {
                Swal.error('Oops', 'Getting error while retrieving data').then()
            })
        Swal.close()
    }, [])


    const [t] = useTranslation()


    return (
        <div className="w-100 row py-1 container">
            <div className="wrapper">
                {
                    cocktails.map((cocktail, index) => {
                        return (
                            <div className="card" key={cocktail.idDrink} data-aos="flip-right" data-aos-offset="200"
                                 data-aos-easing="ease-in-sine" data-aos-duration="200">
                                <input type="checkbox" id={cocktail.idDrink} className="more" aria-hidden="true"/>
                                <div className="content">
                                    <div className="front"
                                         style={{
                                             backgroundImage: `url(${cocktail.strDrinkThumb})`,
                                             backgroundPosition: 'center',
                                         }}
                                    >
                                        <div className="inner">
                                            <h2>{cocktail.strDrink}</h2>
                                            <label htmlFor={cocktail.idDrink} className="button" aria-hidden="true">
                                                {t('Details')}
                                            </label>
                                        </div>
                                    </div>

                                    <div className="back justify-content-center">
                                        <p className="col-12 align-center fw-bold" style={{
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            fontSize: '20px'
                                        }}>{cocktail.strDrink}</p>
                                        <p style={{
                                            padding: '10px'
                                        }}>{cocktail.strInstructions}</p>

                                        <div style={{
                                            padding: '0 10px 10px 10px'
                                        }}>
                                            <p><b>{t('Category')} : </b> {cocktail.strCategory}</p>
                                            <p><b>{t('Alcoholic')} : </b> {cocktail.strAlcoholic}</p>
                                            <p><b>{t('GlassType')} : </b> {cocktail.strGlass}</p>
                                        </div>
                                        <label htmlFor={cocktail.idDrink} className="button return"
                                               aria-hidden="true">
                                            {t('Back')}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )


}

export default CockTailList;
