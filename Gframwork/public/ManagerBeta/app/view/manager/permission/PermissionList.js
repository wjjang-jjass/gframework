/*
 * File: app/view/manager/permission/PermissionList.js
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

Ext.define('GFManager.view.manager.permission.PermissionList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.permissionlist',

    requires: [
        'GFManager.view.manager.permission.PermissionListViewModel',
        'GFManager.view.manager.permission.PermissionListViewController',
        'Ext.toolbar.Toolbar',
        'Ext.form.field.Display',
        'Ext.button.Button',
        'Ext.grid.column.RowNumberer'
    ],

    controller: 'permissionlist',
    viewModel: {
        type: 'permissionlist'
    },
    cls: 'x-badge-background',
    width: 250,
    collapsible: false,
    title: '',
    enableColumnHide: false,
    enableColumnMove: false,
    enableColumnResize: false,
    hideHeaders: true,
    store: 'Permission',

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'displayfield',
                    flex: 1,
                    maxHeight: 25
                },
                {
                    xtype: 'button',
                    flex: 1,
                    baseCls: 'list_add_btn',
                    overCls: 'list_add_btn_over',
                    iconCls: '',
                    listeners: {
                        click: 'onPermissionAddButtonClick'
                    }
                },
                {
                    xtype: 'button',
                    flex: 1,
                    reference: 'del_permission_btn',
                    baseCls: 'list_del_btn',
                    disabled: true,
                    overCls: 'list_del_btn_over',
                    listeners: {
                        click: 'onPermissionDelButtonClick'
                    }
                }
            ]
        }
    ],
    columns: [
        {
            xtype: 'rownumberer',
            align: 'center',
            tdCls: 'x-grid-cell-row-numberer x-grid-cell-special grid-size',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'name',
            tdCls: 'grid-size',
            flex: 4
        }
    ],
    listeners: {
        selectionchange: 'onPermissionlistviewSelectionChange',
        itemclick: 'onPermissionGridpanelItemDblClick'
    }

});