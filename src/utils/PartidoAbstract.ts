
export type Equipo = {
    nombre: string;
    logo: string;
};

export abstract class PartidoAbstract {
    public abstract local: Equipo;
    public abstract visitante: Equipo;
    public abstract fecha?: string;
    public abstract hora?: string;
    public abstract lugar?: string;
    public abstract goles_local?: number;
    public abstract goles_visitante?: number;
    public abstract link: string;  
}