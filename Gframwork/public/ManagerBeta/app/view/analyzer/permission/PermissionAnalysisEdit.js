/*
 * File: app/view/analyzer/permission/PermissionAnalysisEdit.js
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

Ext.define('GFManager.view.analyzer.permission.PermissionAnalysisEdit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.permissionanalysisedit',

    requires: [
        'GFManager.view.analyzer.permission.PermissionAnalysisEditViewModel',
        'GFManager.view.analyzer.permission.PermissionAnalysisEditViewController',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Widget',
        'Ext.ProgressBarWidget',
        'Ext.grid.column.Number',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Bar',
        'Ext.form.Panel',
        'Ext.toolbar.Toolbar',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio',
        'Ext.chart.series.Line'
    ],

    controller: 'permissionanalysisedit',
    viewModel: {
        type: 'permissionanalysisedit'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    bind: {
        title: '{thePermission.name}'
    },
    items: [
        {
            xtype: 'panel',
            flex: 1,
            cls: 'top_menu_color',
            padding: '5 0 5 0',
            title: '전체 통계',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'gridpanel',
                    flex: 1,
                    reference: 'statisticsAllPermissions',
                    maxHeight: 350,
                    maxWidth: 1000,
                    columnLines: true,
                    bind: {
                        store: '{permissionAnalysisAll}'
                    },
                    columns: [
                        {
                            xtype: 'rownumberer',
                            maxWidth: 100,
                            align: 'center',
                            text: '순번',
                            flex: 1
                        },
                        {
                            xtype: 'gridcolumn',
                            sortable: true,
                            align: 'center',
                            dataIndex: 'name',
                            text: '이름',
                            flex: 1
                        },
                        {
                            xtype: 'widgetcolumn',
                            sortable: true,
                            align: 'center',
                            dataIndex: 'ratio',
                            text: '획득자 비율',
                            flex: 1,
                            widget: {
                                xtype: 'progressbarwidget',
                                textTpl: '{percent:number("0")}% done'
                            }
                        },
                        {
                            xtype: 'numbercolumn',
                            sortable: true,
                            align: 'center',
                            dataIndex: 'count',
                            text: '획득자 수',
                            flex: 1
                        },
                        {
                            xtype: 'numbercolumn',
                            sortable: true,
                            align: 'center',
                            dataIndex: 'countNone',
                            text: '비획득자 수',
                            flex: 1
                        }
                    ]
                },
                {
                    xtype: 'cartesian',
                    flex: 1,
                    reference: 'statisticsPermission',
                    hidden: true,
                    maxWidth: 1000,
                    padding: '20 0 0 0',
                    sprites: {
                        type: 'text',
                        text: '획득자 분포도',
                        width: 100,
                        height: 30,
                        font: '13px bold',
                        x: 30,
                        y: 20
                    },
                    insetPadding: 40,
                    bind: {
                        store: '{permissionAnalysis}'
                    },
                    axes: [
                        {
                            type: 'numeric',
                            fields: [
                                'y'
                            ],
                            minimum: 0,
                            position: 'left',
                            title: '사용자수'
                        },
                        {
                            type: 'category',
                            fields: [
                                'x'
                            ],
                            position: 'bottom'
                        }
                    ],
                    series: [
                        {
                            type: 'bar',
                            highlight: {
                                strokeStyle: 'black',
                                fillStyle: 'gold',
                                lineDash: [
                                    5,
                                    3
                                ]
                            },
                            label: {
                                field: 'y',
                                display: 'insideEnd',
                                renderer: function (value) {
                                    return value;
                                }
                            },
                            style: {
                                minGapWidth: 40
                            },
                            xField: 'x',
                            yField: [
                                'y'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'form',
            flex: 1,
            bodyPadding: 10,
            title: '시간에 따른 획득자 수 통계',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    items: [
                        {
                            xtype: 'radiogroup',
                            width: 400,
                            fieldLabel: '기간검색',
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 'period',
                                    boxLabel: '1일',
                                    checked: true,
                                    inputValue: '1'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 'period',
                                    boxLabel: '1주일',
                                    inputValue: '2'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 'period',
                                    boxLabel: '1개월',
                                    inputValue: '3'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 'period',
                                    boxLabel: '1년',
                                    inputValue: '4'
                                }
                            ],
                            listeners: {
                                change: 'onPermissionPeriodRadiogroupChange'
                            }
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'cartesian',
                    flex: 1,
                    reference: 'permissionChartRef',
                    height: 350,
                    maxHeight: 350,
                    maxWidth: 1000,
                    width: 1000,
                    sprites: [
                        {
                            type: 'text',
                            fontSize: 22,
                            width: 100,
                            height: 30,
                            x: 40,
                            // the sprite x position
                            y: 20// the sprite y position
                        },
                        {
                            type: 'text',
                            fontSize: 10,
                            x: 12,
                            y: 470
                        },
                        {
                            type: 'text',
                            fontSize: 10,
                            x: 12,
                            y: 485
                        }
                    ],
                    colors: [
                        '#115fa6',
                        '#94ae0a',
                        '#a61120',
                        '#ff8809',
                        '#ffd13e',
                        '#a61187',
                        '#24ad9a',
                        '#7c7474',
                        '#a66111'
                    ],
                    insetPadding: 40,
                    bind: {
                        store: '{permissionAnalysisPeriod}'
                    },
                    axes: [
                        {
                            type: 'numeric',
                            renderer: function(label, layout, lastLabel) {
                                return Ext.util.Format.number(label	, '0.0');
                            },
                            listeners: {
                                rangechange: function (axis, range) {
                                    if (!range) {
                                        return;
                                    }
                                    // expand the range slightly to make sure markers aren't clipped
                                    
                                    var max = range[1];
                                    if (max >= 1000) {
                                        range[1] = max + (max * 0.3);
                                    } else {
                                        range[1] = max + (max * 0.3);
                                    }
                                }
                            },
                            fields: [
                                'y'
                            ],
                            grid: true,
                            minimum: 0,
                            position: 'left',
                            title: '포인트'
                        },
                        {
                            type: 'category',
                            listeners: {
                                rangechange: function (axis, range) {
                                    if (!range) {
                                        return;
                                    }        
                            
                                    var max = range[1];
                                    range[1] = max + 1;
                                }
                            },
                            fields: [
                                'x'
                            ],
                            grid: true,
                            title: '날짜',
                            position: 'bottom'
                        }
                    ],
                    series: [
                        {
                            type: 'line',
                            axis: 'left',
                            highlightCfg: {
                                scaling: 2
                            },
                            label: {
                                field: 'y',
                                display: 'over'
                            },
                            marker: {
                                type: 'circle',
                                fx: {
                                    duration: 200,
                                    easing: 'backOut'
                                }
                            },
                            style: {
                                lineWidth: 3
                            },
                            title: 'legend',
                            tooltip: {
                                trackMouse: true,
                                style: 'background: #fff',
                                renderer: function(storeItem, item) {
                                    var title = item.series.getTitle();
                                    this.setHtml(storeItem.get('x') + ': ' + storeItem.get(item.series.getYField()));
                                }
                            },
                            xField: 'x',
                            yField: [
                                'y'
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    listeners: {
        beforerender: 'onPermissionAnalysisFormShow'
    }

});