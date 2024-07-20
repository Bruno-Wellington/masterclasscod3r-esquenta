
export default function Primeiro(){

    function anoAtal(){
        return new Date().getFullYear()
    }

    function gerarUmaLista(){
        return(
            <ul className="pl-12 list-disc">
                <li>Bruno</li>
                <li>Patricia</li>
                <li>Loham</li>
            </ul>
        )
    }

    return(
        <div>
            <div>
                <span>{1 + 1}</span>
                <span>{Math.random()}</span>
                <span>{anoAtal()}</span>
            </div>
            {gerarUmaLista()}
        </div>
    )
}