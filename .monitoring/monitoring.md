#### Este es un ejemplo. Sirve para visualizar rapidamente que metricas estan definidas y cómo.

# Widgets

### Global keys:

- **region:** referenciar valor en key `provider.region` que hay en `serverless.yml`
- **period:** 3600 (1 h)

---

### Eventos Cloudwatch [Events.json]:

- Invocación por regla de evento (RuleName) y promedio de todos las reglas
  - Axis - Left:
    - Usar _search expression_ filtrando por nombre de la regla `Name`
    - MetricName: `Invocation`
    - Stats: `Sum`
  - Axis - Right:
  - Crear _math expression_ para: `AVG([Invocation])`

### Lambdas [Lambdas.json]:

- Cantidad de invocaciones de los lambdas:

  - MetricName: `Invocations`
  - Stats: `Sum`

- Promedio de tiempo de duración de los lambdas:

  - MetricName: `Duration`
  - Stats: `Average`

- Tasa de errores de los lambdas:
  - MetricName: `Errors`
  - Stats: `Sum`

# Alarmas

### Eventos Cloudwatch [Events.json]:

- Invocación de un evento menor que 1
  - Datapoint 1 out 1

### Lambdas [Lambdas.json]:

- Invocación de un lambda es 0

  - Datapoint 1 out 1

- Tasa de errores de un lambda mayor que 0
  - Datapoint 1 out 1
