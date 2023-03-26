  import Form from "./Componentes/Form"
  import axios from "axios";
  import { useState } from "react";

  function Contacto(){
    const [contactInformation, setContactInformation] = useState({nombre:"", phone:"", mensaje:"", email:""})

    const disableSubmit = {contactInformation.name && contactInformation.phone && contactInformation.mensaje && contactInformation.email}
    console.log(disableSubmit)
    const handleChange = (event)=>{
      const propertyValue= event.target.value
      const property= event.target.id
      setContactInformation({...contactInformation, [property]: propertyValue})
          
    }
      const handleSumit = (evento) =>{
        evento.preventDefault()
        console.log("La informacion ingresada es:",contactInformation)
        axios({
          method:"POST",
          url:"https://jsonplaceholder.typicode.com/posts",
          data: contactInformation

        }).then(
          response => console.log(response.data)
        ).catch(
          error=>console.log(error)
        )
       
      }
   
    return (
        <section id="Contacto">
            <h2>Contacto</h2>
            <Form handleChange={handleChange} handleSumit={handleSumit} disableSubmit={disableSubmit}/>
        </section>
    )
  };
  export default Contacto;