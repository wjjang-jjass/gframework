/*
 * File: app/view/home/home/HomeMainViewController.js
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

Ext.define('GFManager.view.home.home.HomeMainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.homemain',

    restartMechanics: function() {
        if(Ext.getStore('ManagerInfo').data.length !== 0) {
            var key = Ext.getStore('ManagerInfo').data.items[0].get('key');
            var token = Ext.getStore('ManagerInfo').data.items[0].get('token');


            Ext.Ajax.request({
                url: '/api/v1/manager/init/restart',
                method: 'GET',
                headers: {
                    'x-key': key,
                    'x-access-token': token
                },
                success: function(response){
                    var decodeResponse 		= Ext.decode(response.responseText);

                    if(decodeResponse.success) {
                        Ext.toast({
                            title: '게임 메카닉 로딩' ,
                            html: '새로운 게임 메카닉이 성공적으로 재시작 되었습니다.',
                            align: 't',
                            bodyPadding:10
                        });


                        Ext.getStore('User').proxy.headers = { 'x-key': key, 'x-access-token': token };
                        Ext.getStore('Activity').proxy.headers = { 'x-key': key, 'x-access-token': token };
                        Ext.getStore('ActivityMission').proxy.headers = { 'x-key': key, 'x-access-token': token };
                        Ext.getStore('Mission').proxy.headers = { 'x-key': key, 'x-access-token': token };
                        Ext.getStore('Badge').proxy.headers = { 'x-key': key, 'x-access-token': token };
                        Ext.getStore('Point').proxy.headers = { 'x-key': key, 'x-access-token': token };
                        Ext.getStore('Level').proxy.headers = { 'x-key': key, 'x-access-token': token };
                        Ext.getStore('Status').proxy.headers = { 'x-key': key, 'x-access-token': token };
                        Ext.getStore('Permission').proxy.headers = { 'x-key': key, 'x-access-token': token };
                        Ext.getStore('StatusClass').proxy.headers = { 'x-key': key, 'x-access-token': token };
                        Ext.getStore('Rule').proxy.headers = { 'x-key': key, 'x-access-token': token };
                        Ext.getStore('RepoStatus').proxy.headers = { 'x-key': key, 'x-access-token': token };


                        Ext.getStore('User').load();
                        Ext.getStore('Activity').load();
                        Ext.getStore('ActivityMission').load();
                        Ext.getStore('Mission').load();
                        Ext.getStore('Badge').load();
                        Ext.getStore('Point').load();
                        Ext.getStore('Level').load();
                        Ext.getStore('Status').load();
                        Ext.getStore('Permission').load();
                        Ext.getStore('StatusClass').load();
                        Ext.getStore('Rule').load();
                        Ext.getStore('RepoStatus').load();
                    }
                },
                failure: function(response){console.log(response);}
            });
        }




    },

    onRestartButtonClick: function(button, e, eOpts) {
        if(Ext.getStore('ManagerInfo').data.length !== 0) {
            this.fireViewEvent('tabpanelSubRemoveAll', this, null);
            this.restartMechanics();
        } else {
            Ext.MessageBox.alert('로그인 요청', '로그인 후 이용이 가능합니다.', function(btn){
                if (btn == 'ok') {
                }
            }, this);

        }
    }

});