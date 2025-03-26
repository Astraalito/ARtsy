import Artpiece from "../models/ArtPiece";

const artpieces = [
	{
		"id": 1,
		"titre": "Le Jardin des Délices",
		"auteur": "Jérome Bosch",
		"date": "1490-1510",
		"lieu": "Musée du Prado, Madrid",
		"description": [
		  "'Le Jardin des Délices' est un triptyque peint par Hieronymus Bosch, représentant une vision fascinante et symbolique du paradis, de la luxure terrestre et de l'enfer.",
		  "Le panneau de gauche illustre le Paradis avec Adam et Ève sous le regard de Dieu, entourés d'animaux exotiques et d'une nature idyllique.",
		  "Le panneau central est une scène foisonnante d'humanité livrée aux plaisirs charnels et aux merveilles fantastiques, créant un monde surréaliste où règne la sensualité.",
		  "Le panneau de droite dévoile une vision cauchemardesque de l'Enfer, où les âmes sont tourmentées par des créatures démoniaques et des punitions grotesques.",
		  "Chef-d'œuvre de la Renaissance flamande, ce tableau est une énigme visuelle et théologique, débordant de symboles et d'interprétations possibles."
		],
		"assetAdress": "/models/jardin.gltf"
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
		assetAdress:"/models/chat_blanc.gltf"
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
		assetAdress:"/models/fallen_angel.gltf"
	},
	{
		id: 4,
		titre: "Femme avec un parasol tourné vers la gauche",
		auteur: "Claude Monet",
		date: "1886",
		lieu: "Musée d'Orsay, Paris",
		description: [
			"'Femme avec un parasol tourné vers la gauche' est une œuvre impressionniste de Claude Monet, représentant une femme élégante avec un parasol dans un paysage ensoleillé.",
			"Monet capture la lumière naturelle et les couleurs vibrantes de la scène, utilisant des coups de pinceau visibles et une palette lumineuse. La femme, vêtue d'une robe blanche, se détache contre le fond vert et fleuri.",
			"L'œuvre est un exemple typique du style impressionniste, qui se concentre sur la capture de l'impression visuelle d'un moment fugace. Monet utilise la lumière et la couleur pour créer une atmosphère de sérénité et de beauté.",
			"La peinture invite le spectateur à apprécier la simplicité et la beauté de la nature, tout en explorant les effets changeants de la lumière et de l'ombre."
		],
		assetAdress:"/models/ombrelle.gltf"
	}
];

export default artpieces;