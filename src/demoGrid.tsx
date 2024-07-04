import { FC, useCallback, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { GridChartsModule } from "@ag-grid-enterprise/charts-enterprise";
import { MenuModule } from "ag-grid-charts-enterprise";
import { RowGroupingModule } from "ag-grid-charts-enterprise";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.min.css";
import "ag-grid-charts-enterprise"
import "ag-charts-community"
import "ag-charts-react"

interface GridExampleInterface {
  rowData?: [] | undefined;
  colDefs?: [] | undefined;
}



// const dateFormatter = (params) => {
//   return new Date(params.value).toLocaleDateString('sp-sp', {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//   });
// };

const GridExample:FC<GridExampleInterface> = ({rowData, colDefs}) => {
  // Row Data: The data to be displayed.
  // const [rowData, setRowData] = useState([
  //     { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
  //     { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
  //     { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  //     { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
  //     { make: 'Fiat', model: '500', price: 15774, electric: false },
  //     { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  // ]);

  // Column Definitions: Defines & controls grid columns.
  // const [colDefs, setColDefs] = useState([
  //     {
  //       field: 'IdParte',
  //       width: 100,
  //       checkboxSelection: true,
  //     },
  //     {
  //       field: 'Descrip',
  //       width: 500
  //     },
  //     // {
  //     //   field: 'price',
  //     //   width: 130,
  //     //   valueFormatter: (params) => {
  //     //       return params.value.toLocaleString() + ' €';
  //     //   },
  //     // },
  //     {
  //       field: 'FechaParte',
  //       valueFormatter: dateFormatter,
  //     },
  //     // {
  //     //   field: 'electric',
  //     //   cellClassRules: {
  //     //       // apply green to electric cars
  //     //       'rag-green': params => params.value === true,
  //     //   },
  //     //   width: 120,
  //     //   // cellRenderer: MissionResultRenderer // cellRenderer: puede llamar una funcion
  //     // },
  //     {
  //       field: 'IdClasificacion'
  //     }
  // ]);

  const defaultColDef = {
      // flex: 1,
      filter: true,
      floatingFilter: true,
      editable: true,
  };

  // const [rowData, setRowData] = useState([]);
  // useEffect(() => {
  //   fetch('https://www.ag-grid.com/example-assets/space-mission-data.json')
  //       .then((result) => result.json())
  //       .then((rowData) => setRowData(rowData));
  // }, []);

  const rowClassRules = {
    // apply red to Ford cars
    'rag-red': params => params.data.make === 'Toyota',
  };

  /**
   * Charts
   * 
   */
  const enableCharts = true;
  const enableRangeSelection = true;
  const popupParent = useMemo(() => {
    return document.body;
  }, []);
  const onGridReady = useCallback((params) => {
    getData().then((rowData) => params.api.setGridOption("rowData", rowData));
  }, []);



  // Container: Defines the grid's theme & dimensions.
  return (
      <div
          className={
              "ag-theme-quartz-dark"
          }
          style={{ width: '100%', height: '100%' }}
      >
          <AgGridReact
            rowData={rowData}
            // columnDefs={colDefs}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
            rowSelection="multiple"
            suppressRowClickSelection={false}
            pagination={true}
            paginationPageSize={100}
            paginationPageSizeSelector={[10, 25, 50, 100, 200]}
            rowClassRules={rowClassRules}
            onSelectionChanged={(event) => console.log('Row Selected!', event)}
            onCellValueChanged={(event) => console.log(`New Cell Value: ${event.value}`)}
            enableCharts={enableCharts}
            enableRangeSelection={enableRangeSelection}
            popupParent={popupParent}
            onGridReady={onGridReady}
          />
      </div>
  );
};

export { GridExample }