import { useEffect, useState } from "react";
import { Network } from "vis-network";
import "vis-network/styles/vis-network.min.css";
import './App.css';
import { UFs } from "./data/data";

function App() {

   const [directionInput, setDirectionInput] = useState('UD');
   const [subtemas, setSubtemas] = useState([]);
   const [isAuth, setIsAuth] = useState(false);
   const [showHierarchy, setShowHierarchy] = useState(false);

   const params = new URLSearchParams(window.location.search)


   let tempSubtemas = [];
   useEffect(() => {

      if (params.get('Prueba') !== null && params.get('Prueba') !== '') {
         setIsAuth(true);
      }

      UFs.map(UF => {
         UF.temas.map((tema) => {
            tema.subtemas.map(subtema => {
               tempSubtemas.push({
                  id: `${subtema.id}`,
                  label: `${UFs[0].clave} - ${subtema.nombre}`,
                  color: [
                     'Graficación básica con arreglos',
                     'Graficación básica con arreglos',
                     'Estatutos de repetición',
                     'Definición formal de funciones',
                     'Fuerzas conservativas y no conservativas',
                     'Teorema fundamental del cálculo',
                     'Conservación de la energía mecánica',
                     'Interacciones y energía potencial',
                     'Teorema de trabajo y energía cinética',
                     'Descripción del movimiento en forma vectorial y por componentes'
                  ].includes(subtema.id)
                     ? '#1f77b4' :
                     ['Características de cantidades vectoriales y escalares'].includes(subtema.id) ? '#8c564b' :
                        ['Solución de sistemas de ecuaciones lineales'].includes(subtema.id) ? '#ff7f0e' :
                           ['Ecuaciones lineales con coeficientes variables'].includes(subtema.id) ? '#d62728' :
                              '#2ca02c'
               })
            });
         });
      });
      setSubtemas(tempSubtemas);
   }, [])

   useEffect(() => {
      draw();
   }, [subtemas])

   const handleSubmit = (e) => {
      draw();
      return false;
   }

   var nodes = null;
   var edges = null;
   var network = null;

   function destroy() {
      if (network !== null) {
         network.destroy();
         network = null;
      }
   }

   const draw = () => {
      if (!isAuth) return;
      destroy();
      // randomly create some nodes and edges
      // var nodeCount = document.getElementById("nodeCount").value;

      // create a network
      var container = document.getElementById("mynetwork");
      var options = {
         autoResize: true,
         nodes: {
            shape: "dot",
            size: 12,
         },
         layout: showHierarchy ? {
            hierarchical: {
               direction: directionInput,
            },
         } : {},
         interaction: {
            navigationButtons: true,
            keyboard: true,
         },
      };
      network = new Network(container, {
         "nodes": subtemas,
         "edges": [
            {
               from: 'Descripción del movimiento en forma vectorial y por componentes',
               to: 'Ley de Coulomb',
               arrows: "to"
            },
            {
               from: 'Descripción del movimiento en forma vectorial y por componentes',
               to: 'Campo eléctrico y superposición',
               arrows: "to"
            },
            {
               from: 'Teorema de trabajo y energía cinética',
               to: 'Potencial eléctrico y diferencia de potencial',
               arrows: "to"
            },
            {
               from: 'Interacciones y energía potencial',
               to: 'Potencial eléctrico y energía potencial eléctrica',
               arrows: "to"
            },
            {
               from: 'Conservación de la energía mecánica',
               to: 'Cálculo del potencial y campo eléctrico para cargas distribuidas',
               arrows: "to"
            },
            {
               from: 'Teorema fundamental del cálculo',
               to: 'Ley de Gauss y aplicaciones para el cálculo de campo eléctrico',
               arrows: "to"
            },
            {
               from: 'Fuerzas conservativas y no conservativas',
               to: 'Capacitancia, capacitor y energía almacenada',
               arrows: "to"
            },
            {
               from: 'Ecuaciones lineales con coeficientes variables',
               to: 'Capacitores en circuitos',
               arrows: "to"
            },
            {
               from: 'Fuerzas conservativas y no conservativas',
               to: 'Conceptos de corriente eléctrica y resistencia eléctrica',
               arrows: "to"
            },
            {
               from: 'Teorema de trabajo y energía cinética',
               to: 'Fuerza electromotriz',
               arrows: "to"
            },
            {
               from: 'Solución de sistemas de ecuaciones lineales',
               to: 'Resistencias en circuitos',
               arrows: "to"
            },
            {
               from: 'Solución de sistemas de ecuaciones lineales',
               to: 'Leyes de Kirchoff',
               arrows: "to"
            },
            {
               from: 'Solución de sistemas de ecuaciones lineales',
               to: 'Modelación analítica o numérica de circuitos eléctricos y sus variables asociadas',
               arrows: "to"
            },
            {
               from: 'Teorema fundamental del cálculo',
               to: 'Parametrización',
               arrows: "to"
            },
            {
               from: 'Teorema fundamental del cálculo',
               to: 'Función de potencial',
               arrows: "to"
            },
            {
               from: 'Teorema fundamental del cálculo',
               to: 'Teorema de Green',
               arrows: "to"
            },
            {
               from: 'Teorema fundamental del cálculo',
               to: 'Cálculo de integrales de superficie haciendo uso de proyecciones',
               arrows: "to"
            },
            {
               from: 'Teorema fundamental del cálculo',
               to: 'Cálculo del flujo eléctrico',
               arrows: "to"
            },
            {
               from: 'Teorema fundamental del cálculo',
               to: 'Cálculo de resistencia eléctricas',
               arrows: "to"
            },
            {
               from: 'Teorema fundamental del cálculo',
               to: 'Cálculo de capacitancias',
               arrows: "to"
            },
            {
               from: 'Ecuaciones lineales con coeficientes variables',
               to: 'Solución de circuitos RC analíticamente',
               arrows: "to"
            },
            {
               from: 'Ecuaciones lineales con coeficientes variables',
               to: 'Solución de circuitos RC numéricamente',
               arrows: "to"
            },
            {
               from: 'Parametrización',
               to: 'Curvas paramétricas',
               arrows: "to"
            },
            {
               from: 'Definición formal de funciones',
               to: 'Curvas en el espacio',
               arrows: "to"
            },
            {
               from: 'Características de cantidades vectoriales y escalares',
               to: 'Funciones escalares y vectoriales',
               arrows: "to"
            },
            {
               from: 'Curvas en el espacio',
               to: 'Manipulación de gráficos 3D',
               arrows: "to"
            },
            {
               from: 'Estatutos de repetición',
               to: 'Método de bisección',
               arrows: "to"
            },
            {
               from: 'Estatutos de repetición',
               to: 'Método de punto fijo y Newton-Raphson',
               arrows: "to"
            },
            {
               from: 'Estatutos de repetición',
               to: 'Método de la secante',
               arrows: "to"
            },
            {
               from: 'Estatutos de repetición',
               to: 'Raíces de polinomios',
               arrows: "to"
            },
            {
               from: 'Graficación básica con arreglos',
               to: 'Curvas paramétricas',
               arrows: "to"
            },
            {
               from: 'Graficación básica con arreglos',
               to: 'Curvas en el espacio',
               arrows: "to"
            }
         ]
      }, options);

      // add event listeners
      // network.on("select", function (params) {
      //    console.log(params);
      //    document.getElementById("selection").innerText =
      //       "Selection: " + JSON.stringify(params);
      // });
   }

   useEffect(() => {
      draw();
   }, [showHierarchy, directionInput])


   if (!isAuth) {
      return <h2>Not authorized</h2>
   }

   return (
      <div className="App">
         <h2>
            Usuario: {params.get('Prueba')}
         </h2>
         <h2>
            {UFs[0].clave}: {UFs[0].nombreUF}
         </h2>
         <h3>
            Semestres: {UFs[0].semestre}
         </h3>
         <h3>
            Programas: IAL, IBT, IAG, IQ, IDS
         </h3>
         <table>
            <thead>
               <tr>
                  <th> UF </th>
                  <th> Semestre 1 </th>
                  <th> Semestre 2 </th>
                  <th> Semestre 3 </th>
                  <th> Semestre 4 </th>
                  <th> Semestre 5 </th>
                  <th> Semestre 6 </th>
                  <th> Semestre 7 </th>
                  <th> Semestre 8 </th>
                  <th> Varios </th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td bgcolor="#2ca02c"> &nbsp; </td>
                  <td bgcolor="#1f77b4"> &nbsp; </td>
                  <td bgcolor="#ff7f0e"> &nbsp; </td>
                  <td bgcolor="#d62728"> &nbsp; </td>
                  <td bgcolor="#9467bd"> &nbsp; </td>
                  <td bgcolor="#e377c2"> &nbsp; </td>
                  <td bgcolor="#7f7f7f"> &nbsp; </td>
                  <td bgcolor="#bcbd22"> &nbsp; </td>
                  <td bgcolor="#17becf"> &nbsp; </td>
                  <td bgcolor="#8c564b"> &nbsp; </td>
               </tr>
            </tbody>
         </table>

         <p>
            <input type='checkbox' value={showHierarchy} onChange={() => setShowHierarchy(!showHierarchy)} /> Mostrar por jerarquía < br />
            {
               showHierarchy &&
               <>
                  <input type="button" id="btn-UD" onClick={() => setDirectionInput("UD")} value='Arriba-Abajo' /> &nbsp; &nbsp;
                  <input type="button" id="btn-DU" onClick={() => setDirectionInput("DU")} value='Abajo-Arriba' />&nbsp; &nbsp;
                  <input type="button" id="btn-LR" onClick={() => setDirectionInput("LR")} value='Izquierda-Derecha' />&nbsp; &nbsp;
                  <input type="button" id="btn-RL" onClick={() => setDirectionInput("RL")} value='Derecha-Izquierda' />
                  <input type="hidden" id="direction" value="UD" onClick={() => setDirectionInput()} />
               </>
            }
         </p>

         <div
            id="mynetwork"
            style={{
               width: '95%',
               height: 'calc(60vh)',
               border: '1px solid black',
            }} >
         </div>


         {/* <p id="selection"></p> */}

      </div >
   )
}

export default App;