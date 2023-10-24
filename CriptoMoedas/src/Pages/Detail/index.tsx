import style from './detail.module.css'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

interface CoinProps {
    symbol: String;
    name: String;
    price: String;
    marke_cap: String;
    low_24h: String;
    high_24h: String;
    total_volume_24h: String;
    delta_24h: String;
    volume_24h: String;
    formatedPrice: String;
    formatedMarket: String;
    formatedLowPrice: String;
    formatedHighPrice: String;
}

export function Detail (){
    const { cripto } = useParams()
    useEffect (() => {
        function getData () { //Para pegar os dados mais detalhados da moeda
            fetch(`https://sujeitoprogramador.com/api-cripto/coin/?key=1baec9913232b6ad&symbol=${cripto}`)
            .then(Response => Response.json())
            .then((data: CoinProps) => {
                let price = Intl.NumberFormat ("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })

                const resultData = {
                    ...data,
                    formatedPrice: price.format(Number(data.price)),
                    formatedMarket: price.format(Number(data.marke_cap)),
                    formatedLowPrice: price.format(Number(data.low_24h)),
                    formatedHighPrice: price.format(Number(data.high_24h))
                }
                console.log(resultData)
            })
        }
        getData ();
    }, [cripto])

    return(
        <div>
            <h1>Pagina de detalhes {cripto}</h1>
        </div>
    )
}