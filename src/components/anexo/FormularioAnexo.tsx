import { FileInput, Label, Select } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { AnexoErrorModel } from "../../model/kernel/anexo/errors/AnexoErrorModel";
import { AnexoModelRequest } from "../../model/kernel/anexo/request/AnexoModelRequest";
import { AnexoCategoriaModel } from "../../model/kernel/anexo/response/AnexoCategoriaModel";
import { AnexoDominioModel } from "../../model/kernel/anexo/response/AnexoDominioModel";
import { AnexoSubCategoriaModel } from "../../model/kernel/anexo/response/AnexoSubCategoriaModel";
import YouAreSure from "../popup/YouAreSure";


type FormularioAnexoProps = {
    setAnexo: Dispatch<SetStateAction<AnexoModelRequest>>
    anexo: AnexoModelRequest;
    anexoDominio: AnexoDominioModel[];
    anexoCategoria: AnexoCategoriaModel[];
    anexoSubCategoria: AnexoSubCategoriaModel[];
    errosAnexo: AnexoErrorModel;
    onClickEditar: () => void;
    onClickSalvar: () => void;
    onClickBuscaCategoria: (idAnexoDominio: number) => void;
    onClickBuscaSubCategoria: (idAnexoCategoria: number) => void;
    editavel: boolean;
}

export default function FormularioAnexo(props: FormularioAnexoProps) {
    const [isOpen, setIsOpen] = useState(false);

    function openYouAreSure() {
        setIsOpen(true);
    }
    return (
        <>
            <div className="w-full">
                <div>
                    {
                        props.anexoDominio.length > 0 ?
                            <>

                                <div className="relative z-0 mb-6 w-full group">
                                    <Select disabled={!props.editavel} name="areaAtuacao" id="areaAtuacao" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => { props.setAnexo({ ...props.anexo, idAnexoDominio: Number(e.target.value) }); props.onClickBuscaCategoria(Number(e.target.value)) }} value={props.anexo.idAnexoDominio} required>
                                        <option key={-1} value={-1} hidden></option>
                                        {

                                            props.anexoDominio.map((e, k) => {
                                                return (
                                                    <option key={k} value={e.idAnexoDominio}>{e.nomeAnexoDominio}</option>
                                                );
                                            })
                                        }
                                    </Select>
                                    <Label htmlFor="areaAtuacao" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Anexo Dominio</Label>
                                </div>
                                {props.errosAnexo.anexoDominio != undefined ?
                                    <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosAnexo.anexoDominio}</span>
                                    : <></>
                                }
                            </>
                            : <></>
                    }

                    {
                        props.anexoCategoria.length > 0 ?

                            <>
                                <div className="relative z-0 mb-6 w-full group">
                                    <Select disabled={!props.editavel} name="areaAtuacao" id="areaAtuacao" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => { props.setAnexo({ ...props.anexo, idAnexoCategoria: Number(e.target.value) }); props.onClickBuscaSubCategoria(Number(e.target.value)) }} value={props.anexo.idAnexoCategoria} required>
                                        <option key={-1} value={-1} hidden></option>

                                        {
                                            props.anexoCategoria.map((e, k) => {
                                                return (
                                                    <option key={k} value={e.idAnexoCategoria}>{e.nomeAnexoCategoria}</option>
                                                );
                                            })
                                        }
                                    </Select>
                                    <Label htmlFor="areaAtuacao" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Anexo Categoria</Label>
                                </div>
                                {props.errosAnexo.anexoCategoria != undefined ?
                                    <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosAnexo.anexoCategoria}</span>
                                    : <></>
                                }
                            </>
                            : <></>
                    }
                    {
                        props.anexoSubCategoria.length > 0 ?

                            <>
                                <div className="relative z-0 mb-6 w-full group">
                                    <Select disabled={!props.editavel} name="areaAtuacao" id="areaAtuacao" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setAnexo({ ...props.anexo, idAnexoSubCategoria: Number(e.target.value) })} value={props.anexo.idAnexoSubCategoria} required>
                                        <option key={-1} value={-1} hidden></option>
                                        {
                                            props.anexoSubCategoria.map((e, k) => {
                                                return (
                                                    <option key={k} value={e.idAnexoSubCategoria}>{e.nomeAnexoSubCategoria}</option>
                                                );
                                            })
                                        }
                                    </Select>
                                    <Label htmlFor="areaAtuacao" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Anexo Sub Categoria</Label>
                                </div>
                                {props.errosAnexo.anexoSubCategoria != undefined ?
                                    <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosAnexo.anexoSubCategoria}</span>
                                    : <></>
                                }
                                <div className="relative z-0 mb-6 w-full group">
                                    <input disabled={!props.editavel} type="text" name="nome_anexo" id="nome_anexo" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setAnexo({ ...props.anexo, tituloAnexo: e.target.value })} defaultValue={props.anexo.tituloAnexo} required />

                                    <Label htmlFor="nome_anexo" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Titulo do Anexo</Label>
                                    {props.errosAnexo.tituloAnexo != undefined ?
                                        <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosAnexo.tituloAnexo}</span>
                                        : <></>
                                    }
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <Select disabled={!props.editavel} name="areaAtuacao" id="areaAtuacao" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setAnexo({ ...props.anexo, ativo: Boolean(e.target.value) })} defaultValue={String(props.anexo.ativo)} required>
                                        <option value={"true"}>Ativo</option>
                                        <option value={"false"}>Inativo</option>
                                    </Select>
                                    <Label htmlFor="areaAtuacao" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Status</Label>
                                </div>
                                <div id="fileUpload">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="file"
                                            value="Upload file"
                                        />
                                    </div>
                                    <FileInput
                                        helperText="Anexo que sera disponibilizado no portal."
                                        onChange={(e) => props.setAnexo({ ...props.anexo, arquivo: e.target.files![0] })}
                                    />
                                </div>
                            </>
                            : <></>
                    }
                    <div className={props.editavel ? "grid grid-cols-2 gap-5 content-center" : "grid grid-cols-1 gap-5 content-center"}>

                        {props.editavel ?
                            <>
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-w-[130px] mx-auto" onClick={openYouAreSure}>Salvar</button>
                            </> : <></>
                        }
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-w-[130px] mx-auto" onClick={props.onClickEditar}>{props.editavel ? "Cancelar" : "Editar"}</button>

                    </div>
                </div>
            </div>
            <YouAreSure changeIsOpen={setIsOpen} callback={props.onClickSalvar} isOpen={isOpen}></YouAreSure>
        </>
    )
}