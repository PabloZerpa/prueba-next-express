import { Contactos } from "./types/contacto";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const obtenerContactos = async (): Promise<Contactos> => {
    const res = await fetch(`${baseUrl}`);
    const contactos = await res.json();
    return contactos;
};

export const obtenerPorId = async (id: number): Promise<Contactos> => {
    const res = await fetch(`${baseUrl}/${id}`);
    const contactos = await res.json();
    return contactos[0];
};

export const agregarContacto = async (contacto: Contactos): Promise<Contactos> => {
    const res = await fetch(`${baseUrl}/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(contacto)
    });

    const newContacto = await res.json();
    return newContacto;
};

export const editarContacto = async (contacto: Contactos): Promise<Contactos> => {
    const res = await fetch(`${baseUrl}/${contacto.contact_id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(contacto)
    });

    const editContacto = await res.json();
    return editContacto;
}

export const borrarContacto = async (id:number): Promise<Contactos> => {
    const res = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    });
    const contacto = await res.json();
    return contacto;
}

export const eliminarContacto = (name: string, id: number): any => {
    if (confirm(`Desea eliminar de sus contactos a ${name}`) == true) {
        borrarContacto(id);
    }
}