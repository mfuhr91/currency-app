export const getCurrencies = async ()  => {
    const url = `https://api-currency-exchange-mfuhr.herokuapp.com/api/ultimas-cotizaciones`;
    const resp = await fetch( url );
    const data = await resp.json()
    return data;
}
