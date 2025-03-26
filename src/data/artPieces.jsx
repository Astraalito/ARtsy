import Artpiece from "../models/ArtPiece";

const artpieces = [
	{
		id: 1,
		titre: "Le Jardin des Délices",
		auteur: "Jérome Bosch",
		date: "1490-1510",
		lieu: "Musée du Prado, Madrid",
		description: [
			"'Le Jardin des Délices' est un triptyque peint par Hieronymus Bosch, représentant une vision fascinante et symbolique du paradis, de la luxure terrestre et de l'enfer.",
			"Le panneau de gauche illustre le Paradis avec Adam et Ève sous le regard de Dieu, entourés d'animaux exotiques et d'une nature idyllique.",
			"Le panneau central est une scène foisonnante d'humanité livrée aux plaisirs charnels et aux merveilles fantastiques, créant un monde surréaliste où règne la sensualité.",
			"Le panneau de droite dévoile une vision cauchemardesque de l'Enfer, où les âmes sont tourmentées par des créatures démoniaques et des punitions grotesques.",
			"Chef-d'œuvre de la Renaissance flamande, ce tableau est une énigme visuelle et théologique, débordant de symboles et d'interprétations possibles."
		],
		assetAdress: "/models/jardin.gltf"
	},
	{
		id: 2,
		titre: "Le Chat Blanc",
		auteur: "Pierre Bonnard",
		date: "1894",
		lieu: "Collection privée",
		description: [
			"'Le Chat Blanc' est une œuvre emblématique de Pierre Bonnard, représentant un chat blanc dans un intérieur domestique. La peinture capture un moment de tranquillité et d'intimité, typique du style de Bonnard.",
			"Bonnard est connu pour ses scènes intimistes, souvent peintes avec une palette de couleurs douces et une attention particulière à la lumière. 'Le Chat Blanc' illustre cette approche, avec une composition simple mais évocatrice.",
			"Le tableau reflète l'intérêt de Bonnard pour les sujets quotidiens et son habileté à transformer des scènes ordinaires en œuvres d'art poétiques et contemplatives.",
			"L'utilisation de la couleur et de la lumière dans 'Le Chat Blanc' crée une atmosphère paisible, invitant le spectateur à s'immerger dans la scène et à apprécier la beauté des moments simples."
		],
		assetAdress: "/models/chat_blanc.gltf"
	},
	{
		id: 3,
		titre: "L'Ange Déchu",
		auteur: "Alexandre Cabanel",
		date: "1847",
		lieu: "Musée Fabre, Montpellier",
		description: [
			"'L\'Ange Déchu' d'Alexandre Cabanel est une œuvre dramatique représentant la chute de Lucifer, l'ange déchu. La peinture capture le moment où Lucifer est banni du paradis, symbolisant la rébellion et la punition.",
			"Cabanel utilise une palette sombre et des contrastes marqués pour accentuer l'intensité émotionnelle de la scène. L'ange, représenté avec des ailes brisées et une expression de désespoir, est entouré de ténèbres, soulignant sa déchéance.",
			"L'œuvre explore des thèmes de rédemption, de chute et de lutte entre le bien et le mal. Elle invite à une réflexion sur les conséquences de la rébellion et de la désobéissance.",
			"'L\'Ange Déchu' est un exemple de l'art académique du XIXe siècle, combinant des éléments classiques avec une interprétation dramatique et émotionnelle."
		],
		assetAdress: "/models/fallen_angel.gltf"
	},
	{
		id: 4,
		titre: "Femme avec une ombrelle tourné vers la gauche",
		auteur: "Claude Monet",
		date: "1886",
		lieu: "Musée d'Orsay, Paris",
		description: [
			"'Femme avec un ombrelle tourné vers la gauche' est une œuvre impressionniste de Claude Monet, représentant une femme élégante avec un parasol dans un paysage ensoleillé.",
			"Monet capture la lumière naturelle et les couleurs vibrantes de la scène, utilisant des coups de pinceau visibles et une palette lumineuse. La femme, vêtue d'une robe blanche, se détache contre le fond vert et fleuri.",
			"L'œuvre est un exemple typique du style impressionniste, qui se concentre sur la capture de l'impression visuelle d'un moment fugace. Monet utilise la lumière et la couleur pour créer une atmosphère de sérénité et de beauté.",
			"La peinture invite le spectateur à apprécier la simplicité et la beauté de la nature, tout en explorant les effets changeants de la lumière et de l'ombre."
		],
		assetAdress: "/models/ombrelle.gltf"
	},
	{
		id: 5,
		titre: "Le Pandémonium",
		auteur: "John Martin",
		date: "1841",
		lieu: "Louvre, Paris",
		description: [
			"'Le Pandémonium' est une peinture dramatique de John Martin représentant la ville infernale imaginée par Milton dans 'Le Paradis Perdu'.",
			"Martin utilise des contrastes saisissants entre ombre et lumière pour donner une impression de grandeur et de désolation.",
			"L'œuvre évoque la puissance et la souffrance des damnés, capturant une vision grandiose et terrifiante de l'enfer.",
			"Les détails minutieux et la composition épique font de ce tableau une référence dans l'art romantique."
		],
		assetAdress: "/models/pandemonium.gltf"
	},
	{
		id: 6,
		titre: "La Grande Vague de Kanagawa",
		auteur: "Katsushika Hokusai",
		date: "1831",
		lieu: "Collection privée",
		description: [
			"'La Grande Vague de Kanagawa' est une estampe emblématique de l'artiste japonais Katsushika Hokusai, représentant une vague immense sur le point de s'abattre sur des bateaux.",
			"Cette œuvre est l'une des plus célèbres de la série 'Trente-six vues du mont Fuji', capturant la puissance et la beauté de la nature.",
			"Hokusai utilise des lignes dynamiques et des contrastes de couleurs pour créer une impression de mouvement et de force.",
			"L'estampe est un exemple marquant de l'art de l'ukiyo-e, influençant de nombreux artistes occidentaux et devenant une icône de l'art japonais."
		],
		assetAdress: "/models/vague.gltf"
	},
	{
		id: 7,
		titre: "Le Cri",
		auteur: "Edvard Munch",
		date: "1893",
		lieu: "Musée National, Oslo",
		description: [
			"'Le Cri' est une œuvre expressionniste d'Edvard Munch, représentant une figure humaine en proie à une angoisse existentielle, sur un pont avec un ciel tourmenté en arrière-plan.",
			"Cette peinture est l'une des plus célèbres de Munch, symbolisant l'angoisse et le désespoir de l'humanité.",
			"Munch utilise des lignes ondulées et des couleurs vives pour accentuer l'émotion intense de la scène.",
			"L'œuvre est considérée comme une représentation emblématique de l'angoisse moderne et a eu une influence durable sur l'art expressionniste."
		],
		assetAdress: "/models/le_cri.gltf"
	},
	{
		id: 8,
		titre: "Les Ambassadeurs",
		auteur: "Hans Holbein le Jeune",
		date: "1533",
		lieu: "National Gallery, Londres",
		description: [
			"'Les Ambassadeurs' est un double portrait peint par Hans Holbein le Jeune, représentant deux hommes riches et puissants entourés d'objets symboliques.",
			"La peinture est célèbre pour son utilisation de l'anamorphose, avec un crâne déformé au premier plan qui reprend sa forme normale lorsqu'il est vu sous un angle particulier.",
			"Holbein utilise des détails minutieux et une composition complexe pour explorer des thèmes de richesse, de pouvoir et de mortalité.",
			"L'œuvre est un exemple marquant de l'art de la Renaissance, combinant réalisme et symbolisme pour créer une image riche en significations."
		],
		assetAdress: "/models/ambassadors.gltf"
	},
	{
		id: 9,
		titre: "La Ronde de nuit",
		auteur: "Rembrandt",
		date: "1642",
		lieu: "Rijksmuseum, Amsterdam",
		description: [
			"'La Ronde de nuit' est une œuvre majeure de Rembrandt, représentant une compagnie de milice civile en mouvement, prête à partir en patrouille.",
			"La peinture est célèbre pour son utilisation dramatique de la lumière et de l'ombre, créant une scène dynamique et pleine de vie.",
			"Rembrandt utilise une composition complexe et des détails réalistes pour capturer l'énergie et la diversité des personnages.",
			"L'œuvre est un exemple emblématique de l'art baroque, explorant des thèmes de mouvement, de lumière et de caractère humain."
		],
		assetAdress: "/models/la_ronde.gltf"
	}
];

export default artpieces;
