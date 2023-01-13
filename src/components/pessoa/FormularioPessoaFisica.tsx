import { Label, Select } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { PatternFormat } from "react-number-format";
import { PessoaFuncionarioErrorModel } from "../../model/kernel/pessoa/errors/PessoaFuncionarioErrorModel";
import { PessoaFisicaModel } from "../../model/kernel/pessoa/PessoaFisicaModel";
import YouAreSure from "../popup/YouAreSure";


type FormularioPessoaFisicaProps = {
    setPessoa: Dispatch<SetStateAction<PessoaFisicaModel>>
    pessoa: PessoaFisicaModel;
    errosPessoa: PessoaFuncionarioErrorModel;
    onClickEditar: () => void;
    onClickSalvar: () => void;
    editavel: boolean;
}

export default function FormularioPessoaFisica(props: FormularioPessoaFisicaProps) {
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

                        <Label htmlFor="nome_pessoa" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</Label>
                        {props.errosPessoa.pesNome != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosPessoa.pesNome}</span>
                            : <></>
                        }
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input disabled={!props.editavel} type="text" name="nome_mae" id="nome_mae" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setPessoa({...props.pessoa, pesMae: e.target.value})} defaultValue={props.pessoa.pesMae} required={true} />
                        <Label htmlFor="nome_mae" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome da Mãe</Label>
                        {props.errosPessoa.pesMae != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosPessoa.pesMae}</span>
                            : <></>
                        }
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input disabled={!props.editavel} type="email" name="email" id="email" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setPessoa({...props.pessoa, pesEmail: e.target.value})} defaultValue={props.pessoa.pesEmail} required />
                            <Label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</Label>
                            {props.errosPessoa.pesEmail != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosPessoa.pesEmail}</span>
                            : <></>
                        }
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input disabled={!props.editavel} type="date" name="nascimento" id="nascimento" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setPessoa({...props.pessoa, pesNascimento: e.target.value})} defaultValue={props.pessoa.pesNascimento} required />
                            <Label htmlFor="nascimento" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nascimento</Label>
                            {props.errosPessoa.pesNascimento != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosPessoa.pesNascimento}</span>
                            : <></>
                        }
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <Select disabled={!props.editavel} name="tipoPessoa" id="tipoPessoa" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setPessoa({...props.pessoa, tpPessoa: Number(e.target.value)})} defaultValue={props.pessoa.tpPessoa} required>
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
                            <Select disabled={!props.editavel} name="pesAtivo" id="pesAtivo" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setPessoa({...props.pessoa, pesStatus: e.target.value})} defaultValue={props.pessoa.pesStatus} required>
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
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <Select disabled={!props.editavel} name="estadoCivil" id="estadoCivil" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setPessoa({...props.pessoa, pesEstadocivil: e.target.value})} defaultValue={props.pessoa.pesEstadocivil} required>
                                <option value="SOLTEIRO(A)">SOLTEIRO(A)</option>
                                <option value="CASADO(A)">CASADO(A)</option>
                                <option value="DIVORCIDADO(A)">DIVORCIDADO(A)</option>
                                <option value="VIÚVO(A)">VIÚVO(A)</option>
                            </Select>
                            <Label htmlFor="estadoCivil" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Estado Civil</Label>
                            {props.errosPessoa.pesEstadocivil != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosPessoa.pesEstadocivil}</span>
                            : <></>
                        }
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <Select disabled={!props.editavel} name="deficiencia" id="deficiencia" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) =>props.setPessoa({...props.pessoa, pesDeficiencia: Number(e.target.value)})} defaultValue={props.pessoa.pesDeficiencia} required>
                                <option value={1}>Não</option>
                                <option value={0}>Sim</option>
                            </Select>
                            <Label htmlFor="deficiencia" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Possui Deficiencia</Label>
                            {props.errosPessoa.pesDeficiencia != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosPessoa.pesDeficiencia}</span>
                            : <></>
                            }
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <PatternFormat disabled={!props.editavel} name="cpf" id="cpf" format='###.###.###-##' className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setPessoa({...props.pessoa, pesCpf: e.target.value})} value={props.pessoa.pesCpf} required></PatternFormat>
                            <Label htmlFor="cpf" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CPF</Label>
                            {props.errosPessoa.pesCpf != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosPessoa.pesCpf}</span>
                            : <></>
                            }
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <PatternFormat disabled={!props.editavel} name="floating_phone" id="floating_phone" format='(##) #####-####' mask="_" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setPessoa({...props.pessoa, pesTelefone: e.target.value})} value={props.pessoa.pesTelefone} required></PatternFormat>
                            <Label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número de Telefone (00) 00000-0000</Label>
                            {props.errosPessoa.pesTelefone != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosPessoa.pesTelefone}</span>
                            : <></>
                            }
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input disabled={!props.editavel} name="nacionalidade" id="nacionalidade" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setPessoa({...props.pessoa, pesNacionalidade: e.target.value})} value={props.pessoa.pesNacionalidade} required></input>
                            <Label htmlFor="nacionalidade" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nacionalidade</Label>
                            {props.errosPessoa.pesNacionalidade != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosPessoa.pesNacionalidade}</span>
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