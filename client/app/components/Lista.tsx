'use client'
import Link from "next/link";
import { Contactos } from "../types/contacto"
import { eliminarContacto } from "../api";

interface ListaProps {
    contactos: Contactos[]
}

const Lista: React.FC<ListaProps> = ({contactos}) => {
    return(
        <div className="border-black rounded p-8">

            <table className="table-fixed">
                <tbody>
                    {contactos.map((contacto, index) => {
                        return(
                            <tr key={index} className="border-2 border-black rounded-lg">
                                <td className="pr-32">{contacto.contact_name}</td>
                                <td>
                                    <Link href={`dashboard/${contacto.contact_id}`}>
                                        <button className="bg-blue-200 hover:bg-blue-400 px-2 w-20 mx-2 rounded">Ver</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link href={`dashboard/${contacto.contact_id}/edit`}>
                                        <button className="bg-yellow-200 hover:bg-yellow-400 px-2 w-20 mx-2 rounded">Editar</button>
                                    </Link>
                                </td>
                                <td>
                                    <button 
                                        className="bg-red-200 hover:bg-red-400 px-2 w-20 mx-2 rounded"
                                        onClick={() => eliminarContacto(contacto.contact_name, contacto.contact_id)}
                                    >
                                            Eliminar
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Lista;