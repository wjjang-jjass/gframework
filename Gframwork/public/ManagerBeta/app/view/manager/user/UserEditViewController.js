/*
 * File: app/view/manager/user/UserEditViewController.js
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

Ext.define('GFManager.view.manager.user.UserEditViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.useredit',

    onCancelUser: function() {
        var user		= this.getViewModel().get('theUser');
        var isDirtyUser	= user.dirty;
        if(isDirtyUser)  {

            Ext.getStore('User').rejectChanges();

            //=========================================================
            //				gender setting(Radio Group)
            //=========================================================

            var user		= this.getViewModel().get('theUser');
            var genderCmp 	= this.lookupReference('gender');


            if(user.get('gender') === 0) {			//기타
                genderCmp.items.items[2].setValue(true);
            } else if(user.get('gender') === 1) {	//남자
                genderCmp.items.items[0].setValue(true);
            } else if(user.get('gender') === 2) {	//여자
                genderCmp.items.items[1].setValue(true);
            }
            //=========================================================

            var userImg	= this.lookupReference('userImg');
            userImg.setSrc(''+user.get('profile'));

        }
    },

    onUserSaveButtonClick: function(button, e, eOpts) {
        var userEditTab = button.up('useredit');
        var me = this;

        var saveUser 	= userEditTab.getViewModel().get('theUser');
        var genderCmp	= this.lookupReference('gender');
        var userIDCmp	= this.lookupReference('userID');
        var userImg		= this.lookupReference('userImg');

        if(saveUser.create) {		//새로운 User
            if(userEditTab.isValid()) {

                if(!saveUser.id || !saveUser.name || !saveUser.nickname) {
                    Ext.toast({
                        title: 'User-저장 실패' ,
                        html: '필드값을 다시 확인해주세요.',
                        align: 't',
                        bodyPadding:10
                    });
                } else {
                    var userStore	= Ext.getStore('User');
                    var user		= Ext.create('GFManager.model.User');
                    var gender;

                    user.set('id', saveUser.id);
                    user.set('name', saveUser.name);
                    user.set('nickname', saveUser.nickname);


                    if(genderCmp.items.items[0].value) {		//남자
                        gender = 1;
                    } else if(genderCmp.items.items[1].value) {	//여자
                        gender = 2;
                    } else if(genderCmp.items.items[2].value) {	//기타
                        gender = 0;
                    }

                    //user.set('profile', userImg.src.substring(1));
                    user.set('profile', userImg.src);
                    user.set('gender', gender);
                    user.set('birthday', saveUser.birthday);

                    userStore.add(user);
                    userStore.save();
                    userStore.commitChanges();

                    userEditTab.close();

                    Ext.toast({
                        title: 'User-추가',
                        html: '새로운 User ('+ saveUser.name+ ') 가 성공적으로 추가되었습니다.',
                        align: 't',
                        bodyPadding:10
                    });
                }

            } else {
                Ext.toast({
                    title: 'User-저장 실패' ,
                    html: '필드값을 다시 확인해주세요.',
                    align: 't',
                    bodyPadding:10
                });
            }


        } else {							//기존 User
            if(saveUser.dirty) { 			//기존 User 정보 변경시
                if(userEditTab.isValid()) {	//기존 User 정보 검증
                    Ext.MessageBox.confirm('User-저장', saveUser.get('name') + '의 정보가 변경되었습니다. 저장하시겠습니까?', function(btn){
                        if (btn == 'yes') {

                            saveUser.save();

                            Ext.toast({
                                title: 'User-수정 완료' ,
                                html: saveUser.get('name') + '의 User정보가 성공적으로 수정되었습니다.',
                                align: 't',
                                bodyPadding:10
                            });

                        } else {
                            me.onCancelUser();
                        }
                    });
                } else {
                    Ext.toast({
                        title: 'User-저장 실패' ,
                        html: '필드값을 다시 확인해주세요.',
                        align: 't',
                        bodyPadding:10
                    });
                }
            }
        }
    },

    onUserCancelButtonClick: function(button, e, eOpts) {
        this.onCancelUser();
    },

    onUserImageBeforeRender: function(component, eOpts) {
        var user	= this.getViewModel().get('theUser');
        var userImg	= this.lookupReference('userImg');

        if(user.create) {		//새로운 User 추가시
        } else {
            userImg.setSrc(''+user.get('profile'));
        }
    },

    onFilefieldChange: function(filefield, value, eOpts) {
        var imgForm	= this.lookupReference('imageForm');
        var userId	= this.lookupReference('userID').value;
        var userImg	= this.lookupReference('userImg');

        var key = Ext.getStore('ManagerInfo').data.items[0].get('key');
        var token = Ext.getStore('ManagerInfo').data.items[0].get('token');

        var me		= this;


        var encodedFilename = Ext.urlEncode({ 'x_key': key, 'access_token': token });

        if(userId) {
            imgForm.submit({
                url:'/api/v1/manager/users/userprofile/' + userId + '?'+encodedFilename,
                waitMsg: '이미지 로드 중...',
                success: function(response, records){
                    var decodeResponse 		= Ext.decode(records.response.responseText);
                    var img = ''+decodeResponse.data;
                    userImg.setSrc(img);

                    var user	= me.getViewModel().get('theUser');
                    if(!user.create) {
                        user.set('profile', decodeResponse.data);
                    }
                },
                failure: function(response){
                }
            });
        } else {
            Ext.toast({
                title: 'User-이미지 수정' ,
                html: 'User의 이미지를 변경하기 위해서는 ID를 입력해주세요.',
                align: 't',
                bodyPadding:10
            });

        }
    },

    onUserIDTextfieldBeforeRender: function(component, eOpts) {
        var userIDCmp		= this.lookupReference('userID');
        var isCreateUser	= this.getViewModel().get('theUser').create;

        if(isCreateUser) {		//새로운 User 추가시
            userIDCmp.setDisabled(false);
        } else {
            userIDCmp.setDisabled(true);
        }
    },

    onUserRadiogroupChange: function(field, newValue, oldValue, eOpts) {
        var isCreateUser	= this.getViewModel().get('theUser').create;

        if(isCreateUser) {		//새로운 User 추가시
        } else {
            var user	= this.getViewModel().get('theUser');
            user.set('gender', newValue.method);
        }
    },

    onUserRadiogroupBeforeRender: function(component, eOpts) {
        var genderCmp		= this.lookupReference('gender');
        var isCreateUser	= this.getViewModel().get('theUser').create;

        if(isCreateUser) {		//새로운 User 추가시

        } else {

            var gender		= this.getViewModel().get('theUser').get('gender');

            if(gender !== null) {

                if(gender === 0) {			//기타

                    genderCmp.items.items[2].setValue(true);


                } else if(gender === 1) {	//남자

                    genderCmp.items.items[0].setValue(true);


                } else if(gender === 2) {	//여자

                    genderCmp.items.items[1].setValue(true);

                }
            }
        }
    },

    onUserFormDeactivate: function(component, eOpts) {
        if(component.itemId == 'user_edittab') {

        } else {

            if(!this.getViewModel().data.theUser.dropped) {
                var user		= this.getViewModel().get('theUser');

                var isDirtyUser	= user.dirty;
                var isCreateUser= user.create;
                var me = this;

                if(isDirtyUser)  {		//기존 User 수정시 Tab이 변경되었을 경우

                    Ext.MessageBox.confirm('User-저장', user.get('name')+'의 정보가 변경되었습니다. 저장하시겠습니까?', function(btn){
                        if (btn == 'yes') {

                            user.save();

                            Ext.toast({
                                title: 'User-수정 완료' ,
                                html: user.get('name') + '의 User정보가 성공적으로 수정되었습니다.',
                                align: 't',
                                bodyPadding:10
                            });
                        } else {
                            me.onCancelUser();
                        }
                    });
                }
            }
        }
    }

});