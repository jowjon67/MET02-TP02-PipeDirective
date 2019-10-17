export class Donnees {

    constructor(
        public id: number,
        public civilite: number,
        public nom: string,
        public prenom: string,
        public telFixe: string,
        public telPort: string,
        public login: string,
        public motPasse1: string,
        public motPasse2: string,
        public adresse: string,
        public pays: number,
        public cp: string
        
      ) {  }
  
  }