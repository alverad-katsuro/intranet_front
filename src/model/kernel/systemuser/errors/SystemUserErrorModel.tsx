export type SystemUserErrorModel = {
	susrName?: string,
	susrLogin?: string,
	susrStatus?: string,
    "pessoa.pesNome"?: string;
    "pessoa.pesMae"?: string;
    "pessoa.pesEmail"?: string;
    "pessoa.pesNascimento"?: string; //Date
    "pessoa.pesStatus"?: string;
    "pessoa.pesEstadocivil"?: string;
    "pessoa.pesNacionalidade"?: string;
    "pessoa.pesTelefone"?: string;
    "pessoa.pesCpf"?: string;
    "pessoa.pesDeficiencia"?: string;
    "pessoa.tpPessoa"?: string;
    areaAtuacao?: string;
}