
const opts = require("conf.js")





async function main () {
  const client = await wdio.remote(opts);

  await client.setTimeouts(5000);

  const clickUsuario = await client.$(createSelector("android.widget.EditText", "USUARIO"));
  await clickUsuario.addValue('ssuccar11');

  const btnContinuar = await client.$(createSelector("android.widget.Button", "CONTINUAR"));
  await btnContinuar.click();

  await client.setTimeouts(2000);

  const clickPasword = await client.$(createSelector("android.widget.EditText", "CONTRASEÑA"));
  await clickPasword.addValue('123456');

  await client.setTimeouts(5000);

  const btnAcceder = await client.$(createSelector("android.widget.Button", "ACCEDER"));
  await btnAcceder.click();

  await client.setTimeouts(5000);

  const numberAuth = await client.$(createSelector("android.widget.EditText", "INGRESA TU NÚMERO TELEFÓNICO"));
  await numberAuth.addValue("8293417006");

  await client.setTimeouts(5000);

  await btnContinuar.click();

  await client.setTimeouts(5000);

  const btnMenu = await client.$(createSelector("android.widget.TextView", "8"));
  await btnMenu.click();

  await client.setTimeouts(3000);

  await btnMenu.click();
  await client.setTimeouts(2000);

  const btnTransacciones = await client.$(createSelector("android.widget.TextView", "Transacciones"));
  await btnTransacciones.click();

  await client.setTimeouts(2000);

  const btnPagoYTransferencias = await client.$(createSelector("android.widget.TextView", "Pagos y transferencias"));
  await btnPagoYTransferencias.click();

  await client.setTimeouts(1000);

  const btnSeleccionarProducto = await client.$(createSelector("android.widget.TextView", "Selecciona un producto"));
  await btnSeleccionarProducto.click();

  await client.setTimeouts(1000);

  const btnSeleccionarCuenta = await client.$(createSelector("android.widget.TextView", "*0522"));
  await btnSeleccionarCuenta.click();

  await client.setTimeouts(1000);

  const btnDestino = await client.$(createSelector("android.widget.TextView", "Destino"));
  await btnDestino.click();

  await client.setTimeouts(1000);

  const btnSeleccionarCuentaDestino = await client.$(createSelector("android.widget.TextView", "*7745"));
  await btnSeleccionarCuentaDestino .click();

  await client.setTimeouts(2000);

  const montoClick = await client.$(createSelector("android.widget.TextView", "Monto"));
  await montoClick .click();

  await client.setTimeouts(2000);

  const montoPesoClick = await client.$(createSelector("android.widget.Button", "1"));
  await montoPesoClick .click();

  await client.setTimeouts(1500);

  const confirmarClick = await client.$(createSelector("android.widget.Button", "Confirmar"));
  await confirmarClick .click();

  await client.setTimeouts(1000);

  const continuarClick = await client.$(createSelector("android.widget.Button", "Continuar"));
  await continuarClick .click();

  await client.setTimeouts(2000);

  await continuarClick .click();
}

main();

function createSelector(className, elementText){
  const elementSelector = `android=new UiSelector().text("${elementText}").className("${className}")`;
  return elementSelector;
}