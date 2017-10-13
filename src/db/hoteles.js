class Hotel {
  constructor(id,name,uri,serviceType,price,description,location,cancelacion,includes,habitaciones,services){
    this.id = id;
    this.name=name;
    this.uri=uri;
    this.serviceType=serviceType;
    this.price=price;
    this.description=description;
    this.location=location;
    this.cancelacion=cancelacion;
    this.includes=includes;
    this.habitaciones=habitaciones;
    this.services=services;
  }

}


//https://image.freepik.com/free-icon/rate-star-button_318-76714.jpg

var Hoteles =[];
Hoteles.push(new Hotel(1,'Burj Al Arab','http://t.wallpaperweb.org/wallpaper/buildings/1920x1080/Cityscapes_25.jpg',1.2,'10.900','EL hotel es un hotel de los tantos hoteles del mundo moderno encargado de la carga de datos','algun lugar','para realizar la cancelacion de los servicios debe ser con un tiempo muy grande para poder comprar o vender','lo incluido es todo lo que esta, y no aquello que no esta',[{cantPeople:6,cantBeds:14},{cantPeople:2,cantBeds:2},{cantPeople:4,cantBeds:3}],['https://image.freepik.com/free-icon/wifi-connection-signal-symbol_318-69277.jpg','https://image.freepik.com/free-icon/phone-fixed_318-33263.jpg','https://image.freepik.com/free-icon/sports-car_318-83661.jpg','https://image.freepik.com/free-icon/water-drop_318-78845.jpg','https://image.freepik.com/free-icon/restaurant-cutlery_318-98733.jpg']));
Hoteles.push(new Hotel(2,'Hotel Ferrero','http://www.hola.com/imagenes/viajes/2010102746176/hoteles/personajes/famosos/0-152-942/ferrero14-a.jpg',1.5,'8.700','EL hotel es un hotel de los tantos hoteles del mundo moderno encargado de la carga de datos','algun lugar','para realizar la cancelacion de los servicios debe ser con un tiempo muy grande para poder comprar o vender','lo incluido es todo lo que esta, y no aquello que no esta',[{cantPeople:16,cantBeds:4},{cantPeople:2,cantBeds:2},{cantPeople:4,cantBeds:3}],['https://image.freepik.com/free-icon/wifi-connection-signal-symbol_318-69277.jpg','https://image.freepik.com/free-icon/phone-fixed_318-33263.jpg','https://image.freepik.com/free-icon/sports-car_318-83661.jpg','https://image.freepik.com/free-icon/water-drop_318-78845.jpg','https://image.freepik.com/free-icon/restaurant-cutlery_318-98733.jpg']));
Hoteles.push(new Hotel(3,"Costa d' Este",'http://www.hola.com/imagenes/viajes/2010102746176/hoteles/personajes/famosos/0-152-945/gloria_estefa-a.jpg',1.0,'6.500','EL hotel es un hotel de los tantos hoteles del mundo moderno encargado de la carga de datos','algun lugar','para realizar la cancelacion de los servicios debe ser con un tiempo muy grande para poder comprar o vender','lo incluido es todo lo que esta, y no aquello que no esta',[{cantPeople:6,cantBeds:4},{cantPeople:42,cantBeds:2},{cantPeople:4,cantBeds:3}],['https://image.freepik.com/free-icon/wifi-connection-signal-symbol_318-69277.jpg','https://image.freepik.com/free-icon/phone-fixed_318-33263.jpg','https://image.freepik.com/free-icon/sports-car_318-83661.jpg','https://image.freepik.com/free-icon/water-drop_318-78845.jpg','https://image.freepik.com/free-icon/restaurant-cutlery_318-98733.jpg']));

Hoteles.push(new Hotel(4,'Hotel Las Vegas','http://media.expedia.com/hotels/1000000/150000/140600/140596/140596_275_z.jpg',5.0,'8.500','EL hotel es un hotel de los tantos hoteles del mundo moderno encargado de la carga de datos','algun lugar','para realizar la cancelacion de los servicios debe ser con un tiempo muy grande para poder comprar o vender','lo incluido es todo lo que esta, y no aquello que no esta',[{cantPeople:6,cantBeds:4},{cantPeople:2,cantBeds:2},{cantPeople:44,cantBeds:3}],['https://image.freepik.com/free-icon/wifi-connection-signal-symbol_318-69277.jpg','https://image.freepik.com/free-icon/phone-fixed_318-33263.jpg','https://image.freepik.com/free-icon/sports-car_318-83661.jpg','https://image.freepik.com/free-icon/water-drop_318-78845.jpg','https://image.freepik.com/free-icon/restaurant-cutlery_318-98733.jpg']));
Hoteles.push(new Hotel(5,'Estados Unidos Hotel','http://amazing.zone/fotosblog/max/CASTILLO_HEARST_PISCINA_1X.jpg',2.4,'4.500','EL hotel es un hotel de los tantos hoteles del mundo moderno encargado de la carga de datos','algun lugar','para realizar la cancelacion de los servicios debe ser con un tiempo muy grande para poder comprar o vender','lo incluido es todo lo que esta, y no aquello que no esta',[{cantPeople:6,cantBeds:4},{cantPeople:22,cantBeds:2},{cantPeople:4,cantBeds:3}],['https://image.freepik.com/free-icon/wifi-connection-signal-symbol_318-69277.jpg','https://image.freepik.com/free-icon/phone-fixed_318-33263.jpg','https://image.freepik.com/free-icon/sports-car_318-83661.jpg','https://image.freepik.com/free-icon/water-drop_318-78845.jpg','https://image.freepik.com/free-icon/restaurant-cutlery_318-98733.jpg']));
Hoteles.push(new Hotel(6,'Hotel Chaco','https://media-cdn.tripadvisor.com/media/photo-s/0e/15/46/6f/rendering-of-hotel-chaco.jpg',3.8,'1.550','EL hotel es un hotel de los tantos hoteles del mundo moderno encargado de la carga de datos','algun lugar','para realizar la cancelacion de los servicios debe ser con un tiempo muy grande para poder comprar o vender','lo incluido es todo lo que esta, y no aquello que no esta',[{cantPeople:6,cantBeds:4},{cantPeople:2,cantBeds:2},{cantPeople:4,cantBeds:3}],['https://image.freepik.com/free-icon/wifi-connection-signal-symbol_318-69277.jpg','https://image.freepik.com/free-icon/phone-fixed_318-33263.jpg','https://image.freepik.com/free-icon/sports-car_318-83661.jpg','https://image.freepik.com/free-icon/water-drop_318-78845.jpg','https://image.freepik.com/free-icon/restaurant-cutlery_318-98733.jpg']));


module.exports = Hoteles;
