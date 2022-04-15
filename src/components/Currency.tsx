import React from 'react';
import {Box} from "@chakra-ui/react";
import Moment from 'moment';

export const Currency = ( currency:any ) => {
    let icon = getIconName(currency.type);
    let date = Moment.utc(currency.date).local().format('HH:mm DD-MM-YYYY');

    return (
        <>
        <Box margin='25px'
             backgroundColor='#194563'
             padding='20px'
             paddingLeft='30px'
             borderRadius='35px'
             textAlign='left'
             color='lightgray'>
            <h2 style={{textAlign: "left", marginBottom:"15px", fontSize:"20px", fontWeight:"bold"}}> {icon}  {getCurrencyName(currency.type)}  </h2>
            <p> Compra:
                <span style={{fontSize:"20px", fontWeight:"bold", marginLeft:"10px"}}>
                    {new Intl.NumberFormat("es-AR", {
                        style: "currency",
                        currency: "ARS"
                    }).format(currency.buyPrice)}
                </span>
            </p>
            <p> Venta:
                <span style={{fontSize:"20px", fontWeight:"bold", marginLeft:"26px"}}>
                    {new Intl.NumberFormat("es-AR", {
                        style: "currency",
                        currency: "ARS",
                    }).format(currency.sellPrice)}
                </span>
            </p>
            <p style={{textAlign:"right", marginTop:"15px", fontSize:"14px"}}> Ultima actualización:  {date} </p>
        </Box>
        </>
    )
};

const  getCurrencyName = ( type: string ) => {
    let name = "";
    switch ( type ) {
        case "euroBlue": name = "Euro Blue";
            break;
        case "dolarOficial": name = "Dolar Oficial";
            break;
        case "dolarBlue": name = "Dolar Blue";
            break;
        case "dolarMEP": name = "Dolar MEP";
            break;
        case "dolarCCL": name = "Dolar CCL";
            break;
        case "tether": name = "Tether";
            break;
        case "bitcoin": name = "Bitcoin";
            break;
        default:
            name = "Ethereum";
    }

    return name;
}

const getIconName = ( type: string ) => {
    let icon;
    if ( type.includes("dolar") || type.includes("tether")) {
        icon = <i className="fas fa-dollar-sign fa-lg fa-fw" data-fa-mask="fas fa-square" data-fa-transform="shrink-5" style={{fontSize:"35px"}}></i>
        return icon
    }
    switch ( type ) {
        case "euroBlue": icon = <i className="fas fa-euro-sign fa-lg fa-fw" data-fa-mask="fas fa-square" data-fa-transform="shrink-5" style={{fontSize:"35px"}}></i>;
            break;
        case "bitcoin": icon = <i className="fab fa-btc fa-lg fa-fw" data-fa-mask="fas fa-square" data-fa-transform="shrink-5" style={{fontSize:"35px"}}></i>;
            break;
        default:
            icon = <i className="fab fa-ethereum fa-lg fa-fw" data-fa-mask="fas fa-square" data-fa-transform="shrink-5" style={{fontSize:"35px"}}></i>;
    }

    return icon;
}





