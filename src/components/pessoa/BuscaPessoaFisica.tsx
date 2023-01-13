import { ListGroup } from "flowbite-react";
import { PessoaFisicaModel } from "../../model/kernel/pessoa/PessoaFisicaModel";
import Busca from "../inputs/Busca";


type BuscaPessoaFisicaProps = {
    onClick: () => void;
    onChange(nomeBusca: string): void;
    valueSearch: string;
    pessoas: PessoaFisicaModel[];
    onSelect(pessoaEscolhida:PessoaFisicaModel): void;
    pessoaEscolhida: PessoaFisicaModel | null;
    className?: string;
}

export default function BuscaPessoaFisica(props: BuscaPessoaFisicaProps) {
    return (
        <>
            <div className={props.className ? props.className : "w-full"}>
                    <Busca onClick={props.onClick} valueSearch={props.valueSearch} onChange={props.onChange} className={"rounded-b-none"} ></Busca>
                    {props.pessoas.length > 0 ?
                        <>
                            <div className="w-full overflow-y-auto max-h-40 pb-2">
                                <ListGroup className="rounded-t-none">
                                    {props.pessoas.map((e, k) => {
                                        return (
                                            <ListGroup.Item key={k} onClick={() => {props.onSelect(e);}}>
                                                {e.pesNome} | {e.pesCpf} | {e.pesStatus}
                                            </ListGroup.Item>
                                        )
                                    })}
                                </ListGroup>
                            </div>
                        </>
                        : <></>
                    }
            </div>
        </>
    )
}