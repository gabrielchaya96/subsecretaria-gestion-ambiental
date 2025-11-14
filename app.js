// Datos de ejemplo - Estos se pueden reemplazar fácilmente
const datosIndicadores = [
    {
        "INDICADOR": "NIÑOS EN TALLERES", // INDICADOR AGREGADO para el KPI
        "AREA/DEPENDENCIA": "Direccion General de Educación Ambiental",
        "ACUMULADO TOTAL": 0, // Valor que quieres que aparezca en el KPI
        "ACUMULADO 2024": 0,
        "ACUMULADO 2025": 0,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "TALLERES DE EDUCACIÓN AMBIENTAL",
        "AREA/DEPENDENCIA": "Direccion General de Educación Ambiental",
        "ACUMULADO TOTAL": 3600,
        "ACUMULADO 2024": 3600,
        "ACUMULADO 2025": 2500,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "PROMESA DE LEALTAD AL AMBIENTE",
        "AREA/DEPENDENCIA": "Direccion General de Educación Ambiental",
        "ACUMULADO TOTAL": 5800,
        "ACUMULADO 2024": 5800,
        "ACUMULADO 2025": 0,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "NEUMATÓN",
        "AREA/DEPENDENCIA": "Dirección General de Desarrollo Sostenible",
        "ACUMULADO TOTAL": 2072, // Tn (Toneladas)
        "ACUMULADO 2024": 2072,
        "ACUMULADO 2025": 0,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "RAEETÓN",
        "AREA/DEPENDENCIA": "Dirección General de Desarrollo Sostenible",
        "ACUMULADO TOTAL": 95.98,
        "ACUMULADO 2024": 95.98,
        "ACUMULADO 2025": 0,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "PUNTOS VERDES EN FUNCIONAMIENTO",
        "AREA/DEPENDENCIA": "Dirección General de Desarrollo Sostenible",
        "ACUMULADO TOTAL": 12,
        "ACUMULADO 2024": 12,
        "ACUMULADO 2025": 0,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "KILOGRAMOS RECUPERADOS EN PUNTOS VERDES",
        "AREA/DEPENDENCIA": "Dirección General de Desarrollo Sostenible",
        "ACUMULADO TOTAL": 25000,
        "ACUMULADO 2024": 25000,
        "ACUMULADO 2025": 0,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "ÁRBOLES SEMBRADOS",
        "AREA/DEPENDENCIA": "Dirección General de Arbolado Urbano y Espacios Verdes",
        "ACUMULADO TOTAL": 4500,
        "ACUMULADO 2024": 4500,
        "ACUMULADO 2025": 0,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "ESPECIES NATIVAS EN VIVERO",
        "AREA/DEPENDENCIA": "Dirección General de Arbolado Urbano y Espacios Verdes",
        "ACUMULADO TOTAL": 125,
        "ACUMULADO 2024": 125,
        "ACUMULADO 2025": 0,
        "ACUMULADO 2026": 0
    }
];

// --- Configuración de Gráficos ---

let charts = {};
let mapInstance = null;
const SALTA_CENTER = [-24.7821, -65.4117];

// Función reutilizable para crear una tarjeta KPI
function createKpiCard(title, value, icon, colorClass) {
    const formattedValue = value.toLocaleString('es-AR', { maximumFractionDigits: 0 }); // Formato local
    return `
        <div class="kpi-card shadow-sm">
            <div class="kpi-icon ${colorClass}"><span class="emoji-icon">${icon}</span></div>
            <div class="kpi-content">
                <p class="kpi-title">${title}</p>
                <h3 class="kpi-value"><span data-target-value="${value}">0</span></h3>
            </div>
        </div>
    `;
}

// Función para animar el contador
function animateCounter(element, targetValue, duration = 1000) {
    const start = 0;
    const startTime = performance.now();
    const isFloat = String(targetValue).includes('.');
    const decimalPlaces = isFloat ? String(targetValue).split('.')[1].length : 0;

    function updateCount(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        let currentValue = start + (targetValue - start) * progress;

        // Formateo de números grandes y decimales
        const formatter = new Intl.NumberFormat('es-AR', { 
            maximumFractionDigits: decimalPlaces,
            minimumFractionDigits: decimalPlaces
        });
        
        element.textContent = formatter.format(currentValue);

        if (progress < 1) {
            requestAnimationFrame(updateCount);
        } else {
             // Asegura que el valor final sea el target value formateado correctamente
            element.textContent = targetValue.toLocaleString('es-AR', { maximumFractionDigits: decimalPlaces });
        }
    }
    requestAnimationFrame(updateCount);
}

