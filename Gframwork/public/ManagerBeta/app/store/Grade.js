/*
 * File: app/store/Grade.js
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

Ext.define('GFManager.store.Grade', {
    extend: 'Ext.data.Store',

    requires: [
        'GFManager.model.Grade',
        'Ext.util.Sorter'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Grade',
            model: 'GFManager.model.Grade',
            data: [
                {
                    id: '5',
                    name: '최상'
                },
                {
                    id: '4',
                    name: '상'
                },
                {
                    id: '3',
                    name: '중'
                },
                {
                    id: '2',
                    name: '하'
                },
                {
                    id: '1',
                    name: '최하'
                }
            ],
            sorters: {
                direction: 'DESC',
                property: 'id'
            }
        }, cfg)]);
    }
});