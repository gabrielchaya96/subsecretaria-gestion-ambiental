// Datos de ejemplo - Estos se pueden reemplazar fácilmente
const datosIndicadores = [
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
        "ACUMULADO TOTAL": 95.98, // Tn (Toneladas)
        "ACUMULADO 2024": 95.98,
        "ACUMULADO 2025": 0,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "PUNTOS LIMPIOS INSTALADOS",
        "AREA/DEPENDENCIA": "Dirección General de Desarrollo Sostenible",
        "ACUMULADO TOTAL": 2,
        "ACUMULADO 2024": 2,
        "ACUMULADO 2025": 0,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "MEDICIONES DE CALIDAD DEL AIRE",
        "AREA/DEPENDENCIA": "Direccion de Cambio Climático",
        "ACUMULADO TOTAL": 54,
        "ACUMULADO 2024": 54,
        "ACUMULADO 2025": 0,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "ACCIONES DE DESCACHARRADO",
        "AREA/DEPENDENCIA": "Direccion de Cambio Climático",
        "ACUMULADO TOTAL": 45,
        "ACUMULADO 2024": 45,
        "ACUMULADO 2025": 0,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "CONVENIOS FIRMADOS",
        "AREA/DEPENDENCIA": "Subsecretaría de Gestión Ambiental",
        "ACUMULADO TOTAL": 18,
        "ACUMULADO 2024": 13,
        "ACUMULADO 2025": 5,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "CAMPAÑAS DE COMUNICACIÓN",
        "AREA/DEPENDENCIA": "Subsecretaría de Gestión Ambiental",
        "ACUMULADO TOTAL": 12,
        "ACUMULADO 2024": 12,
        "ACUMULADO 2025": 0,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "HUERTAS COMUNITARIAS",
        "AREA/DEPENDENCIA": "Dirección de Desarrollo Sostenible",
        "ACUMULADO TOTAL": 5,
        "ACUMULADO 2024": 5,
        "ACUMULADO 2025": 0,
        "ACUMULADO 2026": 0
    },
    // Añadidos indicadores directos para secciones que estaban vacías
    {
        "INDICADOR": "ACTAS DE INFRACCIÓN LABRADAS",
        "AREA/DEPENDENCIA": "Dirección de Inspecciones",
        "ACUMULADO TOTAL": 150,
        "ACUMULADO 2024": 150,
        "ACUMULADO 2025": 70,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "ACTAS DE CLAUSURA",
        "AREA/DEPENDENCIA": "Dirección de Inspecciones",
        "ACUMULADO TOTAL": 8,
        "ACUMULADO 2024": 8,
        "ACUMULADO 2025": 5,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "CAAMS EMITIDOS",
        "AREA/DEPENDENCIA": "Dirección de Impacto Ambiental",
        "ACUMULADO TOTAL": 35,
        "ACUMULADO 2024": 35,
        "ACUMULADO 2025": 20,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "OPERATIVOS DE PATRULLA",
        "AREA/DEPENDENCIA": "Dirección de Patrulla Ambiental",
        "ACUMULADO TOTAL": 210,
        "ACUMULADO 2024": 210,
        "ACUMULADO 2025": 100,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "DENUNCIAS AMBIENTALES ATENDIDAS",
        "AREA/DEPENDENCIA": "Dirección de Patrulla Ambiental",
        "ACUMULADO TOTAL": 120,
        "ACUMULADO 2024": 120,
        "ACUMULADO 2025": 50,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "ESPACIOS VERDES INTERVENIDOS",
        "AREA/DEPENDENCIA": "Dirección de Proyectos Ambientales",
        "ACUMULADO TOTAL": 30,
        "ACUMULADO 2024": 30,
        "ACUMULADO 2025": 15,
        "ACUMULADO 2026": 0
    }
];

