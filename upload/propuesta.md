**PROPUESTA TECNICA Y COMERCIAL**

Sistema Integral de Inventarios, Ventas y Ecommerce

**Presentado a:**

**La Casita**

**Preparado por:**

**Konekt**

**Fecha:**

Marzo 2026

**1. Introduccion**

Con base en el levantamiento de necesidades realizado el 20 de marzo de
2026, Konekt presenta esta propuesta para implementar un sistema
integral que resuelva los retos operativos de La Casita: falta de
trazabilidad de inventario, mermas no controladas, desconexion entre
puntos de venta y ecommerce, y ausencia de datos para la toma de
decisiones.

La solucion se propone en tres fases, priorizando el inventario y bodega
como columna vertebral del proyecto, para luego conectar ventas fisicas,
Shopify y el dashboard de control.

**2. Alcance de la Solucion**

**2.1 Modulos propuestos**

  -------- ------------------- ---------------------------------- -------------
  **\#**   **Modulo**          **Descripcion**                    **Fase**

  **1**    **Registro de       Entrada de mercancia con conteo,   Fase 1
           bodega / almacen**  validacion y registro de lote.     
                               Control de existencias por         
                               producto y ubicacion               

  **2**    **Control de        Registro de movimientos del        Fase 1
           salidas por area**  almacen hacia Casita Market,       
                               Casita 2 y restaurante             

  **3**    **Inventario en     Consulta de existencias por        Fase 1
           tiempo real**       sucursal, alertas de stock bajo y  
                               productos proximos a vencer        

  **4**    **Dashboard de      Vista diaria de: productos mas     Fase 1
           control**           vendidos, stock bajo, exceso de    
                               inventario y guia de surtido por   
                               tienda                             

  **5**    **Shopify conectado Sincronizacion de existencias      Fase 2
           a inventario**      entre el sistema y la tienda en    
                               linea; actualizacion automatica de 
                               disponibilidad                     

  **6**    **Mejora de tienda  Agregar productos, mejorar         Fase 2
           Shopify**           estetica, mostrar disponibilidad   
                               en linea, reactivar productos      
                               agotados                           

  **7**    **Integracion con   Las ventas en caja fisica          Fase 2
           POS (NOVACAJA)**    descuentan automaticamente del     
                               inventario central                 

  **8**    **Control de        Registro de salidas de bebidas y   Fase 3
           consumos en         productos hacia el area de         
           restaurante**       restaurante/bar                    

  **9**    **Reportes y        Reporte consolidado de ventas por  Fase 3
           analisis de         canal (tienda, ecommerce,          
           ventas**            restaurante) con historico         
  -------- ------------------- ---------------------------------- -------------

**2.2 Lo que NO incluye esta propuesta**

-   Adquisicion de hardware (lectores, impresoras, tablets, servers)

-   Desarrollo de app movil nativa

-   Gestion de logistica de importaciones

-   Contabilidad o ERP financiero

**3. Propuesta Tecnica**

**3.1 Arquitectura general**

Se propone una arquitectura web centralizada con base de datos unica,
accesible desde cualquier punto con conexion a internet. Esto elimina la
dependencia de estar fisicamente en la sucursal para consultar o
gestionar el inventario.

-   Base de datos centralizada en la nube (o servidor local con acceso
    remoto)

-   Panel de administracion web accesible desde sucursales, bodega y de
    forma remota

-   Integracion con Shopify via API para sincronizacion de inventario

-   Integracion con NOVACAJA para descuento automatico de ventas fisicas

-   Backup automatico programado

**3.2 Flujo de operacion propuesto**

El flujo operativo quedaria estructurado de la siguiente manera:

-   Recepcion: al llegar mercancia, se registra entrada en el sistema
    con conteo y validacion

-   Almacen: el inventario central se actualiza automaticamente; se
    pueden ver existencias por producto

-   Distribucion: al surtir una sucursal, se registra la salida del
    almacen hacia el punto destino

-   Venta fisica: la venta en NOVACAJA descuenta del inventario de la
    sucursal

-   Venta en linea: Shopify refleja la disponibilidad real; las ventas
    descuentan del inventario automaticamente

-   Restaurante: los productos consumidos se registran como salida hacia
    el area de restaurante

-   Dashboard: todo se consolida para visualizacion diaria del negocio

