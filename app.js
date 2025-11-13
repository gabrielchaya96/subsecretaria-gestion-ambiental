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
    // Añadidos para dar contenido a las secciones sin KPIs directos
    {
        "INDICADOR": "ACTAS DE INFRACCIÓN",
        "AREA/DEPENDENCIA": "Dirección de Inspecciones",
        "ACUMULADO TOTAL": 150,
        "ACUMULADO 2024": 150,
        "ACUMULADO 2025": 70,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "CERTIFICADOS AMBIENTALES EMITIDOS (CAAM)",
        "AREA/DEPENDENCIA": "Dirección de Impacto Ambiental",
        "ACUMULADO TOTAL": 25,
        "ACUMULADO 2024": 25,
        "ACUMULADO 2025": 10,
        "ACUMULADO 2026": 0
    },
    {
        "INDICADOR": "OPERATIVOS DE PATRULLA REALIZADOS",
        "AREA/DEPENDENCIA": "Dirección de Patrulla Ambiental",
        "ACUMULADO TOTAL": 210,
        "ACUMULADO 2024": 210,
        "ACUMULADO 2025": 100,
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

function renderEducacionAmbiental(container) {
    // Asegurarse de que las búsquedas sean robustas
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
                    <div id="chart-talleres" style="position: relative; height: 350px;">
                        </div>
                </div>
            </div>
        </div>
    `;
    
    // Animar contadores
    animateCounter('kpi-ninos-en-talleres', talleres ? talleres['ACUMULADO TOTAL'] : 0);
    animateCounter('kpi-alumnos-en-promesa-al-ambiente', promesa ? promesa['ACUMULADO TOTAL'] : 0);
    
    // Crear gráfico con Chart.js
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

function renderEconomiaCircular(container) {
    // Asegurarse de que las búsquedas sean robustas
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
    animateCounter('kpi-neumaticos-tn', neumaticos ? neumaticos['ACUMULADO TOTAL'] : 0);
    animateCounter('kpi-raee-tn', raee ? raee['ACUMULADO TOTAL'] : 0);
    animateCounter('kpi-puntos-limpios-instalados', puntosLimpiosData ? puntosLimpiosData['ACUMULADO TOTAL'] : 0);
    
    // Inicializar mapa
    initializeMap(puntosLimpios, 'punto-limpio');
}

function renderCambioClimatico(container) {
    const medicionesAire = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('CALIDAD DEL AIRE'));
    const descacharrado = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('DESCACHARRADO'));
    
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
                    <div id="chart-huertas" style="position: relative; height: 350px;">
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

// ----------------------------------------------------------------------
// SECCIONES CON MEJORA VISUAL (Antes eran tablas o mensajes de advertencia)
// ----------------------------------------------------------------------

function renderInspecciones(container) {
    const actasInfraccion = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('ACTAS DE INFRACCIÓN'));
    const convenios = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('CONVENIOS FIRMADOS'));
    
    container.innerHTML = `
        <h2 class="section-title">Inspecciones</h2>
        
        <div class="section-description">
            <p>Realiza inspecciones, inspecciones conjuntas, labra actas de comprobación y clausura, y ejecuta operativos de fiscalización para el cumplimiento de normativas ambientales.</p>
        </div>
        
        <div class="row g-4 mb-4">
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Actas de Infracción', actasInfraccion ? actasInfraccion['ACUMULADO TOTAL'] : 0, '📝', 'kpi-icon-red')}
            </div>
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Convenios con Otros Entes', convenios ? convenios['ACUMULADO TOTAL'] : 0, '🤝', 'kpi-icon-blue')}
            </div>
        </div>

        <div class="row g-4">
            <div class="col-lg-12">
                <div class="chart-container">
                    <h5>Actas de Infracción por Año</h5>
                    <div id="chart-actas-infraccion" style="position: relative; height: 350px;"></div>
                </div>
            </div>
        </div>
    `;

    animateCounter('kpi-actas-de-infraccion', actasInfraccion ? actasInfraccion['ACUMULADO TOTAL'] : 0);
    animateCounter('kpi-convenios-con-otros-entes', convenios ? convenios['ACUMULADO TOTAL'] : 0);

    if (actasInfraccion) {
        createBarChart(
            'chart-actas-infraccion',
            ['2024', '2025', '2026 (Meta)'],
            'Actas de Infracción',
            [actasInfraccion['ACUMULADO 2024'], actasInfraccion['ACUMULADO 2025'], actasInfraccion['ACUMULADO 2026']],
            '#D90429' // Rojo para alertas/infracciones
        );
    }
}

function renderImpactoAmbiental(container) {
    const certificados = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('CERTIFICADOS AMBIENTALES EMITIDOS (CAAM)'));
    const campanas = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('CAMPAÑAS DE COMUNICACIÓN'));

    container.innerHTML = `
        <h2 class="section-title">Impacto Ambiental</h2>
        
        <div class="section-description">
            <p>Es responsable de la emisión de las Resoluciones de CAAM (Certificado de Aptitud Ambiental) y de la capacitación o asesoramiento para la obtención del mismo, asegurando el cumplimiento de normativas.</p>
        </div>
        
        <div class="row g-4 mb-4">
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('CAAMs Emitidos', certificados ? certificados['ACUMULADO TOTAL'] : 0, '✅', 'kpi-icon-green')}
            </div>
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Campañas de Concientización', campanas ? campanas['ACUMULADO TOTAL'] : 0, '📢', 'kpi-icon-blue')}
            </div>
        </div>

        <div class="row g-4">
            <div class="col-lg-12">
                <div class="chart-container">
                    <h5>CAAMs Emitidos por Año</h5>
                    <div id="chart-caam" style="position: relative; height: 350px;"></div>
                </div>
            </div>
        </div>
    `;

    animateCounter('kpi-caams-emitidos', certificados ? certificados['ACUMULADO TOTAL'] : 0);
    animateCounter('kpi-campanas-de-concientizacion', campanas ? campanas['ACUMULADO TOTAL'] : 0);

    if (certificados) {
        createBarChart(
            'chart-caam',
            ['2024', '2025', '2026 (Meta)'],
            'CAAMs Emitidos',
            [certificados['ACUMULADO 2024'], certificados['ACUMULADO 2025'], certificados['ACUMULADO 2026']],
            '#009A44' // Verde para éxito/certificaciones
        );
    }
}

function renderPatrullaAmbiental(container) {
    const operativosPatrulla = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('OPERATIVOS DE PATRULLA REALIZADOS'));
    const convenios = datosIndicadores.find(d => d.INDICADOR && d.INDICADOR.includes('CONVENIOS FIRMADOS'));

    container.innerHTML = `
        <h2 class="section-title">Patrulla Ambiental</h2>
        
        <div class="section-description">
            <p>Sus funciones incluyen operativos de fiscalización y control de microbasurales, colaboraciones especiales con otras áreas municipales, la generación de reportes diarios/denuncias, y la emisión de actas de infracción y cédulas de notificación.</p>
        </div>
        
        <div class="row g-4 mb-4">
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Operativos Realizados', operativosPatrulla ? operativosPatrulla['ACUMULADO TOTAL'] : 0, '🚔', 'kpi-icon-orange')}
            </div>
            <div class="col-md-6 col-lg-4">
                ${createKpiCard('Colaboraciones Interinstitucionales', convenios ? convenios['ACUMULADO TOTAL'] : 0, '🤝', 'kpi-icon-blue')}
            </div>