const datosBarrios = [
    {
        "NOMBRE DEL BARRIO": "Norte Grande",
        "TAREAS DESARROLLADAS": "Descacharrado/Educacion Sanitaria Dengue",
        "lat": -24.819,
        "lng": -65.422
    },
    {
        "NOMBRE DEL BARRIO": "Villa Floresta Alta",
        "TAREAS DESARROLLADAS": "Descacharrado/Educacion Sanitaria Dengue",
        "lat": -24.786,
        "lng": -65.389
    },
    {
        "NOMBRE DEL BARRIO": "Bº San Calixto",
        "TAREAS DESARROLLADAS": "Descacharrado/Educacion Sanitaria Dengue",
        "lat": -24.825,
        "lng": -65.435
    },
    {
        "NOMBRE DEL BARRIO": "B° VILLA ESMERALDA",
        "TAREAS DESARROLLADAS": "OPERATIVO MILAGRO",
        "lat": -24.820,
        "lng": -65.441
    },
    {
        "NOMBRE DEL BARRIO": "B° LIMACHE",
        "TAREAS DESARROLLADAS": "OPERATIVO MILAGRO",
        "lat": -24.836,
        "lng": -65.451
    }
];

const puntosLimpios = [
    {
        "NOMBRE": "Punto Limpio Norte",
        "DIRECCION": "Av. Bolivia 2550",
        "lat": -24.746,
        "lng": -65.412
    },
    {
        "NOMBRE": "Punto Limpio Sur",
        "DIRECCION": "Av. Paraguay 1240",
        "lat": -24.809,
        "lng": -65.418
    }
];

// Variables globales
let mapInstance = null;
const SALTA_CENTER = [-24.7859, -65.4117];

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupNavigation();
    setupDownloadButtons();
});

function initializeApp() {
    // Simular carga de datos
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        renderSection('educacion');
    }, 1000);
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('#main-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Quitar 'active' de todos los links
            navLinks.forEach(l => l.classList.remove('active'));
            // Añadir 'active' al clickeado
            e.currentTarget.classList.add('active');
            
            const sectionName = e.currentTarget.getAttribute('data-section');
            renderSection(sectionName);
        });
    });
}

function setupDownloadButtons() {
    document.getElementById('download-csv').addEventListener('click', exportToCSV);
    document.getElementById('download-pdf').addEventListener('click', () => {
        window.print();
    });
}

function renderSection(sectionName) {
    const container = document.getElementById('main-content-area');
    container.innerHTML = '';
    
    // Destruir mapa anterior si existe
    if (mapInstance) {
        mapInstance.remove();
        mapInstance = null;
    }
    
    switch(sectionName) {
        case 'educacion':
            renderEducacionAmbiental(container);
            break;
        case 'economia':
            renderEconomiaCircular(container);
            break;
        case 'cambio-climatico':
            renderCambioClimatico(container);
            break;
        case 'desarrollo':
            renderDesarrolloSostenible(container);
            break;
        case 'inspecciones':
            renderInspecciones(container);
            break;
        case 'impacto':
            renderImpactoAmbiental(container);
            break;
        case 'patrulla':
            renderPatrullaAmbiental(container);
            break;
        case 'proyectos':
            renderProyectosAmbientales(container);
            break;
        case 'articulacion':
            renderArticulacion(container);
            break;
        default:
            container.innerHTML = '<p>Sección en construcción.</p>';
    }
}

