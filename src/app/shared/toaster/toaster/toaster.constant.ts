export enum ToastrType {
    Success = "success",
    Error = "error",
    Warn = "warn",
    Info = "info"
  };
  
  export const toasterSymbol = {
    [ToastrType.Success]: '✓',
    [ToastrType.Error]: 'X',
    [ToastrType.Warn]: 'i',
    [ToastrType.Info]: '!',
  };