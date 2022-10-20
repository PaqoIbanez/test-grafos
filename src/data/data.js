import { v4 as uuidv4 } from 'uuid';

// export const data = {
//    "nodes": [
//       {
//          "id": 0,
//          "label": "Interacciones eléctricas",
//       },
//       {
//          "id": 1,
//          "label": "Ley de Coulomb"
//       },
//       {
//          "id": 2,
//          "label": "Campo eléctrico y superposición"
//       },
//       {
//          "id": 3,
//          "label": "Potencial eléctrico y diferencia de potencial"
//       },
//       {
//          "id": 4,
//          "label": "Potencial eléctrico y energía potencial eléctrica."
//       },
//       {
//          "id": 5,
//          "label": "Cálculo del potencial y campo eléctrico para cargas distribuidas"
//       },
//    ],
//    "edges": [
//       {
//          "from": 1,
//          "to": 0,
//          "arrows": "to"
//       },
//    ]
// }

export const UFs = [
   {
      clave: 'F1011B',
      nombreUF: 'Análisis de sistemas eléctricos en ingeniería de procesos',
      semestre: 2,
      programas: ['IAL', 'IBT', 'IAG', 'IQ', 'IDS'],
      temas: [
         {
            id: uuidv4(),
            nombre: 'Electrostática',
            subtemas: [
               {
                  id: 'Interacciones eléctricas',
                  nombre: 'Interacciones eléctricas'
               },
               {
                  id: 'Ley de Coulomb',
                  nombre: 'Ley de Coulomb'
               },
               {
                  id: 'Campo eléctrico y superposición',
                  nombre: 'Campo eléctrico y superposición'
               },
               {
                  id: 'Potencial eléctrico y diferencia de potencial',
                  nombre: 'Potencial eléctrico y diferencia de potencial'
               },
               {
                  id: 'Potencial eléctrico y energía potencial eléctrica',
                  nombre: 'Potencial eléctrico y energía potencial eléctrica'
               },
               {
                  id: 'Cálculo del potencial y campo eléctrico para cargas distribuidas',
                  nombre: 'Cálculo del potencial y campo eléctrico para cargas distribuidas'
               },
               {
                  id: 'Dipolo eléctrico',
                  nombre: 'Dipolo eléctrico'
               },
               {
                  id: 'Ley de Gauss y aplicaciones para el cálculo de campo eléctrico',
                  nombre: 'Ley de Gauss y aplicaciones para el cálculo de campo eléctrico.               '
               },
            ]
         },
         {
            id: uuidv4(),
            nombre: 'Elementos de circuitos',
            subtemas: [
               {
                  id: 'Capacitancia, capacitor y energía almacenada',
                  nombre: 'Capacitancia, capacitor y energía almacenada'
               },
               {
                  id: 'Materiales dieléctricos y sus propiedades',
                  nombre: 'Materiales dieléctricos y sus propiedades'
               },
               {
                  id: 'Capacitores en circuitos',
                  nombre: 'Capacitores en circuitos'
               },
               {
                  id: 'Conceptos de corriente eléctrica y resistencia eléctrica',
                  nombre: 'Conceptos de corriente eléctrica y resistencia eléctrica'
               },
               {
                  id: 'Fuerza electromotriz',
                  nombre: 'Fuerza electromotriz'
               },
               {
                  id: 'Cálculo de la resistencia eléctrica',
                  nombre: 'Cálculo de la resistencia eléctrica'
               },
               {
                  id: 'Resistencias en circuitos',
                  nombre: 'Resistencias en circuitos'
               },
               {
                  id: 'Leyes de Kirchoff',
                  nombre: 'Leyes de Kirchoff'
               },
               {
                  id: 'Capacitancia y resistencias en circuitos',
                  nombre: 'Capacitancia y resistencias en circuitos'
               },
               {
                  id: 'Modelación analítica o numérica de circuitos eléctricos y sus variables asociadas',
                  nombre: 'Modelación analítica o numérica de circuitos eléctricos y sus variables asociadas'
               },
            ]
         },
         {
            id: uuidv4(),
            nombre: 'Integrales de línea',
            subtemas: [
               {
                  id: 'Parametrización',
                  nombre: 'Parametrización'
               },
               {
                  id: 'Función de potencial',
                  nombre: 'Función de potencial'
               },
               {
                  id: 'Teorema de Green',
                  nombre: 'Teorema de Green'
               },
            ]
         },
         {
            id: uuidv4(),
            nombre: 'Integrales de superficie',
            subtemas: [
               {
                  id: 'Cálculo de integrales de superficie haciendo uso de proyecciones',
                  nombre: 'Cálculo de integrales de superficie haciendo uso de proyecciones'
               },
               {
                  id: 'Cálculo del flujo eléctrico',
                  nombre: 'Cálculo del flujo eléctrico'
               },
            ]
         },
         {
            id: uuidv4(),
            nombre: 'Aplicación de la integral',
            subtemas: [
               {
                  id: 'Cálculo de resistencia eléctricas',
                  nombre: 'Cálculo de resistencia eléctricas'
               },
               {
                  id: 'Cálculo de capacitancias',
                  nombre: 'Cálculo de capacitancias'
               },
            ]
         },
         {
            id: uuidv4(),
            nombre: 'Ecuaciones diferenciales de primer orden',
            subtemas: [
               {
                  id: 'Solución de circuitos RC analíticamente',
                  nombre: 'Solución de circuitos RC analíticamente'
               },
               {
                  id: 'Solución de circuitos RC numéricamente',
                  nombre: 'Solución de circuitos RC numéricamente'
               },
            ]
         },
         {
            id: uuidv4(),
            nombre: 'Graficación en ambientes computacionales',
            subtemas: [
               {
                  id: 'Curvas paramétricas',
                  nombre: 'Curvas paramétricas'
               },
               {
                  id: 'Curvas en el espacio',
                  nombre: 'Curvas en el espacio'
               },
               {
                  id: 'Funciones escalares y vectoriales',
                  nombre: 'Funciones escalares y vectoriales'
               },
               {
                  id: 'Manipulación de gráficos 3D',
                  nombre: 'Manipulación de gráficos 3D'
               },
            ]
         },
         {
            id: uuidv4(),
            nombre: 'Solución de ecuaciones en una variable',
            subtemas: [
               {
                  id: 'Método de bisección',
                  nombre: 'Método de bisección'
               },
               {
                  id: 'Método de punto fijo y Newton-Raphson',
                  nombre: 'Método de punto fijo y Newton-Raphson'
               },
               {
                  id: 'Método de la secante',
                  nombre: 'Método de la secante'
               },
               {
                  id: 'Raíces de polinomios',
                  nombre: 'Raíces de polinomios'
               },
            ]
         },
         {
            id: uuidv4(),
            nombre: 'Solución de ecuaciones en una variable',
            subtemas: [
               {
                  id: 'Descripción del movimiento en forma vectorial y por componentes',
                  nombre: 'Descripción del movimiento en forma vectorial y por componentes'
               },
               {
                  id: 'Teorema de trabajo y energía cinética',
                  nombre: 'Teorema de trabajo y energía cinética'
               },
               {
                  id: 'Interacciones y energía potencial',
                  nombre: 'Interacciones y energía potencial'
               },
               {
                  id: 'Conservación de la energía mecánica',
                  nombre: 'Conservación de la energía mecánica'
               },
               {
                  id: 'Teorema fundamental del cálculo',
                  nombre: 'Teorema fundamental del cálculo'
               },
               {
                  id: 'Fuerzas conservativas y no conservativas',
                  nombre: 'Fuerzas conservativas y no conservativas'
               },
               {
                  id: 'Ecuaciones lineales con coeficientes variables',
                  nombre: 'Ecuaciones lineales con coeficientes variables'
               },
               {
                  id: 'Solución de sistemas de ecuaciones lineales',
                  nombre: 'Solución de sistemas de ecuaciones lineales'
               },
               {
                  id: 'Definición formal de funciones',
                  nombre: 'Definición formal de funciones'
               },
               {
                  id: 'Características de cantidades vectoriales y escalares',
                  nombre: 'Características de cantidades vectoriales y escalares'
               },
               {
                  id: 'Estatutos de repetición',
                  nombre: 'Estatutos de repetición'
               },
               {
                  id: 'Graficación básica con arreglos',
                  nombre: 'Graficación básica con arreglos'
               },
            ]
         },
      ]
   }
]




const testData = {
   "nodes": [
      {
         id: 'Interacciones eléctricas',
         label: 'Interacciones eléctricas'
      },
      {
         id: 'Ley de Coulomb',
         label: 'Ley de Coulomb'
      }
   ],
   "edges": [
      {
         from: 'Descripción del movimiento en forma vectorial y por componentes',
         to: 'Ley de Coulomb',
         arrows: "to"
      }
   ]
}












