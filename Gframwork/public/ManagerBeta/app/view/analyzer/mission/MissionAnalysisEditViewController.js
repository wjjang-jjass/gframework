/*
 * File: app/view/analyzer/mission/MissionAnalysisEditViewController.js
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

Ext.define('GFManager.view.analyzer.mission.MissionAnalysisEditViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.missionanalysisedit',

    getStatisticsAllMissions: function() {
        var me = this;

        var key = Ext.getStore('ManagerInfo').data.items[0].get('key');
        var token = Ext.getStore('ManagerInfo').data.items[0].get('token');

        Ext.Ajax.request({
            url: '/api/v1/analyzer/missions',
            method: 'GET',
            headers: {
                'x-key': key,
                'x-access-token': token
            },
            success: function(response){
                var decodeResponse 		= Ext.decode(response.responseText);

                var missionAnalysisAllStore	= me.getStore('missionAnalysisAll');
                missionAnalysisAllStore.loadData(decodeResponse.data, false);

            },
            failure: function(response){console.log(response);}

        });
    },

    getStatisticsMissionsCompletion: function() {
        var mission	= this.getViewModel().get('theMission');
        var me 		= this;

        var key = Ext.getStore('ManagerInfo').data.items[0].get('key');
        var token = Ext.getStore('ManagerInfo').data.items[0].get('token');

        Ext.Ajax.request({
            url: '/api/v1/analyzer/missionscompletion/'+mission.get('id'),
            method: 'GET',
            headers: {
                'x-key': key,
                'x-access-token': token
            },
            success: function(response){
                var decodeResponse 		= Ext.decode(response.responseText);

                var missionAnalysisDistributionStore	= me.getStore('missionAnalysisDistribution');
                missionAnalysisDistributionStore.loadData(decodeResponse.data, false);

            },
            failure: function(response){console.log(response);}

        });
    },

    getStatisticsMissionsStatus: function() {
        var mission	= this.getViewModel().get('theMission');
        var me 		= this;

        var key = Ext.getStore('ManagerInfo').data.items[0].get('key');
        var token = Ext.getStore('ManagerInfo').data.items[0].get('token');

        Ext.Ajax.request({
            url: '/api/v1/analyzer/missionsstatus/'+mission.get('id'),
            method: 'GET',
            headers: {
                'x-key': key,
                'x-access-token': token
            },
            success: function(response){
                var decodeResponse 		= Ext.decode(response.responseText);

                var missionAnalysisDistributionStore	= me.getStore('missionAnalysisDistribution');
                missionAnalysisDistributionStore.loadData(decodeResponse.data, false);

            },
            failure: function(response){console.log(response);}

        });

    },

    getStatisticsMissionByPeriod: function(period) {
        var mission	= this.getViewModel().get('theMission');
        var me 			= this;

        var key = Ext.getStore('ManagerInfo').data.items[0].get('key');
        var token = Ext.getStore('ManagerInfo').data.items[0].get('token');

        if(mission.create) {

            Ext.Ajax.request({
                url: '/api/v1/analyzer/missionsbyperiod',
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

                    var missionAnalysisPeriodStore	= me.getStore('missionAnalysisPeriod');
                    missionAnalysisPeriodStore.loadData(decodeResponse.data, false);

                },
                failure: function(response){console.log(response);}

            });

        } else {

            Ext.Ajax.request({
                url: '/api/v1/analyzer/missionsbyperiod',
                method: 'GET',
                headers: {
                    'x-key': key,
                    'x-access-token': token
                },
                params:{
                    id: mission.get('id'),
                    period: period
                },
                success: function(response){
                    var decodeResponse 		= Ext.decode(response.responseText);

                    var missionAnalysisPeriodStore	= me.getStore('missionAnalysisPeriod');
                    missionAnalysisPeriodStore.loadData(decodeResponse.data, false);

                },
                failure: function(response){console.log(response);}

            });
        }
    },

    onMissionDistributionRadiogroupChange: function(field, newValue, oldValue, eOpts) {
        if(newValue.distribution == 1) {	//완료자 수 분포
            this.getStatisticsMissionsCompletion();

        } else {							//진행 상태 분포
            this.getStatisticsMissionsStatus();
        }
    },

    onMissionPeriodRadiogroupChange: function(field, newValue, oldValue, eOpts) {
        this.getStatisticsMissionByPeriod(newValue.period);
    },

    onMissionAnalysisFormShow: function(component, eOpts) {
        var mission					= this.getViewModel().get('theMission');
        var statisticsAllMissions	= this.lookupReference('statisticsAllMissions');
        var statisticsMission		= this.lookupReference('statisticsMission');


        var nStart = new Date().getTime();
        console.log('게임 메카닉 결과 분석 시작 시점(Mission)');



        if(mission.create) {
            this.getStatisticsAllMissions();

            statisticsAllMissions.show();
            statisticsMission.hide();
        } else {
            this.getStatisticsMissionsCompletion();

            statisticsAllMissions.hide();
            statisticsMission.show();
        }

        this.getStatisticsMissionByPeriod(1);


        var nEnd =  new Date().getTime();
        console.log('게임 메카닉 결과 분석 종료 시점(Mission)');

        var nDiff = nEnd - nStart;

        console.log('게임 메카닉 결과 분석 기능 반응 시간(Mission) : '+ nDiff + ' (ms)');
    }

});
