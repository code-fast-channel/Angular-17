export const OverAllTable = [
    {
      displayName: '',
      type: 'checkBox',
      isEnableSelectall: true, // if you want select All - true,
      checked: true,
    },
    {
      displayName: 'SNo',
      type: 'snum',
      checked: true,
      customStyle: {
        trow: {
          width: '20%',
          height: '3%',
          class:'text-center'
        },tbody:{
          class:'text-center'
  
        }
  
      }
    },
    {
      displayName: 'Name',
      id: 'name',
      type: 'default',
      checked: true,
    },
    {
      displayName: 'Date',
      id: 'date',
      checked: true,
      type: 'date',
      format: 'dd/MM/yyyy'
    },
    {
      displayName: 'Age',
      id: 'age',
      type: 'default',
      checked: true,
    },
    {
      displayName: 'Action',
      type: 'buttonGroup',
      buttons: [
        {
          displayName: 'Edit',
          image: '',
          key: 'Edit',
          customStyle: {
            tbody: {
              width: '20%',
              height: '3%',
              class: 'btn btn-sm btn-primary'
            }
          }
        },
        {
          displayName: 'Delete',
          image: '',
          key: 'Delete',
          customStyle: {
            tbody: {
              width: '20%',
              height: '3%',
              class: 'btn btn-sm btn-danger ml-9'
            }
          }
        }
      ]
    },
    {
      displayName: 'View',
      type: 'buttonGroup',
      buttons: [
        {
          displayName: 'View',
          image: '',
          key: 'Edit',
          customStyle: {
            tbody: {
              width: '20%',
              height: '3%',
              class: 'btn btn-sm btn-danger'
            }
          }
        }
      ]
    },
  ];
  
  export const TableWithoutCheckbox = [
  
    {
      displayName: 'SNo',
      type: 'snum',
      checked: true,
      customStyle: {
        trow: {
          width: '20%',
          height: '3%',
          class:'text-center'
        },tbody:{
          class:'text-center'
  
        }
  
      }
    },
    {
      displayName: 'Name',
      id: 'name',
      type: 'default',
      checked: true,
    },
    {
      displayName: 'Age',
      id: 'age',
      checked: true,
      type: 'default'
    },
    {
      displayName: 'Action',
      type: 'buttonGroup',
      checked: true,
      buttons: [
        {
          displayName: 'edit',
          image: '',
          key: 'Edit',
          customStyle: {
            tbody: {
              width: '20%',
              height: '3%',
              class: 'btn btn-sm btn-primary'
            }
          }
        },
        {
          displayName: 'delete',
          image: '',
          key: 'Delete',
          customStyle: {
            tbody: {
              width: '20%',
              height: '3%',
              class: 'btn btn-sm btn-danger ml-9'
            }
          }
        }
      ]
    },
    {
      displayName: 'View and navigate',
      type: 'buttonGroup',
      checked: true,
      buttons: [
        {
          displayName: 'Go',
          image: '',
          key: 'Edit',
          customStyle: {
            tbody: {
              width: '20%',
              height: '3%',
              class: 'btn btn-sm btn-danger'
            }
          }
        }
      ]
    },
  ]
  
  export const TableWithCheckBox = [
    {
      displayName: '',
      type: 'checkBox',
      isEnableSelectall: false, // if you want select All - true,
      checked: true,
    },
    {
      displayName: 'SNo',
      type: 'snum',
      checked: true,
      customStyle: {
        trow: {
          width: '20%',
          height: '3%',
          class:'text-center'
        },tbody:{
          class:'text-center'
  
        }
  
      }
    },
    {
      displayName: 'Name',
      id: 'name',
      type: 'default',
      checked: true,
    },
    {
      displayName: 'Age',
      id: 'age',
      type: 'default',
      checked: true,
    },
    {
      displayName: 'Action',
      type: 'buttonGroup',
      checked: true,
      buttons: [
        {
          displayName: 'edit',
          image: '',
          key: 'Edit',
          customStyle: {
            tbody: {
              width: '20%',
              height: '3%',
              class: 'btn btn-sm btn-primary'
            }
          }
        },
        {
          displayName: 'delete',
          image: '',
          key: 'Delete',
          customStyle: {
            tbody: {
              width: '20%',
              height: '3%',
              class: 'btn btn-sm btn-danger ml-9'
            }
          }
        }
      ]
    },
    {
      displayName: 'View',
      type: 'buttonGroup',
      checked: true,
      buttons: [
        {
          displayName: 'edit',
          image: '',
          key: 'Edit',
          customStyle: {
            tbody: {
              width: '20%',
              height: '3%',
              class: 'btn btn-sm btn-danger'
            }
          }
        }
      ]
    },
  ]
  
  export const TableWithCheckBoxAll = [
    {
      displayName: '',
      type: 'checkBox',
      isEnableSelectall: true, // if you want select All - true
      checked: true,
    },
    {
      displayName: 'SNo',
      type: 'snum',
      checked: true,
      customStyle: {
        trow: {
          width: '20%',
          height: '3%',
          class:'text-center'
        },tbody:{
          class:'text-center'
  
        }
  
      }
    },
    {
      displayName: 'Name',
      id: 'name',
      type: 'default',
      checked: true,
      enableSort: true
    },
    {
      displayName: 'Age',
      id: 'age',
      type: 'default',
      enableSort: true,
      checked: true,
    },
    {
      displayName: 'Action',
      type: 'buttonGroup',
      buttons: [
        {
          displayName: 'edit',
          image: '',
          key: 'Edit',
          customStyle: {
            tbody: {
              width: '20%',
              height: '3%',
              class: 'btn btn-sm btn-primary'
            }
          }
        },
        {
          displayName: 'delete',
          image: '',
          key: 'Delete',
          customStyle: {
            tbody: {
              width: '20%',
              height: '3%',
              class: 'btn btn-sm btn-danger ml-9'
            }
          }
        }
      ]
    },
    {
      displayName: 'View',
      type: 'buttonGroup',
      buttons: [
        {
          displayName: 'edit',
          image: '',
          key: 'Edit',
          customStyle: {
            tbody: {
              width: '20%',
              height: '3%',
              class: 'btn btn-sm btn-danger'
            }
          }
        }
      ]
    },
  ]
  
  export const Custom = [
    {
      displayName: '',
      type: 'checkBox',
      checked: true,
      isEnableSelectall: true, // if you want select All - true
    },
     {
      displayName: 'ab',
      type: 'template',
      id:'ab',
      checked: true,
    },
    {
      displayName: 'SNo',
      type: 'snum',
      checked: true,
      customStyle: {
        trow: {
          width: '20%',
          height: '3%',
          class:'text-center'
        },tbody:{
          class:'text-center'
  
        }
  
      }
    },
    {
      displayName: 'Name',
      id: 'name',
      type: 'default'
    },
    {
      displayName: 'Age',
      id: 'age',
      type: 'default'
    },
    {
      displayName: 'Action',
      type: 'buttonGroup',
      buttons: [
        {
          displayName: 'edit',
          image: '',
          key: 'Edit',
          customStyle: {
            tbody: {
              width: '20%',
              height: '3%',
              class: 'btn btn-sm btn-primary'
            }
          }
        },
        {
          displayName: 'delete',
          image: '',
          key: 'Delete',
          customStyle: {
            tbody: {
              width: '20%',
              height: '3%',
              class: 'btn btn-sm btn-danger ml-9'
            }
          }
        }
      ]
    },
    {
      displayName: 'View',
      type: 'buttonGroup',
      buttons: [
        {
          displayName: 'edit',
          image: '',
          key: 'Edit',
          customStyle: {
            tbody: {
              width: '20%',
              height: '3%',
              class: 'btn btn-sm btn-danger'
            }
          }
        }
      ]
    },
    {
      displayName: 'quickview',
      type: 'buttonGroup',
      isView: true,
      buttons: [
        {
          displayName: 'quickview',
          image: '',
          key: 'quick view',
          customStyle: {
            tbody: {
              width: '20%',
              height: '3%',
              class: 'btn btn-sm btn-danger'
            }
          }
        }
      ]
    },
    {
      displayName: 'abcc',
      type: 'template',
      id:'abcccc',
      checked: true,
    },
  ]
  