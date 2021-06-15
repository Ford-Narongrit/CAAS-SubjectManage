'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubjectSchema extends Schema {
  up () {
    this.create('subject', (table) => {
      table.increments()
      table.string("code")
      table.string("name_th")
      table.string("name_en")
      table.dateTime("deleted_at").defaultTo(null);
      table.timestamps()
    })
  }

  down () {
    this.drop('subject')
  }
}

module.exports = SubjectSchema
