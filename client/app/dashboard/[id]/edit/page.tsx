
'use client';
import { FormEventHandler, useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { editarContacto, obtenerPorId } from '@/app/api';
import { Contactos } from '@/app/types/contacto';

export default function EditarContacto({ params }: { params: { id: number }}) {

  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    obtenerPorId(params.id)
      .then((res) => {
        setName(res.contact_name);
        setPhone(res.contact_phone);
        setEmail(res.contact_email);
      });
  }, [])

  const editar: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newContacto: Contactos = {
      contact_id: params.id,
      name: name,
      phone: phone,
      email: email,
    }
    
    editarContacto(newContacto);

    router.replace('/dashboard');
    router.refresh();
    
    };
    return (
      <form className="flex flex-col justify-center items-center gap-4 border-2 border-black p-12 rounded-lg"  onSubmit={editar}>
        <Link href='/dashboard'>
          <button className="bg-black hover:bg-gray-500 text-white p-2 rounded">Volver</button>
        </Link>

        <div className='flex flex-col items-start'>
          <label>Nombre</label>
          <input 
            defaultValue={name}
            className='outline-none p-2 text-black border-2 border-black w-72 rounded'
            type="text" 
            name="nombre" 
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='flex flex-col items-start'>
          <label>Telefono</label>
          <input 
            defaultValue={phone}
            className='outline-none p-2 text-black border-2 border-black w-72 rounded'
            type="text" 
            name="telefono"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className='flex flex-col items-start'>
          <label>Correo</label>
          <input 
           defaultValue={email}
            className='outline-none p-2 text-black border-2 border-black w-72 rounded'
            type="email" 
            name="correo" 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button 
          type="submit" 
          className="bg-orange-400 hover:bg-orange-500 px-2 w-20 h-12 mx-2 rounded">
            Editar
        </button>

      </form>
    )
  }