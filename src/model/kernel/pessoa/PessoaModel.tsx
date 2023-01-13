export type PessoaModel = {
    pesId?: number;
    pesNome?: string;
    pesMae?: string;
    pesEmail?: string;
    pesNascimento?: string; //Date
    pesObservacao?: string;
    pesRegdate?: string; //Date
    pesReguser?: string;
    pesStatus?: string;
    pesNomefantasia?: string;
    pesEstadocivil?: string;
    pesProfissao?: string;
    pesNacionalidade?: string;
    pesPseudonimo?: string;
    srvId?: number;
    pesFaixasalarial?: string;
    pesTelefone?: string;
    pesCpf?: string;
    pesTratamento?: string;
    pesDeficiencia?: number;
    tipoEmpresa?: number;
    areaAtuacao?: number;
    dataInscricao?: string; //Date
    inscricaoEstadual?: string;
    cnpj?: string;
    tpPessoa?: number;
    contas?: number[]; //Conta
    estHistoricoLotacaos?: number[]; //EstHistoricoLotacao
    portalassistidoAtendimentos?: number[]; //PortalassistidoAtendimento
    estEstagiarios?: number[]; //EstEstagiario
    pessoafamiliasForPfamPai?: number[]; //Pessoafamilia
    pessoafuncaos?: number[]; //Pessoafuncao
    situacaoescolars?: number[]; //Situacaoescolar
    historicoviolencias?: number[]; //Historicoviolencia
    pessoafamiliasForPesId?: number[]; //Pessoafamilia
    estAvaliacaos?: number[]; //EstAvaliacao
    nucleoenderecos?: number[]; //Nucleoendereco
    pessoafamiliasForPfamMae?: number[]; //Pessoafamilia
    situacaofamiliars?: number[]; //Situacaofamiliar
    estPessoaLotacaos?: number[]; //EstPessoaLotacao
    ouvidorias?: number[]; //Ouvidoria
    pessoafamiliasForPfamRequerente?: number[]; //Pessoafamilia
}