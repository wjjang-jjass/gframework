/*
 * File: app/view/gmre/MainViewViewController.js
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

Ext.define('GMRE.view.gmre.MainViewViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.gmremainview',

    control: {
        "button#next_btn": {
            click: 'onNextButtonClick'
        },
        "button#prev_btn": {
            click: 'onPreviousButtonClick'
        },
        "button#submit_btn": {
            click: 'onSubmitButtonClick'
        }
    },

    onNextButtonClick: function(button, e, eOpts) {
        //1) Check input values in the form fields

        //2) Move to the next panel
        var tabPanel = button.up('tabpanel');

        var thisPanel = button.up('panel');
        var ref_this = thisPanel.getReference();

        var nextPanel;

        if(ref_this == 'step0_panel'){
            nextPanel = this.lookupReference('step1_panel');

        }else if(ref_this == 'step1_panel'){
            nextPanel = this.lookupReference('step2_panel');

        }else if(ref_this == 'step2_panel'){
            nextPanel = this.lookupReference('step3_panel');
        }

        nextPanel.enable();

        tabPanel.setActiveTab(nextPanel);

        //3)

        /*
        Ext.Msg.alert({title: 'Test N',
            msg: 'TEST Next Btn',
            icon: Ext.Msg.INFO,
            buttons: Ext.Msg.OK});
        */

    },

    onPreviousButtonClick: function(button, e, eOpts) {
        //1) Move to the previous panel
        var tabPanel = button.up('tabpanel');

        var thisPanel = button.up('panel');
        var ref_this = thisPanel.getReference();

        var prevPanel;

        if(ref_this == 'step1_panel'){
            prevPanel = this.lookupReference('step0_panel');
        }else if(ref_this == 'step2_panel'){
            prevPanel = this.lookupReference('step1_panel');
        }else if(ref_this == 'step3_panel'){
            prevPanel = this.lookupReference('step2_panel');
        }

        prevPanel.enable();
        //thisPanel.disable();

        tabPanel.setActiveTab(prevPanel);
    },

    onSubmitButtonClick: function(button, e, eOpts) {

        var step0Panel = this.lookupReference('step0_panel');
        var step1Panel = this.lookupReference('step1_panel');
        var step2Panel = this.lookupReference('step2_panel');
        var step3Panel = this.lookupReference('step3_panel');

        var tabPanel = button.up('tabpanel');

        var step0Form = step0Panel.getForm();
        var step1Form = step1Panel.getForm();
        var step2Form = step2Panel.getForm();
        var step3Form = step3Panel.getForm();

        //console.log(Ext.util.JSON.encode(step0Form.getValues()));
        //console.log(Ext.util.JSON.encode(step1Form.getValues()));
        //console.log(Ext.util.JSON.encode(step2Form.getValues()));
        //console.log(Ext.util.JSON.encode(step3Form.getValues()));

        var myThis = this;

        Ext.Ajax.request({
            url: '/api/doAnalyze',
            timeout: 10000,
            method: 'POST',
            params: {
                step0: Ext.util.JSON.encode(step0Form.getValues()),
                step1: Ext.util.JSON.encode(step1Form.getValues()),
                step2: Ext.util.JSON.encode(step2Form.getValues()),
                step3: Ext.util.JSON.encode(step3Form.getValues()),
            },
            success: function(response){

                var resValue = response.responseText;

                //console.log('OK');
                //console.log(resValue);

                var data = Ext.util.JSON.decode(resValue);

                myThis.createDialog(data.players, data.mechanics, data.siteArea);

            },
            failure: function(response){
                console.log('Fail');
            }
        });
    },

    createDialog: function(players, mechanics, siteArea) {
        var ResultWindow = Ext.create('GMRE.view.gmre.ResultWindow');
        var myChart = ResultWindow.down('polar');
        var playerGrid = ResultWindow.down('#playergrid');
        var mechanicGrid = ResultWindow.down('#mechanicgrid');
        var siteAreaName = ResultWindow.down('#siteAreaName');

        //siteAreaName.setText(siteArea);

        siteAreaName.setHtml('<H1>' + siteArea + '</H1>');


        //1) Display player analysis results
        var pointStore = Ext.create('Ext.data.JsonStore',{
            fields: ['Name', 'Point'],
            data: [
                {
                    //"Name": "socialiser",
                    "Name": "사교가",
                    "Point": players.socialiser
                },
                {
                    //"Name": "freespirit",
                    "Name": "자유주의자",
                    "Point": players.freespirit
                },
                {
                    //"Name": "achiever",
                    "Name": "성취가",
                    "Point": players.achiever
                },
                {
                    //"Name": "philanthropist",
                    "Name": "자선가",
                    "Point": players.philanthropist
                },
                {
                    //"Name": "player",
                    "Name": "참가자",
                    "Point": players.player
                },
                {
                    //"Name": "disruptor",
                    "Name": "방해자",
                    "Point": players.disruptor
                }
            ],
            sorters:[
                {property: 'Point', direction: 'DESC'}
            ]
        });
        myChart.setStore(pointStore);
        playerGrid.setStore(pointStore);

        //2) Display game mechanics recommendation results
        var mechanicStore = Ext.create('Ext.data.JsonStore',{
            fields: ['Name','Prefer'],
            data: mechanics,
            sorters:[
                {property: 'Prefer', direction: 'DESC'}
            ]
        });
        mechanicGrid.setStore(mechanicStore);

        var view = this.getView();
        this.dialog = view.add(ResultWindow);
        this.dialog.show();
    },

    onWebSiteRadiogroupChange: function(field, newValue, oldValue, eOpts) {
        var step0_q2_group_1 = this.lookupReference('step0_q2_group_1');
        var step0_q2_group_2 = this.lookupReference('step0_q2_group_2');
        var step0_q2_group_3 = this.lookupReference('step0_q2_group_3');
        var step0_q2_group_4 = this.lookupReference('step0_q2_group_4');

        if(newValue.s0_q1 == 1) {

            step0_q2_group_1.show();
            step0_q2_group_2.hide();
            step0_q2_group_3.hide();
            step0_q2_group_4.hide();

        } else if(newValue.s0_q1 == 2) {

            step0_q2_group_1.hide();
            step0_q2_group_2.show();
            step0_q2_group_3.hide();
            step0_q2_group_4.hide();

        } else if(newValue.s0_q1 == 3) {

            step0_q2_group_1.hide();
            step0_q2_group_2.hide();
            step0_q2_group_3.show();
            step0_q2_group_4.hide();

        } else if(newValue.s0_q1 == 4) {

            step0_q2_group_1.hide();
            step0_q2_group_2.hide();
            step0_q2_group_3.hide();
            step0_q2_group_4.show();


        }
    }

});
