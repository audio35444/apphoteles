class Review{
  constructor(id,title,reviewText,points,uriPhoto){
    this.id=id;
    this.title=title;
    this.reviewText=reviewText;
    this.points=points;
    this.uriPhoto=uriPhoto;
  }
}
const JSONReviews =[];
JSONReviews.push(new Review(1,'Mas o menos','Perdimos una maleta y nadie supo nada',3,'http://files.softicons.com/download/animal-icons/all-animals-icons-by-archigraphs/png/512/BlackSheep_archigraphs.png'));
JSONReviews.push(new Review(2,'No estuvo tan bueno','No nos devolvieron la plata',2,'http://icons.iconarchive.com/icons/visualpharm/animals/256/Panda-icon.png'));
JSONReviews.push(new Review(3,'Genial muy recomendable','Nos sentimos parte de un equipo, donde cada uno podia ayudar a que el lugar sea mejor',5,'http://files.softicons.com/download/animal-icons/animals-icons-by-turbomilk/png/256/chinchilla.png'));
JSONReviews.push(new Review(4,'Lo recomiendo 100%','Siempre nos atendieron muy bien, reian y compartian muchos momentos con nosotros',5,'http://files.softicons.com/download/animal-icons/plastic-farm-icons-by-archigraphs/png/512/HippoPorcelain_Vista_Archigraphs.png'));
JSONReviews.push(new Review(5,'Si o si hay que volver','El mejor lugar al que fuimos, tenemos que volver si o si y saludar a todos nuestros amigos, porque hicimos muchos amigos',5,'http://files.softicons.com/download/system-icons/tux-penguin-icons-by-yellow-icon/png/256/Penguin_1.png'));
JSONReviews.push(new Review(6,'Muy bueno','Nos respondieron las dudas, y nos dijeron lo que queriamos, lo recomendamos',3,'http://icons.iconarchive.com/icons/visualpharm/animals/256/Dolphin-icon.png'));
JSONReviews.push(new Review(7,'Flojo en muchas cosas','la verdad a atencion muy floja, la comida fea, la room no era de lo mejor y nos trataron feo cuando preguntamos como llegar a la playa',2,'http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080526/1211812553.png'));


module.exports = JSONReviews;
