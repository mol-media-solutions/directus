(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lang-interfaces-es-CL-interfaces-json"],{f98b:function(e){e.exports=JSON.parse('{"interfaces":{"2fa-secret":{"2fa-secret":"Autenticación Secreta de 2 Factores"},"button-group":{"button_group":"Grupo de botones","choices":"Opciones","choices_comment":"Introduzca los pares de valores de la clave JSON con el valor guardado y el texto mostrado.","theme":"Tema de la interfaz","theme_comment":"Establecer el tema de la interfaz si esta soportada","value":"Valor","flight":"Vuelo","cruise":"Crucero","run":"Ejecutar","bus":"Bus","bike":"Bicicleta","train":"Tren","car":"Auto","other":"Otro"},"calendar":{"calendar":"Calendario","min":"Fecha mínima","min_comment":"Fecha mínima que puede ser elegida por el usuario","max":"Fecha máxima","max_comment":"Fecha máxima que puede ser elegida por el usuario","formatting":"Formato de fecha","formatting_comment":"Sigue [Estándar Técnico Unicode](https://date-fns.org/v2.8.1/docs/format). Si se deja en blanco, se utilizará una fecha relativa."},"checkboxes":{"checkboxes":"Casillas De Selección","choices":"Opciones","choices_comment":"Introduzca los pares de valores de la clave JSON con el valor guardado y el texto mostrado.","wrap":"Delimitar con Delimitador","wrap_comment":"Delimitar el valor guardado dentro de delimitadores (mejora la capacidad de búsqueda).","formatting":"Mostrar texto en pantalla","formatting_comment":"Procesar los valores como valores de visualización","display_text":"Mostrar Texto","value":"Valor","option":"Opción","single":"Columna única","single_comment":"Mostrar casillas de verificación en una sola columna","draggable":"Casillas de verificación arrastrables","draggable_comment":"Permitir ordenar por casillas de verificación arrastrables","allow_other":"Permitir otro","allow_other_comment":"Permitir una opción personalizada adicional"},"checkboxes-relational":{"checkboxes_relational":"Casillas de verificación relacionales","grid":"Cuadricula","grid_comment":"Número de elementos a mostrar en una fila","item_template":"Plantilla de Ítem","item_template_comment":"Como mostrar valores en plantillas de ítem único","item_template_placeholder":"{{name}} — {{first_name}}","listing_template":"Plantilla de Listado","listing_template_comment":"Como mostrar los valores en las plantillas de listados.<br>Necesitara añadir el nombre de la colección","listing_template_placeholder":"{{movie.name}} — {{member.first_name}}"},"code":{"code":"Código","template":"Plantilla","template_comment":"Proporcione una plantilla que el usuario puede utilizar para empezar con","language":"Idioma","language_comment":"Establecer el lenguaje de programación a usar","lineNumber":"Número de línea","lineNumber_comment":"Mostrar números de línea","loc":"No hay líneas de {lang} | Una línea de {lang} | {count} líneas de {lang}","fill_template":"Rellenar con la Plantilla"},"collections":{"collections":"Colecciones","placeholder":"Texto de Ejemplo","placeholder_comment":"Texto estático que se muestra antes de que un valor es seleccionado","placeholder_default":"Elige una Colección...","option":"Opción","include_system":"Incluir Sistema","include_system_comment":"Incluir colecciones de sistema en las opciones"},"color":{"color":"Color","format":"Formato de salida","format_comment":"En qué formato de datos guardar el valor","palette":"Paleta","palette_comment":"Añadir opciones de color como valores hexadecimales","palette_only":"Sólo paleta","palette_only_comment":"Solo permitir al usuario seleccionar desde la paleta"},"color-palette":{"color-picker":"Selector de Color"},"date":{"date":"Fecha","min":"Fecha mínima","min_comment":"Fecha mínima que puede ser elegida por el usuario","max":"Fecha máxima","max_comment":"Fecha máxima que puede ser elegida por el usuario","localized":"Localizado","localized_comment":"Mostrar la fecha localizada en la salida","relative":"Mostrar fecha relativa","relative_comment":"Mostrar la fecha relativamente (por ejemplo, hace 2 días)","icon_left":"Icono izquierdo","icon_left_comment":"Elija un icono opcional para mostrar a la izquierda del control","icon_right":"Icono Derecho","icon_right_comment":"Elija un icono opcional para mostrar a la derecha del control"},"datetime":{"datetime":"Fecha/hora","min":"Hora Mínima","min_comment":"Hora mínima que pues ser elegida por el usuario","max":"Tiempo Máximo","max_comment":"Hora máxima que puede ser elegida por el usuario","localized":"Localizado","localized_comment":"Mostrar la fecha localizada en la salida","relative":"Mostrar hora relativa","relative_comment":"Mostrar la hora relativamente (por ejemplo, hace 50 días)","icon_left":"Icono izquierdo","icon_left_comment":"Elija un icono opcional para mostrar a la izquierda del control","icon_right":"Icono Derecho","icon_right_comment":"Elija un icono opcional para mostrar a la derecha del control","utc":"Guardar como UTC","utc_comment":"Guardar y mostrar como UTC","default_to_current_datetime":"Fecha/hora actual predeterminada","default_to_current_datetime_comment":"Establece el valor predeterminado para la actual fecha/hora","format":"Formato","format_comment":"El formato Fecha/hora para ser usado en el control"},"datetime-created":{"datetime_created":"Fecha/hora creada","relative":"Mostrar hora relativa","relative_comment":"Mostrar la hora relativamente (por ejemplo, hace 50 días)","now":"Estás creando esto ahora","unknown":"Desconocido/a"},"datetime-updated":{"datetime_updated":"Fecha/hora Actualizada","relative":"Mostrar hora relativa","relative_comment":"Mostrar la hora relativamente (por ejemplo, hace 50 días)","now":"Estás creando esto ahora","unknown":"Desconocido/a"},"divider":{"divider":"Divisor","style-name":"Estilo del divisor","style-comment":"Cambiar el estilo del Divisor","weight-name":"Grosor de la línea","weight-comment":"Cambiar el grosor de la línea","input-name":"Texto del Divisor","input-comment":"Ingrese su texto aquí","desc-name":"Descripción del divisor","desc-comment":"Agregar una descripción aquí","hr-name":"HR","hr-comment":"¿Mostrar una regla horizontal?","margin-name":"Margen Extra","margin-comment":"Añadir un margen extra sobre la interfaz"},"dropdown":{"dropdown":"Lista desplegable","choices":"Opciones","choices_comment":"Introduzca los pares de valores de la clave JSON con el valor guardado y el texto mostrado.","placeholder":"Texto de Ejemplo","placeholder_comment":"Texto estático que se muestra antes de que un valor es seleccionado","option":"Opción","formatting":"Mostrar texto en pantalla","formatting_comment":"Procesar los valores como valores de visualización","placeholder_default":"Elija una opción...","icon":"Icono","icon_comment":"Elija un icono opcional para mostrar a la izquierda del control","options_invalid":"Las opciones JSON provistas para el desplegable son inválidas:","allow_other":"Permitir otro","allow_other_comment":"Permitir al usuario agregar su propio valor"},"file":{"file":"Archivo","view_type":"Tipo de Vista","view_type_comment":"Seleccionar en que forma quieres ver los archivos","view_options":"Opciones de Vista","view_options_comment":"Establecer las opciones de vista a usar para los archivos","view_query":"Ver Consulta","view_query_comment":"Establecer la vista de consulta a usar para los archivos","filters":"Filtros","filters_comment":"Qué filtros usar","accept":"Aceptar los Tipos de Archivo","accept_comment":"Estableces una lista de tipos MIME que puedan ser elegidos","allow_delete":"Permitir eliminar","allow_delete_comment":"Permite al usuario eliminar permanentemente el archivo relacionado a través de la interfaz de archivo","crop_preview":"Vista previa del archivo de recorte","crop_preview_comment":"Recorta la vista previa del archivo para llenar el espacio disponible."},"file-preview":{"file_preview":"Vista previa del archivo","edit":"Opciones de edición"},"file-size":{"file_size":"Tamaño del archivo","placeholder":"Texto de Ejemplo","placeholder_comment":"Ingresar el texto de ejemplo","format":"Valor del Formato","format_comment":"Mostrar el valor de una manera legible para el humano (ej. 10MB)","format_input":"Formato de Entrada","format_input_comment":"Ingrese el valor usando un desplegable para las unidades","decimal":"Decimal","decimal_comment":"Mostrar el valor en un conteo decimal (10MB vs 10MiB)","crop_preview":"Recortar las Imágenes de la Vista Previa"},"files":{"files":"Archivos","visible_columns":"Columnas Visible","visible_columns_comment":"Añadir un CSV de las columnas que desea para mostrar como vista previa","preferences":"Listar Preferencias de Vista","preferences_comment":"Establecer qué opciones a usar para la ventana modal","relation_not_setup":"La relación no se ha configurado correctamente","template":"Mostrar Plantilla","template_comment":"Elegir como mostrar los valores en los diseños del ítem","template_placeholder":"{{movie.name}} — {{member.first_name}}","allow_create":"Permitir crear","allow_create_comment":"Permitir al usuario crear un nuevo elemento desde esta interfaz","allow_select":"Permitir Selección","allow_select_comment":"Permitir al usuario seleccionar un elemento existente","accept":"Aceptar los Tipos de Archivo","accept_comment":"Estableces una lista de tipos MIME que puedan ser elegidos","edit_item":"Editar"},"hashed":{"hashed":"Cifrado","hide":"Ocultar Valor","hide_comment":"Mostrar puntos en vez de los caracteres ingresados","placeholder":"Texto de Ejemplo","placeholder_comment":"Ingresar el texto de ejemplo","show_hash":"Mostrar la salida cifrada","show_hash_comment":"Mostrar el hash guardado","hashing_type":"Tipo de Cifrado","hashing_type_comment":"Qué método de cifrado usar","width":"Tamaño","width_comment":"Establecer que ancho usar para el control","auto":"Automático","small":"Pequeño","medium":"Mediano","large":"Grande","secured":"Valor asegurado"},"icon":{"icon":"Icono","search_placeholder":"Buscar un icono..."},"interface-options":{"interface-options":"Opciones de Interfaz","interface-field":"Campo de interfaz","placeholder-comment":"El campo que contiene el nombre de la interfaz","placeholder-default":"Introduzca un nombre de campo..."},"interface-types":{"interface-types":"Tipos de interfaz","interface-field":"Campo de interfaz","placeholder-comment":"El campo que contiene el nombre de la interfaz","placeholder-default":"Introduzca un nombre de campo..."},"interfaces":{"interfaces":"Interfaces","placeholder":"Texto de Ejemplo","placeholder_comment":"Texto estático que se muestra antes de que un valor es seleccionado","placeholder_default":"Elija una interfaz","option":"Opción","relational":"Incluye interfaces relacionales","include_status":"Incluye las interfaces de estado"},"json":{"template":"Plantilla","template_comment":"Proporcione una plantilla que el usuario puede utilizar para empezar con"},"key-value":{"key_interface":"Clave de la Interfaz","key_data_type":"Clave del Tipo de Dato","key_options":"Clave de las Opciones de Interfaz","value_interface":"Clave de la Interfaz","value_data_type":"Clave del Tipo de Dato","value_options":"Clave de las Opciones de Interfaz"},"language":{"input":"Idioma","select_language":"Seleccione un idioma...","limit":"Limitar la Disponibilidad de Directus","limit_comment":"Mostrar solo idiomas disponibles como traducciones en Directus"},"many-to-many":{"m2m":"Muchos a Muchos","visible_columns":"Columnas Visible","visible_columns_comment":"Añadir un CSV de las columnas que desea para mostrar como vista previa","preferences":"Listar Preferencias de Vista","preferences_comment":"Establecer qué opciones a usar para la ventana modal","relation_not_setup":"La relación no se ha configurado correctamente","template":"Mostrar Plantilla","template_comment":"Elegir como mostrar los valores en los diseños del ítem","template_placeholder":"{{movie.name}} — {{member.first_name}}","allow_create":"Permitir crear","allow_create_comment":"Permitir al usuario crear un nuevo elemento desde esta interfaz","allow_select":"Permitir Selección","allow_select_comment":"Permitir al usuario seleccionar un elemento existente"},"many-to-one":{"m2o":"Muchos a Uno","template":"Plantilla del Control Desplegable","template_comment":"Cómo formatear las opciones del desplegable","visible_fields":"Campos Visibles","visible_fields_placeholder":"título,autor","visible_fields_note":"CSV de los campos visibles al seleccionar un ítem en el modal","template_placeholder":"{{title}} — {{author}}","placeholder":"Texto de Ejemplo","placeholder_comment":"Ingresar el texto de ejemplo","preferences":"Listar Preferencias de Vista","preferences_comment":"Establecer qué opciones a usar para la ventana modal","relationship_not_setup":"La relación no se ha configurado correctamente","icon":"Icono","icon_comment":"Elija un icono opcional para mostrar a la izquierda del control","select_one":"Seleccione uno","threshold":"Límite","threshold_comment":"El número de ítemes luego de que modal será usado en lugar de un desplegable"},"map":{"map":"Mapa","choices":"opciones","choices_comment":"Introduzca los pares de valores de la clave JSON con el valor guardado y el texto mostrado.","theme":"Tema de la interfaz","theme_comment":"Establecer el tema de la interfaz si esta soportada","value":"Valor","map_lat":"Latitud predeterminada","map_lat_comment":"El mapa se centrará en esta latitud","map_lng":"Longitud predeterminada","map_lng_comment":"El mapa se centrará en esta longitud","height":"Altura","default_zoom":"Zoom predeterminado","default_zoom_comment":"Nivel de zoom predeterminado del mapa","max_zoom":"Zoom Máximo","max_zoom_comment":"Zoom máximo permitido en el mapa","no_location":"Ubicación no encontrada","user_location_error_blocked":"Has desactivado el acceso a la ubicación. Actívalo desde la barra de direcciones del navegador para detectar automáticamente tu ubicación.","user_location_error":"Se produjo un error mientras se intentaba acceder a su ubicación. Por favor intente nuevamente.","address_to_code":"Dirección","address_to_code_comment":"Agregue un campo de entrada/texto para obtener automáticamente la latitud y longitud de una dirección. Utiliza <a href=\\"https://wiki.openstreetmap.org/wiki/Nominatim\\">Nominatim</a>. Por favor, compruebe la política de uso.","address_to_code_error":"No se ha encontrado latitud y longitud para esta dirección","clear_location":"Limpiar ubicación","my_location":"Establecer Mi Ubicación","address_location":"Establecer la Dirección de la Ubicación"},"markdown":{"markdown":"Markdown","edit":"Editar","preview":"Vista preliminar","tabbed_preview":"Vista Previa de Pestañas","tabbed_preview_comment":"Cómo mostrar el editor y la vista previa","tabbed_preview_on":"Vista Previa de Pestañas","tabbed_preview_off":"Vista Previa Lado a Lado","rows":"Rows","rows_comment":"El número inicial de filas de texto disponibles","placeholder":"Texto de Ejemplo","placeholder_comment":"Ingresar el texto de ejemplo"},"multiselect":{"multiselect":"Selección Múltiple","choices":"Opciones","choices_comment":"Introduzca los pares de valores de la clave JSON con el valor guardado y el texto mostrado","placeholder":"Texto de Ejemplo","placeholder_comment":"Ingresar el texto de ejemplo","size":"Tamaño","size_comment":"Número de opciones visibles antes de desplazarse","option":"Opción","wrap":"Delimitar con Delimitador","wrap_comment":"Envolver los valores con un par de delimitadores para permitir la búsqueda estricta de un solo valor","format":"Formato de Navegación","format_comment":"El formato de salida en la página de Navegación de los Ítemes"},"numeric":{"numeric":"Numérico","placeholder":"Texto de Ejemplo","placeholder_comment":"Ingresar el texto de ejemplo","localized":"Localizado","localized_comment":"Traducir la salida en el idioma del usuario","icon_left":"Icono izquierdo","icon_left_comment":"Elija un icono opcional para mostrar a la izquierda del control","icon_right":"Icono Derecho","icon_right_comment":"Elija un icono opcional para mostrar a la derecha del control","monospace":"Monoespaciado/a","monospace_comment":"Usar una fuente monoespaciada"},"one-to-many":{"o2m":"Uno a Muchos","select_items":"Seleccionar los ítemes","relation_not_setup":"La relación no se ha configurado correctamente","visible_columns":"Columnas Visible","visible_columns_comment":"Añadir un CSV de las columnas que desea para mostrar como vista previa","preferences":"Listar Preferencias de Vista","preferences_comment":"Establecer qué opciones a usar para la ventana modal","template":"Mostrar Plantilla","template_comment":"Como dar formato al valor en un ítem de navegación mostrado","template_placeholder":"{{title}} — {{author}}","allow_create":"Permitir crear","allow_create_comment":"Permitir al usuario crear un nuevo elemento desde esta interfaz","allow_select":"Permitir Selección","allow_select_comment":"Permitir al usuario seleccionar un elemento existente","delete_mode":"Modo de eliminación","delete_mode_comment":"Qué hacer cuando el usuario anule la selección de un elemento","sort_field":"Campo de Ordenación","sort_field_comment":"El campo para guardar el valor de ordenación"},"password":{"password":"Contraseña","hide":"Ocultar Valor","hide_comment":"Mostrar puntos en vez de los caracteres ingresados","placeholder":"Texto de Ejemplo","placeholder_comment":"Ingresar el texto de ejemplo","confirm_placeholder":"Confirmar la Contraseña...","show_hash":"Mostrar la salida cifrada","show_hash_comment":"Mostrar el hash guardado","hashing_type":"Tipo de Cifrado","hashing_type_comment":"Qué método de cifrado usar"},"preview":{"preview":"Vista preliminar","url_template":"Plantilla de URL","url_template_comment":"Una plantilla de mustache para una URL para previsualizar contenido","preview_item":"Previsualizar este elemento"},"primary-key":{"primary_key":"Clave primaria","immutable":"No se puede cambiar","monospace":"Monoespaciado/a","monospace_comment":"Usar una fuente monoespaciada"},"radio-buttons":{"radio":"Botones de radio","choices":"Opciones","choices_comment":"Introduzca los pares de valores de la clave JSON con el valor guardado y el texto mostrado.","option":"Opción","format":"Formato de Navegación","format_comment":"El formato de salida en la página de Navegación de los Ítemes"},"rating":{"rating":"Valoración","value":"Valor","active_color":"Color activo","active_color_comment":"Color activo de las estrellas seleccionadas","max_stars":"Estrellas Máximas","max_stars_comment":"Número de valoración máxima permitida","display":"Mostrar","display_comment":"Cómo mostrar los valores de valoración"},"repeater":{"repeater":"Repetidor","template":"Mostrar Plantilla","template_comment":"Como dar formato al valor en un ítem de navegación mostrado y su vista previa en línea","template_placeholder":"{{title}} — ({{author}})","fields":"Campos","fields_comment":"Qué campos mostrar en cada fila repetida","limit":"Límite","limit_comment":"Cantidad máxima de filas que el usuario puede añadir","duplicable":"Duplicable rows","duplicable_comment":"Whether to make rows duplicable or not","structure":"Estructura","structure_comment":"Si guardar el objecto JSON como un arreglo de objetos o un solo objeto con claves únicas","structure_key":"Campo Clave de la Estructura","structure_key_comment":"Cuando se utiliza un objeto para la estructura JSON, este valor controla qué campo usar para los valores de clave","placeholder":"Texto de Ejemplo","placeholder_comment":"El valor que aparece en lugar del de la plantilla, si no hay ningún valor ingresado aún","create_item_text":"Crear Ítem de Texto","create_item_text_comment":"Texto que se muestra en el botón que añade una nueva fila al repetidor"},"slider":{"slider":"Deslizador","min":"Mínimo","min_comment":"El valor mínimo válido","max":"Máximo","max_comment":"El valor máximo válido","step":"Incremento","step_comment":"Incrementos en los que se puede establecer el valor","unit":"Unidad","unit_comment":"Mostrar una unidad junto al valor del deslizador, por ejemplo: 15 Libras"},"slug":{"slug":"Slug","placeholder_name":"Texto de Ejemplo","placeholder_comment":"Texto ejemplo a mostrar","force_lowercase":"Cambiar a minúsculas","force_lowercase_comment":"Asegúrese de que el slug está en minúsculas","mirrored_field":"Campo Espejado","mirrored_field_comment":"Mantener el slug actualizado con otro campo (de texto)","only_on_create":"Solo crear","only_on_create_comment":"Permitir que el slug sea editado sólo cuando se crea un nuevo elemento"},"sort":{"sort":"Ordenar"},"status":{"status":"Estado","status_mapping":"Mapeo de Estado","status_mapping_comment":"Ingrese las opciones JSON de estado","simple_badge":"Insignia Simple","simple_badge_comment":"Muestra un punto coloreado en el ítem de la página de listado.","published":"Publicado","under_review":"En Revisión","draft":"Borrador","deleted":"Eliminado"},"tags":{"tags":"Etiquetas","alphabetize":"Alfabetizar etiquetas","alphabetize_comment":"Reorganizará etiquetas de modo alfabético","lowercase":"Cambiar a minúsculas","lowercase_comment":"Convertir todas las etiquetas a minúsculas","wrap":"Delimitar con Delimitador","wrap_comment":"Envolver los valores con un par de delimitadores para permitir la búsqueda estricta de un solo valor","format":"Valor del Formato","format_comment":"Convierte las etiquetas a Capitalizado Tipo Titulo cuando se muestra el valor","sanitize":"Sanitizar","sanitize_comment":"Elimina cualquier carácter no alfanumérico y convierte espacios en guiones medios","placeholder_text":"Escriba una etiqueta y luego presione la tecla Intro o Coma...","icon_left":"Icono izquierdo","icon_left_comment":"Elija un icono opcional para mostrar a la izquierda del control","icon_right":"Icono Derecho","icon_right_comment":"Elija un icono opcional para mostrar a la derecha del control","validation":"Validación","validation_comment":"Una Expresión Regular para comprobar individualmente cada valor contra","validation_message":"Mensaje de Validación","validation_message_comment":"Un mensaje corto para mostrar a los usuarios si la validación de la etiqueta falla","validation_message_default":"Por favor, introduzca una etiqueta válida"},"text-input":{"input":"Control de Texto","placeholder":"Texto de Ejemplo","trim":"Eliminar Espacios en Blanco","trim_comment":"Eliminar los espacios en blanco del inicio y final del valor antes de guardarlo","char_count":"Mostrar el Número de Caracteres","char_count_comment":"Mostrar la cantidad restantes de caracteres disponibles","icon_left":"Icono izquierdo","icon_left_comment":"Elija un icono opcional para mostrar a la izquierda del control","icon_right":"Icono Derecho","icon_right_comment":"Elija un icono opcional para mostrar a la derecha del control","format":"Mejorar la Salida","format_comment":"Convertir el valor a una capitalización tipo titulo","monospace":"Monoespaciado/a","monospace_comment":"Usar una fuente monoespaciada","auto":"Automático","small":"Pequeño","medium":"Mediano","large":"Grande"},"textarea":{"textarea":"Cuadro de Texto","rows":"Rows","rows_comment":"El número de filas de texto disponibles para el control antes de desplazarse","placeholder":"Texto de Ejemplo","placeholder_comment":"Ingresar el texto de ejemplo","serif":"Fuente Serif","serif_comment":"Usar una fuente grande, tipo Serif"},"time":{"time":"Hora","include_seconds":"Incluye segundos","include_seconds_comment":"Incluye segundos en la interfaz","24hour":"Mostrar reloj de 24 horas","24hour_comment":"Mostrar la hora en formato de 24 horas (por ejemplo: 15:30)"},"switch":{"switch":"Botón alternador","label_on":"Etiqueta (Activado)","label_on_comment":"Etiqueta a mostrar al lado del botón alternador cuando está encendido","label_off":"Etiqueta (Desactivado)","label_off_comment":"Etiqueta a mostrar al lado del botón alternador cuando está apagado","checkbox":"Mostrar como una casilla de verificación","checkbox_comment":"Mostrar una casilla de verificación en vez del botón alternador predeterminado"},"toggle-icon":{"toggle-icon":"Intercambiar Icono","text-inactive-name":"Texto inactivo","text-inactive-comment":"Texto junto al icono inactivo","text-inactive-placeholder":"Introduce tu texto aquí","icon-inactive-name":"Icono inactivo","icon-inactive-comment":"Elegir un icono inactivo","color-inactive-name":"Color inactivo","color-inactive-comment":"Elegir el color inactivo","text-active-name":"Texto activo","text-active-comment":"Texto junto al icono activo","text-active-placeholder":"Introduce tu texto aquí","icon-active-name":"Icono activo","icon-active-comment":"Elegir un icono inactivo","color-active-name":"Color activo","color-active-comment":"Elegir el color activo"},"translation":{"translation":"Traduccion","language_field":"Campo de idioma","language_field_comment":"El campo que contiene el código de idioma en la colección relacionada","languages":"Idiomas","template":"Mostrar Plantilla","template_comment":"Elegir como mostrar los valores en los diseños del ítem","template_placeholder":"{{title}} — {{body}}"},"user":{"user":"Usuario","avatar":"Avatar","name":"Nombre","template":"Plantilla","template_comment":"Cómo dar formato a los usuarios en le menú desplegable","placeholder":"Texto de Ejemplo","placeholder_comment":"Añadir un texto de ejemplo"},"owner":{"owner":"Propietario","avatar":"Avatar","name":"Nombre","template":"Plantilla","template_comment":"Como mostrar el usuario en la página de detalles del ítem","display":"Mostrar","display_comment":"Como mostrar el usuario en la pagina de navegación del ítem","you":"Serás el creador","unknown":"Desconocido/a"},"user-roles":{"user-roles":"Rol de usuario","choose_role":"Seleccione un rol...","relational":"Relacional","relational_comment":"Guardar como un registro relacional","show_public":"Ver el rol público"},"user-updated":{"user_updated":"Usuario actualizado","avatar":"Avatar","name":"Nombre","template":"Plantilla","template_comment":"Como mostrar el usuario en la página de detalles del ítem","display":"Mostrar","display_comment":"Como mostrar el usuario en la pagina de navegación del ítem","you":"Serás el creador","unknown":"Desconocido/a"},"wysiwyg":{"toolbar":"Opciones de la barra de herramientas","toolbar_comment":"Mostrar, ocultar, y re-ordenar las opciones de la barra de herramientas","custom_formats":"Formatos Personalizados","custom_formats_comment":"Envolturas HTML personalizadas para el contenido","tinymce_options":"Opciones de TinyMCE","tinymce_options_comment":"Anular cualquiera de [las opciones de inicio de TinyMCE](https://www.tiny.cloud/docs/configure/)."}}}')}}]);
//# sourceMappingURL=lang-interfaces-es-CL-interfaces-json.45e4a89a.js.map