const Form = ()=> {
 return(
    <form onSubmit={props.handleSumbit}>
        
  <div class="mb-3">
    <label for="nombre" class="form-label">
        Nombre
    </label>
    <input type="text" class="form-control" id="nombre"/>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">
        Email
    </label>
    <input
     type="email" 
     class="form-control" 
     id="email" 
     aria-describedby="emailHelp"
        
     />
    <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
    </div>
  </div>
  <div class="mb-3 form-floting">
    <label for="phone" class="form-label">
        Telefono
    </label>
    <input type="string" class="form-control" id="phone"/>
  </div>
  <div class="form-floting">
   <textarea
    class="form-control"
    placeholder="Deje su mensaje"
    id="mensaje"
   
    ></textarea>
  <label for="mensaje"></label>
  </div>
  <button type="submit" class="btn btn-primary"disabled={props.disabledSubmit}>Enviar</button>
</form>
 );
};
export default Form