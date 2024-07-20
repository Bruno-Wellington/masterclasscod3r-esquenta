
export default function Segundo(){

    function anoAtal(){
        return new Date().getFullYear()
    }

    function gerarUmaLista(){
        return(
            <ul className="pl-12 list-disc">
                <li>Yamaha</li>
                <li>Honda</li>
                <li>Suzuki</li>
            </ul>
        )
    }

    return(
        <div>
            <div>
                 <span>{anoAtal()}</span>
            </div>
            {gerarUmaLista()}
        </div>
    )
}