// Inicializar contadores después de que el HTML esté en el DOM
function initKpiCounters() {
    document.querySelectorAll('.kpi-value span').forEach(span => {
        const targetValue = parseFloat(span.getAttribute('data-target-value'));
        if (!isNaN(targetValue)) {
            animateCounter(span, targetValue);
        }
    });
}

// Renderizar Gráfico de Barras
function renderBarChart(containerId, indicatorData, title, color) {
    const ctx = document.getElementById(containerId);
    if (charts[containerId]) {
        charts[containerId].destroy(); // Destruir gráfico existente si hay uno
    }

    // Datos del indicador
    const dataYears = ['ACUMULADO 2024', 'ACUMULADO 2025', 'ACUMULADO 2026'];
    const labels = ['2024', '2025', '2026'];
    const dataValues = dataYears.map(year => indicatorData[year] || 0);

    charts[containerId] = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: title,
                data: dataValues,
                backgroundColor: color,
                borderColor: color,
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Cantidad / Valor'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y.toLocaleString('es-AR', { maximumFractionDigits: 0 });
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

// Renderizar Gráfico de Línea (para Árboles)
function renderLineChart(containerId, indicatorData, title, color) {
    const ctx = document.getElementById(containerId);
    if (charts[containerId]) {
        charts[containerId].destroy(); // Destruir gráfico existente si hay uno
    }

    const dataYears = ['ACUMULADO 2024', 'ACUMULADO 2025', 'ACUMULADO 2026'];
    const labels = ['2024', '2025', '2026'];
    const dataValues = dataYears.map(year => indicatorData[year] || 0);

    charts[containerId] = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: title,
                data: dataValues,
                borderColor: color,
                backgroundColor: 'rgba(0, 74, 153, 0.2)', // Color con transparencia
                borderWidth: 2,
                tension: 0.4,
                fill: true, // Rellenar debajo de la línea
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Cantidad de Árboles'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += context.parsed.y.toLocaleString('es-AR', { maximumFractionDigits: 0 });
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

// Función para inicializar mapa Leaflet (solo si es necesario)
function initMap(containerId, markersData = []) {
    if (!document.getElementById(containerId)) return;

    if (mapInstance) {
        mapInstance.remove();
    }

    mapInstance = L.map(containerId).setView(SALTA_CENTER, 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapInstance);

    if (markersData.length > 0) {
        // CORRECCIÓN: Filtrar para asegurar que solo se pasen marcadores válidos al FeatureGroup
        const validMarkers = markersData.filter(d => d.lat && d.lng).map(d => L.marker([d.lat, d.lng]));
        if (validMarkers.length > 0) {
            const group = new L.featureGroup(validMarkers);
            mapInstance.fitBounds(group.getBounds().pad(0.1));
        } else {
             mapInstance.setView(SALTA_CENTER, 13); // Volver al centro si no hay marcadores
        }
    }
}

function exportToCSV() {
    if (!datosIndicadores.length) {
        // Usa una notificación modal o un mensaje en lugar de alert()
        console.error("No hay datos para exportar.");
        return;
    }

    const headers = Object.keys(datosIndicadores[0]);
    let csvContent = "data:text/csv;charset=utf-8,\uFEFF"; // BOM para UTF-8 en Excel
    
    csvContent += headers.join(";") + "\r\n";

    datosIndicadores.forEach(row => {
        const values = headers.map(header => {
            let cell = row[header] === null || row[header] === undefined ? '' : row[header];
            // Asegurar que los números se exporten sin formato de miles para facilitar el análisis
            if (typeof cell === 'number') {
                cell = String(cell).replace('.', ','); // Cambiar punto decimal a coma para CSV español
            } else {
                cell = String(cell).replace(/"/g, '""');
            }
            if (String(cell).includes(';') || String(cell).includes('\n')) {
                cell = `"${cell}"`;
            }
            return cell;
        });
        csvContent += values.join(";") + "\r\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "reporte_gestion_ambiental.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// --- FUNCIONES DE RENDERIZADO POR SECCIÓN ---

// CORRECCIÓN: Se agrega la verificación 'd.INDICADOR &&'
function renderEducacionAmbiental(container) {
    // NUEVA BÚSQUEDA: Buscar el nuevo indicador "NIÑOS EN TALLERES"
    const ninosTalleres = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('NIÑOS EN TALLERES')); 
    // Búsqueda original para el gráfico (TALLERES DE EDUCACIÓN AMBIENTAL)
    const talleres = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('TALLERES') && !d.INDICADOR.includes('NIÑOS')); 
    const promesa = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('PROMESA'));
    
    container.innerHTML = `
        <h2 class="section-title">Educación Ambiental</h2>
        
        <div class="section-description">
            <p>Esta área se encarga de actividades como talleres de educación ambiental, operativos puerta a puerta, la conformación de la mesa intersectorial de Educación Ambiental, eventos de siembra de árboles, capacitación de docentes, y la difusión de contenido ambiental en redes y medios.</p>
        </div>
        
        <div class="row g-4 mb-4">
            <div class="col-md-6 col-lg-4">
                <!-- USO DEL NUEVO INDICADOR ninosTalleres -->
                ${createKpiCard('Niños en Talleres', ninosTalleres ? ninosTalleres['ACUMULADO TOTAL'] : 0, '🏫', 'kpi-icon-green')}
            </div>
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Alumnos en "Promesa al Ambiente"', promesa ? promesa['ACUMULADO TOTAL'] : 0, '👧👦', 'kpi-icon-blue')}
            </div>
        </div>
        
        <div class="row g-4">
            <div class="col-lg-12">
                <div class="chart-container">
                    <h5>Comparativa Anual de Talleres</h5>
                    <div class="chart-wrapper" style="position: relative; height: 350px;">
                        <canvas id="chart-talleres"></canvas>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Renderizado del gráfico
    if (talleres) {
        const talleresData = talleres;
        // La variable 'talleres' contiene los datos del indicador TALLERES DE EDUCACIÓN AMBIENTAL (3600)
        renderBarChart('chart-talleres', talleresData, 'Talleres y Alumnos Acumulados', '#009a44');
    }

    initKpiCounters();
}

function renderDesarrolloSostenible(container) {
    const neumatico = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('NEUMATÓN'));
    const raee = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('RAEETÓN'));
    const puntosVerdes = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('PUNTOS VERDES'));
    const kgRecuperados = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('KILOGRAMOS RECUPERADOS'));

    // Datos de ejemplo para marcadores (Puntos Verdes Ficticios)
    const markersData = [
        { lat: -24.789, lng: -65.415, name: "Punto Verde 1" },
        { lat: -24.778, lng: -65.405, name: "Punto Verde 2" },
        { lat: -24.795, lng: -65.42, name: "Punto Verde 3" },
    ];
    
    container.innerHTML = `
        <h2 class="section-title">Desarrollo Sostenible</h2>
        
        <div class="section-description">
            <p>Esta dirección gestiona la recolección especial y valorización de residuos, como neumáticos, RAEE (Residuos de Aparatos Eléctricos y Electrónicos), y promueve la red de Puntos Verdes para el reciclaje y economía circular.</p>
        </div>

        <div class="row g-4 mb-4">
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Neumáticos Reciclados (Tn)', neumatico ? neumatico['ACUMULADO TOTAL'] : 0, '♻️', 'kpi-icon-yellow')}
            </div>
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('RAEE Reciclados (Kg)', raee ? raee['ACUMULADO TOTAL'] : 0, '📱', 'kpi-icon-orange')}
            </div>
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Puntos Verdes', puntosVerdes ? puntosVerdes['ACUMULADO TOTAL'] : 0, '🟢', 'kpi-icon-green')}
            </div>
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Kg. Recuperados en P.V.', kgRecuperados ? kgRecuperados['ACUMULADO TOTAL'] : 0, '⚖️', 'kpi-icon-blue')}
            </div>
        </div>

        <div class="row g-4">
            <div class="col-lg-12">
                <div class="chart-container">
                    <h5>Mapa de Puntos Verdes</h5>
                    <div class="map-wrapper" style="height: 400px; border-radius: 8px; overflow: hidden;">
                        <div id="map-puntos-verdes" style="height: 100%;"></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="chart-container">
                    <h5>Comparativa Anual de Neumatón y RAEETón</h5>
                    <div class="chart-wrapper" style="position: relative; height: 350px;">
                        <canvas id="chart-residuos"></canvas>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Inicializar Mapa
    initMap('map-puntos-verdes', markersData);

    // Renderizado del gráfico
    if (neumatico && raee) {
        const ctx = document.getElementById('chart-residuos');
        if (charts['chart-residuos']) {
            charts['chart-residuos'].destroy();
        }

        const dataYears = ['ACUMULADO 2024', 'ACUMULADO 2025', 'ACUMULADO 2026'];
        const labels = ['2024', '2025', '2026'];

        charts['chart-residuos'] = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Neumáticos (Tn)',
                        data: dataYears.map(year => neumatico[year] || 0),
                        backgroundColor: '#ffc107',
                        borderRadius: 4
                    },
                    {
                        label: 'RAEE (Kg)',
                        data: dataYears.map(year => raee[year] || 0),
                        backgroundColor: '#fd7e14',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Valor Acumulado'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += context.parsed.y.toLocaleString('es-AR', { maximumFractionDigits: 2 });
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        });
    }

    initKpiCounters();
}

