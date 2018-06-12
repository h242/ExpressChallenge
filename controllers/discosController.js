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

                {nombre: 'Clasica',
                src:"/images/clasical.jpg"}
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

                {nombre: 'Electronica',
                src:"/images/electronic.jpg"}]



var disks = [{  titulo: 'Unplugged in NY',
                autor: 'Nirvana',
                genero: '3',
                img:'/images/unplugged.jpg',
                año: '1995',
                codigo: '001'
             },
             {  titulo: 'The Doors',
                autor: 'The Doors',
                genero: '1',
                img:'/images/thedoors.jpg',
                año: '1967',
                codigo: '002'
             },
             {  titulo: 'Strange Days',
                autor: 'The Doors',
                genero: '1',
                img:'/images/thedoors.jpg',
                año: '1967',
                codigo: '003'
             },
             {  titulo: ' The Soft Parade',
                autor: 'The Doors',
                genero: '1',
                img:'/images/thedoors.jpg',
                año: '1969',
                codigo: '004'
             },
             {  titulo: 'Morrison Hotel',
                autor: 'The Doors',
                genero: '1',
                img:'/images/thedoors.jpg',
                año: '1970',
                codigo: '005'
             },
             {  titulo: 'Waiting For The Sun',
                autor: 'The Doors',
                genero: '1',
                img:'/images/thedoors.jpg',
                año: '1968',
                codigo: '006'
             },
             {  titulo: 'LA Woman',
                autor: 'The Doors',
                genero: '1',
                img:'/images/thedoors.jpg',
                año: '1971',
                codigo: '007'
             },
             {  titulo: 'Speak and Spell',
                autor: 'Depeche Mode',
                genero: '7',
                img:'/images/depeche.png',
                año: '1981',
                codigo: '008'
             },
             {  titulo: 'A Broken Frame',
                autor: 'Depeche Mode',
                genero: '7',
                img:'/images/depeche.png',
                año: '1982',
                codigo: '009'
             },
             {  titulo: 'Construction Time Again',
                autor: 'Depeche Mode',
                genero: '7',
                img:'/images/depeche.png',
                año: '1983',
                codigo: '010'
             },
             {  titulo: 'Some great Reward',
                autor: 'Depeche Mode',
                genero: '7',
                img:'/images/depeche.png',
                año: '1984',
                codigo: '011'
             },
             {  titulo: 'Black Celebration',
                autor: 'Depeche Mode',
                genero: '7',
                img:'/images/depeche.png',
                año: '1986',
                codigo: '012'
             },
             {  titulo: 'Music for the Masses',
                autor: 'Depeche Mode',
                genero: '7',
                img:'/images/depeche.png',
                año: '1987',
                codigo: '013'
             },
             {  titulo: 'I Created Disco',
                autor: 'Calvin Harris',
                genero: '9',
                img:'/images/CHMotion.jpg',
                año: '2007',
                codigo: '014'
             },
             {  titulo: 'Ready for the Weekend',
                autor: 'Calvin Harris',
                genero: '9',
                img:'/images/CHMotion.jpg',
                año: '2009',
                codigo: '015'
             },
             {  titulo: '18 Months',
                autor: 'Calvin Harris',
                genero: '9',
                img:'/images/CHMotion.jpg',
                año: '2012',
                codigo: '016'
             },
             {  titulo: 'Motion',
                autor: 'Calvin Harris',
                genero: '9',
                img:'/images/CHMotion.jpg',
                año: '2014',
                codigo: '017'
             },
             {  titulo: 'Funk Wav Bounces Vol.1',
                autor: 'Calvin Harris',
                genero: '9',
                img:'/images/CHMotion.jpg',
                año: '2017',
                codigo: '018'
             },
             {  titulo: 'Please Please Me',
                autor: 'The Beatles',
                genero: '8',
                img:'/images/beatles.jpg',
                año: '1963',
                codigo: '019'
             },
             {  titulo: 'With The Beatles',
                autor: 'The Beatles',
                genero: '8',
                img:'/images/beatles.jpg',
                año: '1963',
                codigo: '020'
             },
             {  titulo: "A Hard Day's Night",
                autor: 'The Beatles',
                genero: '8',
                img:'/images/beatles.jpg',
                año: '1964',
                codigo: '021'
             },
             {  titulo: 'Beatles for Sale',
                autor: 'The Beatles',
                genero: '8',
                img:'/images/beatles.jpg',
                año: '1964',
                codigo: '022'
             },
             {  titulo: 'Help',
                autor: 'The Beatles',
                genero: '8',
                img:'/images/beatles.jpg',
                año: '1965',
                codigo: '023'
             },
             {  titulo: 'Rubber Soul',
                autor: 'The Beatles',
                genero: '8',
                img:'/images/beatles.jpg',
                año: '1965',
                codigo: '024'
             },
             {  titulo: 'Revolver',
                autor: 'The Beatles',
                genero: '8',
                img:'/images/beatles.jpg',
                año: '1966',
                codigo: '025'
             },
             {  titulo: "Sgt. Peper's Lonely Hearts Club Band",
                autor: 'The Beatles',
                genero: '8',
                img:'/images/beatles.jpg',
                año: '1967',
                codigo: '026'
             },
             {  titulo: 'Magical Mystery Tour',
                autor: 'The Beatles',
                genero: '8',
                img:'/images/beatles.jpg',
                año: '1967',
                codigo: '027'
             }];

var aleatorias = random(disks);

//CAMBIE EL GENERO, LA CONSIGNA PIDE QUE EL GENERO:ID ---> HAGA REFERENCIA A
//LA POSICION DEL GENERO DENTRO DEL ARRAY DE GENEROS



self.seleccion= function(req, res, next) {

  res.render('discos', { title4: 'Nuestra mejor selección para ti', detalleDiscos: disks});
};

//funcion dentro de funcion, hago una o dos????

function random(a){
    var j, x, i;

    for(i=a.length -1; i>0; i--){
        j=Math.floor(Math.random()*(i+1));

        x=a[i];
        a[i]= disks[j];
        a[j]=x;
    }
        return a;
};

self.recorro= function(req, res, next) {

    let disco = {};

	for (var i = disks.length - 1; i >= 0; i--) {

		if (disks[i].codigo === req.params.seleccionado) {
			  disco = disks[i];			  
		}
	}
    console.log(disco);
    res.render('codigo', { title5: 'Seleccionaste este disco:', disco: disco});
	
};

module.exports= self