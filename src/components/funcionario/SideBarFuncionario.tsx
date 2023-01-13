import { Sidebar } from "flowbite-react";
import { HiKey, HiUser } from "react-icons/hi";

export default function SideBarFuncionario() {
    return (
        <>
            <div className="w-fit">
                <Sidebar aria-label="Default sidebar example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                href="/funcionario/"
                                icon={HiUser}
                            >
                                Atualizar Funcionario
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/funcionario/cadastrar"
                                icon={HiUser}
                            >
                                Cadastrar Funcionario
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/funcionario/resetarPassword"
                                icon={HiKey}
                            >
                                Resetar Senha
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </>
    )
}