// CORRECCIÓN: Se agrega la verificación 'd.INDICADOR &&' para estabilidad
function renderEducacionAmbiental(container) {
    const talleres = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('TALLERES'));
    const promesa = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('PROMESA'));
    
    container.innerHTML = `
        <h2 class="section-title">Educación Ambiental</h2>
        
        <div class="section-description">
            <p>Esta área se encarga de actividades como talleres de educación ambiental, operativos puerta a puerta, la conformación de la mesa intersectorial de Educación Ambiental, eventos de siembra de árboles, capacitación de docentes, y la difusión de contenido ambiental en redes y medios.</p>
        </div>
        
        <div class="row g-4 mb-4">
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Niños en Talleres', talleres ? talleres['ACUMULADO TOTAL'] : 0, '🏫', 'kpi-icon-green')}
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
                        <div id="chart-talleres"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Animar contadores
    animateCounter('kpi-niños-en-talleres', talleres ? talleres['ACUMULADO TOTAL'] : 0);
    animateCounter('kpi-alumnos-en-promesa-al-ambiente', promesa ? promesa['ACUMULADO TOTAL'] : 0);
    
    // Crear gráfico
    if (talleres) {
        createBarChart(
            'chart-talleres',
            ['2024', '2025', '2026 (Meta)'],
            'Niños capacitados',
            [talleres['ACUMULADO 2024'], talleres['ACUMULADO 2025'], talleres['ACUMULADO 2026']],
            '#009a44'
        );
    }
}

// CORRECCIÓN: Se agrega la verificación 'd.INDICADOR &&'
function renderEconomiaCircular(container) {
    const neumaticos = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('NEUMATÓN'));
    const raee = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('RAEETÓN'));
    const puntosLimpiosData = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('PUNTOS LIMPIOS'));
    
    container.innerHTML = `
        <h2 class="section-title">Economía Circular</h2>
        
        <div class="section-description">
            <p>Participa en actividades como el Neumatón (recolección de Neumáticos Fuera de Uso), la RAEETÓN (recolección de Residuos Electrónicos y Eléctricos en Desuso), la formulación de proyectos, la instalación de Ecopuntos y Puntos Limpios, y la coordinación de retiros masivos de NFU.</p>
        </div>
        
        <div class="row g-4 mb-4">
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Neumáticos (Tn)', neumaticos ? neumaticos['ACUMULADO TOTAL'] : 0, '🚚', 'kpi-icon-orange')}
            </div>
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('RAEE (Tn)', raee ? raee['ACUMULADO TOTAL'] : 0, '💻', 'kpi-icon-purple')}
            </div>
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Puntos Limpios Instalados', puntosLimpiosData ? puntosLimpiosData['ACUMULADO TOTAL'] : 0, '📍', 'kpi-icon-green')}
            </div>
        </div>
        
        <div class="row g-4">
            <div class="col-lg-12">
                <div class="chart-container">
                    <h5>Mapa de Puntos Limpios</h5>
                    <div id="map"></div>
                </div>
            </div>
        </div>
    `;
    
    // Animar contadores
    animateCounter('kpi-neumáticos-tn', neumaticos ? neumaticos['ACUMULADO TOTAL'] : 0);
    animateCounter('kpi-raee-tn', raee ? raee['ACUMULADO TOTAL'] : 0);
    animateCounter('kpi-puntos-limpios-instalados', puntosLimpiosData ? puntosLimpiosData['ACUMULADO TOTAL'] : 0);
    
    // Inicializar mapa
    initializeMap(puntosLimpios, 'punto-limpio');
}

// CORRECCIÓN: Se agrega la verificación 'd.INDICADOR &&'
function renderCambioClimatico(container) {
    const medicionesAire = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('CALIDAD DEL AIRE'));
    
    // Filtrar barrios intervenidos para descacharrado
    const barriosIntervenidos = datosBarrios.filter(b => 
        b['TAREAS DESARROLLADAS'] && b['TAREAS DESARROLLADAS'].toLowerCase().includes('descacharrado')
    );
    
    container.innerHTML = `
        <h2 class="section-title">Cambio Climático</h2>
        
        <div class="section-description">
            <p>Colabora en la RAEETÓN, el Neumatón (a través de la certificación de disposición final), y se enfoca en el mapeo de calidad de aire y ruido ambiental, el relevamiento y toma de muestras de agua en los ríos Arias-Arenales, la implementación de Biobardas, y las actividades de descacharrado y retiro de chatarra.</p>
        </div>
        
        <div class="row g-4 mb-4">
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Mediciones Calidad de Aire', medicionesAire ? medicionesAire['ACUMULADO TOTAL'] : 0, '🌬️', 'kpi-icon-blue')}
            </div>
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Barrios con Descacharrado', barriosIntervenidos.length, '🏠', 'kpi-icon-red')}
            </div>
        </div>
        
        <div class="row g-4">
            <div class="col-lg-12">
                <div class="chart-container">
                    <h5>Mapa de Barrios Intervenidos (Descacharrado)</h5>
                    <div id="map"></div>
                </div>
            </div>
        </div>
    `;
    
    // Animar contadores
    animateCounter('kpi-mediciones-calidad-de-aire', medicionesAire ? medicionesAire['ACUMULADO TOTAL'] : 0);
    animateCounter('kpi-barrios-con-descacharrado', barriosIntervenidos.length);
    
    // Inicializar mapa
    initializeMap(barriosIntervenidos, 'barrio');
}

// CORRECCIÓN: Se agrega la verificación 'd.INDICADOR &&'
function renderDesarrolloSostenible(container) {
    const huertas = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('HUERTAS'));
    
    container.innerHTML = `
        <h2 class="section-title">Desarrollo Sostenible</h2>
        
        <div class="section-description">
            <p>Se menciona en tareas de formulación de proyectos y relevamiento a plantas de tratamiento. El indicador de "Huertas" proviene de los datos de "Dir. Gral. de Desarrollo Sostenible".</p>
        </div>
        
        <div class="row g-4 mb-4">
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Huertas Comunitarias', huertas ? huertas['ACUMULADO TOTAL'] : 0, '🥕', 'kpi-icon-orange')}
            </div>
        </div>
        
        <div class="row g-4">
            <div class="col-lg-12">
                <div class="chart-container">
                    <h5>Comparativa Huertas Creadas</h5>
                    <div class="chart-wrapper" style="position: relative; height: 350px;">
                        <div id="chart-huertas"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    animateCounter('kpi-huertas-comunitarias', huertas ? huertas['ACUMULADO TOTAL'] : 0);
    
    if (huertas) {
        createBarChart(
            'chart-huertas',
            ['2024', '2025', '2026 (Meta)'],
            'Huertas',
            [huertas['ACUMULADO 2024'], huertas['ACUMULADO 2025'], huertas['ACUMULADO 2026']],
            '#ff8c00'
        );
    }
}

