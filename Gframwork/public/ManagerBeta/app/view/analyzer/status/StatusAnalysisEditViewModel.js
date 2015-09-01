/*
 * File: app/view/analyzer/status/StatusAnalysisEditViewModel.js
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

Ext.define('GFManager.view.analyzer.status.StatusAnalysisEditViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.statusanalysisedit',

    requires: [
        'Ext.data.Store',
        'Ext.data.field.Field'
    ],

    stores: {
        statusAnalysisPeriod: {
            fields: [
                {
                    name: 'x'
                },
                {
                    name: 'y'
                }
            ]
        },
        statusAnalysisAll: {
            fields: [
                {
                    name: 'name'
                },
                {
                    name: 'icon'
                },
                {
                    name: 'ratio'
                },
                {
                    name: 'avg'
                },
                {
                    name: 'max'
                }
            ]
        },
        statusAnalysis: {
            fields: [
                {
                    name: 'range'
                },
                {
                    name: 'total'
                },
                {
                    name: 'man'
                },
                {
                    name: 'woman'
                },
                {
                    name: 'other'
                },
                {
                    name: 'age10'
                },
                {
                    name: 'age20'
                },
                {
                    name: 'age30'
                },
                {
                    name: 'age40'
                },
                {
                    name: 'age50'
                },
                {
                    name: 'age60'
                }
            ]
        }
    }

});