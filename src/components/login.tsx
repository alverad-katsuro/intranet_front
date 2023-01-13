import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { SystemUserLoginModel } from "../model/kernel/systemuser/SystemUserLoginModel";


export default function Login() {
    const [isOpen, setIsOpen] = useState(false);

    const [usuario, setUsuario] = useState<SystemUserLoginModel>({});
    function fazendoLogin() {
        console.log("fazendo login");
        console.log(usuario);
    }

    return (
        <>
            <React.Fragment>
                <Button onClick={() => setIsOpen(!isOpen)}>
                    Login
                </Button>
                <Modal
                    show={isOpen}
                    size="2xl"
                    popup={true}
                    onClose={() => setIsOpen(!isOpen)}
                >
                    <Modal.Header />
                    <Modal.Body>
                        <form onSubmit={fazendoLogin} method="post">
                            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
                                    Login na Intranet
                                </h3>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="usuario"
                                            value="Usuario"
                                        />
                                    </div>
                                    <TextInput
                                        id="usuario"
                                        type="text"
                                        placeholder="nome.nome"
                                        required={true}
                                        className="mx-auto"
                                        onChange={(e) => { usuario.susrLogin = e.target.value }}
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="password"
                                            value="Senha"
                                        />
                                    </div>
                                    <TextInput
                                        id="password"
                                        type="password"
                                        required={true}
                                        onChange={(e) => { usuario.susrPassword = e.target.value }}
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="remember" />
                                        <Label htmlFor="remember">
                                            Lembre-me
                                        </Label>
                                    </div>

                                </div>
                                <div>
                                    <Button type="submit" className="mx-auto w-full">
                                        Login
                                    </Button>
                                </div>

                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        </>
    )
}