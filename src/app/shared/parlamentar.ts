export class Parlamentar {
  constructor(
    public id: number,
    public nome: string,
    public foto: string,
    public tipo: string,
    public nomeParlamentar: string,
    public partido: string,
    public uf: string,
    public escalado?: boolean
  ){}
}
