/*
 * File: app/view/gmre/MainView.js
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

Ext.define('GMRE.view.gmre.MainView', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.gmremainview',

    requires: [
        'GMRE.view.gmre.MainViewViewModel',
        'GMRE.view.gmre.MainViewViewController',
        'GMRE.view.gmre.FiveScaleAnswer',
        'Ext.form.Panel',
        'Ext.form.Label',
        'Ext.tab.Tab',
        'Ext.form.FieldSet',
        'Ext.form.RadioGroup',
        'Ext.form.field.Radio',
        'Ext.toolbar.Toolbar'
    ],

    controller: 'gmremainview',
    viewModel: {
        type: 'gmremainview'
    },
    activeTab: 0,

    items: [
        {
            xtype: 'form',
            reference: 'step0_panel',
            width: 87,
            title: 'Step 0',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'label',
                    margin: '10, 10, 10, 10',
                    text: '0 단계. 웹 사이트에 대한 기본 정보를 입력하세요'
                },
                {
                    xtype: 'fieldset',
                    margin: '5,5,10,10',
                    padding: '10,10,0,0',
                    title: '',
                    items: [
                        {
                            xtype: 'label',
                            margin: '10,10,10,10',
                            text: '질문 1) 웹 사이트의 목적을 선택하세요'
                        },
                        {
                            xtype: 'radiogroup',
                            reference: 'step0_q1_group',
                            margin: '10,10,20,10',
                            columns: 1,
                            vertical: true,
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 's0_q1',
                                    boxLabel: '전자상거래',
                                    checked: true,
                                    inputValue: '1'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's0_q1',
                                    boxLabel: '정보 전달 및 공유',
                                    inputValue: '2'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's0_q1',
                                    boxLabel: '상품 예약 및 구매',
                                    inputValue: '3'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's0_q1',
                                    boxLabel: '기타',
                                    inputValue: '4'
                                }
                            ],
                            listeners: {
                                change: 'onWebSiteRadiogroupChange'
                            }
                        },
                        {
                            xtype: 'label',
                            margin: '10,10,10,10',
                            text: '질문 2) 웹 사이트의 분야를 선택하세요'
                        },
                        {
                            xtype: 'radiogroup',
                            reference: 'step0_q2_group_1',
                            margin: '10,10,20,10',
                            columns: 1,
                            vertical: true,
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 's0_q2_1',
                                    boxLabel: '의류 관련',
                                    checked: true,
                                    inputValue: '1'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's0_q2_1',
                                    boxLabel: '음악 관련',
                                    inputValue: '2'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's0_q2_1',
                                    boxLabel: '자동차 관련',
                                    inputValue: '3'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's0_q2_1',
                                    boxLabel: '게임 관련',
                                    inputValue: '4'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's0_q2_1',
                                    boxLabel: '부동산 및 건물 관련',
                                    inputValue: '5'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's0_q2_1',
                                    boxLabel: '기타',
                                    inputValue: '6'
                                }
                            ]
                        },
                        {
                            xtype: 'radiogroup',
                            reference: 'step0_q2_group_2',
                            hidden: true,
                            margin: '10,10,20,10',
                            columns: 1,
                            vertical: true,
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 's0_q2_2',
                                    boxLabel: '블로그 관련',
                                    checked: true,
                                    inputValue: '1'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's0_q2_2',
                                    boxLabel: '종교 및 비영리 관련',
                                    inputValue: '2'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's0_q2_2',
                                    boxLabel: '기타',
                                    inputValue: '3'
                                }
                            ]
                        },
                        {
                            xtype: 'radiogroup',
                            reference: 'step0_q2_group_3',
                            hidden: true,
                            margin: '10,10,20,10',
                            columns: 1,
                            vertical: true,
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 's0_q2_3',
                                    boxLabel: '여행 관련',
                                    checked: true,
                                    inputValue: '1'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's0_q2_3',
                                    boxLabel: '놀이동산 관련',
                                    inputValue: '2'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's0_q2_3',
                                    boxLabel: '영화 및 공연 관련',
                                    inputValue: '3'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's0_q2_3',
                                    boxLabel: '기타',
                                    inputValue: '4'
                                }
                            ]
                        },
                        {
                            xtype: 'radiogroup',
                            reference: 'step0_q2_group_4',
                            hidden: true,
                            margin: '10,10,20,10',
                            columns: 1,
                            vertical: true,
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 's0_q2_4',
                                    boxLabel: '기타',
                                    checked: true,
                                    inputValue: '1'
                                }
                            ]
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            disabled: true,
                            itemId: 'prev_btn',
                            text: '&laquo; Previous'
                        },
                        {
                            xtype: 'button',
                            itemId: 'next_btn',
                            text: 'Next &raquo;'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'form',
            reference: 'step1_panel',
            disabled: true,
            title: 'Step 1',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'label',
                    margin: '10, 10, 10, 10',
                    text: '1 단계. 적용하려고 하는 게이미피케이션에 대한 기본 정보를 입력하세요'
                },
                {
                    xtype: 'fieldset',
                    margin: '5,5,10,10',
                    padding: '10,10,0,0',
                    title: '',
                    items: [
                        {
                            xtype: 'label',
                            margin: '10,10,10,10',
                            text: '질문 1) 사용 가능한 예산을 선택하세요 (단위: 만원)'
                        },
                        {
                            xtype: 'radiogroup',
                            reference: 'step1_q1_group',
                            margin: '10,10,20,10',
                            columns: 1,
                            vertical: true,
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 's1_q1',
                                    boxLabel: '~ 500',
                                    inputValue: '1'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's1_q1',
                                    boxLabel: '500 ~ 1,000',
                                    inputValue: '2'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's1_q1',
                                    boxLabel: '1,000 ~ 3,000',
                                    inputValue: '3'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's1_q1',
                                    boxLabel: '3,000 ~',
                                    checked: true,
                                    inputValue: '4'
                                }
                            ]
                        },
                        {
                            xtype: 'label',
                            margin: '10,10,10,10',
                            text: '질문 2) 서비스의 예상 활용 기간을 선택하세요'
                        },
                        {
                            xtype: 'radiogroup',
                            reference: 'step1_q2_group',
                            margin: '10,10,20,10',
                            columns: 1,
                            vertical: true,
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 's1_q2',
                                    boxLabel: '1 개월 이내',
                                    inputValue: '1'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's1_q2',
                                    boxLabel: '1 ~ 3 개월',
                                    inputValue: '2'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's1_q2',
                                    boxLabel: '3 ~ 6 개월',
                                    inputValue: '3'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's1_q2',
                                    boxLabel: '6 개월 이상',
                                    checked: true,
                                    inputValue: '4'
                                }
                            ]
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'prev_btn',
                            text: '&laquo; Previous'
                        },
                        {
                            xtype: 'button',
                            itemId: 'next_btn',
                            text: 'Next &raquo;'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'form',
            reference: 'step2_panel',
            disabled: true,
            title: 'Step 2',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'label',
                    margin: '10, 10, 10, 10',
                    text: '2 단계. 대상 플레이어의 기본 정보를 입력하세요'
                },
                {
                    xtype: 'fieldset',
                    margins: '',
                    margin: '5,5,10,10',
                    padding: '10,10,0,0',
                    title: '',
                    items: [
                        {
                            xtype: 'label',
                            margin: '10,10,10,10',
                            text: '질문 1) 주 연령대를 선택하세요'
                        },
                        {
                            xtype: 'radiogroup',
                            margin: '10,10,20,10',
                            columns: 1,
                            vertical: true,
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 's2_q1',
                                    boxLabel: '10세 ~ 18세',
                                    inputValue: '1'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's2_q1',
                                    boxLabel: '19세 ~ 29세',
                                    inputValue: '2'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's2_q1',
                                    boxLabel: '30세 ~ 39세',
                                    checked: true,
                                    inputValue: '3'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's2_q1',
                                    boxLabel: '40세 ~ 49세',
                                    inputValue: '4'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's2_q1',
                                    boxLabel: '50세 이상',
                                    inputValue: '5'
                                }
                            ]
                        },
                        {
                            xtype: 'label',
                            margin: '10,10,10,10',
                            text: '질문 2) 주 성별을 선택하세요'
                        },
                        {
                            xtype: 'radiogroup',
                            margin: '10,10,20,10',
                            columns: 1,
                            vertical: true,
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 's2_q2',
                                    boxLabel: '남',
                                    inputValue: '1'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's2_q2',
                                    boxLabel: '여',
                                    inputValue: '2'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 's2_q2',
                                    boxLabel: '모두',
                                    checked: true,
                                    inputValue: '3'
                                }
                            ]
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'prev_btn',
                            text: '&laquo; Previous'
                        },
                        {
                            xtype: 'button',
                            itemId: 'next_btn',
                            text: 'Next &raquo;'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'form',
            reference: 'step3_panel',
            disabled: true,
            scrollable: true,
            title: 'Step 3',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'label',
                    margin: '10, 10, 10, 10',
                    text: '3 단계. 대상 플레이어의 상세 정보를 입력하세요'
                },
                {
                    xtype: 'fieldset',
                    margins: '',
                    margin: '5,5,10,10',
                    padding: '10,10,0,0',
                    title: '',
                    items: [
                        {
                            xtype: 'label',
                            margin: 10,
                            text: '1) 내 사이트에는 회원 간의 댓글, 질문 등 온라인 커뮤니티 활동이 활발하다'
                        },
                        {
                            xtype: 'fivescaleanswer',
                            radioFieldName: 's3_q1'
                        },
                        {
                            xtype: 'label',
                            margin: 10,
                            text: '2) 내 사이트에서 회원들이 홈페이지의 기능이상 등의 문제를 악용해서 문제가 된 적이 있다'
                        },
                        {
                            xtype: 'fivescaleanswer',
                            radioFieldName: 's3_q2'
                        },
                        {
                            xtype: 'label',
                            margin: '10,10,10,10',
                            text: '3) 내 사이트 사용자들은 경품행사 등 이벤트 참여에 적극적이다'
                        },
                        {
                            xtype: 'fivescaleanswer',
                            radioFieldName: 's3_q3'
                        },
                        {
                            xtype: 'label',
                            margin: '10,10,10,10',
                            text: '4) 내 사이트에서 발생한 약간의 장애로 인해 사용자들이 급격히 줄어든 적이 있다'
                        },
                        {
                            xtype: 'fivescaleanswer',
                            radioFieldName: 's3_q4'
                        },
                        {
                            xtype: 'label',
                            margin: '10,10,10,10',
                            text: '5) 사용자간 질의 응답이 활발하다. 질문 댓글에 대한 답변이 많다'
                        },
                        {
                            xtype: 'fivescaleanswer',
                            radioFieldName: 's3_q5'
                        },
                        {
                            xtype: 'label',
                            margin: '10,10,10,10',
                            text: '6) 내 사이트 사용자들은 물건을 구매하기 위해서 상당히 많은 물건을 비교하는 편이다'
                        },
                        {
                            xtype: 'fivescaleanswer',
                            radioFieldName: 's3_q6'
                        },
                        {
                            xtype: 'label',
                            margin: '10,10,10,10',
                            text: '7) 내 사이트에서 제일 잘 팔리는 물건은 거의 신상품들이다'
                        },
                        {
                            xtype: 'fivescaleanswer',
                            radioFieldName: 's3_q7'
                        },
                        {
                            xtype: 'label',
                            margin: '10,10,10,10',
                            text: '8) 내 사이트 사용자는 (보상이 있든 없든) 구매 후기를 잘 남기는 편이다'
                        },
                        {
                            xtype: 'fivescaleanswer',
                            radioFieldName: 's3_q8'
                        },
                        {
                            xtype: 'label',
                            margin: '10,10,10,10',
                            text: '9) 내 사이트에 새로운 기능이 추가되어도 사용자들은 빠져나가지 않을 것이다'
                        },
                        {
                            xtype: 'fivescaleanswer',
                            radioFieldName: 's3_q9'
                        },
                        {
                            xtype: 'label',
                            margin: '10,10,10,10',
                            text: '10) 내 사이트에서 어떠한 문제든 그 문제에 대해 자신의 의견을 피력하는 사용자가 많다'
                        },
                        {
                            xtype: 'fivescaleanswer',
                            radioFieldName: 's3_q10'
                        },
                        {
                            xtype: 'label',
                            margin: '10,10,10,10',
                            text: '11) 구매자간 혹은 관리자와 구매자간의 커뮤니케이션이 활발한 편이다'
                        },
                        {
                            xtype: 'fivescaleanswer',
                            radioFieldName: 's3_q11'
                        },
                        {
                            xtype: 'label',
                            margin: '10,10,10,10',
                            text: '12) (각종 포인트제도를 활용하고 있다면) 포인트를 얻기 위한 행동을 하는 사용자 참여율이 높은 편이다'
                        },
                        {
                            xtype: 'fivescaleanswer',
                            radioFieldName: 's3_q12'
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'prev_btn',
                            text: '&laquo; Previous'
                        },
                        {
                            xtype: 'button',
                            itemId: 'submit_btn',
                            text: 'Submit'
                        }
                    ]
                }
            ]
        }
    ]

});