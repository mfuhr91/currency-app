import {useEffect, useState} from "react";
import {getCurrencies} from "../helpers/getCurrencies";

export const useFetchCurrencies = () => {
    const [state, setState] = useState({
        currencies: [],
        loading: true,
    });


    useEffect(() => {
        getCurrencies().then(
            currencies => {
                setState({
                    currencies: currencies,
                    loading: false,
                })
            }
        );
    }, []);

    return state;
}
