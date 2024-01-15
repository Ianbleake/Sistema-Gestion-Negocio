import { useForm } from "react-hook-form";

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

  return (

    <div className="container w-full min-h-[100VH] pt-16 pb-12">
        <h1 className="pricing-plan my-2">Contacto</h1>
        <form className="formulario" onSubmit={handleSubmit(enviar)}>

            <input type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingrese su e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingrese su teléfono" {...register("telefono")} />
            <input type="text" placeholder="Asunto de contacto" {...register("asunto")} />

            <button className="enviar" type="submit">Enviar</button>

        </form>
    </div>

  )
}

export default Contacto