/*
 * File: app/view/analyzer/status/StatusAnalysisEditViewController.js
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

Ext.define('GFManager.view.analyzer.status.StatusAnalysisEditViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.statusanalysisedit',

    getStatisticsAllStatuses: function() {
        var me = this;

        var key = Ext.getStore('ManagerInfo').data.items[0].get('key');
        var token = Ext.getStore('ManagerInfo').data.items[0].get('token');

        Ext.Ajax.request({
            url: '/api/v1/analyzer/statuses',
            method: 'GET',
            headers: {
                'x-key': key,
                'x-access-token': token
            },
            success: function(response){
                var decodeResponse 		= Ext.decode(response.responseText);

                var statusAnalysisAllStore	= me.getStore('statusAnalysisAll');
                statusAnalysisAllStore.loadData(decodeResponse.data, false);

            },
            failure: function(response){console.log(response);}

        });
    },

    getStatisticsStatus: function(statusId) {
        var me = this;

        var key = Ext.getStore('ManagerInfo').data.items[0].get('key');
        var token = Ext.getStore('ManagerInfo').data.items[0].get('token');

        Ext.Ajax.request({
            url: '/api/v1/analyzer/statuses/'+statusId,
            method: 'GET',
            headers: {
                'x-key': key,
                'x-access-token': token
            },
            success: function(response){
                var decodeResponse 		= Ext.decode(response.responseText);

                var statusAnalysisStore	= me.getStore('statusAnalysis');
                statusAnalysisStore.loadData(decodeResponse.data, false);

            },
            failure: function(response){console.log(response);}

        });
    },

    getStatisticsStatusesByPeriod: function(period) {
        var status	= this.getViewModel().get('theStatus');
        var me 		= this;

        var key = Ext.getStore('ManagerInfo').data.items[0].get('key');
        var token = Ext.getStore('ManagerInfo').data.items[0].get('token');

        if(status.create) {

            Ext.Ajax.request({
                url: '/api/v1/analyzer/statusesbyperiod',
                method: 'GET',
                headers: {
                    'x-key': key,
                    'x-access-token': token
                },
                params:{
                    period: period
                },
                success: function(response){
                    var decodeResponse 		= Ext.decode(response.responseText);

                    var statusAnalysisPeriodStore	= me.getStore('statusAnalysisPeriod');
                    statusAnalysisPeriodStore.loadData(decodeResponse.data, false);

                },
                failure: function(response){console.log(response);}

            });

        } else {

            Ext.Ajax.request({
                url: '/api/v1/analyzer/statusesbyperiod',
                method: 'GET',
                headers: {
                    'x-key': key,
                    'x-access-token': token
                },
                params:{
                    id: status.get('id'),
                    period: period
                },
                success: function(response){
                    var decodeResponse 		= Ext.decode(response.responseText);

                    var statusAnalysisPeriodStore	= me.getStore('statusAnalysisPeriod');
                    statusAnalysisPeriodStore.loadData(decodeResponse.data, false);

                },
                failure: function(response){console.log(response);}

            });
        }
    },

    onLevelPeriodRadiogroupChange: function(field, newValue, oldValue, eOpts) {
        this.getStatisticsStatusesByPeriod(newValue.period);
    },

    onStatusAnalysisFormShow: function(component, eOpts) {
        var status					= this.getViewModel().get('theStatus');
        var statisticsAllStatuses	= this.lookupReference('statisticsAllStatuses');
        var statisticsStatus		= this.lookupReference('statusTopChartRef');


        var nStart = new Date().getTime();
        console.log('게임 메카닉 결과 분석 시작 시점(Status)');


        if(status.create) {
            this.getStatisticsAllStatuses();

            statisticsAllStatuses.show();
            statisticsStatus.hide();
        } else {
            this.getStatisticsStatus(status.get('id'));

            statisticsAllStatuses.hide();
            statisticsStatus.show();
        }

        this.getStatisticsStatusesByPeriod(1);


        var nEnd =  new Date().getTime();
        console.log('게임 메카닉 결과 분석 종료 시점(Status)');

        var nDiff = nEnd - nStart;

        console.log('게임 메카닉 결과 분석 기능 반응 시간(Status) : '+ nDiff + ' (ms)');
    }

});
