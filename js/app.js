// Sentiment Analysis Demo
function analyzeSentiment() {
  const inputText = document.getElementById('inputText').value;
  const result = document.getElementById('result');
  
  // Listas de palabras clave positivas y negativas
  const positiveWords = [
    "feliz", "contento", "excelente", "maravilloso", "bien", "genial", "positivo", "amor", "increíble", 
    "bonito", "agradable", "optimista", "satisfecho", "alegre", "emocionado", "perfecto", "triunfante", 
    "éxito", "encantado", "maravilloso", "dichoso", "prosperidad", "hermoso", "brillante", "creativo", 
    "luminosa", "brillante", "cariñoso", "valioso", "inspirador", "eufórico", "felicidad", "grande", 
    "fantástico", "admirable", "motivador", "estupendo", "maravilloso", "formidable", "maravillosa", 
    "increíble", "espléndido", "positivo", "deslumbrante", "renovado", "inspiración", "altruista", 
    "confianza", "vibrante", "iluminado", "bello", "hermosura", "éxitoso", "enérgico", "favorable", 
    "agradable", "divertido", "floreciente", "optimista", "estelar", "gracioso"
  ];
  
  const negativeWords = [
    "triste", "enojado", "malo", "horrible", "pésimo", "terrible", "negativo", "odio", "deprimido", 
    "mal", "feo", "peor", "desagradable", "desesperado", "desgarrador", "pavor", "insatisfecho", 
    "angustiado", "frustrado", "tenso", "decepcionado", "aburrido", "estresado", "desilusionado", 
    "desgaste", "rencor", "tristeza", "infeliz", "pobre", "sufrimiento", "tristeza", "desmoralizado", 
    "doloroso", "indiferente", "fatal", "horrendo", "incómodo", "grave", "sin esperanza", "abrumado", 
    "desolado", "desgarrante", "cansado", "pesimista", "ineficaz", "nefasto", "dañino", "desesperante", 
    "opresivo", "insufrible", "desmotivado", "repulsivo", "desgarrador", "atroz", "ruin", "inclemente", 
    "fallido", "caótico", "nefasta", "desgarrado", "atroz", "perjudicial", "desdichado", "desmoralización", 
    "abandonado", "decepcionante"
  ];
  
  
  // Convertir el texto en minúsculas para comparación
  const lowerText = inputText.toLowerCase();

  // Contadores de palabras positivas y negativas
  let positiveCount = 0;
  let negativeCount = 0;

  // Revisamos si el texto contiene palabras clave positivas o negativas
  positiveWords.forEach(word => {
    if (lowerText.includes(word)) {
      positiveCount++;
    }
  });
  
  negativeWords.forEach(word => {
    if (lowerText.includes(word)) {
      negativeCount++;
    }
  });
  
  // Clasificación de sentimiento
  if (positiveCount > negativeCount) {
    result.innerText = 'Positivo';
    result.style.color = 'green';
  } else if (negativeCount > positiveCount) {
    result.innerText = 'Negativo';
    result.style.color = 'red';
  } else {
    result.innerText = 'Neutral';
    result.style.color = 'gray';
  }
}


// Show More Info
function showMoreInfo() {
  var extraInfoContainer = document.getElementById('extraInfoContainer');
  if (extraInfoContainer.style.display === 'none' || extraInfoContainer.style.display === '') {
      extraInfoContainer.style.display = 'block';
      extraInfoContainer.classList.add('show');
  } else {
      extraInfoContainer.style.display = 'none';
      extraInfoContainer.classList.remove('show');
  }
}


// AI Chart