function renderArboladoUrbano(container) {
    const arboles = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('ÁRBOLES SEMBRADOS'));
    const especies = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('ESPECIES NATIVAS'));
    
    container.innerHTML = `
        <h2 class="section-title">Arbolado Urbano</h2>
        
        <div class="section-description">
            <p>La dirección de Arbolado Urbano es responsable del cuidado, la planificación y la gestión del patrimonio arbóreo de la ciudad, incluyendo la producción en viveros y las campañas de siembra.</p>
        </div>
        
        <div class="row g-4 mb-4">
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Árboles Sembrados', arboles ? arboles['ACUMULADO TOTAL'] : 0, '🌳', 'kpi-icon-blue')}
            </div>
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Especies Nativas en Vivero', especies ? especies['ACUMULADO TOTAL'] : 0, '🌿', 'kpi-icon-green')}
            </div>
        </div>

        <div class="row g-4">
            <div class="col-lg-12">
                <div class="chart-container">
                    <h5>Proyección Anual de Siembra de Árboles</h5>
                    <div class="chart-wrapper" style="position: relative; height: 350px;">
                        <canvas id="chart-arboles"></canvas>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Renderizado del gráfico
    if (arboles) {
        renderLineChart('chart-arboles', arboles, 'Árboles Sembrados', '#004a99');
    }

    initKpiCounters();
}

function renderHome(container) {
    container.innerHTML = `
        <h2 class="section-title">Visión General</h2>
        
        <div class="section-description alert-warning-custom">
            <strong>⚠️ Plataforma de Demostración:</strong> Los datos y gráficos presentados aquí son ficticios y solo tienen fines de demostración.
        </div>
        
        <div class="row g-4 mb-4">
            <!-- Total de Talleres y Promesas -->
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Total Participantes Educ. Amb.', 
                    (datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('TALLERES'))?.['ACUMULADO TOTAL'] || 0) + 
                    (datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('PROMESA'))?.['ACUMULADO TOTAL'] || 0), 
                    '💡', 'kpi-icon-yellow')}
            </div>
            <!-- Total de Recuperación de Residuos -->
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Kg. de Residuos Especiales Rec.', 
                    (datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('KILOGRAMOS RECUPERADOS'))?.['ACUMULADO TOTAL'] || 0) +
                    (datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('RAEETÓN'))?.['ACUMULADO TOTAL'] || 0), // Suma de Kilogramos y RAEETÓN
                    '♻️', 'kpi-icon-orange')}
            </div>
            <!-- Total de Árboles Sembrados -->
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Total de Árboles Sembrados', datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('ÁRBOLES SEMBRADOS'))?.['ACUMULADO TOTAL'] || 0, '🌳', 'kpi-icon-green')}
            </div>
        </div>
        
        <div class="row g-4">
            <div class="col-lg-12">
                <div class="chart-container">
                    <h5>Resumen General de Acumulados</h5>
                    <div class="chart-wrapper" style="position: relative; height: 350px;">
                        <canvas id="chart-resumen"></canvas>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Renderizado del gráfico de resumen
    const resumenData = [
        { label: 'Participantes Educación Amb.', value: (datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('TALLERES'))?.['ACUMULADO TOTAL'] || 0) + (datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('PROMESA'))?.['ACUMULADO TOTAL'] || 0), color: '#02b3e4' },
        { label: 'Neumáticos (Tn)', value: datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('NEUMATÓN'))?.['ACUMULADO TOTAL'] || 0, color: '#ffc107' },
        { label: 'RAEE (Kg)', value: datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('RAEETÓN'))?.['ACUMULADO TOTAL'] || 0, color: '#fd7e14' },
        { label: 'Kg. Recuperados P.V.', value: datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('KILOGRAMOS RECUPERADOS'))?.['ACUMULADO TOTAL'] || 0, color: '#009a44' },
        { label: 'Árboles Sembrados', value: datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('ÁRBOLES SEMBRADOS'))?.['ACUMULADO TOTAL'] || 0, color: '#004a99' },
    ];

    const ctx = document.getElementById('chart-resumen');
    if (charts['chart-resumen']) {
        charts['chart-resumen'].destroy();
    }

    charts['chart-resumen'] = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: resumenData.map(d => d.label),
            datasets: [{
                data: resumenData.map(d => d.value),
                backgroundColor: resumenData.map(d => d.color),
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            return `${label}: ${value.toLocaleString('es-AR', { maximumFractionDigits: 0 })}`;
                        }
                    }
                }
            }
        }
    });

    initKpiCounters();
}

