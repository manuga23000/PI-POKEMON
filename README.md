![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# **POKEMON** | Proyecto Individual

Link del proyecto: https://vimeo.com/manage/videos/844093641

## **📌 OBJETIVOS**

-  Construir una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** y **Sequelize**.
-  Poner en práctica recursos básicos de estilos y diseño (UX : UI).
-  Afirmar y conectar los conceptos aprendidos en la carrera.
-  Aprender mejores prácticas.
-  Aprender y practicar el workflow de GIT.
-  Utilizar y practicar testing.

<br />

---

## **📖 ENUNCIADO**

La idea de este proyecto era construir una aplicación web a partir de la API [**pokeapi**](https://pokeapi.co/) en la que se pueda:

-  Buscar pokemones.
-  Visualizar la información de los pokemones.
-  Filtrarlos.
-  Ordenarlos.
-  Crear nuevos pokemones.

<br />

---

### **🖱 BASE DE DATOS**

Cree dos modelos para tu base de datos. Una para los pokemones y la otra para los tipos de pokemones. La relación entre ambos modelos es de muchos a muchos.

**📍 MODELO 1 | Pokemons**

-  ID. \*
-  Nombre. \*
-  Imagen. \*
-  Vida. \*
-  Ataque. \*
-  Defensa. \*
-  Velocidad.
-  Altura.
-  Peso.

<br />

**📍 MODELO 2 | Type**

-  ID. \*
-  Nombre. \*

<br />

---

<br />

### **🖱 BACK-END**

Para esta parte construí un servidor utilizando **NodeJS** y **Express**. Lo conecte con la base de datos mediante **Sequelize**.

cuenta con las siguientes rutas:

#### **📍 GET | /pokemons**

-  Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.

#### **📍 GET | /pokemons/:idPokemon**

-  Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
-  El pokemon es recibido por parámetro (ID).
-  Incluye los datos del tipo de pokemon al que está asociado.
-  Funciona tanto para los pokemones de la API como para los de la base de datos.

#### **📍 GET | /pokemons/name?="..."**

-  Esta ruta obtiene todos aquellos pokemons que coinciden con el nombre recibido por query.
-  Lo busca independientemente de mayúsculas o minúsculas.
-  Si no existe el pokemon, muestra un mensaje adecuado.
-  Busca tanto los de la API como los de la base de datos.

#### **📍 POST | /pokemons**

-  Esta ruta recibe todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
-  Toda la información es recibida por body.
-  Crea un pokemon en la base de datos, y esta relacionado con sus tipos.

#### **📍 GET | /types**

-  Obtiene un arreglo con todos los tipos de pokemones.
-  En una primera instancia, cuando la base de datos este vacía, se guardan todos los tipos que encuentres en la API.
-  Estos son obtenidos de la API. Luego de obtenerlos, se guardan en la base de datos para su posterior consumo desde allí.

<br />

---

<br />

### **🖱 FRONT-END**

Desarrolle una aplicación utilizando **React** y **Redux** que contiene las siguientes vistas:

**📍 LANDING PAGE |** página de inicio o bienvenida:

<br />

**📍 HOME PAGE |** la página principal:

-  SearchBar: un input de búsqueda para encontrar pokemon por nombre.
-  Sector en el que se ve un listado de cards con los pokemones.
   -  Imagen.
   -  Nombre.
   -  Tipos.
-  Cuando se le hace click a una Card redirigira al detalle de ese pokemon específico.
-  Botones/Opciones para **filtrar** por tipo, y por si su origen es de la API o de la base de datos.
-  Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente los pokemones por orden alfabético y por ataque.
-  Paginado: Cuenta con un paginado que muestre un total de 12 pokemones por página.

<br />

**📍 DETAIL PAGE |** en esta vista se deberá mostrar toda la información específica de un pokemon:

-  ID.
-  Nombre.
-  Imagen.
-  Vida.
-  Ataque.
-  Defensa.
-  Velocidad (si tiene).
-  Altura (si tiene).
-  Peso (si tiene).
-  Tipo.

<br />

**📍 FORM PAGE |**: en esta vista se encontrará el formulario para crear un nuevo pokemon.

-  Nombre.
-  Imagen.
-  Vida.
-  Ataque.
-  Defensa.
-  Velocidad (si tiene).
-  Altura (si tiene).
-  Peso (si tiene).
-  Posibilidad de seleccionar/agregar varios tipos en simultáneo.
-  Botón para crear el nuevo pokemon.

<br />

---

<br />

---

<br />

<img src="./pokemon.png" alt="" />
