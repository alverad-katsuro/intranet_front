import { PessoaFisicaModel } from "../pessoa/PessoaFisicaModel"
import { PessoaFuncionarioModel } from "../pessoa/PessoaFuncionarioModel"

export type SystemUserModel = {
    susrId?: number,
	susrName?: string,
	susrLogin?: string,
	susrStatus?: string,
    pessoa: PessoaFuncionarioModel,
}