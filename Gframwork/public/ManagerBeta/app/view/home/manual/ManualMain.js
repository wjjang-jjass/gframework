/*
 * File: app/view/home/manual/ManualMain.js
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

Ext.define('GFManager.view.home.manual.ManualMain', {
    extend: 'Ext.form.Panel',
    alias: 'widget.manualmain',

    requires: [
        'GFManager.view.home.manual.ManualMainViewModel',
        'GFManager.view.home.manual.GFOverviewMain',
        'GFManager.view.home.manual.GFIntroMain',
        'GFManager.view.home.manual.GFStartMain',
        'Ext.form.Panel',
        'Ext.form.Label',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'manualmain'
    },
    baseCls: 'top_menu_color_background',
    margin: 20,
    scrollable: 'true',
    collapsed: false,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'container',
            flex: 1,
            scrollable: 'true',
            layout: {
                type: 'accordion',
                hideCollapseTool: false,
                collapseFirst: false
            },
            items: [
                {
                    xtype: 'form',
                    cls: 'top_menu_color',
                    title: '<H2>1. Gamification Framework 개요</H2>',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'gfoverviewmain',
                            reference: 'GFOverviewMain',
                            id: 'GFOverviewMain',
                            margin: '0 0 0 25',
                            layout: 'fit',
                            flex: 1
                        }
                    ]
                },
                {
                    xtype: 'form',
                    cls: 'top_menu_color',
                    title: '<H2>2. Gamification Framework 소개</H2>',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'gfintromain',
                            reference: 'GFIntroMain',
                            id: 'GFIntroMain',
                            margin: '0 0 0 25',
                            layout: 'fit',
                            flex: 1
                        }
                    ]
                },
                {
                    xtype: 'form',
                    cls: 'top_menu_color',
                    title: '<H2>3. Gamification Framework 시작하기</H2>',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'gfstartmain',
                            reference: 'GFStartMain',
                            id: 'GFStartMain',
                            margin: '0 0 0 25',
                            layout: 'fit',
                            flex: 1
                        }
                    ]
                },
                {
                    xtype: 'form',
                    cls: 'top_menu_color',
                    title: '<H2>4. 관리자 지원</H2>',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'label',
                            flex: 3,
                            hidden: true,
                            html: '<H2>4. 관리자 지원</H2>',
                            margin: 20
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            hidden: true
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            scrollable: 'true',
            layout: 'form'
        }
    ]

});