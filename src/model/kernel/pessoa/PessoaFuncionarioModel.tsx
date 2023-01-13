import { AreaAtuacaoModel } from "../AreaAtuacaoModel";

export type PessoaFuncionarioModel = {
    pesId?: number;
    pesNome?: string;
    pesMae?: string;
    pesEmail?: string;
    pesNascimento?: string; //Date
    pesStatus?: string;
    pesEstadocivil?: string;
    pesNacionalidade?: string;
    pesTelefone?: string;
    pesCpf?: string;
    pesDeficiencia?: number;
    tpPessoa?: number;
    areaAtuacao?: AreaAtuacaoModel; //number|areaatuacao
}