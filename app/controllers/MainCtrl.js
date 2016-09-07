'use strict';

app.controller('MainCtrl', function($scope, GetData){

  let data = GetData()
    .then((response)=> {
      let contactTypeObj = {};

      response.forEach(function(a){
          let count = 0;
          if(contactTypeObj[a.contact_type] !== undefined){
            count = contactTypeObj[a.contact_type].count;
          }
          contactTypeObj[a.contact_type] = {
            'ContactName' : a.contact_type,
            'count': count + 1
          };
      });

      for(var contactType in contactTypeObj){
        addChartRow(contactType, contactTypeObj[contactType].count);
      }

      console.log('contact types:', contactTypeObj);
    });

  function addChartRow (nameOfContactType, numberOfProviders){
    var chartDatum = {
        c: [
            { v: nameOfContactType },
            { v: numberOfProviders }
        ]
    };
    $scope.chartObject.data.rows.push(chartDatum);
}

$scope.chartObject = {
    type: "BarChart",
    data: {
        "cols": [
            { id: "t", label: "Type of Service", type: "string" },
            { id: "s", label: "Number of Providers", type: "number" }
        ], "rows": [] //You'll be adding the rows with addChartRow
    },
    options: {
        title: "Nashville Services"
    }
};

});
