import no_preview from "./images/no_preview.png"

function Producto (id, nombre, categ, precio, foto){
    this.id = id;
    this.nombre = nombre;
    this.categ = categ;
    this.precio = precio;
    this.foto = foto;
} 

function agregarFoto (prod){
    if(!prod.foto){
        prod.foto = no_preview;
    };
}

let productos = [new Producto("1718", "Eje Drean", "Repuestos", "4900"),
                new Producto("1719", "Eje Drean Copia", "Repuestos", "2900"),
                new Producto("2082", "Forzador de Unidad Exterior", "Repuestos", "13000"),
                new Producto("10219", "Forzador de Unidad Interior", "Repuestos", "11500"),
                new Producto("2561", "Pestañadora 1/4 - 5/8", "Herramientas", "13100"),
                new Producto("1666", "Dobladora de caño 1/4 5/16 3/8", "Herramientas", "3999"),
                new Producto("1667", "Dobladora de caño 1/2", "Herramientas", "11999"),
                new Producto("1668", "Dobladora de caño 5/8", "Herramientas", "12499"),
                new Producto("63", "Aire Surrey 5000W", "Electro", "280000"),
                new Producto("64", "Aire Surrey 6350W", "Electro", "340000"),
                new Producto("10686", "Televisor Hitachi 50 4K", "Electro", "109500"),
                new Producto("10696", "Televisor Sansei 32", "Electro", "50000")];

productos.forEach(agregarFoto);

export default productos;