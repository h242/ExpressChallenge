const self = {}

var generos = [{nombre:'Classic Rock',
                src:"/images/classicRock.png"}
                ,

                {nombre:'Psychedelic Rock',
                src: "/images/psychedelicRock.png"}
                ,

                {nombre: 'Grunge',
                src:"/images/grunge.jpg"}
                ,

                {nombre:'Soul',
                src:"/images/soul.jpg"}
                ,

                {nombre: 'Folk',
                src:"/images/folk.jpg"}
                ,

                {nombre: 'Clásica',
                src:"/images/classical.jpg"}
                ,

                {nombre: 'Alternativo',
                src:"/images/alternative.png"}
                ,

                {nombre: 'Electro-Pop',
                src:"/images/electropop.jpg"}
                ,

                {nombre: 'BritPop',
                src:"/images/britpop.jpg"}
                ,

                {nombre: 'Electrónica',
                src:"/images/electronic.jpg"}]
               
			
//son 10, o sea 9 contados


self.genre = function(req, res, next) {

  res.render('generos', { title3: 'Nuestra selección de géneros', seleccionGeneros: generos});
};

/*
//CAMBIAR!!!
router.get('/generos/:seleccionado', function(req, res, next) {
	for (var i = generos.length - 1; i >= 0; i--) {

		if (generos[i].codigo === req.params.seleccionado) {
			  res.render('codigo', { title3: 'Qué buena elección!', cds: disks[i]});
			  return;
		}
	}
	res.send(404)

});
*/

module.exports = self;