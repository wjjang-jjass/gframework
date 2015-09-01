/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    models: [
        'Badge',
        'Point',
        'Status',
        'StatusClass',
        'RepoStatus',
        'User',
        'Activity',
        'Level',
        'Permission',
        'Mission',
        'Template',
        'IconRepository',
        'ActivityLog',
        'LevelEntity',
        'Rule',
        'UserMission',
        'UserReward',
        'ActivityMission',
        'RewardType',
        'RelationFactor',
        'Grade'
    ],
    stores: [
        'Activity',
        'User',
        'Badge',
        'BadgeIcon',
        'Point',
        'PointIcon',
        'Level',
        'RelationFactor',
        'Grade',
        'Upmethod',
        'LevelEntity',
        'LevelIcon',
        'Permission',
        'Status',
        'StatusClass',
        'RepoStatus',
        'Mission',
        'RewardType',
        'Rule',
        'ConstraintPeriod',
        'IsContinuous',
        'ActivityMission',
        'ManagerInfo',
        'PublicKey'
    ],
    views: [
        'manager.point.PointEdit',
        'manager.point.PointList',
        'manager.level.LevelList',
        'manager.mission.MissionList',
        'manager.activity.ActivityEdit',
        'manager.level.LevelEdit',
        'manager.mission.MissionEdit',
        'main.GFmain',
        'manager.status.StatusList',
        'manager.status.StatusEdit',
        'manager.badge.BadgeList',
        'manager.user.UserList',
        'manager.permission.PermissionList',
        'manager.permission.PermissionEdit',
        'manager.badge.BadgeEdit',
        'manager.user.UserEdit',
        'manager.main.ManagerMain',
        'analyzer.main.AnalyzerMain',
        'analyzer.badge.BadgeAnalysisList',
        'analyzer.badge.BadgeAnalysisEdit',
        'analyzer.activity.ActivityAnalysisList',
        'analyzer.activity.ActivityAnalysisEdit',
        'analyzer.point.PointAnalysisList',
        'analyzer.point.PointAnalysisEdit',
        'analyzer.level.LevelAnalysisList',
        'analyzer.status.StatusAnalysisList',
        'analyzer.permission.PermissionAnalysisList',
        'analyzer.mission.MissionAnalysisList',
        'analyzer.user.UserAnalysisList',
        'analyzer.user.UserAnalysisEdit',
        'analyzer.level.LevelAnalysisEdit',
        'analyzer.status.StatusAnalysisEdit',
        'analyzer.permission.PermissionAnalysisEdit',
        'analyzer.mission.MissionAnalysisEdit',
        'main.login.LoginMain',
        'home.main.Main',
        'home.manual.ManualMain',
        'home.wizard.WizardMain',
        'home.home.HomeMain',
        'main.login.EditManager',
        'home.manual.GFIntroMain',
        'home.manual.GFStartMain'
    ],
    name: 'GFManager',

    launch: function() {
        Ext.create('GFManager.view.main.login.LoginMain', {renderTo: Ext.getBody()});
    }

});
