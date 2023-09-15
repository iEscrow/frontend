import Botones from "@/app/components/marketplace/botones";

export default function ContacForm() {
  return (
    <div className="flex justify-center">
        <form  className="flex w-2/5 flex-col gap-4">
        <div className="flex gap-4">
            <input type="text" placeholder="Nombre" className="rounded p-2 placeholder:text-gray bg-input-gay" />
            <input type="email" placeholder="Email" className="rounded p-2 placeholder:text-gray bg-input-gay" />
        </div>
            <input type="text" placeholder="Asunto" className=" w-[32%] rounded p-2 placeholder:text-gray bg-input-gay" />
            <textarea placeholder="Escribe un comentario" className="rounded p-2 placeholder:text-gray bg-input-gay" name="" id="" cols="3" rows="10" />
            <Botones texto1={'VOLVER'} texto2={'ENVIAR'} link1={'/help-center'} link2={'/'}/>
    </form>
    </div>
  )
}
