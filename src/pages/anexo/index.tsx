import { Alert } from 'flowbite-react';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { HiInformationCircle } from "react-icons/hi";
import { getAnexoCategoriasAtivos, getAnexoDominiosAtivos, getAnexosAtivos, getAnexoSubCategoriasAtivos, updateAnexo } from '../../api/api';
import BuscaAnexo from '../../components/anexo/BuscaAnexo';
import FormularioAnexo from '../../components/anexo/FormularioAnexo';
import SideBarAnexo from '../../components/anexo/SideBarAnexo';
import { AnexoErrorModel } from '../../model/kernel/anexo/errors/AnexoErrorModel';
import { AnexoModelRequest } from '../../model/kernel/anexo/request/AnexoModelRequest';
import { AnexoCategoriaModel } from '../../model/kernel/anexo/response/AnexoCategoriaModel';
import { AnexoDominioModel } from '../../model/kernel/anexo/response/AnexoDominioModel';
import { AnexoSubCategoriaModel } from '../../model/kernel/anexo/response/AnexoSubCategoriaModel';


export default function Pessoa() {
    const [anexo, setAnexo] = useState<AnexoModelRequest>({})

    const [errosAnexo, setErrosAnexo] = useState<AnexoErrorModel>({})

    const [alertOpen, setAlertOpen] = useState<boolean>(false);

    const [anexos, setAnexos] = useState<AnexoModelRequest[]>([]);

    const [anexoDominios, setAnexoDominios] = useState<AnexoDominioModel[]>([]);

    const [anexoCategorias, setAnexoCategorias] = useState<AnexoCategoriaModel[]>([]);

    const [anexoSubCategorias, setAnexoSubCategorias] = useState<AnexoSubCategoriaModel[]>([]);

    const [editavel, setEditavel] = useState<boolean>(false);

    const [valueSearch, setNomeBusca] = useState<string>("");

    const [alertMessenger, setAlertMessenger] = useState<string>("");

    useEffect(() => {
        if(anexoDominios.length == 0 || anexoCategorias.length == 0 || anexoSubCategorias.length == 0) {
            getAnexoDominiosAtivos().then((ad) => setAnexoDominios(ad)).catch((error) => {            
                switch (error.code) {                        
                    case "ERR_NETWORK":
                    setAlertMessenger(`Error: Não foi possivel se conectar a base de dados`);
                    setAlertOpen(true);
                    break;
    
                    default:
                        setAlertMessenger(`Error: ${error.code}`);
                        setAlertOpen(true);
                        break;
                }
            });
        };
    }, [])

    function changeEditavel() {
        if (editavel == true) {
            Router.reload();
        }
        setEditavel(!editavel);
    }

    function onClickBuscaCategoria(idAnexoDominio: number){
        setAnexoCategorias([]);
        setAnexoSubCategorias([]);
        
        getAnexoCategoriasAtivos(idAnexoDominio).then((ac) => setAnexoCategorias(ac)).catch((error) => {            
            switch (error.code) {                        
                case "ERR_NETWORK":
                setAlertMessenger(`Error: Não foi possivel se conectar a base de dados`);
                setAlertOpen(true);
                break;

                default:
                    setAlertMessenger(`Error: ${error.code}`);
                    setAlertOpen(true);
                    break;
            }
        });
        if (anexo.idAnexoSubCategoria) {
            
        }
    }

    function onClickBuscaSubCategoria(idAnexoCategoria: number){
        setAnexoSubCategorias([]);

        getAnexoSubCategoriasAtivos(idAnexoCategoria).then((sca) => setAnexoSubCategorias(sca)).catch((error) => {            
            switch (error.code) {                        
                case "ERR_NETWORK":
                setAlertMessenger(`Error: Não foi possivel se conectar a base de dados`);
                setAlertOpen(true);
                break;

                default:
                    setAlertMessenger(`Error: ${error.code}`);
                    setAlertOpen(true);
                    break;
            }
        });
    }

    function onSubmitBusca() {
        const resp = getAnexosAtivos(valueSearch);
        resp.then((anexos) => {
            if (anexos.length == 0) {
                setAlertMessenger(`Aviso: Não foi encontrado a anexo: ${valueSearch}`);
                setAlertOpen(true);
                setTimeout(() => setAlertOpen(false), 5000);
            } else {
                setAnexos(anexos);
            }
        }).catch((error) => {            
            switch (error.code) {
                case "ERR_BAD_REQUEST":
                    setAlertMessenger(`Aviso: Não foi encontrado a anexo: ${valueSearch}`);
                    setAlertOpen(true);
                    setTimeout(() => setAlertOpen(false), 5000);
                    break;
                    
                    case "ERR_NETWORK":
                    setAlertMessenger(`Error: Não foi possivel se conectar a base de dados`);
                    setAlertOpen(true);
                    break;

                default:
                    setAlertMessenger(`Error: ${error.code}`);
                    setAlertOpen(true);
                    break;
            }
        });
    }

    function onClickSalvar() {
        setErrosAnexo({})
        console.log(anexo)
        if (anexo.arquivo?.size != null && anexo.arquivo!.size > 0) {
            const resp = updateAnexo(anexo);
            resp.then((r) => {
                setAnexo(r);
                setAlertMessenger(`Sucesso: Os dados foram gravados com sucesso.`);
                setAlertOpen(true);
                setTimeout(() => {setAlertOpen(false); Router.reload()}, 5000);
            }).catch((error) => { console.log(anexo, error)  
                switch (error.code) {
                    case "ERR_BAD_REQUEST":
                        setAlertMessenger(`Aviso: Não foi possivel salvar as alterações`);
                        setErrosAnexo({...error.response.data })
                        setAlertOpen(true);
                        setTimeout(() => setAlertOpen(false), 5000);
                        break;
                        
                        case "ERR_NETWORK":
                        setAlertMessenger(`Error: Não foi possivel se conectar a base de dados`);
                        setAlertOpen(true);
                        break;
    
                    default:
                        setAlertMessenger(`Error: ${error.code}`);
                        setAlertOpen(true);
                        break;
                }
            });
        } else {
            setAlertMessenger(`Aviso: Não foi submetido anexado.`);
            setAlertOpen(true);
            setTimeout(() => setAlertOpen(false), 5000);
        }
    }

    function selecionaAnexo(anexoEscolhida: AnexoModelRequest) {
        setAnexo(anexoEscolhida);        
        if (anexoEscolhida.idAnexoDominio != null) {
            onClickBuscaCategoria(anexoEscolhida.idAnexoDominio);
        }
        if (anexoEscolhida.idAnexoCategoria != null) {
            onClickBuscaSubCategoria(anexoEscolhida.idAnexoCategoria);
        }
        anexos.length = 0;
    }

    return (
        <>
            <Alert
                withBorderAccent={true}
                color={alertMessenger.startsWith("Sucesso:") ? "success" : alertMessenger.startsWith("Error:") ? "failure" : "warning"}
                onDismiss={() => { setAlertOpen(false); }}
                icon={HiInformationCircle}
                className={alertOpen ? "" : "hidden"}
            >
                <span>
                    {alertMessenger}
                </span>
            </Alert>
            <div className='mt-10 sm:px-32 w-full text-center text-black dark:text-white'>
                <h1>Busca Anexo por Dominio</h1>
            </div>
            <div className="p-10 w-full grid grid-cols-1 md:grid-cols-12">
                <div className="col-span-2 flex self-center">
                    <SideBarAnexo></SideBarAnexo>
                </div>
                <div className="md:col-span-10 md:ml-28 lg:ml-16 xl:ml-0">
                    <BuscaAnexo className='w-full mb-10' onClick={onSubmitBusca} onSelect={selecionaAnexo} anexos={anexos} anexoEscolhido={anexo} onChange={setNomeBusca} valueSearch={valueSearch}></BuscaAnexo>
                    <FormularioAnexo editavel={editavel} errosAnexo={errosAnexo} anexo={anexo} setAnexo={setAnexo} anexoCategoria={anexoCategorias} anexoDominio={anexoDominios} anexoSubCategoria={anexoSubCategorias} onClickSalvar={onClickSalvar} onClickEditar={changeEditavel} onClickBuscaCategoria={onClickBuscaCategoria} onClickBuscaSubCategoria={onClickBuscaSubCategoria}></FormularioAnexo>
                </div>
            </div>
        </>
    )
}