function renderArticulacion(container) {
    container.innerHTML = `
        <h2 class="section-title">Articulación Interinstitucional</h2>
        
        <div class="section-description">
            <p>El área de articulación trabaja en coordinación con otras dependencias municipales, instituciones educativas, ONGs y el sector privado para maximizar el impacto de las iniciativas ambientales.</p>
            <p>Se gestionan convenios, se coordina la Mesa Intersectorial de Educación Ambiental y se organizan operativos conjuntos de fiscalización y concientización.</p>
        </div>

        <div class="row g-4">
            <div class="col-lg-12">
                <div class="chart-container">
                    <h5>Indicadores Relacionados</h5>
                    <p class="small text-muted">A continuación se presenta un resumen de indicadores impactados por la articulación.</p>
                    <table class="table-related-indicators">
                        <thead>
                            <tr>
                                <th>Indicador</th>
                                <th>Área Responsable</th>
                                <th>Total Acumulado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Operativos de Fiscalización Conjunta</td>
                                <td>Secretaría de Ambiente</td>
                                <td>85</td>
                            </tr>
                            <tr>
                                <td>Convenios con ONGs</td>
                                <td>Despacho de Subsecretaría</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Total de Árboles Sembrados</td>
                                <td>Arbolado Urbano (con apoyo de)</td>
                                <td>${(datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('ÁRBOLES SEMBRADOS'))?.['ACUMULADO TOTAL'] || 0).toLocaleString('es-AR')}</td>
                            </tr>
                            <tr>
                                <td>Puntos Verdes en funcionamiento</td>
                                <td>Desarrollo Sostenible (con apoyo de)</td>
                                <td>${(datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('PUNTOS VERDES'))?.['ACUMULADO TOTAL'] || 0).toLocaleString('es-AR')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
    initKpiCounters();
}

// --- LÓGICA DE NAVEGACIÓN Y RENDERIZADO PRINCIPAL ---

const sections = {
    'home': renderHome,
    'educacion-ambiental': renderEducacionAmbiental,
    'desarrollo-sostenible': renderDesarrolloSostenible,
    'arbolado-urbano': renderArboladoUrbano,
    'articulacion': renderArticulacion,
};

function renderContent(section) {
    const container = document.getElementById('main-content-area');
    // Limpiar gráficos anteriores para evitar problemas de canvas
    Object.values(charts).forEach(chart => {
        if (chart) chart.destroy();
    });
    charts = {};
    
    // Asegurar que Leaflet se limpie antes de renderizar un mapa
    if (mapInstance) {
        mapInstance.remove();
        mapInstance = null;
    }

    if (sections[section]) {
        sections[section](container);
    } else {
        container.innerHTML = `<div class="alert alert-danger">Sección no encontrada.</div>`;
    }
}

function handleNavigation() {
    // Obtener la sección del hash o usar 'home' por defecto
    const hash = window.location.hash.substring(1) || 'home';
    renderContent(hash);
    
    // Actualizar clase 'active' en la barra lateral
    document.querySelectorAll('#sidebarMenu .nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${hash}`) {
            link.classList.add('active');
        }
    });

    // Desplegar el menú colapsado si está en modo móvil
    const sidebar = document.getElementById('sidebarMenu');
    if (sidebar.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(sidebar, { toggle: false });
        bsCollapse.hide();
    }
}

// Event Listeners
window.addEventListener('hashchange', handleNavigation);
window.addEventListener('load', () => {
    // Ocultar el loader
    document.getElementById('loader').style.display = 'none';

    // Manejar la navegación inicial
    handleNavigation();

    // Event listener para el botón de descarga CSV
    document.getElementById('download-csv').addEventListener('click', exportToCSV);

    // Placeholder para el botón de descarga PDF (no implementado)
    document.getElementById('download-pdf').addEventListener('click', () => {
        // En un entorno real se usaría una librería como jsPDF o una API
        console.log("Generación de PDF no implementada en este demo.");
        // Usa una notificación modal o un mensaje en lugar de alert()
    });
});
