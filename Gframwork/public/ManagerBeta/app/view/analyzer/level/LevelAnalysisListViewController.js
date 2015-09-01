/*
 * File: app/view/analyzer/level/LevelAnalysisListViewController.js
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

Ext.define('GFManager.view.analyzer.level.LevelAnalysisListViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.levelanalysislist',

    viewLevelAnalysis: function(record) {
        this.fireViewEvent('viewLevelAnalysis', this.getView(), record);
    },

    onLevelAllButtonClick: function(button, e, eOpts) {
        this.viewLevelAnalysis(null);
    },

    onLevelGridpanelItemDblClick: function(dataview, record, item, index, e, eOpts) {
        this.viewLevelAnalysis(record);
    }

});
