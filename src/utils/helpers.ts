import _ from 'lodash/fp'
import { Schema} from '../types'

export const getSchemaField = _.get
export const getSchemaType = getSchemaField('type')
export const getSchemaTitle = getSchemaField('title')
export const getSchemaProperty = (key: string) => getSchemaField(['properties', key])
export const getSchemaProperties = getSchemaField('properties')
export const getSchemaItems = getSchemaField('items')

export const setSchemaField = _.set
export const setSchemaType = setSchemaField('type')
export const setSchemaTitle = setSchemaField('title')
export const setSchemaProperty = (key: string) => setSchemaField(['properties', key])
export const setSchemaItems = setSchemaField('items')


export const deleteSchemaProperty = (key: string) => _.omit([`properties.${key}`])
export const addSchemaProperty = (schema: Schema) => setSchemaProperty(`__${Date.now()}__`)({}, schema)

export const isSchemaObject = (schema: Schema) => getSchemaType(schema) === 'object'
export const isSchemaArray = (schema: Schema) => getSchemaType(schema) === 'array'
export const hasSchemaProperties= (schema: Schema) => !_.isEmpty(getSchemaProperties(schema))

export const stringToKey = (text: string) => {
  return text?.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(/\s/g, "_").toLowerCase()
}

export const findOption = (value: string) => _.find(['value', value])