// FUNCIÓN MEJORADA: Usa datos de Inspecciones y la tabla de relacionados
function renderInspecciones(container) {
    const actasInfraccion = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('INFRACCIÓN LABRADAS'));
    const actasClausura = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('ACTAS DE CLAUSURA'));

    container.innerHTML = `
        <h2 class="section-title">Inspecciones</h2>
        
        <div class="section-description">
            <p>Realiza inspecciones, inspecciones conjuntas, labra actas de comprobación y actas de clausura, y ejecuta operativos de fiscalización.</p>
        </div>
        
        <div class="row g-4 mb-4">
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Actas de Infracción', actasInfraccion ? actasInfraccion['ACUMULADO TOTAL'] : 0, '📝', 'kpi-icon-red')}
            </div>
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Actas de Clausura', actasClausura ? actasClausura['ACUMULADO TOTAL'] : 0, '🚫', 'kpi-icon-red')}
            </div>
        </div>

        <div class="row g-4">
            <div class="col-lg-12">
                <div class="chart-container">
                    <h5>Histórico de Actas de Infracción</h5>
                    <div class="chart-wrapper" style="position: relative; height: 350px;">
                        <div id="chart-infracciones"></div>
                    </div>
                </div>
            </div>
        </div>
        
        ${createRelatedIndicatorsTable('Indicadores de la Dirección de Inspecciones', 'Dirección de Inspecciones')}
    `;

    animateCounter('kpi-actas-de-infracción', actasInfraccion ? actasInfraccion['ACUMULADO TOTAL'] : 0);
    animateCounter('kpi-actas-de-clausura', actasClausura ? actasClausura['ACUMULADO TOTAL'] : 0);

    if (actasInfraccion) {
        createBarChart(
            'chart-infracciones',
            ['2024', '2025 (Meta)'],
            'Actas Labradas',
            [actasInfraccion['ACUMULADO 2024'], actasInfraccion['ACUMULADO 2025']],
            '#d90429'
        );
    }
}

