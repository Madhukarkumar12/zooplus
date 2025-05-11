import zebra from '../assets/zebra.png'
import giraffe from '../assets/giraffe.png';
import ostrich from '../assets/ostrich.jpg';
import gazeles from '../assets/gazeles.jpg';
import field1 from '../assets/field1.jpg';
import field2 from '../assets/field2.jpg';
import field3 from '../assets/field3.jpg';
import field4 from '../assets/field4.jpg';
import field5 from '../assets/field5.jpg';
import Orangutans from '../assets/orangutans.jpg';
import Toucans from '../assets/toucans.jpg';




export const cardData = [
    {
        heading: "Savanna Habitat",
        images: [giraffe,zebra,ostrich,gazeles],
        imageHeading:"Giraffes, Zebras, Ostriches, Gazelles",
        description:"Experience the vast African plains where giraffes gracefully roam alongside zebras and gazelles. Watch as ostriches sprint across the open landscape, bringing the savanna to life.",
        field:field1
    },
    {
        heading: "Treetop Rainforest",
        images: [Orangutans, Toucans, giraffe, ostrich],
        imageHeading:"Orangutans, Toucans, Sloths, Jaguars",
        description:"High in the lush rainforest canopy, orangutans swing through the branches as toucans call from above. Below, jaguars move silently while sloths rest in the thick, leafy foliage.",
        field:field2
    },
    {
        heading: "Coastal Cliffs",
        images: [Orangutans, Toucans, giraffe, ostrich],
        imageHeading:"Sea Lions, Penguins, Puffins, Seagulls",
        description:"Along rugged shores, sea lions bask in the sun while penguins dive into cold waters.Puffins soar overhead, filling the air with energy.",
        field:field3
    },
    {
        heading: "Predator Ridge",
        images: [Orangutans, Toucans, giraffe, ostrich],
        imageHeading:"Lions, Tigers, Cheetahs, Snow Leopards",
        description:"Powerful big cats rule this terrain, where lions rest in the sun, tigers prowl through dense brush, and cheetahs dash across open ground.",
        field:field4
    },
    {
        heading: "Riverbanks",
        images: [Orangutans, Toucans, giraffe, ostrich],
        imageHeading:"Alligators, Turtles, Otters, Capybaras",
        description:"Along the winding river, alligators lurk in still waters while otters dive playfully. Turtles rest on rocks as capybaras graze nearby.",
        field:field5
    }
]