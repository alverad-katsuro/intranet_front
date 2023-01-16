// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { Axios } from 'axios';
import { AnexoModelRequest } from '../model/kernel/anexo/request/AnexoModelRequest';
import { AnexoCategoriaModel } from '../model/kernel/anexo/response/AnexoCategoriaModel';
import { AnexoDominioModel } from '../model/kernel/anexo/response/AnexoDominioModel';
import { AnexoSubCategoriaModel } from '../model/kernel/anexo/response/AnexoSubCategoriaModel';

const apiAddress: string = "http://10.85.200.106:9000/"
//const apiAddress: string = "http://10.0.0.182:8080/"
//const apiAddress: string = process.env.DEVELOPMENT_IP ? process.env.DEVELOPMENT_IP : "http://10.0.0.182:8080/";

const apiAxios: Axios = axios.create({baseURL: apiAddress});


// Anexos
/**
 * Anexos
 * @param nomeAnexoDominio 
 * @returns 
 */
export async function getAnexos(nomeAnexoDominio: String): Promise<AnexoModelRequest[]> {
    const resp = (await apiAxios.get<AnexoModelRequest[]>("/anexo/consultarAnexos", {params: nomeAnexoDominio})).data;
    return resp;
}

export async function getAnexosAtivos(nomeAnexoDominio: String): Promise<AnexoModelRequest[]> {
    const resp = (await apiAxios.get<AnexoModelRequest[]>("/anexo/consultarAnexosAtivos", {params: nomeAnexoDominio})).data;
    return resp;
}

export async function saveAnexos(anexo: AnexoModelRequest): Promise<AnexoModelRequest> {
    const resp = (await apiAxios.post<AnexoModelRequest>("/anexo/salvar", anexo, {
        headers: {
        'Content-Type': 'multipart/form-data'
      }})).data;
    return resp;
}

export async function updateAnexos(anexo: AnexoModelRequest): Promise<AnexoModelRequest> {
    const resp = (await apiAxios.put<AnexoModelRequest>("/anexo/atualizar", anexo, {
        headers: {
        'Content-Type': 'multipart/form-data'
      }})).data;
    return resp;
}

// AnexoDominio

export async function getAnexoDominiosAtivos(): Promise<AnexoDominioModel[]> {
    const resp = (await apiAxios.get<AnexoDominioModel[]>("/anexoDominio/buscarAnexoDominiosAtivos")).data;
    return resp;
}

// AnexoCategoria

export async function getAnexoCategoriasAtivos(idAnexoDominio: number): Promise<AnexoCategoriaModel[]> {
    const resp = (await apiAxios.get<AnexoCategoriaModel[]>("/anexoCategoria/buscarAnexoCategoriasAtivos", {params : {idAnexoDominio}})).data;
    return resp;
}

// AnexoSubCategoria

export async function getAnexoSubCategoriasAtivos(idAnexoCategoria: number): Promise<AnexoSubCategoriaModel[]> {
    const resp = (await apiAxios.get<AnexoSubCategoriaModel[]>("/anexoSubCategoria/buscarAnexoSubCategoriasAtivos", {params : {idAnexoCategoria}})).data;
    return resp;
}