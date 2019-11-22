export class Servicio {


  private _nombre: string;
  private _descripcion: string;
  private _precio: string;

  
  constructor(_nombre:string, _precio:string, _descripcion:string) {
    this._nombre = _nombre;
    this._descripcion = _descripcion;
    this._precio = _precio;
  }

  set nombre(_nombre:string) {this._nombre = _nombre;}
  get nombre() {return this._nombre;}

  set descripcion(_descripcion:string) {this._descripcion = _descripcion;}
  get descripcion() {return this._descripcion;}
  
  set precio(_precio:string) {this._precio = _precio;}
  get precio() {return this._precio;}

  renderizarPlantilla() {
    
    return `<div class="card m-2">
      <div class="card-header" id="headingOne">
        <h2 class="mb-0">
          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            ${this.nombre}
          </button>
        </h2>
      </div>

      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div class="card-body">
          ${this.precio}
        </div>
        <div class="card-body body-weight-bold">
          ${"$"+this.descripcion}
        </div>
    </div>`


  }

}