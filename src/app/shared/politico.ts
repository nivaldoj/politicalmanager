export class Politico {
  constructor(
    public id: string,
    public tipo: string,
    public ptsGastos: string,
    public ptsDiscurso: string,
    public ptsVotacao: string,
    public nome?: string,
    public foto?: string,
    public pontuacaoTotal?: string
  ) { }
}
