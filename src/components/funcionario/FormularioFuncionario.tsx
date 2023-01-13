import { Label, Select } from "flowbite-react";
import { Dispatch, SetStateAction, useState } from "react";
import { PatternFormat } from "react-number-format";
import { AreaAtuacaoModel } from "../../model/kernel/AreaAtuacaoModel";
import { PessoaFuncionarioModel } from "../../model/kernel/pessoa/PessoaFuncionarioModel";
import { SystemUserErrorModel } from "../../model/kernel/systemuser/errors/SystemUserErrorModel";
import { SystemUserModel } from "../../model/kernel/systemuser/SystemUserModel";
import YouAreSure from "../popup/YouAreSure";


type FormularioFuncionario = {
    setSystemUser: Dispatch<SetStateAction<SystemUserModel>>;
    systemUser: SystemUserModel;
    errosFuncionario: SystemUserErrorModel;
    areaAtuacoes: AreaAtuacaoModel[];
    onClickEditar: () => void;
    onClickSalvar: () => void;
    editavel: boolean;
}

export default function FormularioPessoaFisica(props: FormularioFuncionario) {
    const [isOpen, setIsOpen] = useState(false);

    function openYouAreSure() {
        setIsOpen(true);
    }
    return (
        <>
            <div className="w-full">
                <div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input disabled={!props.editavel} type="text" name="nome_pessoa" id="nome_pessoa" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setSystemUser({ ...props.systemUser, pessoa: {...props.systemUser.pessoa, pesNome: e.target.value }})} defaultValue={props.systemUser.pessoa.pesNome} required />

                        <Label htmlFor="nome_pessoa" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</Label>
                        {props.errosFuncionario["pessoa.pesNome"] != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosFuncionario["pessoa.pesNome"]}</span>
                            : <></>
                        }
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input disabled={!props.editavel} type="text" name="nome_mae" id="nome_mae" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setSystemUser({ ...props.systemUser, pessoa: {...props.systemUser.pessoa, pesMae: e.target.value} })} defaultValue={props.systemUser.pessoa.pesMae} required />
                        <Label htmlFor="nome_mae" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome da Mãe</Label>
                        {props.errosFuncionario["pessoa.pesMae"] != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosFuncionario["pessoa.pesMae"]}</span>
                            : <></>
                        }
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input disabled={!props.editavel} type="text" name="username" id="username" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setSystemUser({ ...props.systemUser, susrLogin: e.target.value })} defaultValue={props.systemUser.susrLogin} required />
                        <Label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Usuario</Label>
                        {props.errosFuncionario.susrLogin != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosFuncionario.susrLogin}</span>
                            : <></>
                        }
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input disabled={!props.editavel} type="email" name="email" id="email" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setSystemUser({ ...props.systemUser, pessoa: {...props.systemUser.pessoa, pesEmail: e.target.value } })} defaultValue={props.systemUser.pessoa.pesEmail} required />
                            <Label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</Label>
                            {props.errosFuncionario["pessoa.pesEmail"] != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosFuncionario["pessoa.pesEmail"]}</span>
                            : <></>
                            }
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input disabled={!props.editavel} type="date" name="nascimento" id="nascimento" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setSystemUser({ ...props.systemUser, pessoa: {...props.systemUser.pessoa, pesNascimento: e.target.value }})} defaultValue={props.systemUser.pessoa.pesNascimento} required />
                            <Label htmlFor="nascimento" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nascimento</Label>
                            {props.errosFuncionario["pessoa.pesNascimento"] != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosFuncionario["pessoa.pesNascimento"]}</span>
                            : <></>
                            }
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <Select disabled={!props.editavel} name="tipoPessoa" id="tipoPessoa" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setSystemUser({ ...props.systemUser, pessoa: {...props.systemUser.pessoa, tpPessoa: Number(e.target.value) }})} defaultValue={props.systemUser.pessoa.tpPessoa} required>
                                <option value={1}>Pessoa Física</option>
                                <option value={2}>Pessoa Juridica</option>
                            </Select>
                            <Label htmlFor="tipoPessoa" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tipo Pessoa</Label>
                            {props.errosFuncionario["pessoa.tpPessoa"] != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosFuncionario["pessoa.tpPessoa"]}</span>
                            : <></>
                            }
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <Select disabled={!props.editavel} name="pesAtivo" id="pesAtivo" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setSystemUser({ ...props.systemUser, pessoa: {...props.systemUser.pessoa, pesStatus: e.target.value }})} defaultValue={props.systemUser.pessoa.pesStatus} required>
                                <option value="A">Ativo</option>
                                <option value="I">Inativo</option>
                            </Select>
                            <Label htmlFor="pesAtivo" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Status do Cadastro</Label>
                            {props.errosFuncionario["pessoa.pesStatus"] != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosFuncionario["pessoa.pesStatus"]}</span>
                            : <></>
                            }
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <Select disabled={!props.editavel} name="estadoCivil" id="estadoCivil" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setSystemUser({ ...props.systemUser, pessoa: {...props.systemUser.pessoa, pesEstadocivil: e.target.value }})} defaultValue={props.systemUser.pessoa.pesEstadocivil} required>
                                <option value="SOLTEIRO(A)">SOLTEIRO(A)</option>
                                <option value="CASADO(A)">CASADO(A)</option>
                                <option value="DIVORCIDADO(A)">DIVORCIDADO(A)</option>
                                <option value="VIÚVO(A)">VIÚVO(A)</option>
                            </Select>
                            <Label htmlFor="estadoCivil" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Estado Civil</Label>
                            {props.errosFuncionario["pessoa.pesEstadocivil"] != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosFuncionario["pessoa.pesEstadocivil"]}</span>
                            : <></>
                            }
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <Select disabled={!props.editavel} name="deficiencia" id="deficiencia" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setSystemUser({ ...props.systemUser, pessoa: {...props.systemUser.pessoa, pesDeficiencia: Number(e.target.value) }})} defaultValue={props.systemUser.pessoa.pesDeficiencia} required>
                                <option value={1}>Não</option>
                                <option value={0}>Sim</option>
                            </Select>
                            <Label htmlFor="deficiencia" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Possui Deficiencia</Label>
                            {props.errosFuncionario["pessoa.pesDeficiencia"] != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosFuncionario["pessoa.pesDeficiencia"]}</span>
                            : <></>
                            }
                        </div>
                        {
                            props.areaAtuacoes.length > 0 ?

                                <>
                                    <div className="relative z-0 mb-6 w-full group">
                                        <Select disabled={!props.editavel} name="areaAtuacao" id="areaAtuacao" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setSystemUser({ ...props.systemUser, pessoa: {...props.systemUser.pessoa, areaAtuacao: {aratuaId: Number(e.target.value)} }})} defaultValue={props.systemUser.pessoa.areaAtuacao?.aratuaId} required>
                                            {
                                                props.areaAtuacoes.map((e, k) => {
                                                    return (
                                                        <option key={k} value={e.aratuaId}>{e.aratuaDescricao}</option>
                                                    );
                                                })
                                            }
                                        </Select>
                                        <Label htmlFor="areaAtuacao" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Area Atuação</Label>
                                    </div>
                                    {props.errosFuncionario.areaAtuacao != undefined ?
                                    <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosFuncionario.areaAtuacao}</span>
                                    : <></>
                                    }
                                </>
                                : <></>
                        }
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <PatternFormat disabled={!props.editavel} name="cpf" id="cpf" format='###.###.###-##' className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setSystemUser({ ...props.systemUser, pessoa: {...props.systemUser.pessoa, pesCpf: e.target.value }})} value={props.systemUser.pessoa.pesCpf} required></PatternFormat>
                            <Label htmlFor="cpf" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CPF</Label>
                            {props.errosFuncionario["pessoa.pesCpf"] != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosFuncionario["pessoa.pesCpf"]}</span>
                            : <></>
                            }
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <PatternFormat disabled={!props.editavel} name="floating_phone" id="floating_phone" format='(##) #####-####' mask="_" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setSystemUser({ ...props.systemUser, pessoa: {...props.systemUser.pessoa, pesTelefone: e.target.value }})} value={props.systemUser.pessoa.pesTelefone} required></PatternFormat>
                            <Label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número de Telefone (00) 00000-0000</Label>
                            {props.errosFuncionario["pessoa.pesTelefone"] != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosFuncionario["pessoa.pesTelefone"]}</span>
                            : <></>
                            }
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input disabled={!props.editavel} name="nacionalidade" id="nacionalidade" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e) => props.setSystemUser({ ...props.systemUser, pessoa: {...props.systemUser.pessoa, pesNacionalidade: e.target.value }})} value={props.systemUser.pessoa.pesNacionalidade} required></input>
                            <Label htmlFor="nacionalidade" className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nacionalidade</Label>
                            {props.errosFuncionario["pessoa.pesNacionalidade"] != undefined ?
                            <span className="inline-flex text-sm text-red-600 dark:text-red-400">{props.errosFuncionario["pessoa.pesNacionalidade"]}</span>
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