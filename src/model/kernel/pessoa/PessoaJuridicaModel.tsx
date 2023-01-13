export type PessoaJuridicaModel = {
    pesId?: number;
    pesEmail?: string;
    pesStatus?: string;
    pesNome?: string;
    pesTelefone?: string;
    tipoEmpresa?: number;
    dataInscricao?: string; //Date
    inscricaoEstadual?: string;
    cnpj?: string;
    tpPessoa?: number;
}