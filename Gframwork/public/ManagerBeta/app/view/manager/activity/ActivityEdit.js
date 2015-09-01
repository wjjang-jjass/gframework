/*
 * File: app/view/manager/activity/ActivityEdit.js
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

Ext.define('GFManager.view.manager.activity.ActivityEdit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.activityedit',

    requires: [
        'GFManager.view.manager.activity.ActivityEditViewModel',
        'GFManager.view.manager.activity.ActivityEditViewController',
        'Ext.form.FieldContainer',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.form.FieldSet',
        'Ext.form.field.TextArea',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.form.Label'
    ],

    controller: 'activityedit',
    viewModel: {
        type: 'activityedit'
    },
    modelValidation: true,
    scrollable: 'true',
    bodyPadding: '10 10 10 10',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    bind: {
        title: '{theActivity.name}'
    },
    items: [
        {
            xtype: 'fieldcontainer',
            maxWidth: 700,
            layout: {
                type: 'hbox',
                align: 'stretch',
                pack: 'end'
            },
            items: [
                {
                    xtype: 'toolbar',
                    items: [
                        {
                            xtype: 'button',
                            baseCls: 'edit_save_btn',
                            overCls: 'edit_save_btn_over',
                            listeners: {
                                click: 'onActivitySaveButtonClick'
                            }
                        },
                        {
                            xtype: 'button',
                            baseCls: 'edit_cancel_btn',
                            overCls: 'edit_cancel_btn_over',
                            iconCls: '',
                            listeners: {
                                click: 'onActivityCancelButtonClick'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'fieldset',
            maxWidth: 700,
            width: '',
            title: '상세 정보',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'textfield',
                    reference: 'activityID',
                    fieldLabel: 'ID*',
                    allowBlank: false,
                    emptyText: '1~20자 이내의 ID를 입력하세요.',
                    maxLength: 20,
                    minLength: 1,
                    regex: /^[A-Za-z]/,
                    vtype: 'alphanum',
                    bind: {
                        value: '{theActivity.id}'
                    },
                    listeners: {
                        beforerender: 'onActivityIDTextfieldBeforeRender'
                    }
                },
                {
                    xtype: 'textfield',
                    fieldLabel: '이름*',
                    emptyText: '1~20자 이내의 이름을 입력하세요.',
                    maxLength: 20,
                    minLength: 1,
                    bind: {
                        value: '{theActivity.name}'
                    }
                },
                {
                    xtype: 'textareafield',
                    flex: 1,
                    height: 60,
                    maxHeight: 60,
                    fieldLabel: '설명*',
                    emptyText: '1~1000자 이내의 설명을 입력하세요.',
                    maxLength: 1000,
                    minLength: 1,
                    bind: {
                        value: '{theActivity.description}'
                    }
                },
                {
                    xtype: 'fieldcontainer',
                    fieldLabel: 'Mission',
                    items: [
                        {
                            xtype: 'gridpanel',
                            stateful: true,
                            cls: 'panel_color',
                            modelValidation: false,
                            padding: '1 1 0 1',
                            columnLines: true,
                            deferRowRender: true,
                            enableColumnHide: false,
                            forceFit: true,
                            store: 'ActivityMission',
                            columns: [
                                {
                                    xtype: 'rownumberer',
                                    maxWidth: 100,
                                    width: 100,
                                    align: 'center',
                                    text: '순번'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    draggable: false,
                                    sortable: false,
                                    dataIndex: 'missionName',
                                    lockable: false,
                                    text: '미션 명',
                                    flex: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'API 사용방법'
                }
            ]
        },
        {
            xtype: 'fieldcontainer',
            height: 120,
            maxWidth: 700,
            width: 700,
            layout: {
                type: 'hbox',
                align: 'stretch',
                pack: 'end'
            },
            items: [
                {
                    xtype: 'label',
                    style: {
                        color: 'red'
                    },
                    text: '(*)필수 입력'
                }
            ]
        }
    ],
    listeners: {
        show: 'onActivityFormShow',
        deactivate: 'onActivityFormDeactivate'
    }

});