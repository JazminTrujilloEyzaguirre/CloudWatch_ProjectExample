const StateMachine = require('./widgets/StateMachine.json');

module.exports = () => ({
    "Type": "AWS::CloudWatch::Dashboard",
    "Properties": {
        "DashboardName": "example-dashboardAlarm-${self:provider.stage}",
        "DashboardBody": JSON.stringify(dashboardBody)
    }
});

const dashboardBody = {
    "widgets": [
        {
            "type": "metric",
            "x": 0,
            "y": 0,
            "width": 15,
            "height": 3,
            "properties": StateMachine.StateMachineFailed
        }
    ]
}
