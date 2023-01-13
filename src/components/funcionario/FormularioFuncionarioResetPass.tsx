import { Label } from "flowbite-react";
import { useState } from "react";
import { SystemUserModel } from "../../model/kernel/systemuser/SystemUserModel";
import YouAreSure from "../popup/YouAreSure";

type FormularioFuncionarioResetPassProps = {
    funcionario: SystemUserModel;
    onClickResetarSenha: () => void;
}

export default function FormularioFuncionarioResetPass(props: FormularioFuncionarioResetPassProps) {
    const [isOpen, setIsOpen] = useState(false);

    function openYouAreSure() {
        if (props.funcionario.susrLogin != undefined) {
            setIsOpen(true);
        }
    }

    return (
        <>
            <div className="px-4 sm:px-32 w-full">
                <div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input disabled={true} type="text" name="nome_funcionario" id="nome_funcionario" className="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={props.funcionario.susrLogin} placeholder=" " required />
                        <Label htmlFor="nome_funcionario" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Usuario</Label>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 content-center">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-w-[130px] mx-auto" onClick={openYouAreSure}>Resetar senha</button>
                </div>
            </div>
            <YouAreSure changeIsOpen={setIsOpen} callback={props.onClickResetarSenha} isOpen={isOpen}></YouAreSure>
        </>
    )
}