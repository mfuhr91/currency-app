export const getCurrencies = async ()  => {
    const url = `https://go-api-currency-dp4xmh2yoa-uc.a.run.app/currencies`;
    const resp = await fetch( url );
    return await resp.json();
}
