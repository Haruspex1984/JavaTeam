export interface Stagiaire {
  id : number
  firstname: string
  lastname: string
  image : string;
  birthdate : Date;
  qualities: Quality[]
  comments : Comment[]

}

export interface Quality {
  content: string
}

export interface Comment{
  author : string,
  content : string,
  stagiaireId : number,

  creationDate : Date
}
