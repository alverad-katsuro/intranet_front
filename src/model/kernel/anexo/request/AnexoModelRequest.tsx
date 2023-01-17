export type AnexoModelRequest = {
    tituloAnexo?: string,
    idAnexoDominio?: number,
    idAnexoCategoria?: number,
    idAnexoSubCategoria?: number,
    ativo?: boolean,
    arquivo? : File
}