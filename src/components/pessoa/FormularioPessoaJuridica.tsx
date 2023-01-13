import { Label, Select } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { PatternFormat } from "react-number-format";
import { PessoaJuridicaErrorModel } from "../../model/kernel/pessoa/errors/PessoaJuridicaErrorModel";
import { PessoaJuridicaModel } from "../../model/kernel/pessoa/PessoaJuridicaModel";
import YouAreSure from "../popup/YouAreSure";


type FormularioPessoaJuridicaProps = {
    errosPessoa: PessoaJuridicaErrorModel;
    pessoa: PessoaJuridicaModel;
    setPessoa: Dispatch<SetStateAction<PessoaJuridicaModel>>;
    onClickEditar: () => void;
    onClickSalvar: () => void;
    editavel: boolean;
}

export default function FormularioPessoaJuridica(props: FormularioPessoaJuridicaProps) {
    const [isOpen, setIsOpen] = useState(false);

    function openYouAreSure() {
        setIsOpen(true);
    }
    return (
        <>
            <div className="w-full">
                <div>

                    <div className="relative z-0 mb-6 w-full group">
                        <input disabled={!props.editavel} type="text" name="nome_pessoa" id="nome_pessoa" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setPessoa({...props.pessoa, pesNome: e.target.value})} defaultValue={props.pessoa.pesNome} required />

                        <Label htmlFor="nome_pessoa" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome Fantasia</Label>
                        {props.errosPessoa.pesNome != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosPessoa.pesNome}</span>
                            : <></>
                        }
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input disabled={!props.editavel} type="email" name="email" id="email" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) =>  props.setPessoa({...props.pessoa, pesEmail: e.target.value})} defaultValue={props.pessoa.pesEmail} required />
                            <Label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</Label>
                            {props.errosPessoa.pesEmail != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosPessoa.pesEmail}</span>
                            : <></>
                        }
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input disabled={!props.editavel} type="date" name="dataInscricao" id="dataInscricao" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) =>  props.setPessoa({...props.pessoa, dataInscricao: e.target.value})} defaultValue={props.pessoa.dataInscricao} required />
                            <Label htmlFor="dataInscricao" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Inscrição</Label>
                            {props.errosPessoa.dataInscricao != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosPessoa.dataInscricao}</span>
                            : <></>
                        }
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <Select disabled={!props.editavel} name="tipoPessoa" id="tipoPessoa" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) =>  props.setPessoa({...props.pessoa, tpPessoa: Number(e.target.value)})} defaultValue={props.pessoa.tpPessoa}  required>
                                <option value={1}>Pessoa Física</option>
                                <option value={2}>Pessoa Juridica</option>
                            </Select>
                            <Label htmlFor="tipoPessoa" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tipo Pessoa</Label>
                            {props.errosPessoa.tpPessoa != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosPessoa.tpPessoa}</span>
                            : <></>
                            }
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <Select disabled={!props.editavel} name="pesAtivo" id="pesAtivo" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) =>  props.setPessoa({...props.pessoa, pesStatus: e.target.value})} defaultValue={props.pessoa.pesStatus} required>
                                <option value="A">Ativo</option>
                                <option value="I">Inativo</option>
                            </Select>
                            <Label htmlFor="pesAtivo" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Status do Cadastro</Label>
                            {props.errosPessoa.pesStatus != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosPessoa.pesStatus}</span>
                            : <></>
                            }
                        </div>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <Select disabled={!props.editavel} name="estadoCivil" id="estadoCivil" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setPessoa({...props.pessoa, tipoEmpresa: Number(e.target.value)})} defaultValue={props.pessoa.tipoEmpresa} required>
                            <option value={1}>Sociedade Ltda</option>
                            <option value={2}>Sociedade Anonima (S.A.)</option>
                            <option value={3}>MEI - Micro Empreendedor Individual</option>
                            <option value={4}>Sociedade Individual</option>
                            <option value={5}>Empresario Individual</option>
                        </Select>
                        <Label htmlFor="estadoCivil" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tipo Empresa</Label>
                        {props.errosPessoa.tipoEmpresa != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosPessoa.tipoEmpresa}</span>
                            : <></>
                        }
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <PatternFormat disabled={!props.editavel} name="inscricaoEstadual" id="inscricaoEstadual" format='###.###.###.###' className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setPessoa({...props.pessoa, inscricaoEstadual: e.target.value})} value={props.pessoa.inscricaoEstadual} required></PatternFormat>
                        <Label htmlFor="inscricaoEstadual" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Inscrição Estadual</Label>
                        {props.errosPessoa.inscricaoEstadual != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosPessoa.inscricaoEstadual}</span>
                            : <></>
                        }
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <PatternFormat disabled={!props.editavel} name="cnpj" id="cnpj" format='##.###.###/####-##' className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) =>  props.setPessoa({...props.pessoa, cnpj: e.target.value})} value={props.pessoa.cnpj} required></PatternFormat>
                            <Label htmlFor="cnpj" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CNPJ</Label>
                            {props.errosPessoa.cnpj != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosPessoa.cnpj}</span>
                            : <></>
                            }
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <PatternFormat disabled={!props.editavel} name="floating_phone" id="floating_phone" format='(##) #####-####' mask="_" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) =>  props.setPessoa({...props.pessoa, pesTelefone: e.target.value})} value={props.pessoa.pesTelefone} required></PatternFormat>
                            <Label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número de Telefone ((00) 00000-0000))</Label>
                            {props.errosPessoa.pesTelefone != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosPessoa.pesTelefone}</span>
                            : <></>
                            }
                        </div>
                    </div>
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