/*
 * File: app/model/UserReward.js
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

Ext.define('GFManager.model.UserReward', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.String',
        'Ext.data.field.Number',
        'Ext.data.field.Date'
    ],

    fields: [
        {
            type: 'string',
            name: 'reward_type'
        },
        {
            type: 'string',
            name: 'reward_object'
        },
        {
            type: 'float',
            name: 'reward_status'
        },
        {
            type: 'date',
            name: 'lastUpdated_at'
        }
    ]
});