import { Box } from '@chakra-ui/react';
import React, {useEffect, useState } from 'react';
import { useFetchCurrencies } from '../hooks/useFetchCurrencies';
import { Currency } from './Currency';

export const CurrencyStack = () => {
    const { currencies, loading } = useFetchCurrencies();
    return (
        <>
            { loading && <Box textAlign="center"><i className="fas fa-spinner fa-pulse fa-3x"></i> <p style={{fontSize: "20px", marginTop:"15px"}}>Loading</p></Box> || <h1 style={{fontSize:"30px"}}>Currency App</h1>}
            <Box width="100%">
                {
                    currencies.map( (currency:any) => {
                        return <Currency key={ currency.id } { ...currency } className='currencyBox' ></Currency>
                    })
                }
            </Box>
        </>
    );
};
