import React, { useEffect, useState } from 'react';
import api from '../api'
import Casa from './Casa';
import './Casas.css'

export default function Casas() {
    const [casa, setCasa] = useState('Escolha uma casa');
    const [dadosPersonagens, setDadosPersonagens] = useState([]);
    const [grifinoria, setGrifinoria] = useState([]);
    const [sonserina, setSonserina] = useState([]);
    const [lufaLufa, setLufaLufa] = useState([]);
    const [corvinal, setCorvinal] = useState([]);

    useEffect(() => {
        api.get('/characters/house/Gryffindor')
            .then((response) => setGrifinoria(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro: " + err);
            });

        api.get('/characters/house/Slytherin')
            .then((response) => setSonserina(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro: " + err);
            });

        api.get('/characters/house/Hufflepuff')
            .then((response) => setLufaLufa(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro: " + err);
            });

        api.get('/characters/house/Ravenclaw')
            .then((response) => setCorvinal(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro: " + err);
            });
    }, []);

    const casas = ['Grifinória', 'Sonserina', 'Lufa-Lufa', 'Corvinal'];

    function changeAba(casa) {
        setCasa(casa)
        if (casa === casas[0])
            setDadosPersonagens(grifinoria)
        else if (casa === casas[1])
            setDadosPersonagens(sonserina)
        else if (casa === casas[2])
            setDadosPersonagens(lufaLufa)
        else if (casa === casas[3])
            setDadosPersonagens(corvinal)
    }

    return (
        <div className="Casas">
            {casas.map((item, index) => (
                <button id={index} onClick={() => changeAba(item)}>
                    {item}
                </button>
            ))
            }
            <Casa personagens={dadosPersonagens} casa={casa} />
        </div>
    )
}