// FUNCIÓN MEJORADA: Usa datos de CAAMS y tabla de relacionados
function renderImpactoAmbiental(container) {
    const caams = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('CAAMS EMITIDOS'));

    container.innerHTML = `
        <h2 class="section-title">Impacto Ambiental</h2>
        
        <div class="section-description">
            <p>Es responsable de la emisión de las Resoluciones de CAAM (Certificado de Aptitud Ambiental) y de la capacitación o asesoramiento para la obtención del mismo.</p>
        </div>
        
        <div class="row g-4 mb-4">
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('CAAMs Emitidos', caams ? caams['ACUMULADO TOTAL'] : 0, '📜', 'kpi-icon-blue')}
            </div>
        </div>

        <div class="row g-4">
            <div class="col-lg-12">
                <div class="chart-container">
                    <h5>Comparativa Anual de CAAMs</h5>
                    <div class="chart-wrapper" style="position: relative; height: 350px;">
                        <div id="chart-caams"></div>
                    </div>
                </div>
            </div>
        </div>
        
        ${createRelatedIndicatorsTable('Indicadores de la Dirección de Impacto Ambiental', 'Dirección de Impacto Ambiental')}
    `;
    
    animateCounter('kpi-caams-emitidos', caams ? caams['ACUMULADO TOTAL'] : 0);

    if (caams) {
        createBarChart(
            'chart-caams',
            ['2024', '2025 (Meta)'],
            'Certificados',
            [caams['ACUMULADO 2024'], caams['ACUMULADO 2025']],
            '#02b3e4'
        );
    }
}

// FUNCIÓN MEJORADA: Usa datos de Patrulla y gráfico comparativo
function renderPatrullaAmbiental(container) {
    const operativos = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('OPERATIVOS DE PATRULLA'));
    const denuncias = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('DENUNCIAS AMBIENTALES'));

    const operativosTotal = operativos ? operativos['ACUMULADO TOTAL'] : 0;
    const denunciasTotal = denuncias ? denuncias['ACUMULADO TOTAL'] : 0;
    
    container.innerHTML = `
        <h2 class="section-title">Patrulla Ambiental</h2>
        
        <div class="section-description">
            <p>Sus funciones incluyen operativos de fiscalización y control de microbasurales, colaboraciones especiales con otras áreas municipales, la generación de reportes diarios/denuncias, y la emisión de actas de infracción y cédulas de notificación.</p>
        </div>
        
        <div class="row g-4 mb-4">
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Operativos Realizados', operativosTotal, '🚓', 'kpi-icon-purple')}
            </div>
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Denuncias Atendidas', denunciasTotal, '🚨', 'kpi-icon-orange')}
            </div>
        </div>

        <div class="row g-4">
            <div class="col-lg-12">
                <div class="chart-container">
                    <h5>Operativos de Patrulla vs. Denuncias (2024)</h5>
                    <div class="chart-wrapper" style="position: relative; height: 350px;">
                        <div id="chart-patrulla"></div>
                    </div>
                </div>
            </div>
        </div>
        
        ${createRelatedIndicatorsTable('Indicadores de la Dirección de Patrulla Ambiental', 'Dirección de Patrulla Ambiental')}
    `;

    animateCounter('kpi-operativos-realizados', operativosTotal);
    animateCounter('kpi-denuncias-atendidas', denunciasTotal);

    if (operativos && denuncias) {
        const data = [
            { label: 'Operativos', value: operativos['ACUMULADO 2024'], color: '#7b2cbf' },
            { label: 'Denuncias', value: denuncias['ACUMULADO 2024'], color: '#ff8c00' }
        ];
        createCustomBarChart('chart-patrulla', data);
    }
}

