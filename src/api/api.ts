// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios, { Axios } from 'axios';
import { PessoaFisicaFind } from '../model/edge/PessoaFisicaFind';
import { PessoaJuridicaFind } from '../model/edge/PessoaJuridicaFind';
import { SystemUserFind } from '../model/edge/SystemUserFind';
import { AreaAtuacaoModel } from '../model/kernel/AreaAtuacaoModel';
import { PessoaFisicaModel } from '../model/kernel/pessoa/PessoaFisicaModel';
import { PessoaJuridicaModel } from '../model/kernel/pessoa/PessoaJuridicaModel';
import { SystemUserModel } from '../model/kernel/systemuser/SystemUserModel';

const apiAddress: string = "http://10.85.200.106:9000/"
//const apiAddress: string = "http://10.0.0.182:8080/"
//const apiAddress: string = process.env.DEVELOPMENT_IP ? process.env.DEVELOPMENT_IP : "http://10.0.0.182:8080/";

const apiAxios: Axios = axios.create({baseURL: apiAddress});

export async function findSystemUser(systemUserFind: SystemUserFind): Promise<SystemUserModel[]> {
    const resp = (await apiAxios.get<SystemUserModel[]>("/usuario/consultaUsuario", {params: systemUserFind})).data;
    return resp;
}

export async function saveSystemUser(systemUser: SystemUserModel): Promise<SystemUserModel> {
    const resp = (await apiAxios.post<SystemUserModel>("/usuario/salvar", systemUser)).data;
    return resp;
}

export async function updateSystemUser(systemUser: SystemUserModel): Promise<SystemUserModel> {
    const resp = (await apiAxios.put<SystemUserModel>("/usuario/atualizar", systemUser, {params: {susrId: systemUser.susrId}})).data;
    return resp;
}

export async function resetPasswordSystemUser(susrId: number): Promise<SystemUserModel> {
    const resp = (await apiAxios.post<SystemUserModel>("/usuario/resetPassword", {}, {params: {susrId: susrId}})).data;
    return resp;
}

export async function findPessoaFisica(pessoaFind: PessoaFisicaFind): Promise<PessoaFisicaModel[]> {
    const resp = (await apiAxios.get<PessoaFisicaModel[]>("/pessoaFisica/consultarPessoaFisica", {params: pessoaFind})).data;
    return resp;
}

export async function findPessoaJuridica(pessoaFind: PessoaJuridicaFind): Promise<PessoaJuridicaModel[]> {
    const resp = (await apiAxios.get<PessoaJuridicaModel[]>("/pessoaJuridica/consultarPessoaJuridica", {params: pessoaFind})).data;
    return resp;
}

export async function getAreaAtuacao(): Promise<AreaAtuacaoModel[]> {
    const resp = (await apiAxios.get<AreaAtuacaoModel[]>("/areaAtuacao/consultaAreaAtuacao")).data;
    return resp;
}

export async function savePessoaJuridica(pessoaJuridica: PessoaJuridicaModel): Promise<PessoaJuridicaModel> {
    const resp = (await apiAxios.post<PessoaJuridicaModel>("/pessoaJuridica/salvar", pessoaJuridica)).data;
    return resp;
}

export async function updatePessoaJuridica(pessoaJuridica: PessoaJuridicaModel): Promise<PessoaJuridicaModel> {
    const resp = (await apiAxios.put<PessoaJuridicaModel>("/pessoaJuridica/atualizar", pessoaJuridica, {params: {pesId: pessoaJuridica.pesId}})).data;
    return resp;
}

export async function savePessoaFisica(pessoaFisica: PessoaFisicaModel): Promise<PessoaFisicaModel> {
    const resp = (await apiAxios.post<PessoaFisicaModel>("/pessoaFisica/salvar", pessoaFisica)).data;
    return resp;
}

export async function updatePessoaFisica(pessoaFisica: PessoaFisicaModel): Promise<PessoaFisicaModel> {
    const resp = (await apiAxios.put<PessoaFisicaModel>("/pessoaFisica/atualizar", pessoaFisica, {params: {pesId: pessoaFisica.pesId}})).data;
    return resp;
}