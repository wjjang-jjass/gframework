/*
 * File: app/model/Point.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('GFManager.model.Point', {
    extend: 'Ext.data.Model',
    alias: 'model.Point',

    requires: [
        'Ext.data.field.String',
        'Ext.data.field.Number',
        'Ext.data.field.Date',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    fields: [
        {
            type: 'string',
            defaultValue: '',
            name: 'id',
            unique: true
        },
        {
            type: 'string',
            defaultValue: '',
            name: 'name',
            unique: true
        },
        {
            type: 'string',
            defaultValue: '',
            name: 'description'
        },
        {
            type: 'float',
            defaultValue: 0,
            name: 'min'
        },
        {
            type: 'float',
            defaultValue: 1000000,
            name: 'max'
        },
        {
            type: 'float',
            defaultValue: 1,
            name: 'unit'
        },
        {
            type: 'string',
            defaultValue: '',
            name: 'icon'
        },
        {
            type: 'date',
            name: 'created_at'
        },
        {
            type: 'date',
            name: 'updated_at'
        }
    ],

    proxy: {
        type: 'rest',
        url: '/api/v1/manager/rewards/points',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            rootProperty: 'data'
        }
    }
});