// FUNCIÓN MEJORADA: Usa datos de Proyectos Ambientales
function renderProyectosAmbientales(container) {
    const espaciosVerdes = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('ESPACIOS VERDES INTERVENIDOS'));

    container.innerHTML = `
        <h2 class="section-title">Proyectos Ambientales</h2>
        
        <div class="section-description">
            <p>Se encarga de la puesta a punto, el enriquecimiento y el mantenimiento de espacios verdes (plazas, platabandas, rotondas, etc.).</p>
        </div>
        
        <div class="row g-4 mb-4">
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Espacios Verdes Intervenidos', espaciosVerdes ? espaciosVerdes['ACUMULADO TOTAL'] : 0, '🌲', 'kpi-icon-green')}
            </div>
        </div>

        <div class="row g-4">
            <div class="col-lg-12">
                <div class="chart-container">
                    <h5>Comparativa de Intervenciones Anuales</h5>
                    <div class="chart-wrapper" style="position: relative; height: 350px;">
                        <div id="chart-proyectos"></div>
                    </div>
                </div>
            </div>
        </div>
        
        ${createRelatedIndicatorsTable('Indicadores de la Dirección de Proyectos Ambientales', 'Dirección de Proyectos Ambientales')}
    `;
    
    animateCounter('kpi-espacios-verdes-intervenidos', espaciosVerdes ? espaciosVerdes['ACUMULADO TOTAL'] : 0);

    if (espaciosVerdes) {
        createBarChart(
            'chart-proyectos',
            ['2024', '2025 (Meta)'],
            'Intervenciones',
            [espaciosVerdes['ACUMULADO 2024'], espaciosVerdes['ACUMULADO 2025']],
            '#009a44'
        );
    }
}

// CORRECCIÓN: Se agrega la verificación 'd.INDICADOR &&'
function renderArticulacion(container) {
    const convenios = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('CONVENIOS'));
    const campanas = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('CAMPAÑAS'));
    
    container.innerHTML = `
        <h2 class="section-title">Articulación</h2>
        
        <div class="section-description">
            <p>Indicadores de alto nivel gestionados directamente por la Subsecretaría, incluyendo convenios interinstitucionales y campañas de comunicación masiva.</p>
        </div>
        
        <div class="row g-4 mb-4">
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Convenios Firmados', convenios ? convenios['ACUMULADO TOTAL'] : 0, '🤝', 'kpi-icon-purple')}
            </div>
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Campañas de Comunicación', campanas ? campanas['ACUMULADO TOTAL'] : 0, '🎤', 'kpi-icon-blue')}
            </div>
        </div>
        
        ${createRelatedIndicatorsTable('Indicadores de la Subsecretaría de Gestión Ambiental', 'Subsecretaría de Gestión Ambiental')}
    `;
    
    animateCounter('kpi-convenios-firmados', convenios ? convenios['ACUMULADO TOTAL'] : 0);
    animateCounter('kpi-campanas-de-comunicacion', campanas ? campanas['ACUMULADO TOTAL'] : 0);
}

// =========================================
// ----- FUNCIONES DE UTILIDAD Y COMPONENTES -----
// =========================================

function createKpiCard(label, value, icon, colorClass) {
    // Generación de ID más robusto
    const kpiId = 'kpi-' + label.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    
    return `
        <div class="kpi-card">
            <div class="card-body">
                <div class="kpi-card-icon ${colorClass}">
                    <span class="emoji-icon">${icon}</span>
                </div>
                <div class="kpi-card-content">
                    <div class="kpi-value" id="${kpiId}">0</div>
                    <p class="kpi-label">${label}</p>
                </div>
            </div>
        </div>
    `;
}

