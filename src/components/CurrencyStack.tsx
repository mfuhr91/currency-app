import { Box } from '@chakra-ui/react';
import React, {useEffect, useState } from 'react';
import PullToRefresh from 'react-simple-pull-to-refresh';
import { getCurrencies } from '../helpers/getCurrencies';
import { useFetchCurrencies } from '../hooks/useFetchCurrencies';
import { Currency } from './Currency';
import { PullContent } from './pullToRefresh/PullContent';

export const CurrencyStack = () => {
    const [{ currencies, loading }, setState ] = useState({
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

    const handleRefresh = () => {
        return getCurrencies().then(
            currencies => {
                setState({
                    currencies: currencies,
                    loading: false,
                })
            }
        );
    };

    return (
        <>
            { loading && <Box textAlign="center"><i className="fas fa-spinner fa-pulse fa-3x"></i>
                <p style={{fontSize: "20px", marginTop:"15px"}}>Loading</p></Box> ||
                <h1 style={{fontSize:"30px"}}>Currency App</h1>}

                <PullToRefresh onRefresh={handleRefresh}
                               isPullable={true}
                               pullingContent={<PullContent />}
                               refreshingContent={<PullContent />}>
                <Box width="100%" className={"animate__animated animate__fadeIn"}>
                    {
                        currencies.map( (currency:any) => {
                            return <Currency key={ currency.id } { ...currency } className='currencyBox' ></Currency>
                        })
                    }
                </Box>
                </PullToRefresh>
        </>
    );
};
