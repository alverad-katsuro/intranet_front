import { Sidebar } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";

export default function SideBarAnexo() {
    return (
        <>
            <Sidebar className="w-fit">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="/anexo"
                            icon={AiOutlineSearch}
                        >
                            Atualizar Anexo
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/anexo/cadastro"
                            icon={FaWpforms}
                        >
                            Cadastar Anexo
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/anexo/revogar"
                            icon={FaWpforms}
                        >
                            Revogar Anexo
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </>
    )
}