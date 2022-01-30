import React from 'react';
import {Box} from "@chakra-ui/react";
import Moment from 'moment';

export const Currency = ( currency:any ) => {
    let icon = getIconName(currency.tipo);
    return (
        <>
        <Box margin='25px' backgroundColor='rgb(21, 114, 161, 0.4)' padding='20px' paddingLeft='30px' borderRadius='35px' textAlign='left'>
            <h2 style={{textAlign: "left", marginBottom:"15px", fontSize:"20px", fontWeight:"bold"}}> {icon}  {getCurrencyName(currency.tipo)}  </h2>
            <p> Compra:
                <span style={{fontSize:"20px", fontWeight:"bold", marginLeft:"10px"}}>
                    {new Intl.NumberFormat("es-AR", {
                        style: "currency",
                        currency: "ARS"
                    }).format(currency.valorCompra)}
                </span>
            </p>
            <p> Venta:
                <span style={{fontSize:"20px", fontWeight:"bold", marginLeft:"26px"}}>
                    {new Intl.NumberFormat("es-AR", {
                        style: "currency",
                        currency: "ARS",
                    }).format(currency.valorVenta)}
                </span>
            </p>
            <p style={{textAlign:"right", marginTop:"15px"}}> Actualización:  {Moment(currency.fecha).locale('es').format('HH:mm DD-MM-YYYY')} </p>
        </Box>
        </>
    )
};

const  getCurrencyName = ( tipo: string ) => {
    let name = "";
    switch ( tipo ) {
        case "euro_blue": name = "Euro Blue";
        break;
        case "dolar_oficial": name = "Dolar Oficial";
        break;
        case "dolar_blue": name = "Dolar Blue";
        break;
        case "bitcoin": name = "Bitcoin";
        break;
        default:
            name = "Ethereum";
    }

    return name;
}

const getIconName = ( tipo: string ) => {
    let icon;
    switch ( tipo ) {
        case "euro_blue": icon = <i className="fas fa-euro-sign fa-lg fa-fw" data-fa-mask="fas fa-square" data-fa-transform="shrink-5" style={{fontSize:"35px"}}></i>;
            break;
        case "dolar_oficial": icon = <i className="fas fa-dollar-sign fa-lg fa-fw" data-fa-mask="fas fa-square" data-fa-transform="shrink-5" style={{fontSize:"35px"}}></i>;
            break;
        case "dolar_blue": icon = <i className="fas fa-dollar-sign fa-lg fa-fw" data-fa-mask="fas fa-square" data-fa-transform="shrink-5" style={{fontSize:"35px"}}></i>;
            break;
        case "bitcoin": icon = <i className="fab fa-btc fa-lg fa-fw" data-fa-mask="fas fa-square" data-fa-transform="shrink-5" style={{fontSize:"35px"}}></i>;
            break;
        default:
            icon = <i className="fab fa-ethereum fa-lg fa-fw" data-fa-mask="fas fa-square" data-fa-transform="shrink-5" style={{fontSize:"35px"}}></i>;
    }

    return icon;
}

/*const getIconName = ( tipo: string ) => {
    let icon: IconProp;
    switch ( tipo ) {
        case "euro_blue": icon = "euro-sign";
            break;
        case "dolar_oficial": icon = "dollar-sign";
            break;
        case "dolar_blue": icon =  "dollar-sign";
            break;
        case "bitcoin": icon = "btc";
            break;
        default:
            icon = "ethereum";
    }

    return icon;
}*/