// Change Shape Color
function changeColor(element) {
  const colors = ['#ff8008', '#ff5200', '#ff8c00', '#ffa500'];
  element.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

//funcion Ley de inteligencia artificial
function runBDISimulation() {
  const sector = document.getElementById('sector-select').value;
  const resultsDiv = document.getElementById('bdi-results');
  const beliefsSpan = document.getElementById('beliefs');
  const desiresSpan = document.getElementById('desires');
  const intentionsSpan = document.getElementById('intentions');

  let beliefs, desires, intentions;

  switch (sector) {
    case 'education':
      beliefs = 'El sector educativo está adoptando IA para personalización del aprendizaje.';
      desires = 'Garantizar la privacidad de los datos de los estudiantes.';
      intentions = 'Implementar sistemas IA que cumplan con la ley de protección de datos.';
      break;
    case 'healthcare':
      beliefs = 'El sector salud utiliza IA para diagnósticos y tratamientos personalizados.';
      desires = 'Asegurar la transparencia en la toma de decisiones médicas.';
      intentions = 'Supervisar algoritmos para cumplir con estándares éticos.';
      break;
    case 'finance':
      beliefs = 'Los sistemas de IA están automatizando decisiones de crédito.';
      desires = 'Evitar discriminación y sesgos en la evaluación de clientes.';
      intentions = 'Auditar algoritmos financieros para transparencia.';
      break;
    case 'government':
      beliefs = 'El gobierno está usando IA para mejorar servicios públicos.';
      desires = 'Proteger los datos personales y evitar usos indebidos.';
      intentions = 'Establecer auditorías regulares de sistemas IA gubernamentales.';
      break;
    default:
      beliefs = desires = intentions = 'Selecciona un sector para ver la simulación.';
  }

  beliefsSpan.textContent = beliefs;
  desiresSpan.textContent = desires;
  intentionsSpan.textContent = intentions;

  resultsDiv.style.display = 'block';
}




// Función para agregar un horario
function generateSchedule() {
  // Obtener los valores seleccionados
  const selectedClass = document.getElementById("class").value;
  const selectedTime = document.getElementById("time").value;

  // Crear un elemento de lista para el horario
  const scheduleItem = document.createElement("li");
  scheduleItem.textContent = `${selectedClass} a las ${selectedTime}`;

  // Agregar el elemento de lista al listado de horarios
  const scheduleList = document.getElementById("scheduleList");
  scheduleList.appendChild(scheduleItem);
}

//aplicacion de base de datos con grafos
let nodeCount = 0;
const graphContainer = document.getElementById('graph');

function addNode() {
  const node = document.createElement('div');
  node.className = 'node';
  node.style.top = `${Math.random() * (graphContainer.offsetHeight - 40)}px`;
  node.style.left = `${Math.random() * (graphContainer.offsetWidth - 40)}px`;
  node.textContent = ++nodeCount;
  node.setAttribute('data-id', nodeCount);
  graphContainer.appendChild(node);
}

function addEdge() {
  const nodes = document.querySelectorAll('.node');
  if (nodes.length < 2) {
    alert('Añade al menos 2 nodos primero.');
    return;
  }

  const fromNode = nodes[Math.floor(Math.random() * nodes.length)];
  const toNode = nodes[Math.floor(Math.random() * nodes.length)];

  if (fromNode === toNode) {
    alert('Selecciona diferentes nodos para crear una relación.');
    return;
  }

  const edge = document.createElement('div');
  edge.className = 'edge';

  const rect1 = fromNode.getBoundingClientRect();
  const rect2 = toNode.getBoundingClientRect();

  const x1 = rect1.left + rect1.width / 2 - graphContainer.getBoundingClientRect().left;
  const y1 = rect1.top + rect1.height / 2 - graphContainer.getBoundingClientRect().top;
  const x2 = rect2.left + rect2.width / 2 - graphContainer.getBoundingClientRect().left;
  const y2 = rect2.top + rect2.height / 2 - graphContainer.getBoundingClientRect().top;

  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  edge.style.width = `${length}px`;
  edge.style.transform = `rotate(${angle}deg)`;
  edge.style.position = 'absolute';
  edge.style.top = `${y1}px`;
  edge.style.left = `${x1}px`;

  graphContainer.appendChild(edge);
}


//aplicacion de grafos de conocimiento
// Variables para el grafo de conocimiento
let knowledgeNodes = [];
let knowledgeEdges = [];
let selectedKnowledgeNodes = [];

// Función para crear un nuevo nodo (concepto)
function addKnowledgeNode() {
  const nodeName = prompt('Nombre del concepto:');
  if (nodeName) {
    const newNode = document.createElement('div');
    newNode.className = 'knowledge-node';
    newNode.innerText = nodeName;

    // Posicionar el nodo aleatoriamente dentro del contenedor
    const container = document.getElementById('knowledge-graph-container');
    newNode.style.left = `${Math.random() * (container.offsetWidth - 100)}px`;
    newNode.style.top = `${Math.random() * (container.offsetHeight - 50)}px`;

    // Manejar la selección del nodo
    newNode.onclick = () => toggleKnowledgeNodeSelection(newNode);

    container.appendChild(newNode);
    knowledgeNodes.push(newNode);
  }
}

// Función para alternar la selección de un nodo
function toggleKnowledgeNodeSelection(node) {
  node.classList.toggle('selected');
  if (selectedKnowledgeNodes.includes(node)) {
    selectedKnowledgeNodes = selectedKnowledgeNodes.filter(n => n !== node);
  } else {
    if (selectedKnowledgeNodes.length < 2) {
      selectedKnowledgeNodes.push(node);
    } else {
      alert("Solo puedes seleccionar dos nodos a la vez.");
    }
  }
}

// Función para crear una relación entre los nodos seleccionados
function createKnowledgeRelation() {
  if (selectedKnowledgeNodes.length !== 2) {
    alert("Selecciona exactamente dos nodos para conectarlos.");
    return;
  }

  const [node1, node2] = selectedKnowledgeNodes;
  drawEdge(node1, node2);

  // Limpiar la selección
  selectedKnowledgeNodes.forEach(node => node.classList.remove('selected'));
  selectedKnowledgeNodes = [];
}

// Función para dibujar una línea entre dos nodos
function drawEdge(node1, node2) {
  const line = document.createElement('div');
  line.className = 'knowledge-edge';

  const rect1 = node1.getBoundingClientRect();
  const rect2 = node2.getBoundingClientRect();
  const containerRect = document.getElementById('knowledge-graph-container').getBoundingClientRect();

  const x1 = rect1.left + rect1.width / 2 - containerRect.left;
  const y1 = rect1.top + rect1.height / 2 - containerRect.top;
  const x2 = rect2.left + rect2.width / 2 - containerRect.left;
  const y2 = rect2.top + rect2.height / 2 - containerRect.top;

  const length = Math.hypot(x2 - x1, y2 - y1);
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  line.style.width = `${length}px`;
  line.style.left = `${x1}px`;
  line.style.top = `${y1}px`;
  line.style.transform = `rotate(${angle}deg)`;

  document.getElementById('knowledge-graph-container').appendChild(line);
  knowledgeEdges.push(line);
}


// funciones de aplicaciones extra IA
//torres de hanoi
let towers = [[], [], []];
let moveCount = 0;
let selectedDisc = null;
let selectedTowerIndex = null;

const moveCountElement = document.getElementById('move-count');
const gameMessageElement = document.getElementById('game-message');
const numDiscsInput = document.getElementById('numDiscs');

function initGame(numDiscs = 3) {
  towers = [[], [], []];
  for (let i = numDiscs; i > 0; i--) {
    towers[0].push(i);
  }
  moveCount = 0;
  selectedDisc = null;
  selectedTowerIndex = null;
  gameMessageElement.textContent = '';
  renderTowers();
}

function renderTowers() {
  towers.forEach((tower, index) => {
    const towerElement = document.getElementById(`tower${index + 1}`);
    towerElement.innerHTML = '';
    tower.forEach((disc) => {
      const discElement = document.createElement('div');
      discElement.className = 'disc';
      discElement.style.width = `${disc * 30 + 30}px`;
      discElement.textContent = `Disco ${disc}`;
      discElement.style.backgroundColor = getDiscColor(disc);
      towerElement.appendChild(discElement);
    });
  });
  moveCountElement.textContent = moveCount;
}

function getDiscColor(disc) {
  const colors = ['#ff8008', '#ff5200', '#ffb347', '#ff9f1c', '#ff4500', '#ff6347'];
  return colors[(disc - 1) % colors.length];
}

function moveDisc(fromTower, toTower) {
  if (towers[fromTower].length === 0) return;

  const disc = towers[fromTower].pop();
  if (
    towers[toTower].length === 0 ||
    towers[toTower][towers[toTower].length - 1] > disc
  ) {
    towers[toTower].push(disc);
    moveCount++;
    renderTowers();
    checkWin();
  } else {
    towers[fromTower].push(disc);
    alert('Movimiento inválido.');
  }
}

function checkWin() {
  if (towers[2].length === parseInt(numDiscsInput.value)) {
    gameMessageElement.textContent = '¡Felicidades, has ganado!';
    gameMessageElement.style.color = '#ff8008';
    gameMessageElement.style.fontSize = '2rem';
    gameMessageElement.style.fontWeight = 'bold';
    gameMessageElement.style.textAlign = 'center';
    gameMessageElement.style.animation = 'pop 0.5s ease-out, pulse 1.5s infinite';

  }
}

function resetGame() {
  initGame(parseInt(numDiscsInput.value));
}

function updateDiscs() {
  resetGame();
}

function handleTowerClick(index) {
  if (selectedDisc === null) {
    if (towers[index].length > 0) {
      selectedTowerIndex = index;
      selectedDisc = towers[index][towers[index].length - 1];
      highlightDisc(index);
    }
  } else {
    moveDisc(selectedTowerIndex, index);
    unhighlightDisc(selectedTowerIndex);
    selectedDisc = null;
    selectedTowerIndex = null;
  }
}

function highlightDisc(towerIndex) {
  const towerElement = document.getElementById(`tower${towerIndex + 1}`);
  const discElement = towerElement.lastElementChild;
  if (discElement) {
    discElement.classList.add('selected');
    console.log('Disco seleccionado:', discElement); // Verificar en consola
  }
}

function unhighlightDisc(towerIndex) {
  const towerElement = document.getElementById(`tower${towerIndex + 1}`);
  const discElement = towerElement.lastElementChild;
  if (discElement) {
    discElement.classList.remove('selected');
    console.log('Disco desmarcado:', discElement); // Verificar en consola
  }
}

document.querySelectorAll('.tower').forEach((tower, index) => {
  tower.addEventListener('click', () => handleTowerClick(index));
});

initGame();

//aplicacion prolog ia
let prologFacts = [];
let prologRules = [];

function addFact() {
  const factInput = document.getElementById('factInput');
  const fact = factInput.value.trim();

  if (fact) {
    // Agregar hechos a la lista
    prologFacts.push(fact);
    updatePrologCode();
    factInput.value = '';
    factInput.focus();
  }
}

function addRule() {
  const factInput = document.getElementById('factInput');
  const rule = factInput.value.trim();

  if (rule) {
    // Agregar reglas a la lista
    prologRules.push(rule);
    updatePrologCode();
    factInput.value = '';
    factInput.focus();
  }
}

function updatePrologCode() {
  const prologCode = document.getElementById('prologCode');
  prologCode.textContent = [...prologFacts, ...prologRules].join('\n');
}

function runQuery() {
  const queryInput = document.getElementById('queryInput').value.trim();
  const queryResult = document.getElementById('queryResult');

  if (queryInput) {
    // Crear un intérprete de Prolog
    const session = pl.create(100);
    
    // Agregar hechos y reglas a la sesión de Prolog
    prologFacts.forEach(fact => session.consult(fact));
    prologRules.forEach(rule => session.consult(rule));
    
    // Ejecutar la consulta
    session.query(queryInput);
    let result = "No se encontró una solución.";
    
    // Procesar los resultados
    if (session.answers.length > 0) {
      result = `Sí, ${queryInput} es verdadero.`;
    }
    
    // Mostrar el resultado
    queryResult.textContent = result;
  }
}







