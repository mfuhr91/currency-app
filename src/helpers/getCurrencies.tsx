export const getCurrencies = async ()  => {
    const url = `https://api-currency.mfuhr.com.ar/currencies`;
    const resp = await fetch( url );
    return await resp.json();
}
