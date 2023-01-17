import { ListGroup } from "flowbite-react";
import { AnexoModelRequest } from "../../model/kernel/anexo/request/AnexoModelRequest";
import Busca from "../inputs/Busca";


type BuscaAnexoProps = {
    onClick: () => void;
    onChange(nomeBusca: string): void;
    valueSearch: string;
    anexos: AnexoModelRequest[];
    onSelect(anexoEscolhido:AnexoModelRequest): void;
    anexoEscolhido: AnexoModelRequest | null;
    className?: string;
}

export default function BuscaAnexo(props: BuscaAnexoProps) {
    return (
        <>
            <div className={props.className ? props.className : "w-full"}>
                    <Busca onClick={props.onClick} valueSearch={props.valueSearch} onChange={props.onChange} className={"rounded-b-none"} ></Busca>
                    {props.anexos.length > 0 ?
                        <>
                            <div className="w-full overflow-y-auto max-h-40 pb-2">
                                <ListGroup className="rounded-t-none">
                                    {props.anexos.map((e, k) => {
                                        return (
                                            <ListGroup.Item key={k} onClick={() => {props.onSelect(e);}}>
                                                {e.tituloAnexo} | {e.ativo ? "Ativo" : "Inativo"}
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