**3.3 Integracion con Shopify**

La tienda lacasitadeli.myshopify.com ya existe. Se propone conectarla al
sistema de inventarios via la API de Shopify para:

-   Actualizar automaticamente la disponibilidad de productos cuando hay
    cambios de stock

-   Marcar productos como agotados o disponibles segun existencias
    reales

-   Registrar pedidos en linea como salidas del inventario

-   Agregar y gestionar el catalogo de productos directamente desde el
    sistema

**4. Cronograma de Implementacion**

  ----------------- ------------------------ -------------- -------------------------
  **Fase**          **Actividades            **Duracion**   **Entregables**
                    principales**                           

  **Fase 1**        Diseno de base de datos, 4-5 semanas    Sistema de inventario
                    modulo de bodega,                       operativo, dashboard
                    registro de                             activo
                    entradas/salidas,                       
                    inventario en tiempo                    
                    real y dashboard basico                 

  **Fase 2**        Integracion con Shopify  3-4 semanas    Ecommerce sincronizado,
                    (API), mejoras a tienda                 ventas fisicas conectadas
                    en linea, integracion                   al inventario
                    con NOVACAJA                            

  **Fase 3**        Control de consumos en   2-3 semanas    Sistema completo, todos
                    restaurante, reportes                   los canales integrados
                    consolidados, ajustes y                 
                    optimizacion final                      

  **Soporte         Acompanamiento,          4 semanas      Equipo autonomo, sistema
  post-arranque**   capacitacion del equipo                 estabilizado
                    y soporte correctivo                    
  ----------------- ------------------------ -------------- -------------------------

Duracion total estimada: 3 a 4 meses. El cronograma final se define en
conjunto tras la aprobacion del proyecto.

**5. Inversion Estimada**

  ---------------------------------------- --------------- ---------------
  **Concepto**                             **Tipo**        **Costo
                                                           estimado**

  Fase 1: Sistema de inventarios (bodega,  Desarrollo      Por cotizar
  salidas, dashboard)                                      

  Fase 2: Integracion Shopify + mejoras de Desarrollo      Por cotizar
  tienda en linea                                          

  Fase 2: Integracion con NOVACAJA         Desarrollo      Por cotizar

  Fase 3: Control restaurante + reportes   Desarrollo      Por cotizar
  consolidados                                             

  Capacitacion del equipo (todas las       Servicio        Incluido
  fases)                                                   

  Soporte post-arranque (4 semanas)        Servicio        Incluido

  Hosting / infraestructura en la nube     Licencia        Por cotizar
  (anual)                                                  

  **TOTAL ESTIMADO**                       **TOTAL**       **A definir**
  ---------------------------------------- --------------- ---------------

Nota: Los costos se desglosaran en una cotizacion formal una vez
confirmado el alcance tecnico detallado.

**6. Beneficios Esperados**

-   Conocimiento real del inventario en bodega y ambas sucursales en
    todo momento

-   Reduccion de mermas por productos proximos a vencer gracias a
    alertas anticipadas

-   Surtido inteligente de tiendas basado en datos de ventas y
    existencias reales

-   Tienda Shopify siempre actualizada: sin ventas de productos agotados

-   Vision consolidada del negocio en un dashboard diario

-   Menor dependencia de procesos manuales y mayor autonomia del equipo

-   Trazabilidad completa desde la recepcion hasta la venta por
    cualquier canal

**7. Condiciones de la Propuesta**

-   Esta propuesta tiene vigencia de 30 dias naturales a partir de su
    fecha de emision

-   Los tiempos son estimaciones; el cronograma definitivo se acuerda en
    el arranque del proyecto

-   La integracion con NOVACAJA esta sujeta a la disponibilidad de API o
    acceso tecnico al sistema

-   La integracion con Shopify requiere acceso de administrador a la
    cuenta del cliente

-   Se firmara un contrato de servicios antes de iniciar cada fase

**8. Siguientes Pasos**

-   Revision y aprobacion de esta propuesta por parte de La Casita

-   Reunion de arranque para definir alcance tecnico detallado y
    cronograma

-   Firma de contrato y anticipo de Fase 1

-   Inicio de desarrollo de Fase 1: sistema de inventarios

Konekt --- Propuesta confidencial preparada para La Casita. Marzo 2026.
