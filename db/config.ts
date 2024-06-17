/*

// https://astro.build/db/config
import { defineDb, defineTable, column } from 'astro:db';

const Equipo = defineTable({
  columns: {
    nombre: column.text(),
    goles: column.number(),
    visitante: column.boolean(),
    imagen: column.text(),
  }
})

const Partido = defineTable({
  columns: {
    visitante: column.text(),
    local: column.text(),
    fecha: column.date(),
    lugar: column.text(),
  }
})

export default defineDb({
  tables: { Equipo, Partido },
})


*/