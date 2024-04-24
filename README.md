# Integrantes

- Santiago Mazuera Clavijo

# Pasos para correr el proyecto

### 1. Clonar repositorio:

```json
git clone https://github.com/santiagomac/TallerPruebasUnitarias.git
```

### 2. Instalar dependencias:

```json
npm install
```

### 3. Correr Tests:

```json
npm test
npx test
```

# Explicación Unit Test

### Array:

1. El primer test se encarga de evaluar si el valor que le pasamos como parametro esta contenido en el arreglo que le pasamos como parametro.
2. El segundo test se encarga de evaluar que el valor no este contenido en el arreglo, los dos valores pasados como parametro.

### Div:

1. El primer test retorna un número resultado de una división en este caso sería 2.
2. El segundo test retorna infinito al momento de pasarle un 0 como divisor.

### Multi:

1. Todos los test comprueban que cada uno de los tipos son iguales a los que estan definidos, [null, 0, true, false].

### String:

1. Valida que el primer string sea igual a UNAC.
2. Valida que el segundo string sea igual a UnAc.

### Sum:

- Valida que la función retornara un número el cuál es el resultado de la suma de los dos números que se pasan como parametro.