function animateCounter(id, endValue) {
    const el = document.getElementById(id);
    if (!el) return;

    const finalValue = Number(endValue);
    if (isNaN(finalValue)) {
        el.textContent = endValue;
        return;
    }

    let startValue = 0;
    const duration = 1500;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = finalValue / steps;
    
    const isFloat = finalValue % 1 !== 0 || String(finalValue).includes('.');
    const decimalPlaces = isFloat ? 2 : 0;

    const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= finalValue) {
            clearInterval(timer);
            el.textContent = finalValue.toLocaleString('es-AR', {minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces});
        } else {
            const displayValue = isFloat ? startValue : Math.ceil(startValue);
            el.textContent = displayValue.toLocaleString('es-AR', {minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces});
        }
    }, stepTime);
}

/**
 * Crea un gráfico de barras simple para comparación anual.
 * @param {string} containerId ID del contenedor DIV.
 * @param {string[]} labels Etiquetas de los ejes (ej: ['2024', '2025']).
 * @param {string} dataLabel Nombre de la serie de datos.
 * @param {number[]} data Valores numéricos.
 * @param {string} color Color de las barras.
 */
function createBarChart(containerId, labels, dataLabel, data, color = '#02b3e4') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    const barChartEl = document.createElement('div');
    barChartEl.classList.add('simple-bar-chart');

    const dataArray = data.map(Number).filter(n => !isNaN(n));
    const maxValue = Math.max(...dataArray, 1);
    const dataDisplay = data;

    dataArray.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.backgroundColor = color;
        // Ajuste de altura para dejar espacio para la etiqueta superior
        const heightPercent = (value / maxValue) * 90;
        bar.style.height = `${heightPercent}%`;
        
        // CORRECCIÓN: Evitar NaN si el dato es null/undefined
        const displayValue = (dataDisplay[index] !== undefined && dataDisplay[index] !== null) ? Number(dataDisplay[index]) : 0;
        const isFloat = displayValue % 1 !== 0 || String(displayValue).includes('.');
        const decimalPlaces = isFloat ? 2 : 0;

        const spanValue = document.createElement('span');
        spanValue.textContent = displayValue.toLocaleString('es-AR', {minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces});
        bar.appendChild(spanValue);

        const labelEl = document.createElement('div');
        labelEl.classList.add('label');
        labelEl.textContent = labels[index];
        bar.appendChild(labelEl);

        barChartEl.appendChild(bar);
    });

    container.appendChild(barChartEl);
}


/**
 * Crea un gráfico de barras para comparar diferentes categorías con colores distintos.
 * @param {string} containerId ID del contenedor DIV.
 * @param {Array<{label: string, value: number, color: string}>} data Array de objetos de datos.
 */
function createCustomBarChart(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    const barChartEl = document.createElement('div');
    barChartEl.classList.add('simple-bar-chart');

    const dataValues = data.map(d => Number(d.value)).filter(n => !isNaN(n));
    const maxValue = Math.max(...dataValues, 1);

    data.forEach(item => {
        const value = Number(item.value);
        if (isNaN(value)) return;

        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.backgroundColor = item.color;
        const heightPercent = (value / maxValue) * 90;
        bar.style.height = `${heightPercent}%`;
        
        const isFloat = value % 1 !== 0 || String(value).includes('.');
        const decimalPlaces = isFloat ? 2 : 0;

        const spanValue = document.createElement('span');
        spanValue.textContent = value.toLocaleString('es-AR', {minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces});
        bar.appendChild(spanValue);

        const labelEl = document.createElement('div');
        labelEl.classList.add('label');
        labelEl.textContent = item.label;
        bar.appendChild(labelEl);

        barChartEl.appendChild(bar);
    });

    container.appendChild(barChartEl);
}

