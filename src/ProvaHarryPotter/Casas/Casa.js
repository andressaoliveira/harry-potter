
export default function Casa({personagens, casa}) {

    return (
        <div className="Casa">
            <h1> {casa}</h1>
            <div className="lista-personagens">
                {personagens?.map((item, index) => (
                    <div key={index} className="personagem">
                        <h3>{item.name}</h3>
                        <p>Patrono: {item.species}</p>
                        <p>Varinha: {item.wand.wood} | {item.wand.core} | {item.wand.length} </p>
                    </div>
                ))}
            </div>
        </div>
    )
}