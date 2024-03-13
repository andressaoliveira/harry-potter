import React, { useState, useEffect } from 'react';
import './Personagens.css'
import api from '../api'

export default function Personagens() {
    const [personagens, setPersonagens] = useState([]);
    const [personagensFull, setPersonagensFull] = useState([]);

    useEffect(() => {
        api.get('/characters')
            .then((response) => setDados(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro: " + err);
            });
    }, []);

    function setDados(dados) {
        console.log('dados', dados)
        setPersonagens(dados)
        setPersonagensFull(dados)
    }

    function pesquisar(item) {
        const filter = personagensFull
            .filter(p => (p.name.toLowerCase()).includes(item.toLowerCase()));
        setPersonagens(filter);
    }

    return (
        <div className="Personagens">
            <div>
                Pesquisar: <input onChange={(e) => pesquisar(e.target.value)} />
            </div>
            {console.log('personagens: ', personagens)}
            <div className="lista-personagens">
                {
                    personagens?.map((item, index) => (
                        <div key={index} className="personagem">
                            <p><h2>{item.name}</h2></p>
                            <p>
                                <img
                                    className="personagem-foto"
                                    src={item.image}
                                    alt={item.name}
                                />
                            </p>
                            <p>{item.actor}</p>
                            <p>Espécie: {item.species}</p>
                            <p>Gênero: {item.gender}</p>
                            <p>Casa: {item.house}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
}