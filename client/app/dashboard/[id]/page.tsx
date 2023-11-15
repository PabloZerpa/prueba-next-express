'use client'
import { eliminarContacto, obtenerPorId } from "@/app/api";
import { Contactos } from "@/app/types/contacto";
import Link from "next/link";

export default async function PageContacto({ params }: { params: { id: number } }) {

    const contacto: Contactos = await obtenerPorId(params.id);

    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <Link href='/dashboard'><button className="bg-black hover:bg-gray-500 text-white p-2 rounded">Volver</button></Link>

            <div className="text-4xl font-bold">{contacto.contact_name}</div>
            <div className="text-2xl">{contacto.contact_phone}</div>
            <div className="text-2xl">{contacto.contact_email}</div>

            <div className="flex gap-4">
                <Link href={`/dashboard`}>
                    <button className="bg-blue-200 hover:bg-blue-400 px-2 w-20 h-12 mx-2 rounded">Volver</button>
                </Link>

                <Link href={`/${contacto.contact_id}/edit`}>
                    <button className="bg-yellow-200 hover:bg-yellow-400 px-2 w-20 h-12 mx-2 rounded">Editar</button>
                </Link>

                <button 
                    className="bg-red-200 hover:bg-red-400 px-2 w-20 h-12 mx-2 rounded"
                    onClick={() => eliminarContacto(contacto.contact_name, contacto.contact_id)}
                >
                    Eliminar
                </button>
            </div>

        </div>
    )
  }