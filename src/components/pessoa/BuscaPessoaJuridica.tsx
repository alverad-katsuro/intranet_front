import { ListGroup } from "flowbite-react";
import { PessoaJuridicaModel } from "../../model/kernel/pessoa/PessoaJuridicaModel";
import Busca from "../inputs/Busca";


type BuscaPessoaJuridicaProps = {
    onClick: () => void;
    onChange(nomeBusca: string): void;
    valueSearch: string;
    pessoas: PessoaJuridicaModel[];
    onSelect(pessoaEscolhida: PessoaJuridicaModel): void;
    pessoaEscolhida: PessoaJuridicaModel | null;
    className? : string;
}

export default function BuscaPessoaJuridica(props: BuscaPessoaJuridicaProps) {
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
                                        <ListGroup.Item key={k} onClick={() => { props.onSelect(e); }}>
                                            {e.pesNome} | {e.cnpj} | {e.pesStatus}
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