export class Serie {
    constructor(
        public id: Number,
        public name: string,
        public sinopsis: string,
        public fecha: string,
        public estado: boolean,
        public nombrePortada: any,
        public portada: any,
        
        public accion: Number = 0,
        public aventura: Number = 0,
        public comedia: Number = 0,
        public cosasdelavida: Number = 0,
        public ecchi: Number = 0,
        public fantasia: Number = 0,
        public magia: Number = 0,
        public sobrenatural: Number = 0,
        public horror: Number = 0,
        public misterio: Number = 0,
        public psicologico: Number = 0,
        public romance: Number = 0,
        public ficcion: Number = 0,
        public deporte: Number = 0,
        public reencarnacion: Number = 0,
        public vidaescolar: Number = 0
    ){

    }
}