import Link from "next/link";
import Lista from "../components/Lista";
import { Contactos } from "../types/contacto";
import { obtenerContactos } from "../api";

export default async function Dashboard() {

    const contactos: Array<Contactos> = await obtenerContactos();

    return (
      <main className="flex flex-col w-3/4 justify-center items-center gap-2">
  
        <div className="flex gap-2">
          <input type="text" className="h-12 border-2 border-black outline-none p-2 rounded" />
          <Link href='dashboard/create'>
            <button className="bg-green-400 px-4 py-2 rounded h-12">Nuevo +</button>
          </Link>
        </div>

        <Lista contactos={contactos} />
        
      </main> 
    )
  }