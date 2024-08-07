function calcularFlujoDeCaja() {
    const anioInicio = parseInt(document.getElementById("anioInicio").value);
    const crecimientoIngresos = parseFloat(document.getElementById("crecimientoIngresos").value) / 100;

    let ingreso = parseFloat(document.getElementById("ingresoInicial").value);
    let costoMateriaPrima = parseFloat(document.getElementById("costoMateriaPrimaInicial").value);
    let costoManoObra = parseFloat(document.getElementById("costoManoObraInicial").value);
    let gastosAdmin = parseFloat(document.getElementById("gastosAdminInicial").value);
    let gastosVenta = parseFloat(document.getElementById("gastosVentaInicial").value);
    const inversion = parseFloat(document.getElementById("inversion").value);
    const ventasActivos = parseFloat(document.getElementById("ventasActivos").value);
    const pagoDeudas = parseFloat(document.getElementById("pagoDeudas").value);

    let tablaResultados = document.getElementById("tablaResultados");
    tablaResultados.innerHTML = "";

    let gastosFinancierosArray = [];
    for (let i = 0; i < 5; i++) {
        gastosFinancierosArray.push(parseFloat(document.getElementById(`gastosFinancieros${anioInicio + i}`).value));
    }

    let datosFlujoCaja = [];

    for (let i = 0; i < 5; i++) {
        const anio = anioInicio + i;

        if (i > 0) {
            ingreso *= (1 + crecimientoIngresos);
            costoMateriaPrima *= (1 + crecimientoIngresos);
            costoManoObra *= (1 + crecimientoIngresos);
            gastosAdmin *= (1 + crecimientoIngresos);
            gastosVenta *= (1 + crecimientoIngresos);
        }

        const gastosFinancieros = gastosFinancierosArray[i];
        const flujoOperativo = ingreso - (costoMateriaPrima + costoManoObra + gastosAdmin + gastosVenta + gastosFinancieros);
        const flujoAntesParticipacion = flujoOperativo + ventasActivos - pagoDeudas;
        const participacionTrabajadores = flujoAntesParticipacion * 0.15;
        const utilidadAntesImpuestos = flujoAntesParticipacion - participacionTrabajadores;
        const impuestoRenta = utilidadAntesImpuestos * 0.25;
        const utilidadAntesReserva = utilidadAntesImpuestos - impuestoRenta;
        const reservaLegal = utilidadAntesReserva * 0.10;
        const flujoNetoProyectado = utilidadAntesReserva - reservaLegal;

        let fila = `<tr>
            <td>${anio}</td>
            <td>${ingreso.toFixed(2)}</td>
            <td>${costoMateriaPrima.toFixed(2)}</td>
            <td>${costoManoObra.toFixed(2)}</td>
            <td>${gastosAdmin.toFixed(2)}</td>
            <td>${gastosVenta.toFixed(2)}</td>
            <td>${gastosFinancieros.toFixed(2)}</td>
            <td>${inversion.toFixed(2)}</td>
            <td>${flujoOperativo.toFixed(2)}</td>
            <td>${ventasActivos.toFixed(2)}</td>
            <td>${pagoDeudas.toFixed(2)}</td>
            <td>${flujoAntesParticipacion.toFixed(2)}</td>
            <td>${participacionTrabajadores.toFixed(2)}</td>
            <td>${utilidadAntesImpuestos.toFixed(2)}</td>
            <td>${impuestoRenta.toFixed(2)}</td>
            <td>${utilidadAntesReserva.toFixed(2)}</td>
            <td>${reservaLegal.toFixed(2)}</td>
            <td>${flujoNetoProyectado.toFixed(2)}</td>
        </tr>`;

        tablaResultados.innerHTML += fila;

        datosFlujoCaja.push({
            anio,
            ingreso: ingreso.toFixed(2),
            costoMateriaPrima: costoMateriaPrima.toFixed(2),
            costoManoObra: costoManoObra.toFixed(2),
            gastosAdmin: gastosAdmin.toFixed(2),
            gastosVenta: gastosVenta.toFixed(2),
            gastosFinancieros: gastosFinancieros.toFixed(2),
            inversion: inversion.toFixed(2),
            flujoOperativo: flujoOperativo.toFixed(2),
            ventasActivos: ventasActivos.toFixed(2),
            pagoDeudas: pagoDeudas.toFixed(2),
            flujoAntesParticipacion: flujoAntesParticipacion.toFixed(2),
            participacionTrabajadores: participacionTrabajadores.toFixed(2),
            utilidadAntesImpuestos: utilidadAntesImpuestos.toFixed(2),
            impuestoRenta: impuestoRenta.toFixed(2),
            utilidadAntesReserva: utilidadAntesReserva.toFixed(2),
            reservaLegal: reservaLegal.toFixed(2),
            flujoNetoProyectado: flujoNetoProyectado.toFixed(2)
        });
    }

    // Guardar los datos en el localStorage
    localStorage.setItem('datosFlujoCaja', JSON.stringify(datosFlujoCaja));
}

function guardarYContinuar() {
    calcularFlujoDeCaja();
    window.location.href = 'index4.html';
}

document.getElementById("anioInicio").addEventListener("input", function () {
    const anioInicio = parseInt(this.value);
    const gastosFinancierosDiv = document.getElementById("gastosFinancierosDiv");
    gastosFinancierosDiv.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const anio = anioInicio + i;
        gastosFinancierosDiv.innerHTML += `<label for="gastosFinancieros${anio}">Gastos Financieros para ${anio}:</label>
        <input type="number" id="gastosFinancieros${anio}" step="0.01" required><br><br>`;
    }
});