/**
 * Crea una tabla de indicadores relacionados para mostrar detalles.
 * @param {string} title Título de la sección de la tabla.
 * @param {string} filterDependencia Valor exacto de AREA/DEPENDENCIA a filtrar.
 */
function createRelatedIndicatorsTable(title, filterDependencia) {
    const relatedIndicators = datosIndicadores.filter(d => 
        d['AREA/DEPENDENCIA'] === filterDependencia
    );

    if (relatedIndicators.length === 0) {
        return `<div class="alert-warning-custom mt-4" role="alert">
            <strong>Atención:</strong> No hay indicadores específicos con el filtro "${filterDependencia}".
        </div>`;
    }

    let tableRows = relatedIndicators.map(d => `
        <tr>
            <td>${d.INDICADOR}</td>
            <td>${d['AREA/DEPENDENCIA']}</td>
            <td>${Number(d['ACUMULADO TOTAL']).toLocaleString('es-AR', {minimumFractionDigits: 0, maximumFractionDigits: 2})}</td>
        </tr>
    `).join('');

    return `
        <div class="chart-container mt-4">
            <h5>${title}</h5>
            <div class="table-responsive">
                <table class="table table-related-indicators">
                    <thead>
                        <tr>
                            <th>Indicador</th>
                            <th>Dependencia</th>
                            <th>Acumulado Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}


// =========================================
// ----- FUNCIONES DE MAPA Y EXPORTACIÓN -----
// =========================================

function initializeMap(markersData, type) {
    const mapEl = document.getElementById('map');
    if (!mapEl) return;

    // Asegurarse de que el mapa no se inicialice dos veces
    if (mapInstance) {
        mapInstance.remove();
    }

    mapInstance = L.map('map').setView(SALTA_CENTER, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapInstance);

    // Iconos personalizados con SVG
    const createSvgIcon = (fillColor) => L.icon({
        iconUrl: 'data:image/svg+xml;base64,' + btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${fillColor}" width="32px" height="32px"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`),
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
    
    const barrioIcon = createSvgIcon('#D90429'); // Rojo
    const puntoLimpioIcon = createSvgIcon('#009A44'); // Verde

    // Añadir marcadores
    const validMarkers = [];
    markersData.forEach(d => {
        if (d.lat && d.lng) {
            let popupContent = '';
            let icon = barrioIcon;

            if (type === 'barrio') {
                popupContent = `<strong>${d['NOMBRE DEL BARRIO']}</strong><br>${d['TAREAS DESARROLLADAS']}`;
                icon = barrioIcon;
            } else if (type === 'punto-limpio') {
                popupContent = `<strong>${d['NOMBRE']}</strong><br>${d['DIRECCION']}`;
                icon = puntoLimpioIcon;
            }
            
            const marker = L.marker([d.lat, d.lng], { icon: icon })
                .addTo(mapInstance)
                .bindPopup(popupContent);
            
            validMarkers.push(marker);
        }
    });
    
    // Ajustar el zoom a los marcadores si hay datos
    if (validMarkers.length > 0) {
        const group = new L.featureGroup(validMarkers);
        mapInstance.fitBounds(group.getBounds().pad(0.1));
    } else {
         mapInstance.setView(SALTA_CENTER, 13);
    }
}

function exportToCSV() {
    if (!datosIndicadores.length) {
        alert("No hay datos para exportar.");
        return;
    }

    const headers = Object.keys(datosIndicadores[0]);
    let csvContent = "data:text/csv;charset=utf-8,";
    
    // Formato de cabecera usando ';' como delimitador
    csvContent += headers.join(";") + "\r\n";

    datosIndicadores.forEach(row => {
        const values = headers.map(header => {
            let cell = row[header] === null || row[header] === undefined ? '' : row[header];
            cell = String(cell).replace(/"/g, '""');
            // Si el contenido contiene el delimitador o un salto de línea, encapsularlo
            if (cell.includes(';') || cell.includes(',') || cell.includes('\n')) {
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
