document.addEventListener('DOMContentLoaded', function() {
    const inicioActividadesInput = document.getElementById('inicio-actividades');
    const tipoActividadesInput = document.getElementById('tipo-actividades');
    const ventasInput = document.getElementById('ventas');
    const ingresosFinancierosInput = document.getElementById('ingresos-financieros');
    const ventaActivosInput = document.getElementById('venta-activos');
    const ingresosAlquilerInput = document.getElementById('ingresos-alquiler');
    const totalIngresosElement = document.getElementById('total-ingresos');
    const efectivoInput = document.getElementById('efectivo');
    const cuentasCobrarInput = document.getElementById('cuentas-cobrar');
    const inventariosInput = document.getElementById('inventarios');
    const totalActivosCorrientesElement = document.getElementById('total-activos-corrientes');
    const terrenosInput = document.getElementById('terrenos');
    const edificiosInput = document.getElementById('edificios');
    const maquinariasInput = document.getElementById('maquinarias');
    const mueblesInput = document.getElementById('muebles');
    const equiposInput = document.getElementById('equipos');
    const vehiculosInput = document.getElementById('vehiculos');
    const totalActivosNoCorrientesElement = document.getElementById('total-activos-no-corrientes');
    const totalActivosElement = document.getElementById('total-activos');
    const materiaPrimaInput = document.getElementById('materia-prima');
    const manoObraInput = document.getElementById('mano-obra');
    const gastosAdministrativosInput = document.getElementById('gastos-administrativos');
    const gastosVentaInput = document.getElementById('gastos-venta');
    const gastosFinancierosInput = document.getElementById('gastos-financieros');
    const totalEgresosElement = document.getElementById('total-egresos');
    const cuentasPagarInput = document.getElementById('cuentas-pagar');
    const cacpecoInput = document.getElementById('cacpeco');
    const pichinchaInput = document.getElementById('pichincha');
    const totalPasivosCorrientesElement = document.getElementById('total-pasivos-corrientes');
    const ventas2021Input = document.getElementById('ventas-2021');
    const ventas2022Input = document.getElementById('ventas-2022');
    const ventas2023Input = document.getElementById('ventas-2023');
    const ventas2024Input = document.getElementById('ventas-2024');
    const crecimiento2021Element = document.getElementById('crecimiento-2021');
    const crecimiento2022Element = document.getElementById('crecimiento-2022');
    const crecimiento2023Element = document.getElementById('crecimiento-2023');
    const crecimiento2024Element = document.getElementById('crecimiento-2024');
    const incobrables2021Input = document.getElementById('incobrables-2021');
    const incobrables2022Input = document.getElementById('incobrables-2022');
    const incobrables2023Input = document.getElementById('incobrables-2023');
    const incobrables2024Input = document.getElementById('incobrables-2024');
    const porcentajeIncobrables2021Element = document.getElementById('porcentaje-incobrables-2021');
    const porcentajeIncobrables2022Element = document.getElementById('porcentaje-incobrables-2022');
    const porcentajeIncobrables2023Element = document.getElementById('porcentaje-incobrables-2023');
    const porcentajeIncobrables2024Element = document.getElementById('porcentaje-incobrables-2024');
    const activosCorrientes1Input = document.getElementById('activos-corrientes-1');
    const activosCorrientes2Input = document.getElementById('activos-corrientes-2');
    const activosCorrientes3Input = document.getElementById('activos-corrientes-3');
    const pasivosCorrientes1Input = document.getElementById('pasivos-corrientes-1');
    const pasivosCorrientes2Input = document.getElementById('pasivos-corrientes-2');
    const pasivosCorrientes3Input = document.getElementById('pasivos-corrientes-3');
    const capitalTrabajoElement = document.getElementById('capital-trabajo');
    const liquidezCorrienteElement = document.getElementById('liquidez-corriente');
    const pruebaAcidaElement = document.getElementById('prueba-acida');
    const pasivoTotalElement = document.getElementById('pasivo-total');
    const activoTotalElement = document.getElementById('activo-total');
    const endeudamientoActivoElement = document.getElementById('endeudamiento-activo');
    const ratioEndeudamientoElement = document.getElementById('ratio-endeudamiento');
    const guardarButton = document.getElementById('guardar');
    const inventarioElement = document.getElementById('inventario');
    function updateEndeudamientoActivo() {
        const pasivoTotal = parseFloat(pasivoTotalInput.value) || 0;
        const activoTotal = parseFloat(activoTotalInput.value) || 0;
        const ratioEndeudamiento = activoTotal !== 0 ? pasivoTotal / activoTotal : 0;

        endeudamientoActivoElement.textContent = ratioEndeudamiento.toFixed(2);
        ratioEndeudamientoElements.forEach(el => {
            el.textContent = ratioEndeudamiento.toFixed(2);
        });
    }

    pasivoTotalInput.addEventListener('input', updateEndeudamientoActivo);
    activoTotalInput.addEventListener('input', updateEndeudamientoActivo);

    updateEndeudamientoActivo(); 

    let inicioActividades = '';
    let tipoActividades = '';
    let ventas = 0;
    let ingresosFinancieros = 0;
    let ventaActivos = 0;
    let ingresosAlquiler = 0;
    let totalIngresos = 0;
    let efectivo = 0;
    let cuentasCobrar = 0;
    let inventarios = 0;
    let totalActivosCorrientes = 0;
    let terrenos = 0;
    let edificios = 0;
    let maquinarias = 0;
    let muebles = 0;
    let equipos = 0;
    let vehiculos = 0;
    let totalActivosNoCorrientes = 0;
    let totalActivos = 0;
    let materiaPrima = 0;
    let manoObra = 0;
    let gastosAdministrativos = 0;
    let gastosVenta = 0;
    let gastosFinancieros = 0;
    let totalEgresos = 0;
    let cuentasPagar = 0;
    let cacpeco = 0;
    let pichincha = 0;
    let totalPasivosCorrientes = 15590.04; // dato estático por ahora
    let ventas2021 = 0;
    let ventas2022 = 0;
    let ventas2023 = 0;
    let ventas2024 = 0;
    let incobrables2021 = 0;
    let incobrables2022 = 0;
    let incobrables2023 = 0;
    let incobrables2024 = 0;

    function updateTotalIngresos() {
        ventas = parseFloat(ventasInput.value) || 0;
        ventaActivos = parseFloat(ventaActivosInput.value) || 0;
        totalIngresos = ventas + ventaActivos;
        totalIngresosElement.textContent = `$${totalIngresos.toFixed(2)}`;
    }

    function updateTotalActivosCorrientes() {
        efectivo = parseFloat(efectivoInput.value) || 0;
        cuentasCobrar = parseFloat(cuentasCobrarInput.value) || 0;
        inventarios = parseFloat(inventariosInput.value) || 0;
        totalActivosCorrientes = efectivo + cuentasCobrar + inventarios;
        totalActivosCorrientesElement.textContent = `$${totalActivosCorrientes.toFixed(2)}`;
        activosCorrientes1Input.value = totalActivosCorrientes.toFixed(2);
        activosCorrientes2Input.value = totalActivosCorrientes.toFixed(2);
        activosCorrientes3Input.value = totalActivosCorrientes.toFixed(2);
        updateCapitalTrabajo();
        updateLiquidezCorriente();
        updatePruebaAcida();
        updateTotalActivos();
        updateEndeudamientoActivo();
    }

    function updateTotalActivosNoCorrientes() {
        terrenos = parseFloat(terrenosInput.value) || 0;
        edificios = parseFloat(edificiosInput.value) || 0;
        maquinarias = parseFloat(maquinariasInput.value) || 0;
        muebles = parseFloat(mueblesInput.value) || 0;
        equipos = parseFloat(equiposInput.value) || 0;
        vehiculos = parseFloat(vehiculosInput.value) || 0;
        totalActivosNoCorrientes = terrenos + edificios + maquinarias + muebles + equipos + vehiculos;
        totalActivosNoCorrientesElement.textContent = `$${totalActivosNoCorrientes.toFixed(2)}`;
        updateTotalActivos();
        updateEndeudamientoActivo();
    }

    function updateTotalActivos() {
        totalActivos = totalActivosCorrientes + totalActivosNoCorrientes;
        totalActivosElement.textContent = `$${totalActivos.toFixed(2)}`;
        activoTotalElement.textContent = `$${totalActivos.toFixed(2)}`;
    }

    function updateTotalEgresos() {
        materiaPrima = parseFloat(materiaPrimaInput.value) || 0;
        manoObra = parseFloat(manoObraInput.value) || 0;
        gastosAdministrativos = parseFloat(gastosAdministrativosInput.value) || 0;
        gastosVenta = parseFloat(gastosVentaInput.value) || 0;
        gastosFinancieros = parseFloat(gastosFinancierosInput.value) || 0;
        totalEgresos = materiaPrima + manoObra + gastosAdministrativos + gastosVenta + gastosFinancieros;
        totalEgresosElement.textContent = `$${totalEgresos.toFixed(2)}`;
    }

    function updateTotalPasivosCorrientes() {
        cuentasPagar = parseFloat(cuentasPagarInput.value) || 0;
        cacpeco = parseFloat(cacpecoInput.value) || 0;
        pichincha = parseFloat(pichinchaInput.value) || 0;
        totalPasivosCorrientes = cuentasPagar + cacpeco + pichincha;
        totalPasivosCorrientesElement.textContent = `$${totalPasivosCorrientes.toFixed(2)}`;
        pasivosCorrientes1Input.value = totalPasivosCorrientes.toFixed(2);
        pasivosCorrientes2Input.value = totalPasivosCorrientes.toFixed(2);
        pasivosCorrientes3Input.value = totalPasivosCorrientes.toFixed(2);
        pasivoTotalElement.textContent = `$${totalPasivosCorrientes.toFixed(2)}`;
        updateCapitalTrabajo();
        updateLiquidezCorriente();
        updatePruebaAcida();
        updateEndeudamientoActivo();
    }

    function updateCapitalTrabajo() {
        const activosCorrientes = parseFloat(activosCorrientes1Input.value) || 0;
        const pasivosCorrientes = parseFloat(pasivosCorrientes1Input.value) || 0;
        const capitalTrabajo = activosCorrientes - pasivosCorrientes;
        capitalTrabajoElement.textContent = `$${capitalTrabajo.toFixed(2)}`;
    }

    function updateLiquidezCorriente() {
        const activosCorrientes = parseFloat(activosCorrientes2Input.value) || 0;
        const pasivosCorrientes = parseFloat(pasivosCorrientes2Input.value) || 0;
        const liquidezCorriente = activosCorrientes / pasivosCorrientes;
        liquidezCorrienteElement.textContent = liquidezCorriente.toFixed(2);
    }

    function updatePruebaAcida() {
        const activosCorrientes = parseFloat(activosCorrientes3Input.value) || 0;
        const inventario = parseFloat(inventariosInput.value) || 0;
        const pasivosCorrientes = parseFloat(pasivosCorrientes3Input.value) || 0;
        const pruebaAcida = (activosCorrientes - inventario) / pasivosCorrientes;
        pruebaAcidaElement.textContent = pruebaAcida.toFixed(2);
    }

    function updateCrecimiento() {
        ventas2021 = parseFloat(ventas2021Input.value) || 0;
        ventas2022 = parseFloat(ventas2022Input.value) || 0;
        ventas2023 = parseFloat(ventas2023Input.value) || 0;
        ventas2024 = parseFloat(ventas2024Input.value) || 0;

        crecimiento2021Element.textContent = '----';

        const crecimiento2022 = ((ventas2022 - ventas2021) / ventas2021) * 100;
        crecimiento2022Element.textContent = `${crecimiento2022.toFixed(2)}%`;

        const crecimiento2023 = ((ventas2023 - ventas2022) / ventas2022) * 100;
        crecimiento2023Element.textContent = `${crecimiento2023.toFixed(2)}%`;

        const crecimiento2024 = ((ventas2024 - ventas2023) / ventas2023) * 100;
        crecimiento2024Element.textContent = `${crecimiento2024.toFixed(2)}%`;
    }

    function updatePorcentajeIncobrables() {
        ventas2021 = parseFloat(ventas2021Input.value) || 0;
        ventas2022 = parseFloat(ventas2022Input.value) || 0;
        ventas2023 = parseFloat(ventas2023Input.value) || 0;
        ventas2024 = parseFloat(ventas2024Input.value) || 0;

        incobrables2021 = parseFloat(incobrables2021Input.value) || 0;
        incobrables2022 = parseFloat(incobrables2022Input.value) || 0;
        incobrables2023 = parseFloat(incobrables2023Input.value) || 0;
        incobrables2024 = parseFloat(incobrables2024Input.value) || 0;

        porcentajeIncobrables2021Element.textContent = ((incobrables2021 / ventas2021) * 100).toFixed(2) + '%';
        porcentajeIncobrables2022Element.textContent = ((incobrables2022 / ventas2022) * 100).toFixed(2) + '%';
        porcentajeIncobrables2023Element.textContent = ((incobrables2023 / ventas2023) * 100).toFixed(2) + '%';
        porcentajeIncobrables2024Element.textContent = ((incobrables2024 / ventas2024) * 100).toFixed(2) + '%';
    }

    function updateEndeudamientoActivo() {
        const pasivoTotal = parseFloat(totalPasivosElement.textContent.replace('$', '').replace(',', '')) || 0;
        const activoTotal = parseFloat(totalActivosElement.textContent.replace('$', '').replace(',', '')) || 0;
        const ratioEndeudamiento = pasivoTotal / activoTotal;
        
        pasivoTotalElement.textContent = `$${pasivoTotal.toFixed(2)}`;
        activoTotalElement.textContent = `$${activoTotal.toFixed(2)}`;
        endeudamientoActivoElement.textContent = ratioEndeudamiento.toFixed(2);
        
        ratioEndeudamientoElements.forEach(el => {
            el.textContent = ratioEndeudamiento.toFixed(2);
        });
    }

    ventasInput.addEventListener('input', updateTotalIngresos);
    ventaActivosInput.addEventListener('input', updateTotalIngresos);
    function updateValues() {
        updateEndeudamientoActivo();
    }

    [totalPasivosElement, activosCorrientesElement, activosNoCorrientesElement].forEach(el => {
        el.addEventListener('input', updateValues);
    });

    // Llamar a la función de actualización inicial
    updateValues();
    efectivoInput.addEventListener('input', () => {
        updateTotalActivosCorrientes();
        updateTotalActivos();
    });

    cuentasCobrarInput.addEventListener('input', () => {
        updateTotalActivosCorrientes();
        updateTotalActivos();
    });

    inventariosInput.addEventListener('input', () => {
        updateTotalActivosCorrientes();
        updateTotalActivos();
    });

    terrenosInput.addEventListener('input', () => {
        updateTotalActivosNoCorrientes();
        updateTotalActivos();
    });

    edificiosInput.addEventListener('input', () => {
        updateTotalActivosNoCorrientes();
        updateTotalActivos();
    });

    maquinariasInput.addEventListener('input', () => {
        updateTotalActivosNoCorrientes();
        updateTotalActivos();
    });

    mueblesInput.addEventListener('input', () => {
        updateTotalActivosNoCorrientes();
        updateTotalActivos();
    });

    equiposInput.addEventListener('input', () => {
        updateTotalActivosNoCorrientes();
        updateTotalActivos();
    });

    vehiculosInput.addEventListener('input', () => {
        updateTotalActivosNoCorrientes();
        updateTotalActivos();
    });

    materiaPrimaInput.addEventListener('input', updateTotalEgresos);
    manoObraInput.addEventListener('input', updateTotalEgresos);
    gastosAdministrativosInput.addEventListener('input', updateTotalEgresos);
    gastosVentaInput.addEventListener('input', updateTotalEgresos);
    gastosFinancierosInput.addEventListener('input', updateTotalEgresos);

    cuentasPagarInput.addEventListener('input', updateTotalPasivosCorrientes);
    cacpecoInput.addEventListener('input', updateTotalPasivosCorrientes);
    pichinchaInput.addEventListener('input', updateTotalPasivosCorrientes);

    ventas2021Input.addEventListener('input', () => {
        updateCrecimiento();
        updatePorcentajeIncobrables();
    });
    ventas2022Input.addEventListener('input', () => {
        updateCrecimiento();
        updatePorcentajeIncobrables();
    });
    ventas2023Input.addEventListener('input', () => {
        updateCrecimiento();
        updatePorcentajeIncobrables();
    });
    ventas2024Input.addEventListener('input', () => {
        updateCrecimiento();
        updatePorcentajeIncobrables();
    });

    incobrables2021Input.addEventListener('input', updatePorcentajeIncobrables);
    incobrables2022Input.addEventListener('input', updatePorcentajeIncobrables);
    incobrables2023Input.addEventListener('input', updatePorcentajeIncobrables);
    incobrables2024Input.addEventListener('input', updatePorcentajeIncobrables);

    guardarButton.addEventListener('click', function() {
        inicioActividades = inicioActividadesInput.value;
        tipoActividades = tipoActividadesInput.value;
        ingresosFinancieros = parseFloat(ingresosFinancierosInput.value) || 0;
        ingresosAlquiler = parseFloat(ingresosAlquilerInput.value) || 0;

        console.log('Inicio de Actividades Económicas:', inicioActividades);
        console.log('Tipo de Actividades Económicas:', tipoActividades);
        console.log('Ventas:', ventas);
        console.log('Ingresos Financieros:', ingresosFinancieros);
        console.log('Ingresos por Venta de Activos:', ventaActivos);
        console.log('Ingresos por alquiler:', ingresosAlquiler);
        console.log('Total de Ingresos:', totalIngresos);
        console.log('Efectivo:', efectivo);
        console.log('Cuentas y documentos por cobrar:', cuentasCobrar);
        console.log('Inventarios:', inventarios);
        console.log('Total Activos Corrientes:', totalActivosCorrientes);
        console.log('Terrenos:', terrenos);
        console.log('Edificios:', edificios);
        console.log('Maquinarias y equipos:', maquinarias);
        console.log('Muebles y enseres:', muebles);
        console.log('Equipos de computación:', equipos);
        console.log('Vehículos:', vehiculos);
        console.log('Total Activos No Corrientes:', totalActivosNoCorrientes);
        console.log('Total de Activos:', totalActivos);
        console.log('Costo de materia prima:', materiaPrima);
        console.log('Costo mano obra directa:', manoObra);
        console.log('Gastos administrativos:', gastosAdministrativos);
        console.log('Gastos de venta:', gastosVenta);
        console.log('Gastos financieros:', gastosFinancieros);
        console.log('Total de Egresos:', totalEgresos);
        console.log('Cuentas y documentos por pagar:', cuentasPagar);
        console.log('CACPECO:', cacpeco);
        console.log('PICHINCHA:', pichincha);
        console.log('Total Pasivos Corrientes:', totalPasivosCorrientes);
        console.log('Ventas 2021:', ventas2021);
        console.log('Ventas 2022:', ventas2022);
        console.log('Ventas 2023:', ventas2023);
        console.log('Ventas 2024:', ventas2024);
        console.log('Incobrables 2021:', incobrables2021);
        console.log('Incobrables 2022:', incobrables2022);
        console.log('Incobrables 2023:', incobrables2023);
        console.log('Incobrables 2024:', incobrables2024);
    });
});
